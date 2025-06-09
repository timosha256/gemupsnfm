import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SideNav } from "@/components/side-nav";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHeader } from "@/components/headers/page-header";


export const metadata: Metadata = {
  title: "GEMUPS",
  description: "",
  keywords: "",
  openGraph: {
    type: "website",
    url: "",
    description: "",
    siteName: "",
    images: "",
  },
};

export default function ProxyPage() {
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
              </div>
            </div>
            <div className="product__category" data-tags="Datacenter">
              <div className="head__block">
                <h2 className="category__title">Datacenter</h2>
              </div>
              <div className="products__items">
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
                <div className="product__item">
                  <a className="product" href="#" title="name">
                    <div className="product__wrapper">
                      <div className="product__tags">
                        <span className="tag icon">
                          <i className="ico-shield"></i>
                        </span>
                        <span className="tag active">Name</span>
                        <span className="tag">Name</span>
                      </div>
                      <div className="product__data">
                        <div className="product__img">
                          <img src="/img/tests/product.png" alt="name" />
                        </div>
                        <div className="data__wrapper">
                          <div className="left__side">
                            <div className="rating__wrapper">
                              <i className="ico-star"></i>
                              <span className="rating">5</span>
                            </div>
                            <span className="name">Proxy</span>
                          </div>
                          <div className="right__side">
                            <div className="avatars__wrapper">
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                              <img src="/img/tests/ava.png" alt="name" />
                            </div>
                            <span className="seller">5 sellers</span>
                          </div>
                        </div>
                        <div className="content__area">
                          <span className="name">
                            Datacenter Proxy From Bob
                          </span>
                          <div className="sub__content">
                            <p>Unlimited IPs + Sessions. Pay only for gb.</p>
                          </div>
                          <button className="openContent">
                            <i className="ico-arrow"></i>
                          </button>
                        </div>
                      </div>
                      <div className="buttom">
                        <div className="price">
                          <span className="currency">$</span>
                          <span className="value">0,30</span>
                        </div>
                        <div className="itemsLeft">
                          <span className="desk">
                            Only <span>1k</span> pcs left
                          </span>
                          <div className="progress-bar">
                            <div className="remaining"></div>
                            <span className="value">75%</span>
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
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
