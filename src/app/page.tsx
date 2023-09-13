"use client";

import { Button } from "@/components/ui/button";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [ImageId, setImageId] = useState("");
  return (
    <div className="container space-y-4 mt-8">
      <h1>Welcome to the Photo App</h1>
      <Button asChild>
        <CldUploadButton
          onUpload={(result: any) => {
            setImageId(result.info.public_id);
          }}
          uploadPreset="bj5i3ty4"
        />
      </Button>

      {ImageId && (
        <CldImage
          width="300"
          height="300"
          src={ImageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </div>
  );
}
