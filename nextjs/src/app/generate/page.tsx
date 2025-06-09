"use client"

import type { Metadata } from "next";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { SideNav } from "@/components/side-nav";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHeader } from "@/components/headers/page-header";
import { Footer } from "@/components/layout/footer";
import { generatedProxyList } from "@/data";

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

export default function GeneratePage() {
  const [proxyList, setProxyList] = useState<string[]>([]);

  useEffect(() => {
    setProxyList(generatedProxyList);
  }, []);

  return (
    <div className="page__wrapper generate-page">
      <SideNav />
      <div className="main__content">
        <div id="auth-header-box">
          <Header />
        </div>
        <main>
          <Breadcrumbs name="Generate proxy" />
          <PageHeader name="Generate proxy" />
          <section id="tabData">
            <div className="tabs container">
              <div className="tabs__nav">
                <button className="tabs__button active" data-tab="Residential">
                  Residential
                </button>
                <button className="tabs__button" data-tab="DataCenter">
                  Data Center
                </button>
                <button className="tabs__button" data-tab="ISP">
                  ISP
                </button>
              </div>
              <div className="tabs__content">
                <div className="tab active" id="Residential">
                  <div className="innerContent__wrapper">
                    <div className="mainContent">
                      <div className="generate-page__settings-box generate-page__settings-box--top box">
                        <div className="box__column">
                          <h3 className="box__column-title">
                            <span>Available proxy providers&nbsp;:</span>
                            <img src="/img/icons/hint.svg" alt="hint" />
                          </h3>
                          <div className="box__btn-list">
                            <button
                              className="box__btn box__btn--active"
                              type="button"
                            >
                              <img
                                className="box__btn-icon"
                                src="/img/flag/poland.svg"
                                alt="Poland"
                                data-title="Poland"
                              />
                              <span className="box__btn-caption">Lola</span>
                              <span className="box__btn-tag">#1234</span>
                            </button>
                            <button
                              className="box__btn box__btn--active"
                              type="button"
                            >
                              <img
                                className="box__btn-icon"
                                src="/img/icons/planet--green.svg"
                                alt="Poland"
                                data-title="Poland"
                              />
                              <span className="box__btn-caption">Lola</span>
                              <span className="box__btn-tag">#1234</span>
                            </button>
                            <button className="box__btn" type="button">
                              <span className="box__btn-caption">Bob</span>
                            </button>
                            <button className="box__btn" type="button">
                              <span className="box__btn-caption">Paul</span>
                            </button>
                          </div>
                        </div>
                        <div className="box__column">
                          <h3 className="box__column-title">
                            <span>Protocol:&nbsp;</span>
                            <img src="/img/icons/hint.svg" alt="hint" />
                          </h3>
                          <div className="box__btn-list">
                            <button
                              className="box__btn box__btn--active"
                              type="button"
                            >
                              <span className="box__btn-caption">HTTP(S)</span>
                            </button>
                            <button className="box__btn" type="button">
                              <span className="box__btn-caption">SOCKS5</span>
                            </button>
                          </div>
                        </div>
                        <div className="panel-box__row box__row">
                          <div className="generate-page__count-panel generate-page__panel-box">
                            <h3 className="box__column-title">
                              <span>Count:&nbsp;</span>
                              <img src="/img/icons/hint.svg" alt="hint" />
                            </h3>
                            <div className="generate-page__panel-box-row">
                              <button
                                id="minus"
                                className="minus-btn"
                                data-input-id="generate-proxy-count-input"
                              ></button>
                              <input
                                type="number"
                                value="100"
                                id="generate-proxy-count-input"
                                className="generate-page__count-panel-input"
                              />
                              <button
                                id="plus"
                                className="plus-btn"
                                data-input-id="generate-proxy-count-input"
                              ></button>
                            </div>
                          </div>
                          <div className="generate-page__format-panel generate-page__panel-box">
                            <h3 className="box__column-title">
                              <span>Format:&nbsp;</span>
                              <img src="/img/icons/hint.svg" alt="hint" />
                            </h3>
                            <div
                              id="generate-proxy-format-dropdown"
                              className="generate-page__format-panel-dropdown dropdown"
                            >
                              <button className="dropdown__toggle">
                                <span id="dropdown-value">
                                  ip:port:login:password
                                </span>
                                <img
                                  src="/img/icons/dropdown-arrow.svg"
                                  alt=""
                                />
                              </button>
                              <ul className="dropdown__menu">
                                <li className="dropdown__menu-item">
                                  ip:port:login:password
                                </li>
                                <li className="dropdown__menu-item">
                                  ip:port:login:password
                                </li>
                                <li className="dropdown__menu-item">
                                  ip:port:login:password
                                </li>
                                <li className="dropdown__menu-item">
                                  ip:port:login:password
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="generate-page__more-options-panel generate-page__panel-box">
                            <span></span>
                            <button
                              id="show-more-options"
                              className="box__btn box__btn--light"
                            >
                              Show more options
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="generate-page__settings-box generate-page__settings-box--bottom box">
                        <div className="box__column">
                          <h3 className="box__column-title">
                            <span>Location:&nbsp;</span>
                            <img src="/img/icons/hint.svg" alt="hint" />
                          </h3>
                          <div className="generate-page__location-panel box__row">
                            <div className="generate-page__location-panel-btn-list box__btn-list">
                              <button
                                className="box__btn box__btn--active"
                                type="button"
                              >
                                Random
                              </button>
                              <button className="box__btn" type="button">
                                Country
                              </button>
                            </div>
                            <div className="generate-page__location-panel-dropdown-list dropdown-list dropdown-list--row">
                              <div
                                id="generate-proxy-country-dropdown"
                                className="generate-page__location-panel-dropdown dropdown dropdown--disabled"
                              >
                                <button className="dropdown__toggle">
                                  <span id="dropdown-value">Country</span>
                                  <img
                                    src="/img/icons/dropdown-arrow.svg"
                                    alt=""
                                  />
                                </button>
                                <ul className="dropdown__menu">
                                  <li className="dropdown__menu-item">
                                    Poland
                                  </li>
                                  <li className="dropdown__menu-item">
                                    Poland
                                  </li>
                                  <li className="dropdown__menu-item">
                                    Poland
                                  </li>
                                  <li className="dropdown__menu-item">
                                    Poland
                                  </li>
                                </ul>
                              </div>
                              <div
                                id="generate-proxy-state-dropdown"
                                className="generate-page__location-panel-dropdown dropdown dropdown--disabled"
                              >
                                <button className="dropdown__toggle">
                                  <span id="dropdown-value">State</span>
                                  <img
                                    src="/img/icons/dropdown-arrow.svg"
                                    alt=""
                                  />
                                </button>
                                <ul className="dropdown__menu">
                                  <li className="dropdown__menu-item">State</li>
                                  <li className="dropdown__menu-item">State</li>
                                  <li className="dropdown__menu-item">State</li>
                                  <li className="dropdown__menu-item">State</li>
                                </ul>
                              </div>
                              <div
                                id="generate-proxy-city-dropdown"
                                className="generate-page__location-panel-dropdown dropdown dropdown--disabled"
                              >
                                <button className="dropdown__toggle">
                                  <span id="dropdown-value">City</span>
                                  <img
                                    src="/img/icons/dropdown-arrow.svg"
                                    alt=""
                                  />
                                </button>
                                <ul className="dropdown__menu">
                                  <li className="dropdown__menu-item">City</li>
                                  <li className="dropdown__menu-item">City</li>
                                  <li className="dropdown__menu-item">City</li>
                                  <li className="dropdown__menu-item">City</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box__row">
                          <div className="generate-page__session-panel generate-page__panel-box">
                            <h3 className="box__column-title">
                              <span>Session type:&nbsp;</span>
                              <img src="/img/icons/hint.svg" alt="hint" />
                            </h3>
                            <div className="generate-page__session-panel-btn-list box__btn-list">
                              <button className="box__btn" type="button">
                                Dynamic
                              </button>
                              <button
                                className="box__btn box__btn--active"
                                type="button"
                              >
                                Static
                              </button>
                            </div>
                          </div>
                          <div className="generate-page__ttl-panel generate-page__panel-box">
                            <h3 className="box__column-title">
                              <span>TTL:&nbsp;</span>
                              <img src="/img/icons/hint.svg" alt="hint" />
                            </h3>
                            <div
                              id="generate-proxy-ttl-dropdown"
                              className="generate-page__ttl-panel-dropdown dropdown"
                            >
                              <button className="dropdown__toggle">
                                <span id="dropdown-value">60 min</span>
                                <img
                                  src="/img/icons/dropdown-arrow.svg"
                                  alt=""
                                />
                              </button>
                              <ul className="dropdown__menu">
                                <li
                                  className="dropdown__menu-item"
                                  data-value="3600"
                                >
                                  60 min
                                </li>
                                <li
                                  className="dropdown__menu-item"
                                  data-value="3600"
                                >
                                  60 min
                                </li>
                                <li
                                  className="dropdown__menu-item"
                                  data-value="3600"
                                >
                                  60 min
                                </li>
                                <li
                                  className="dropdown__menu-item"
                                  data-value="3600"
                                >
                                  60 min
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="generate-page__panel-box">
                            <span></span>
                            <button
                              id="save-and-close"
                              className="box__btn bg--green color--black hover hover--opacity"
                            >
                              Save and close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sideData">
                      <div className="side__content">
                        <div className="Canv__wrapper" id="chartContainer">
                          <canvas
                            id="chartTraffic"
                            data-max="1000"
                            data-value="387"
                            data-line1="Traffic used"
                            data-total="/ 10 gb"
                          ></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="generated__area">
                    <div className="top__head">
                      <div className="title">100 proxy generated</div>
                      <button type="button" className="genCopy">
                        Copy<i className="ico-copy"></i>
                      </button>
                    </div>
                    <div className="generated__list">
                      {proxyList.map((proxy, idx) => (
                        <div className="list__item">
                          <span className="number">{idx + 1}</span>
                          <span className="value">{proxy}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="tab" id="DataCenter"></div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
