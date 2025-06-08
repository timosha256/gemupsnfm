import LangSwitch from "../shared/header/lang-switch";
import Burger from "../shared/header/burger";
import Cart from "../shared/header/cart";
import AuthActions from "../shared/header/auth-actions";

interface Props {
  isAuth: boolean;
}

export const Header: React.FC<Props> = ({ isAuth }) => {
  if (isAuth) {
    return (
      <header className="auth">
        <div className="header__wrapper">
          <div className="leftSide">
            <a href="#" title="name">
              <img src="@img/logo/logo_icon.svg" alt="name" />
            </a>
          </div>
          <div className="rightSide">
            <LangSwitch />
            <div className="cash__wrapper">
              <i className="ico-wallet"></i>
              <a href="#" className="billing">
                <span className="value">0.00</span>
                <span className="currency">$</span>
              </a>
            </div>
            <div className="user__wrapper">
              <div className="user__name">
                <i className="ico-user"></i>
                <span>User name</span>
              </div>
              <i className="ico-arrow"></i>
              <div className="userMenu">
                <ul className="userMenu__items">
                  <li className="userMenu__item">
                    <a href="#" title="">
                      <i className="ico-user"></i>
                      My Profile
                    </a>
                  </li>
                  <li className="userMenu__item">
                    <a href="/purchases.html" title="">
                      <i className="ico-cart-bag"></i>
                      My Purchases
                    </a>
                  </li>
                  <li className="userMenu__item">
                    <a href="#" title="">
                      <i className="ico-arrow-menu-left"></i>
                      Transactions
                    </a>
                  </li>
                  <li className="userMenu__item">
                    <a href="#" title="">
                      <i className="ico-tag"></i>
                      Seller
                    </a>
                  </li>
                  <li className="userMenu__item">
                    <a href="#" title="">
                      <i className="ico-users"></i>
                      Referral
                    </a>
                  </li>
                  <li className="userMenu__item logout">
                    <a href="#" title="">
                      <i className="ico-logout"></i>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Cart />
            <Burger />
          </div>
          <div className="mobileMenu__wrapper">
            <div className="head__area">
              <LangSwitch />
              <button className="closeMenu">
                <i className="ico-close"></i>
              </button>
            </div>
            <div className="mainMenu__wrapper">
              <div className="menu__element">
                <span className="menuHead">Menu</span>
                <nav className="mobNav__wrapper">
                  <ul className="mobNav">
                    <li className="mobNav__item">
                      <i className="ico-shield"></i>
                      <a href="#" title="name">
                        Proxy
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="menu__element">
                <span className="menuHead">Support</span>
                <nav className="mobNav__wrapper">
                  <ul className="mobNav">
                    <li className="mobNav__item">
                      <i className="ico-details"></i>
                      <a href="#" title="name">
                        Help
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="noauth">
      <div className="header__wrapper">
        <div className="leftSide">
          <a href="#" title="name">
            <img src="@img/logo/logo_icon.svg" alt="name" />
          </a>
        </div>
        <div className="rightSide">
         <LangSwitch />
         <AuthActions />
         <Cart />
         <Burger />
        </div>
        <div className="mobileMenu__wrapper">
          <div className="head__area">
            <LangSwitch />
            <button className="closeMenu">
              <i className="ico-close"></i>
            </button>
          </div>
          <div className="mainMenu__wrapper">
            <div className="menu__element">
              <span className="menuHead">Menu</span>
              <nav className="mobNav__wrapper">
                <ul className="mobNav">
                  <li className="mobNav__item">
                    <i className="ico-shield"></i>
                    <a href="#" title="name">
                      Proxy
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="menu__element">
              <span className="menuHead">Support</span>
              <nav className="mobNav__wrapper">
                <ul className="mobNav">
                  <li className="mobNav__item">
                    <i className="ico-details"></i>
                    <a href="#" title="name">
                      Help
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
