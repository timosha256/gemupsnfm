"use client"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { InputPlacetop } from "../forms/input-placetop";

interface Props {
  list: Array<{
    service: string;
    shop: string;
    productName: string;
    price: number;
    currency: string;
  }>;
}

export const Cart: React.FC<Props> = ({ list }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");

  useEffect(() => {
    if (list.length > 0) {
      setTotalPrice(
        list.reduce((acc, curr) => acc + curr.price, 0)
      );

      setCurrency(list[0].currency);
    }
  }, []);

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
                Cart <span className="value">6</span>
              </p>
            </div>
            <div className="cart__inner">
              {list.length > 0
                ? <div className="cartProducts__wrapper">
                {list.map(({ service, shop, productName, price, currency }) => (
                  <div className="cart__item" key={uuidv4()}>
                    <div className="ava__wrapper">
                      <img src="/img/tests/ava.png" alt="name" />
                    </div>
                    <div className="product__data">
                      <div className="top__data">
                        <span className="service">{service}</span>
                        <span className="shop">{shop}</span>
                      </div>
                      <a className="prodName" href="#">{productName}</a>
                      <div className="bottom__area">
                        <div className="order__counter">
                          <button>-</button>
                          <input type="text" placeholder="1" />
                          <button>+</button>
                        </div>
                        <div className="price">
                          <span className="value">{price}</span>
                          <span className="currency">{currency}</span>
                        </div>
                        <button className="deleteProd">
                          <i className="ico-delete"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              : <div className="cart__noitems">
                <i className="ico-cart-bag decor"></i>
                <div className="text__data">
                  <span className="title">You have no products</span>
                  <span className="subtext">Add your first product and you will be able to view and buy it</span>
                </div>
                <a className="noitems" href="#"><i className="ico-plus"></i> Add Offer</a>
              </div>}
            </div>
            <div className="bottom__actions">
              <InputPlacetop id="promocode" type="text" name="promocode" placeholder="" label="Add promocode" />
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
