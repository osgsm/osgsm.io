"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const Comments = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-12">
      <Giscus
        id="comments"
        repo="osgsm/osgsm.io-v2"
        repoId="R_kgDONdFYBw"
        categoryId="DIC_kwDONdFYB84CnNrT"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme === "dark" ? "dark" : "light"}
        lang="en"
        loading="lazy"
      />
    </div>
  );
};
