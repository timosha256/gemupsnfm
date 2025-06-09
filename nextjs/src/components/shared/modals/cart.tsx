"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCartStore } from "@/store/cart";
import { InputPlacetop } from "../forms/input-placetop";
import { CURRENCY } from "@/constants";

interface Props {
  list: Array<{
    service: string;
    shop: string;
    productName: string;
    price: number;
    currency: string;
  }>;
}

export const Cart: React.FC<Props> = () => {
  const [totalPrice, setTotalPrice] = useState<string | number>(0);
  const [currency, setCurrency] = useState<string>("");
  const { isValid, isLoading, isError, data, getData, updateItem, deleteItem } =
    useCartStore((state) => state);

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  useEffect(() => {
    if (data) {
      const key = data.summary.currency.toLowerCase() as keyof typeof CURRENCY;
      setCurrency(CURRENCY[key]);
      setTotalPrice(data.summary.totalAmount);
    }
  }, [data]);

  const updateCartItem = async (
    itemId: number,
    currentQuantity: number,
    generationParams: string,
    operator: "+" | "-"
  ) => {
    switch (operator) {
      case "+":
        await updateItem(itemId, currentQuantity + 1, generationParams);
        break;
      case "-":
        await updateItem(itemId, currentQuantity - 1, generationParams);
        break;
      default:
        break;
    }
  };

  return (
    <div className="hystmodal" id="cartModal" aria-hidden="true">
      <div className="hystmodal__wrap">
        <div
          className="hystmodal__window baseModal"
          role="dialog"
          aria-modal="true"
        >
          <span data-hystclose className="ico-close"></span>
          <div className="form__data">
            <div className="form__header">
              <p className="title">
                Cart <span className="value">{}</span>
              </p>
            </div>
            <div className="cart__inner">
              {data?.items && data?.items.length > 0 ? (
                <div className="cartProducts__wrapper">
                  {data?.items.map(
                    ({
                      id,
                      quantity,
                      generationParams,
                      proxyProduct: {
                        name,
                        description,
                        proxyCategory,
                        pricePerProxy,
                      },
                    }) => (
                      <div className="cart__item" key={id}>
                        <div className="ava__wrapper">
                          <img src="/img/tests/ava.png" alt="name" />
                        </div>
                        <div className="product__data">
                          <div className="top__data">
                            <span className="service">{proxyCategory}</span>
                            <span className="shop">{"shop"}</span>
                          </div>
                          <a className="prodName" href="#">
                            {name}
                          </a>
                          <div className="bottom__area">
                            <div className="order__counter">
                              <button
                                type="button"
                                onClick={() => updateCartItem(id, quantity, generationParams, "-")}
                              >
                                -
                              </button>
                              <input
                                type="text"
                                placeholder="1"
                                value={quantity}
                              />
                              <button
                                type="button"
                                onClick={() => updateCartItem(id, quantity, generationParams, "+")}
                              >
                                +
                              </button>
                            </div>
                            <div className="price">
                              <span className="value">{pricePerProxy}</span>
                              <span className="currency">{currency}</span>
                            </div>
                            <button className="deleteProd" onClick={() => deleteItem(id)}>
                              <i className="ico-delete"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="cart__noitems">
                  <i className="ico-cart-bag decor"></i>
                  <div className="text__data">
                    <span className="title">You have no products</span>
                    <span className="subtext">
                      Add your first product and you will be able to view and
                      buy it
                    </span>
                  </div>
                  <a className="noitems" href="#">
                    <i className="ico-plus"></i> Add Offer
                  </a>
                </div>
              )}
            </div>
            <div className="bottom__actions">
              <InputPlacetop
                id="promocode"
                type="text"
                name="promocode"
                placeholder=""
                label="Add promocode"
              />
              <div className="order__data">
                <div className="price__wrapper">
                  <span className="label">For Payment</span>
                  <div className="price__data">
                    <span className="currency">{currency}</span>
                    <span className="value">{totalPrice}</span>
                  </div>
                </div>
                <button className="make__order">Place an order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
