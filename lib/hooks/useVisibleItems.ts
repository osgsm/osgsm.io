"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface UseVisibleItemsProps {
  totalItems: number;
  initialCount?: number;
  incrementBy?: number;
  category: string;
  paramName?: string;
  showMoreButton?: boolean;
}

export const useVisibleItems = ({
  totalItems,
  initialCount = 12,
  incrementBy = 12,
  category,
  paramName = "show",
  showMoreButton = true,
}: UseVisibleItemsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const showParam = searchParams.get(paramName);

  const initialVisibleCount = showParam ? Number(showParam) : initialCount;
  const [visibleItems, setVisibleItems] = useState(
    showMoreButton ? initialVisibleCount : totalItems,
  );

  useEffect(() => {
    if (showMoreButton && visibleItems !== initialCount) {
      const params = new URLSearchParams(searchParams.toString());
      params.set(paramName, visibleItems.toString());

      router.replace(`/${category}?${params.toString()}`, { scroll: false });
    }
  }, [
    visibleItems,
    category,
    initialCount,
    router,
    searchParams,
    paramName,
    showMoreButton,
  ]);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + incrementBy);
  };

  const hasMoreItems = showMoreButton && visibleItems < totalItems;

  return {
    visibleItems,
    hasMoreItems,
    handleLoadMore,
  };
};
