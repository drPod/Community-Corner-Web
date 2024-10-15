import { useQuery } from "@tanstack/react-query";
import { getArticles, getNewsArticle } from "./apiArticles";

export function useArticles(articleType, maxCount, sortByColumn) {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ["article", articleType, maxCount, sortByColumn],
    queryFn: () => getArticles(articleType, maxCount, sortByColumn),
  });

  return { isLoading, error, articles };
}

export function useNewsArticle(newsArticleId) {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ["article", newsArticleId],
    queryFn: () => getNewsArticle(newsArticleId),
  });

  return { isLoading, error, articles };
}
