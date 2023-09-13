import cloudinary from "cloudinary";
import UploadButton from "./upload-button";
import ImageGrid from "@/components/ImageGrid";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

const GalleryPage = async () => {
  const images = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };



  return (
    <>
      <div className="flex justify-between items-center pb-4">
        <h1 className="font-bold text-2xl text-center">Gallery</h1>
        <div className="text-center">
          <UploadButton />
        </div>
      </div>
      <ImageGrid images={images.resources} />
    </>
  );
};

export default GalleryPage;
