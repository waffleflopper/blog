import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

interface Props {
  icon: any;
  label: string;
  url: string;
}

const NavItem = ({ icon, label, url }: Props) => {
  return (
    <li className={styles.navItem}>
      <Link href={url}>
        <a className={styles.navLink}>
          <div className={styles.icon}>{icon}</div>
          <span className={styles.linkText}>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
