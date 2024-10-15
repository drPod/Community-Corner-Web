import { useQuery } from "@tanstack/react-query";
import { getArticles } from "./apiArticles";

export function useArticles(
  articleType,
  maxCount,
  sortByColumn,
  notNullColumn
) {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ["article", articleType, maxCount, sortByColumn, notNullColumn],
    queryFn: () =>
      getArticles(articleType, maxCount, sortByColumn, notNullColumn),
  });

  return { isLoading, error, articles };
}
