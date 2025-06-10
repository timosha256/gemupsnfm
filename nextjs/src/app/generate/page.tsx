"use client"

import type { Metadata } from "next";
import { SetStateAction, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SideNav } from "@/components/side-nav";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHeader } from "@/components/headers/page-header";
import { Scripts } from "@/components/shared/scripts";
import { Dropdown } from "@/components/ui/dropdown";
import { generatedProxyList } from "@/data";
import { IDropdown } from "@/types/component";
import { ProxyProtocolType, ProxySessionType, IProxyProviderData, ProxyLocationType, ProxyFormatType } from "@/types/data";
import { useProxyListStore, useProxySettingsStore } from "@/store/proxy";

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
  const {
    providerList,
    protocol,
    count,
    format,
    locationType,
    country,
    state,
    city,
    sessionType,
    ttl,
    setValue
  } = useProxySettingsStore((state) => state);
  const { proxyList, setProxyList, getProxyList } = useProxyListStore((state) => state);

  const [isMoreOptionsVisible, setIsMoreOptionsVisible] = useState<boolean>(false);
  
  const [proxyProtocol, setProxyProtocol] = useState<ProxyProtocolType>(protocol);
  const [proxySessionType, setProxySessionType] = useState<ProxySessionType>(sessionType);
  const [proxyCount, setProxyCount] = useState<number>(count);
  const [proxyLocationType, setProxyLocationType] = useState<ProxyLocationType>(locationType);

  const [proxyProviderList, setProxyProviderList] = useState<IProxyProviderData[]>([
    { id: uuidv4(), isActive: false, icon: "/img/flag/poland.svg", name: "Lola", tag: "1234" },
    { id: uuidv4(), isActive: false, icon: "/img/icons/planet--green.svg", name: "Lola", tag: "1234" },
    { id: uuidv4(), isActive: false, name: "Bob" },
    { id: uuidv4(), isActive: false, name: "Paul" },
  ]);

  const [proxyFormatList, setProxyFormatList] = useState<IDropdown["list"]>([
    { id: uuidv4(), isActive: true, label: "ip:port:login:password" },
    { id: uuidv4(), isActive: false, label: "ip:port@login:password" },
    { id: uuidv4(), isActive: false, label: "login:password@ip:port" },
    { id: uuidv4(), isActive: false, label: "login:password:ip:port" }
  ]);

  const [proxyCountryList, setProxyCountryList] = useState<IDropdown["list"]>([
    { id: uuidv4(), isActive: true, label: "Poland" },
    { id: uuidv4(), isActive: false, label: "France" },
    { id: uuidv4(), isActive: false, label: "Germany" },
    { id: uuidv4(), isActive: false, label: "USA" }
  ]);

  const [proxyStateList, setProxyStateList] = useState<IDropdown["list"]>([
    { id: uuidv4(), isActive: true, label: "State" },
    { id: uuidv4(), isActive: false, label: "State" },
    { id: uuidv4(), isActive: false, label: "State" },
    { id: uuidv4(), isActive: false, label: "State" }
  ]);

  const [proxyCityList, setProxyCityList] = useState<IDropdown["list"]>([
    { id: uuidv4(), isActive: true, label: "City" },
    { id: uuidv4(), isActive: false, label: "City" },
    { id: uuidv4(), isActive: false, label: "City" },
    { id: uuidv4(), isActive: false, label: "City" }
  ]);

  const [proxyTtlList, setProxyTtlList] = useState<IDropdown["list"]>([
    { id: "ttl-3600", isActive: true, label: "60 min" },
    { id: "ttl-1800", isActive: false, label: "30 min" },
    { id: "ttl-900", isActive: false, label: "15 min" },
    { id: "ttl-300", isActive: false, label: "5 min" },
    { id: "ttl-60", isActive: false, label: "1 min" },
    { id: "ttl-30", isActive: false, label: "30 sec" },
  ]);

  useEffect(() => {
    getProxyList();
  }, []);

  const handleSelectProxyProvider = (id: string | number) => {
    setProxyProviderList(
      proxyProviderList.map((item) => ({
        ...item,
        isActive: item.id === id ? !item.isActive : item.isActive
      }))
    )
  };

  const handleSaveSettings = () => {
    const activeItemData = {
      format: proxyFormatList.find((item) => item.isActive)?.label || "ip:port:login:password",
      country: proxyCountryList.find((item) => item.isActive)?.label || "",
      state: proxyStateList.find((item) => item.isActive)?.label || "",
      city: proxyCityList.find((item) => item.isActive)?.label || ""
    }

    setValue("providerList", proxyProviderList);
    setValue("protocol", proxyProtocol);
    setValue("count", proxyCount);
    // @ts-ignore
    setValue("format", activeItemData.format?.label)
    setValue("locationType", proxyLocationType);
    setValue("country", activeItemData.country)
    setValue("state", activeItemData.state);
    setValue("city", activeItemData.city);
  };

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
                            {proxyProviderList.map(({ id, isActive, icon, name, tag }) => (
                              <button
                                type="button"
                                className={`box__btn ${isActive && "active"}`}
                                onClick={() => handleSelectProxyProvider(id)}
                              >
                                {icon &&
                                  <img
                                    className="box__btn-icon"
                                    src={icon}
                                    alt="Poland"
                                    data-title="Poland"
                                  />
                                }
                                <span className="box__btn-caption">{name}</span>
                                {tag && <span className="box__btn-tag">#{tag}</span>}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="box__column">
                          <h3 className="box__column-title">
                            <span>Protocol:&nbsp;</span>
                            <img src="/img/icons/hint.svg" alt="hint" />
                          </h3>
                          <div className="box__btn-list">
                            <button
                              type="button"
                              className={`box__btn ${proxyProtocol === "HTTPS" && "active"}`}
                              onClick={() => setProxyProtocol("HTTPS")}
                            >
                              <span className="box__btn-caption">HTTP(S)</span>
                            </button>
                            <button
                              type="button"
                              className={`box__btn ${proxyProtocol === "SOCKS5" && "active"}`}
                              onClick={() => setProxyProtocol("SOCKS5")}
                            >
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
                                onClick={() => setProxyCount(proxyCount === 0 ? 0 : proxyCount - 1)}
                              ></button>
                              <input
                                id="generate-proxy-count-input"
                                className="generate-page__count-panel-input"
                                type="number"
                                value={proxyCount}
                                onChange={(e) => setProxyCount(parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value))}
                              />
                              <button
                                id="plus"
                                className="plus-btn"
                                data-input-id="generate-proxy-count-input"
                                onClick={() => setProxyCount(proxyCount + 1)}
                              ></button>
                            </div>
                          </div>
                          <div className="generate-page__format-panel generate-page__panel-box">
                            <h3 className="box__column-title">
                              <span>Format:&nbsp;</span>
                              <img src="/img/icons/hint.svg" alt="hint" />
                            </h3>
                            <Dropdown
                              id="generate-proxy-format-dropdown"
                              className="generate-page__format-panel-dropdown"
                              list={proxyFormatList}
                              setList={setProxyFormatList}
                              enableIcon
                            />
                          </div>
                          <div className="generate-page__more-options-panel generate-page__panel-box">
                            <span></span>
                            <button
                              id="show-more-options"
                              className="box__btn box__btn--light"
                              onClick={() => setIsMoreOptionsVisible(!isMoreOptionsVisible)}
                            >
                              {isMoreOptionsVisible ? "Hide" : "Show"} more options
                            </button>
                          </div>
                        </div>
                      </div>
                      {isMoreOptionsVisible &&
                        <div className="generate-page__settings-box generate-page__settings-box--bottom box">
                          <div className="box__column">
                            <h3 className="box__column-title">
                              <span>Location:&nbsp;</span>
                              <img src="/img/icons/hint.svg" alt="hint" />
                            </h3>
                            <div className="generate-page__location-panel box__row">
                              <div className="generate-page__location-panel-btn-list box__btn-list">
                                <button
                                  className={`box__btn ${proxyLocationType === "Random" && "active"}`}
                                  type="button"
                                  onClick={() => setProxyLocationType("Random")}
                                >
                                  Random
                                </button>
                                <button
                                  className={`box__btn ${proxyLocationType === "Country" && "active"}`}
                                  type="button"
                                  onClick={() => setProxyLocationType("Country")}
                                >
                                  Country
                                </button>
                              </div>
                              <div className="generate-page__location-panel-dropdown-list dropdown-list dropdown-list--row">
                                <Dropdown
                                  id="generate-proxy-country-dropdown"
                                  className="generate-page__location-panel-dropdown"
                                  caption="Country"
                                  list={proxyCountryList}
                                  setList={setProxyCountryList}
                                  enableIcon
                                  disabled={proxyLocationType === "Random"}
                                />
                                <Dropdown
                                  id="generate-proxy-state-dropdown"
                                  className="generate-page__location-panel-dropdown"
                                  caption="State"
                                  list={proxyStateList}
                                  setList={setProxyStateList}
                                  enableIcon
                                  disabled={proxyLocationType === "Random"}
                                />
                                <Dropdown
                                  id="generate-proxy-city-dropdown"
                                  className="generate-page__location-panel-dropdown"
                                  caption="City"
                                  list={proxyCityList}
                                  setList={setProxyCityList}
                                  enableIcon
                                  disabled={proxyLocationType === "Random"}
                                />
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
                                <button
                                  type="button"
                                  className={`box__btn ${proxySessionType === "Dynamic" && "active"}`}
                                  onClick={() => setProxySessionType("Dynamic")}
                                >
                                  Dynamic
                                </button>
                                <button
                                  type="button"
                                  className={`box__btn ${proxySessionType === "Static" && "active"}`}
                                  onClick={() => setProxySessionType("Static")}
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
                              <Dropdown
                                id="generate-proxy-ttl-dropdown"
                                className="generate-page__ttl-panel-dropdown"
                                list={proxyTtlList}
                                setList={setProxyTtlList}
                                enableIcon
                              />
                            </div>
                            <div className="generate-page__panel-box">
                              <span></span>
                              <button
                                id="save-and-close"
                                className="box__btn bg--green color--black hover hover--opacity"
                                onClick={handleSaveSettings}
                              >
                                Save and close
                              </button>
                            </div>
                          </div>
                        </div>
                      }
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
                      <div className="title">{proxyList.length} proxy generated</div>
                      <button type="button" className="genCopy">
                        Copy<i className="ico-copy"></i>
                      </button>
                    </div>
                    <div className="generated__list">
                      {proxyList.map(({ ip, port, login, password }, idx) => (
                        <div className="list__item" key={uuidv4()}>
                          <span className="number">{idx + 1}</span>
                          <span className="value">{`${ip}:${port}:${login}:${password}`}</span>
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
        <Scripts />
      </div>
    </div>
  );
}
