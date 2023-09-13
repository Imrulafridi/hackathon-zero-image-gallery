"use client";

import { SearchResult } from "@/app/gallery/page";
import { CldImage } from "next-cloudinary";
import HeartMenu from "./HeartMenu";
import MenuDropDown from "./menu";

const MAX_COLUMNS = 4;

const ImageGrid = ({ images }: { images: SearchResult[] }) => {
  function getColumns(colIndex: number) {
    return images.filter((results, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map((data: SearchResult) => (
              <div key={data.public_id} className="relative">
                <CldImage
                  width="400"
                  height="300"
                  src={data.public_id}
                  sizes="100vw"
                  alt="Description of my image"
                />
                <div className="absolute top-2 left-2 z-10">
                  <HeartMenu images={data} />
                </div>
                <div className="absolute top-2 right-2 z-10">
                  <MenuDropDown images={data} />
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default ImageGrid;
