import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SideNav } from "@/components/side-nav";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { InputPlacetop } from "@/components/shared/forms/input-placetop";
import { userData } from "@/data";

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

export default function RegisterPage() {
  return (
    <div className="page__wrapper">
      <SideNav />
      <div className="main__content">
        <div id="auth-header-box">
          <Header isAuth={userData.isAuth} />
        </div>
        <main>
          <Breadcrumbs name="Register" />
          <div className="fullscreen container">
            <div className="form__wrapper">
              <div className="form__header">
                <h1>Register</h1>
                <p>Дополнительный вспомогательный текст при необходимости.</p>
              </div>
              <form
                className="formBody form"
                id="auth"
                data-form-type="register"
              >
                <div className="form__fields">
                  <InputPlacetop
                    id="Username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    label="Username"
                    required
                  />
                  <InputPlacetop
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    label="Email"
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
                  <InputPlacetop
                    id="refferal"
                    type="text"
                    name="refferal"
                    placeholder="Refferal Code (Optional)"
                    label="Refferal Code (Optional)"
                  />
                </div>

                <div className="form__action">
                  <button type="submit" disabled>
                    Register
                  </button>
                  <div className="sub__actions">
                    <Link href="/login">Already have an account ?</Link>
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
