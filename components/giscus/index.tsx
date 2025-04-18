"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const Comments = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="mt-12">
      <Giscus
        id="comments"
        repo="osgsm/osgsm.io"
        repoId="R_kgDONdFYBw"
        categoryId="DIC_kwDONdFYB84CnNrT"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
};
