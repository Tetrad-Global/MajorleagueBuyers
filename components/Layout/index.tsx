import React, { ReactNode } from "react";
import styles from "./index.module.css";
import Header from "./Header";
import Footer from "./Footer";

interface ComponentsProps {
  children: ReactNode;
}

const Layout: React.FC<ComponentsProps> = ({ children }) => {
  return (
    <div className={styles.maxWidth1440}>
      <div className={styles.mainDiv}>
        <div className={styles.topNav}>
          <Header />
        </div>
        <div className={styles.content}>
          <div className={styles.childrenDiv}>
            <main className={styles.main}>{children}</main>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
