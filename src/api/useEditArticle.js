import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditArticles } from "./apiArticles";
import { toast } from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, status } = useMutation({
    mutationFn: ({ newArticleData, id }) =>
      createEditArticles(newArticleData, id),
    onSuccess: () => {
      toast.success("Article successfully edited");
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const isEditing = status == "pending";

  return { isEditing, editCabin };
}
