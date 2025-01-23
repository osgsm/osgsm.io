import type React from "react";

import styles from "./styles.module.css";

const Preview = ({
  children,
  codeblock,
  dark,
}: React.HTMLAttributes<HTMLDivElement> & {
  codeblock?: string;
  dark?: string;
}) => (
  <figure
    data-with-codeblock={codeblock}
    className={styles.preview}
    style={{ backgroundColor: dark ? "#13131e" : "transparent" }}
  >
    {children}
  </figure>
);

export default Preview;
