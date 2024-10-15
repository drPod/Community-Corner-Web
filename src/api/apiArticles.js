import { supabase, supabaseUrl } from "./supabase";

export async function getArticles(
  articleType,
  maxCount,
  orderByColumn,
  notNullColumn
) {
  let { data: articles, error } = await supabase
    .from(articleType)
    .select("*")
    .limit(maxCount)
    .order(orderByColumn, { ascending: true });
  //.not(notNullColumn, "is", null)
  //.not(notNullColumn, "eq", "")
  if (error) throw new Error(error.message);

  return { articles };
}

export async function createEditArticles(newArticle, id) {
  const hasImagePath = newArticle.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newArticle.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newArticle.image
    : `${supabaseUrl}/storage/v1/object/public/article-images/${imageName}`;

  let query = supabase.from("newsArticles");

  if (!id) query = query.insert([{ ...newArticle, image: imagePath }]);

  if (id)
    query = query.update({ ...newArticle, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Article could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newArticle.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("newsArticles").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Article image could not be uploaded and the article was not created"
    );
  }

  return data;
}
