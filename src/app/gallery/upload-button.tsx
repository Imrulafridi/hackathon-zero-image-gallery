"use client";

import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { UploadResult } from "../page";

const UploadButton = () => {
  const router = useRouter();
  return (
    <Button asChild>
      <CldUploadButton
        onUpload={() => {
          setTimeout(() => {
            router.refresh();
          }, 2000);
        }}
        uploadPreset="bj5i3ty4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 lucide lucide-upload"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
        UPLOAD
      </CldUploadButton>
    </Button>
  );
};

export default UploadButton;
