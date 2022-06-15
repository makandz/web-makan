import Link from "next/link";
import styles from "./Navbar.module.css";

type Navlink = {
  text: string;
  href: string;
};

export const Navbar = () => {
  const links: Array<Navlink> = [
    { text: "Home", href: "/" },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <header className={styles.main}>
      <h1>
        <Link href="/">
          <a>
            <span>Makan</span> D
          </a>
        </Link>
      </h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href}>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
