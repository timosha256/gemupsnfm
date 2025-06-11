"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import clipboardCopy from "clipboard-copy";
import { PageHeader } from "@/components/headers/page-header";
import { Header } from "@/components/layout/header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CommentItem } from "@/components/shared/comment-item";
import { SideNav } from "@/components/side-nav";
import { marketplaceComments } from "@/data";
import type { ICommentItem } from "@/types/component";
import { Footer } from "@/components/layout/footer";
import { Scripts } from "@/components/shared/scripts";
import { UnverifiedBox } from "@/components/shared/unverified-box";
import { useAuthStore } from "@/store/auth";
import { useProductStore, ProductType } from "@/store/product";
import { generateRandomNumber, sleep } from "@/utils";
import { useCartStore } from "@/store/cart";

// export const metadata: Metadata = {
//   title: "GEMUPS",
//   description: "",
//   keywords: "",
//   openGraph: {
//     type: "website",
//     url: "",
//     description: "",
//     siteName: "",
//     images: "",
//   },
// };

interface ISellerData {
  sales: {
    perMonth: number;
    total: number;
  };
  discountData: Record<number, number>;
}

interface IBuyData {
  amount: number;
  totalPrice: number;
}

export default function AccountsPage() {
  const { user } = useAuthStore((state) => state);
  const { setProductList, getProductById } = useProductStore();
  const { data: cartData, postItem: postCartItem } = useCartStore((state) => state);

  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);
  const [comments, setComments] = useState<ICommentItem[]>([]);
  const [data, setData] = useState<ProductType | undefined>(undefined);
  const [sellerData, setSellerData] = useState<ISellerData>({
    sales: {
      perMonth: 0,
      total: 0,
    },
    discountData: {
      10: 0,
      20: 0,
      30: 0,
      40: 0,
      50: 0,
      100: 0,
    },
  });
  const [buyData, setBuyData] = useState<IBuyData>({
    amount: 0,
    totalPrice: 0
  });
  const [currentTab, setCurrentTab] = useState<"Overview" | "Reviews">(
    "Overview"
  );

  const pathname = usePathname();
  const pathnameItems = pathname.split("/");
  const id = parseInt(pathnameItems[pathnameItems.length - 1]);

  useEffect(() => {
    setComments(marketplaceComments.accounts);

    if (!Number.isNaN(id)) {
      const productData = getProductById(id);
      if (productData) {
        const total = generateRandomNumber(100, 100000);
        const perMonth = generateRandomNumber(100, total / 2);
        setSellerData({
          sales: { perMonth, total },
          discountData: {
            10: generateRandomNumber(1, 3),
            20: generateRandomNumber(4, 7),
            30: generateRandomNumber(7.5, 10),
            40: generateRandomNumber(10.5, 15),
            50: generateRandomNumber(15.5, 20),
            100: generateRandomNumber(20.5, 30),
          },
        });

        setData({
          ...productData,
          sellerList: productData.sellerList?.map((item) => ({
            ...item,
            sales: generateRandomNumber(10000, 100000),
          })),
          rating: generateRandomNumber(1, 5),
        });
      }
    }
  }, []);

  useEffect(() => {
    setBuyData({ ...buyData, totalPrice: calculateTotalPrice() });
    console.log(calculateTotalPrice());
  }, [buyData.amount]);

  const handleCopyLink = async () => {
    await clipboardCopy(window.location.href);

    setIsLinkCopied(true);
    await sleep(500);
    setIsLinkCopied(false);
  };

  const calculateTotalPrice = () => {
    if (data?.pricePerProxy) {
      if (buyData.amount < 10) {
        return parseFloat(data.pricePerProxy) * buyData.amount;
      } else {
        const key = Object.keys(sellerData.discountData)
          .map((key) => parseInt(String(key)))
          .sort((a, b) => b - a)
          .find((amount) => buyData.amount >= amount);

        if (key) {
          const n = sellerData.discountData[key];
          console.log(buyData.amount, n, Math.abs(100 - n) / 100, parseFloat(data.pricePerProxy));
          return buyData.amount * ((Math.abs(100 - n) / 100) * parseFloat(data.pricePerProxy));
        }
      }
    }

    return 0;
  };

  const addToCart = (e?: React.FormEvent) => {
    if (data && cartData && buyData.amount > 0) {
      postCartItem(data.id, buyData.amount, "", buyData.totalPrice);
    }
  };

  return (
    <div className="page__wrapper">
      <SideNav />
      <div className="main__content">
        <div id="auth-header-box">
          <Header />
        </div>
        <main>
          <Breadcrumbs name="Accounts" />
          <PageHeader name="Accounts" />
          {!user?.isVerified && <UnverifiedBox />}
          <div className="innerContent__wrapper container">
            <div className="mainContent">
              <section id="account__data">
                <div className="accountData__wrapper">
                  <div className="avatar">
                    <div className="img__wrapper">
                      <img src="/img/tests/ava.png" alt="name" />
                      <i className="ico-shield"></i>
                    </div>
                  </div>
                  <div className="content">
                    <h2 className="name">{data?.name}</h2>
                    <div className="textarea">
                      <p>
                        {data?.description?.split(" ").slice(0, 5).join(" ")}
                      </p>
                    </div>
                    <div className="tags__wrapper">
                      {data?.tags?.map((tag) => (
                        <span className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="rating__area">
                      <div className="rating">
                        <div className="stars__wrapper">
                          {Array(5)
                            .fill(null)
                            .map((item, idx) => (
                              <i
                                key={uuidv4()}
                                className={`ico-star ${
                                  data?.rating && idx < data.rating
                                    ? "active"
                                    : ""
                                }`}
                              ></i>
                            ))}
                        </div>
                        <span className="value">{data?.rating || "0"}/5</span>
                      </div>
                      <span className="delimiter"></span>
                      <div className="sales__wrapper">
                        <span className="value">{sellerData.sales.total}</span>
                        <span className="name">Sales</span>
                      </div>
                    </div>
                  </div>
                  <div className="actions">
                    <button
                      style={
                        isLinkCopied
                          ? { backgroundColor: "#159962" }
                          : undefined
                      }
                      className="copy-link"
                      onClick={handleCopyLink}
                    >
                      <i className="ico-copy"></i>Copy link
                    </button>
                  </div>
                </div>
              </section>
              <section id="tabData">
                <div className="tabs">
                  <div className="tabs__nav">
                    <button
                      type="button"
                      data-tab="Overview"
                      className={`tabs__button ${
                        currentTab === "Overview" ? "active" : ""
                      }`}
                      onClick={() => setCurrentTab("Overview")}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      data-tab="Reviews"
                      className={`tabs__button ${
                        currentTab === "Reviews" ? "active" : ""
                      }`}
                      onClick={() => setCurrentTab("Reviews")}
                    >
                      Reviews
                    </button>
                  </div>
                  <div className="tabs__content">
                    <div
                      className={`tab ${
                        currentTab === "Overview" ? "active" : ""
                      }`}
                      id="Overview"
                    >
                      <section id="description__block">
                        <div className="description__wrapper">
                          <div className="title">Description</div>
                          <div className="content__body">
                            <p>{data?.description}</p>
                          </div>
                          <button type="button">More</button>
                        </div>
                      </section>
                    </div>
                    <div
                      className={`tab ${
                        currentTab === "Reviews" ? "active" : ""
                      }`}
                      id="Reviews"
                    >
                      <section id="Average__seller">
                        <div className="average__wrapper">
                          <div className="leftSIde">
                            <div className="title">
                              Average seller rate 5 (289)
                            </div>
                            <div className="rating__wrapper">
                              <span className="value">5.0</span>
                              <div className="rating__stars">
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                              </div>
                            </div>
                            <p>
                              To provide a feedback about the seller, you must
                              buy this product on $10
                            </p>
                          </div>
                          <div className="rightSide">
                            <button data-hystmodal="#addReview">
                              Write a review
                            </button>
                          </div>
                        </div>
                      </section>
                      <section id="comments">
                        <div className="addComment__wrapper"></div>
                        <div className="comments__wrapper">
                          <div className="comments__list">
                            {comments.map((data) => (
                              <CommentItem key={uuidv4()} {...data} />
                            ))}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="sideData">
              <div className="order__dataWrapper">
                <form action="" method="" onSubmit={(e) => e.preventDefault()}>
                  <div className="selectPlan__wrapper">
                    <label className="popular">
                      <input
                        type="radio"
                        name="tariff"
                        value="7"
                        data-qty="1"
                        data-price="5"
                      />
                      <div className="top">
                        <span className="value">50</span>
                        <span className="ed">pc</span>
                        <span className="additional">
                          /{" "}
                          <span>
                            {data?.pricePerProxy
                              ? (
                                  parseFloat(data.pricePerProxy) *
                                  sellerData.discountData[50]
                                ).toFixed(2)
                              : 0}
                            $
                          </span>
                        </span>
                      </div>
                      <div className="bottom">
                        <span className="complex">
                          For every <span className="under">10 pc</span> you
                          lose <span className="under">%</span>
                        </span>
                      </div>
                      <span className="tag">Popular</span>
                    </label>
                    {Object.entries(sellerData.discountData).map(
                      ([key, value]) => (
                        <label>
                          <input
                            type="radio"
                            name="tariff"
                            value={
                              data?.pricePerProxy
                                ? (
                                    parseFloat(data.pricePerProxy) * value
                                  ).toFixed(2)
                                : 0
                            }
                            data-qty={key}
                          />
                          <div className="top">
                            <span className="value">{key}</span>
                            <span className="ed">pc</span>
                          </div>
                          <div className="bottom">
                            <span className="value">
                              {data?.pricePerProxy
                                ? (
                                    parseInt((key)) * parseFloat(data.pricePerProxy) * (Math.abs(100 - value) / 100)
                                  ).toFixed(2)
                                : 0}
                            </span>
                            <span className="currency">$</span>
                          </div>
                        </label>
                      )
                    )}
                  </div>
                  <div className="country__choose"></div>
                  <div className="order__counter">
                    <div className="counter">
                      <button
                        type="button"
                        onClick={() =>
                          setBuyData({
                            ...buyData,
                            amount:
                              data?.minQuantity &&
                              buyData.amount - 1 < data.minQuantity &&
                              buyData.amount - 1 >= 0
                                ? buyData.amount - 1
                                : buyData.amount,
                          })
                        }
                      >
                        -
                      </button>
                      <input type="text" value={buyData.amount} />
                      <button
                        type="button"
                        onClick={() =>
                          setBuyData({
                            ...buyData,
                            amount:
                              data?.minQuantity &&
                              buyData.amount + 1 <= data.minQuantity
                                ? buyData.amount + 1
                                : buyData.amount,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="item__price">
                      <span className="value">{buyData.totalPrice.toFixed(2)}</span>
                      <span className="currency">$</span>
                    </div>
                  </div>
                  <div className="item__data">
                    <span className="left">
                      Only{" "}
                      <span className="value">
                        {data?.minQuantity ? data.minQuantity : 0}
                      </span>{" "}
                      pieces left
                    </span>
                    <span className="soldout">
                      <span className="value">
                        Sold ~ {sellerData.sales.perMonth}
                      </span>{" "}
                      pieces per month
                    </span>
                  </div>
                  <div className="action__area">
                    <button type="submit" onClick={addToCart}>
                      Add to <i className="ico-cart"></i>
                    </button>
                    <button type="button">Buy 1 click</button>
                  </div>
                </form>
              </div>
              <div className="sellers__wrapper">
                <a href="" title="">
                  <div className="left__side">
                    <img src="/img/tests/ava.png" alt="" />
                    <div className="content">
                      <span className="title">All sellers</span>
                      <span className="subtext">From ${data?.pricePerProxy ? parseFloat(data.pricePerProxy) : 0}</span>
                    </div>
                  </div>
                  <div className="right__side">
                    <div className="count__value">6</div>
                    <i className="ico-arrow"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <Scripts />
      </div>
    </div>
  );
}
