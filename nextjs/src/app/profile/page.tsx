"use client"

import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SideNav } from "@/components/side-nav";
import { Header } from "@/components/layout/header";
import { userData, ISellerProducts } from "@/data";
import type { ISellerProduct } from "@/types/data";

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

export default function ProfilePage() {
  const [productList, setProductList] = useState<ISellerProduct[]>([]);

  useEffect(() => {
    setProductList(ISellerProducts);
  }, []);

  return (
    <div className="page__wrapper profile-page">
      <SideNav />
      <div className="main__content">
        <div id="auth-header-box">
          <Header isAuth={userData.isAuth} />
        </div>
        <main>
          <section className="verify_acc">
            <div className="verifyAcc__message noVerify container">
              <div className="message__ico">
                <i className="ico-shield-close"></i>
              </div>
              <div className="message__data">
                <span className="title">Unverified Seller</span>
                <span className="subtext">
                  To provide a feedback about the store, you must log in to your
                  account
                </span>
              </div>
            </div>
          </section>
          <section className="profile-settings">
            <div className="container">
              <div className="profile-settings__content">
                <div className="profile-settings__cover">
                  <img src="img/tests/profile/cover.png" alt="cover" />
                  <button
                    className="profile-settings__cover-btn profile-settings__cover-edit-btn btn bg--transparent-black"
                    type="button"
                  >
                    <img src="img/icons/pen.svg" alt="pen" />
                    <span>Edit Profile</span>
                  </button>
                </div>
                <div className="profile-settings__info box">
                  <div className="profile-settings__info-box">
                    <div className="profile-settings__info-avatar">
                      <img src="img/tests/profile/avatar.png" alt="avatar" />
                    </div>
                    <div className="profile-settings__info-text">
                      <h3 className="profile-settings__info-name">Tele Go</h3>
                      <div className="profile-settings__info-balance">
                        <span className="color--gray">Seller balance:</span>
                        &nbsp;
                        <span className="color--green">100 000 ₽</span>
                      </div>
                      <div className="profile-settings__info-rating">
                        <div className="profile-settings__rating-stars">
                          <i className="ico-star active"></i>
                          <i className="ico-star active"></i>
                          <i className="ico-star active"></i>
                          <i className="ico-star active"></i>
                          <i className="ico-star active"></i>
                        </div>
                        <div className="profile-settings__info-rating-score color--gray">
                          <span>5</span>/<span>5</span>
                        </div>
                        <div className="profile-settings__info-rating-sales color--gray">
                          <span id="sales-count">242523</span>&nbsp;
                          <span>Sales</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="profile-settings__add-offer-btn profile-settings__btn btn bg--transparent-black"
                    id="add-offer-btn"
                    type="button"
                  >
                    <span className="plus"></span>
                    <span>Add Offer</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="tabs container">
            <div className="tabs__nav">
              <button className="tabs__button active" data-tab="Offers">
                Offers
              </button>
              <button className="tabs__button" data-tab="Info">
                Info
              </button>
            </div>
            <div className="tabs__content">
              <div className="tab active" id="Offers">
                <div>
                  <div className="mainContent">
                    <section className="profile-products">
                      <div className="profile-products__popular profile-products__box">
                        <h3 className="profile-products__grid-title">
                          Popular
                        </h3>
                        <div className="profile-products__grid">
                          {productList.slice(0, 3).map(({
                            tags,
                            imgSrc,
                            rating,
                            shop,
                            sellerList,
                            product,
                            price,
                            currency,
                            progress
                          }) => (
                            <div className="product__item" key={uuidv4()}>
                              <a className="product" href="#" title="name">
                                <div className="product__wrapper">
                                  <div className="product__tags">
                                    <span className="tag icon">
                                      <i className="ico-shield"></i>
                                    </span>
                                    {tags.map((tag) => <span key={uuidv4()} className="tag">{tag}</span>)}
                                  </div>
                                  <div className="product__data">
                                    <div className="product__img">
                                      <img src="/img/tests/product.png" alt="name" />
                                    </div>
                                    <div className="data__wrapper">
                                      <div className="left__side">
                                        <div className="rating__wrapper">
                                          <i className="ico-star"></i>
                                          <span className="rating">{rating}</span>
                                        </div>
                                        <span className="name">{shop}</span>
                                      </div>
                                      <div className="right__side">
                                        <div className="avatars__wrapper">
                                          {sellerList.length > 3
                                            ? sellerList.slice(0, 3).map(({ avatar }) => <img key={uuidv4()} src={avatar} alt="name" />)
                                            : sellerList.map(({ avatar }) => <img key={uuidv4()} src={avatar} alt="name" />)}
                                        </div>
                                        <span className="seller">{sellerList.length}</span>
                                      </div>
                                    </div>
                                    <div className="content__area">
                                      <span className="name">
                                        {product.name}
                                      </span>
                                      <div className="sub__content">
                                        <p>
                                          {product.description}
                                        </p>
                                      </div>
                                      <button className="openContent">
                                        <i className="ico-arrow"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="buttom">
                                    <div className="price">
                                      <span className="currency">{currency}</span>
                                      <span className="value">{price}</span>
                                    </div>
                                    <div className="itemsLeft">
                                      <span className="desk">
                                        Only <span>{product.count}</span> pieces left
                                      </span>
                                      <div className="progress-bar">
                                        <div className="remaining"></div>
                                        <span className="value">{progress}%</span>
                                      </div>
                                    </div>
                                    <div className="order__action">
                                      <button>
                                        <i className="ico-cart"></i>
                                      </button>
                                      <div className="order__counter">
                                        <form action="">
                                          <button>-</button>
                                          <input type="text" placeholder="1" />
                                          <button>+</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="profile-products__all profile-products__box">
                        <h3 className="profile-products__grid-title">All</h3>
                        <div className="profile-products__grid">
                          {productList.map(({
                            tags,
                            imgSrc,
                            rating,
                            shop,
                            sellerList,
                            product,
                            price,
                            currency,
                            progress
                          }) => (
                            <div className="product__item" key={uuidv4()}>
                              <a className="product" href="#" title="name">
                                <div className="product__wrapper">
                                  <div className="product__tags">
                                    <span className="tag icon">
                                      <i className="ico-shield"></i>
                                    </span>
                                    {tags.map((tag) => <span key={uuidv4()} className="tag">{tag}</span>)}
                                  </div>
                                  <div className="product__data">
                                    <div className="product__img">
                                      <img src="/img/tests/product.png" alt="name" />
                                    </div>
                                    <div className="data__wrapper">
                                      <div className="left__side">
                                        <div className="rating__wrapper">
                                          <i className="ico-star"></i>
                                          <span className="rating">{rating}</span>
                                        </div>
                                        <span className="name">{shop}</span>
                                      </div>
                                      <div className="right__side">
                                        <div className="avatars__wrapper">
                                          {sellerList.length > 3
                                            ? sellerList.slice(0, 3).map(({ avatar }) => <img key={uuidv4()} src={avatar} alt="name" />)
                                            : sellerList.map(({ avatar }) => <img key={uuidv4()} src={avatar} alt="name" />)}
                                        </div>
                                        <span className="seller">{sellerList.length}</span>
                                      </div>
                                    </div>
                                    <div className="content__area">
                                      <span className="name">
                                        {product.name}
                                      </span>
                                      <div className="sub__content">
                                        <p>
                                          {product.description}
                                        </p>
                                      </div>
                                      <button className="openContent">
                                        <i className="ico-arrow"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="buttom">
                                    <div className="price">
                                      <span className="currency">{currency}</span>
                                      <span className="value">{price}</span>
                                    </div>
                                    <div className="itemsLeft">
                                      <span className="desk">
                                        Only <span>{product.count}</span> pieces left
                                      </span>
                                      <div className="progress-bar">
                                        <div className="remaining"></div>
                                        <span className="value">{progress}%</span>
                                      </div>
                                    </div>
                                    <div className="order__action">
                                      <button>
                                        <i className="ico-cart"></i>
                                      </button>
                                      <div className="order__counter">
                                        <form action="">
                                          <button>-</button>
                                          <input type="text" placeholder="1" />
                                          <button>+</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pagination-box">
                        <button
                          className="pagination-box__btn pagination-box__first"
                          type="button"
                        >
                          <img
                            src="img/icons/arrow/double-arrow-to-left.svg"
                            alt=""
                          />
                        </button>
                        <button
                          className="pagination-box__btn pagination-box__previous"
                          type="button"
                        >
                          <img src="img/icons/arrow/arrow-to-left.svg" alt="" />
                        </button>
                        <button className="pagination-box__btn" type="button">
                          1
                        </button>
                        <button
                          className="pagination-box__btn"
                          type="button"
                          disabled
                        >
                          ...
                        </button>
                        <button className="pagination-box__btn" type="button">
                          23
                        </button>
                        <button
                          className="pagination-box__btn active"
                          type="button"
                        >
                          24
                        </button>
                        <button className="pagination-box__btn" type="button">
                          25
                        </button>
                        <button
                          className="pagination-box__btn"
                          type="button"
                          disabled
                        >
                          ...
                        </button>
                        <button className="pagination-box__btn" type="button">
                          99
                        </button>
                        <button
                          className="pagination-box__btn pagination-box__next"
                          type="button"
                        >
                          <img
                            src="img/icons/arrow/arrow-to-right.svg"
                            alt=""
                          />
                        </button>
                        <button
                          className="pagination-box__btn pagination-box__last"
                          type="button"
                        >
                          <img
                            src="img/icons/arrow/double-arrow-to-right.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </section>
                    <section className="profile-reviews">
                      <div className="profile-reviews__row profile-reviews__row--top">
                        <h3 className="profile-reviews__title">Reviews</h3>
                        <div className="tabs">
                          <div className="tabs__nav">
                            <button
                              className="tabs__button active"
                              data-tab="profile-offer-reviews-all"
                            >
                              All
                            </button>
                            <button
                              className="tabs__button"
                              data-tab="profile-offer-reviews-seller"
                            >
                              Оставил он
                            </button>
                            <button
                              className="tabs__button"
                              data-tab="profile-offer-reviews-users"
                            >
                              Оставили ему
                            </button>
                          </div>
                          <div
                            className="tab active"
                            id="profile-offer-reviews-all"
                          ></div>
                          <div
                            className="tab"
                            id="profile-offer-reviews-seller"
                          ></div>
                          <div
                            className="tab"
                            id="profile-offer-reviews-users"
                          ></div>
                        </div>
                      </div>
                      <div className="profile-reviews__column">
                        <div className="profile-reviews__info box">
                          <h3 className="profile-reviews__info-title">
                            Average seller rate <span id="reviews-rate">5</span>{" "}
                            (<span id="reviews-count">289</span>)
                          </h3>
                          <div className="profile-reviews__info-rating">
                            <span className="profile-reviews__info-rating-score">
                              5.0
                            </span>
                            <div className="profile-reviews__info-rating-stars">
                              <i className="ico-star active"></i>
                              <i className="ico-star active"></i>
                              <i className="ico-star active"></i>
                              <i className="ico-star active"></i>
                              <i className="ico-star active"></i>
                            </div>
                          </div>
                          <div className="profile-reviews__info-rating-desc">
                            <p>
                              To provide a feedback about the seller, you must
                              buy this product on $10
                            </p>
                          </div>
                        </div>
                        <div className="profile-reviews__card box">
                          <div className="profile-reviews__card-avatar">
                            <img
                              src="img/tests/profile/avatar.png"
                              alt="avatar"
                            />
                          </div>
                          <div className="profile-reviews__card-text">
                            <h3 className="profile-reviews__card-title">
                              James
                            </h3>
                            <p className="profile-reviews__card-caption">
                              GMAIL TRUST NUMBER CONFIRMED SUBMAIL BEST ACCOUNT
                            </p>
                            <div className="profile-reviews__card-desc">
                              <span>Comment:</span>
                              <div>
                                <p>The mails are good. I recommend them.</p>
                              </div>
                            </div>
                          </div>
                          <div className="profile-reviews__card-info">
                            <div className="profile-reviews__card-rating">
                              <span className="profile-reviews__card-rating-score">
                                5.0
                              </span>
                              <div className="profile-reviews__card-rating-stars">
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                              </div>
                            </div>
                            <div className="profile-reviews__card-meta">
                              <div className="profile-reviews__card-date">
                                <span>10/9/2024</span>,
                              </div>
                              &nbsp;
                              <div className="profile-reviews__card-time">
                                <span>4:04:30 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-reviews__card box">
                          <div className="profile-reviews__card-avatar">
                            <img
                              src="img/tests/profile/avatar.png"
                              alt="avatar"
                            />
                          </div>
                          <div className="profile-reviews__card-text">
                            <h3 className="profile-reviews__card-title">
                              James
                            </h3>
                            <p className="profile-reviews__card-caption">
                              GMAIL TRUST NUMBER CONFIRMED SUBMAIL BEST ACCOUNT
                            </p>
                            <div className="profile-reviews__card-desc">
                              <span>Comment:</span>
                              <div>
                                <p>The mails are good. I recommend them.</p>
                              </div>
                            </div>
                          </div>
                          <div className="profile-reviews__card-info">
                            <div className="profile-reviews__card-rating">
                              <span className="profile-reviews__card-rating-score">
                                5.0
                              </span>
                              <div className="profile-reviews__card-rating-stars">
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                              </div>
                            </div>
                            <div className="profile-reviews__card-meta">
                              <div className="profile-reviews__card-date">
                                <span>10/9/2024</span>,
                              </div>
                              &nbsp;
                              <div className="profile-reviews__card-time">
                                <span>4:04:30 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-reviews__card box">
                          <div className="profile-reviews__card-avatar">
                            <img
                              src="img/tests/profile/avatar.png"
                              alt="avatar"
                            />
                          </div>
                          <div className="profile-reviews__card-text">
                            <h3 className="profile-reviews__card-title">
                              James
                            </h3>
                            <p className="profile-reviews__card-caption">
                              GMAIL TRUST NUMBER CONFIRMED SUBMAIL BEST ACCOUNT
                            </p>
                            <div className="profile-reviews__card-desc">
                              <span>Comment:</span>
                              <div>
                                <p>The mails are good. I recommend them.</p>
                              </div>
                            </div>
                          </div>
                          <div className="profile-reviews__card-info">
                            <div className="profile-reviews__card-rating">
                              <span className="profile-reviews__card-rating-score">
                                5.0
                              </span>
                              <div className="profile-reviews__card-rating-stars">
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                              </div>
                            </div>
                            <div className="profile-reviews__card-meta">
                              <div className="profile-reviews__card-date">
                                <span>10/9/2024</span>,
                              </div>
                              &nbsp;
                              <div className="profile-reviews__card-time">
                                <span>4:04:30 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-reviews__card box">
                          <div className="profile-reviews__card-avatar">
                            <img
                              src="img/tests/profile/avatar.png"
                              alt="avatar"
                            />
                          </div>
                          <div className="profile-reviews__card-text">
                            <h3 className="profile-reviews__card-title">
                              James
                            </h3>
                            <p className="profile-reviews__card-caption">
                              GMAIL TRUST NUMBER CONFIRMED SUBMAIL BEST ACCOUNT
                            </p>
                            <div className="profile-reviews__card-desc">
                              <span>Comment:</span>
                              <div>
                                <p>The mails are good. I recommend them.</p>
                              </div>
                            </div>
                          </div>
                          <div className="profile-reviews__card-info">
                            <div className="profile-reviews__card-rating">
                              <span className="profile-reviews__card-rating-score">
                                5.0
                              </span>
                              <div className="profile-reviews__card-rating-stars">
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                              </div>
                            </div>
                            <div className="profile-reviews__card-meta">
                              <div className="profile-reviews__card-date">
                                <span>10/9/2024</span>,
                              </div>
                              &nbsp;
                              <div className="profile-reviews__card-time">
                                <span>4:04:30 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="profile-reviews__card box">
                          <div className="profile-reviews__card-avatar">
                            <img
                              src="img/tests/profile/avatar.png"
                              alt="avatar"
                            />
                          </div>
                          <div className="profile-reviews__card-text">
                            <h3 className="profile-reviews__card-title">
                              James
                            </h3>
                            <p className="profile-reviews__card-caption">
                              GMAIL TRUST NUMBER CONFIRMED SUBMAIL BEST ACCOUNT
                            </p>
                            <div className="profile-reviews__card-desc">
                              <span>Comment:</span>
                              <div>
                                <p>The mails are good. I recommend them.</p>
                              </div>
                            </div>
                          </div>
                          <div className="profile-reviews__card-info">
                            <div className="profile-reviews__card-rating">
                              <span className="profile-reviews__card-rating-score">
                                5.0
                              </span>
                              <div className="profile-reviews__card-rating-stars">
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                                <i className="ico-star active"></i>
                              </div>
                            </div>
                            <div className="profile-reviews__card-meta">
                              <div className="profile-reviews__card-date">
                                <span>10/9/2024</span>,
                              </div>
                              &nbsp;
                              <div className="profile-reviews__card-time">
                                <span>4:04:30 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pagination-box">
                        <button
                          className="pagination-box__btn pagination-box__first"
                          type="button"
                        >
                          <img
                            src="img/icons/arrow/double-arrow-to-left.svg"
                            alt=""
                          />
                        </button>
                        <button
                          className="pagination-box__btn pagination-box__previous"
                          type="button"
                        >
                          <img src="img/icons/arrow/arrow-to-left.svg" alt="" />
                        </button>
                        <button className="pagination-box__btn" type="button">
                          1
                        </button>
                        <button
                          className="pagination-box__btn"
                          type="button"
                          disabled
                        >
                          ...
                        </button>
                        <button className="pagination-box__btn" type="button">
                          23
                        </button>
                        <button
                          className="pagination-box__btn active"
                          type="button"
                        >
                          24
                        </button>
                        <button className="pagination-box__btn" type="button">
                          25
                        </button>
                        <button
                          className="pagination-box__btn"
                          type="button"
                          disabled
                        >
                          ...
                        </button>
                        <button className="pagination-box__btn" type="button">
                          99
                        </button>
                        <button
                          className="pagination-box__btn pagination-box__next"
                          type="button"
                        >
                          <img
                            src="img/icons/arrow/arrow-to-right.svg"
                            alt=""
                          />
                        </button>
                        <button
                          className="pagination-box__btn pagination-box__last"
                          type="button"
                        >
                          <img
                            src="img/icons/arrow/double-arrow-to-right.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="tab active" id="Offers">
                <div className="innerContent__wrapper">
                  <div className="mainContent"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
