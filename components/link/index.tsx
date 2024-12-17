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
      <SquareArrowOutUpRight className="mr-0.5 size-3 translate-y-px" />
    </a>
  );
};

export default Link;
