import { SearchResult } from "@/app/gallery/page";
import ImageGrid from "@/components/ImageGrid";
import cloudinary from "cloudinary";

const AlbumFolder = async ({
  params: { folder },
}: {
  params: { folder: string };
}) => {
  const images = (await cloudinary.v2.search
    .expression(`resource_type=image AND folder=${folder}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">
            Album - <span className="uppercase"> {folder}</span>
          </h1>
        </div>

        <ImageGrid images={images.resources} />
      </div>
    </section>
  );
};

export default AlbumFolder;
