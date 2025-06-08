import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { SideNav } from "@/components/side-nav";
import { InputPlacetop } from "@/components/shared/forms/input-placetop";
import { userData } from "@/data";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Footer } from "@/components/layout/footer";

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

export default function LoginPage() {
  return (
    <div className="page__wrapper">
      <SideNav />
      <div className="main__content">
        <div id="auth-header-box">
          <Header isAuth={userData.isAuth} />
        </div>
        <main>
          <Breadcrumbs name="Login" />
          <div className="fullscreen container">
            <div className="form__wrapper">
              <div className="form__header">
                <h1>Login</h1>
                <p>Дополнительный вспомогательный текст при необходимости.</p>
              </div>
              <form className="formBody" id="auth" data-form-type="login">
                <div className="form__fields">
                  <InputPlacetop
                    id="username-email"
                    type="text"
                    name="login"
                    placeholder=""
                    label="Username or Email"
                    required
                  />
                  <InputPlacetop
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    label="Password"
                    required
                  />
                </div>

                <div className="form__action">
                  <button type="submit">Login</button>
                  <div className="sub__actions">
                    <Link href="/register">Don't have an account ?</Link>
                    <Link href="#" data-hystmodal="#forgotPassword">
                      Forgot password
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />  
      </div>
    </div>
  );
}
