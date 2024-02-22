import Quotations from "@/components/Quotations";
import Script from "next/script";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>MR SYKS</div>
      </header>
      <Quotations />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
    </main>
  );
}
