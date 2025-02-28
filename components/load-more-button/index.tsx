import { RefreshCw } from "lucide-react";
import * as motion from "motion/react-client";

interface LoadMoreButtonProps {
  onClick: () => void;
  label?: string;
}

export const LoadMoreButton = ({
  onClick,
  label = "投稿をもっと見る",
}: LoadMoreButtonProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded-md border border-iris-4 px-4 py-2 font-medium text-iris-7 text-sm transition-colors hover:border-iris-6 hover:text-iris-9"
      whileHover="hover"
    >
      {label}
      <motion.div
        variants={{
          hover: { rotate: 360 },
        }}
        transition={{ duration: 0.5 }}
      >
        <RefreshCw className="size-4" />
      </motion.div>
    </motion.button>
  );
};
