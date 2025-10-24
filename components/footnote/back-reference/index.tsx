"use client";;
import { CornerDownLeftIcon } from "lucide-react";

import styles from "../styles.module.css";

import type { JSX } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  href: string;
}

function FootnoteBackReference({ href, children }: Props): JSX.Element {
  const scroll = () => {
    const footnote = document.querySelector(
      `[id="${href.replace("ref", "")}"]`,
    );

    if (footnote) {
      const headerOffset = 100;
      const elementPosition =
        footnote.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles["footnote-back-reference"]}>
      {children}
      <button
        id={href}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          scroll();
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            scroll();
          }
        }}
      >
        <CornerDownLeftIcon className="text-muted" />
      </button>
    </div>
  );
}

export default FootnoteBackReference;
