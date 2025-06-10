"use client"

import type { Metadata } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Scripts } from "@/components/shared/scripts";
import { SideNav } from "@/components/side-nav";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHeader } from "@/components/headers/page-header";
import { ProductItem } from "@/components/product-item";
import { proxyProducts } from "@/data";
import { IProxyProduct, ISellerProduct } from "@/types/data";


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

export default function ProxyPage() {
  const [productList, setProductList] = useState<Array<IProxyProduct & ISellerProduct>>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/api/proxy")
      .then((res) => setProductList(res.data.data))
  }, []);

  useEffect(() => {
    console.log(productList)
  }, [productList]);

  return (
    <div className="page__wrapper">
      <SideNav />
      <div className="main__content">
        <div id="auth-header-box">
          <Header />
        </div>
        <main>
          <Breadcrumbs name="Proxy" />
          <PageHeader name="Proxy" />
          <div className="product__filters container">
            <div className="filter__tags">
              <button className="filter-btn active" data-filter="Residential">
                Residential
              </button>
              <button className="filter-btn" data-filter="Isp">
                Isp
              </button>
              <button className="filter-btn" data-filter="Datacenter">
                Datacenter
              </button>
              <button className="filter-btn" data-filter="Nodepay">
                Nodepay
              </button>
              <button className="filter-btn" data-filter="Grass">
                Grass
              </button>
            </div>
            <div className="full__filters">
              <button className="see-all" data-filter="">
                See all
              </button>
            </div>
          </div>

          <section className="container" id="products__container">
            <div className="product__category" data-tags="Residential">
              <div className="head__block">
                <h2 className="category__title">Residential</h2>
              </div>
              <div className="products__items">
                {productList.filter((item) => item.proxyCategory.toLowerCase() === "residential").map((data) => <ProductItem key={data.id} {...data} />)}
              </div>
            </div>
            <div className="product__category" data-tags="Datacenter">
              <div className="head__block">
                <h2 className="category__title">Datacenter</h2>
              </div>
              <div className="products__items">
                {productList.filter((item) => item.proxyCategory.toLowerCase() === "datacenter").map((data) => <ProductItem key={data.id} {...data} />)}
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <Scripts />
      </div>
    </div>
  );
}
