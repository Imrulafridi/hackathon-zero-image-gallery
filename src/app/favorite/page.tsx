import ImageGrid from "@/components/ImageGrid";
import cloudinary from "cloudinary";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

const FavoritePage = async () => {
  const images = (await cloudinary.v2.search
    .expression("resource_type:image AND tags:favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h1 className="font-bold text-2xl text-center">FAVORITE</h1>
      </div>
      <ImageGrid images={images.resources} />
    </>
  );
};

export default FavoritePage;
