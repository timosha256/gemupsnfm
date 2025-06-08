"use client"

import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SideNav } from "@/components/side-nav";
import { userData } from "@/data";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHeader } from "@/components/headers/page-header";
import { purchases } from "@/data";
import { Line } from "@/components/tables/line";
import type { IPurchase } from "@/types/data";

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

export default function PurchasesPage() {
  const [purchaseList, setPurchaseList] = useState<IPurchase[]>([]);
  
  useEffect(() => {
    setPurchaseList(purchases);
  }, []);

  return (
    <div className="page__wrapper">
      <SideNav />
      <div className="main__content">
         <div id="auth-header-box">
            <Header isAuth={userData.isAuth} />
        </div>
         <main>
            <Breadcrumbs name="My purchases" />
            <PageHeader name="My purchases" />
            <section id="tabData" className="contentFilter container">
              <div className="tabs">
                <div className="tabs__nav">
                  <button className="tabs__button active" data-tab="All">All</button>
                  <button className="tabs__button" data-tab="Proxy">Proxy</button>
                  <button className="tabs__button" data-tab="Accounts">Accounts</button>
                  <button className="tabs__button" data-tab="Services">Services</button>
                </div>
                <div className="tabs__content">
                  <div className="table__head">
                    <div className="head__title">Name</div>
                    <div className="head__title">Amount</div>
                    <div className="head__title">Dates</div>
                    <div className="head__title">Action</div>
                  </div>

                  <div className="table__content">

                    <div className="element__line activated" data-category="All Proxy">
                      <div className="content__data">
                        <span className="name">Аккаунты Telegram RU 1шт tdata для Telegram Portable exe - Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm</span>
                        <span className="value green">10 000 / 18 000</span>
                        <span className="value green">12.05.2024 / 30 days</span>
                        <div className="actions">
                          <button type="button"><i className="ico-cart"></i></button>
                          <a href="#" title="name"><i className="ico-eye"></i></a>
                        </div>
                      </div>
                      <div className="mainData">
                        <span className="service">Proxy [Residential]</span>
                        <span className="shop">NVS Shop</span>
                      </div>
                    </div>
                    {purchaseList.map(({ active, name, category, shop }) => {
                      // return active
                      //   ? <Line active />
                      //   : <Line />
                      return <div></div>
                    })}
                  </div>
                </div>
              </div>
            </section>
         </main>
         <Footer />
      </div>
   </div>
  )
}