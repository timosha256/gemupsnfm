import { Header } from "@/components/layout/header";
import { userData } from "@/data";
import styles from "./page.module.scss";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div>
      <Header isAuth={userData.isAuth} />
      <Footer />
    </div>
  );
}
