import clsx from "clsx";
import { SquareArrowOutUpRight } from "lucide-react";
import NextLink from "next/link";

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  text?: string;
  underline?: boolean;
  className?: string;
}

const Link = ({ text, href, underline, className, children }: LinkProps) => {
  const isInternalLink = href?.startsWith("/") || href?.startsWith("#");
  return isInternalLink ? (
    <NextLink
      href={href ?? ""}
      className={clsx(
        className,
        "underline decoration-1 decoration-[--iris-6] underline-offset-2",
      )}
    >
      {children}
    </NextLink>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={clsx(className, {
        "underline decoration-1 decoration-[--iris-6] underline-offset-2":
          underline,
      })}
      href={href}
    >
      {text || children}
      <span className="mx-0.5 inline-flex text-[--iris-7]">
        <SquareArrowOutUpRight className="inline-block size-3 translate-y-px" />
      </span>
    </a>
  );
};

export default Link;
