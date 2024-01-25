import { useQuery } from "@tanstack/react-query";
import { getArticles } from "./apiArticles";

export function useArticles() {
  const {
    isLoading,
    data: articles,
    error,
  } = useQuery({
    queryKey: ["article"],
    queryFn: getArticles,
  });

  return { isLoading, error, articles };
}
