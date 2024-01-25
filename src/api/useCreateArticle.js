import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditArticles } from "./apiArticles";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, status } = useMutation({
    mutationFn: createEditArticles,
    onSuccess: () => {
      toast.success("New Article successfully created");
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
    onError: (err) => toast.error(err.message),
  });

  const isCreating = status == "pending";

  return { isCreating, createCabin };
}
