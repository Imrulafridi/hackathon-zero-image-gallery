"use client";

import { setAsFavoriteAction } from "@/app/gallery/actions";
import { SearchResult } from "@/app/gallery/page";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast , Toaster } from "react-hot-toast";

export default function HeartMenu({ images }: { images: SearchResult }) {
  const [favourite, setFavourite] = useState(images.tags?.includes("favorite"));
  const router = useRouter();

  const removeHeart = () => {
    toast.promise(setAsFavoriteAction(images.public_id, false), {
      loading: "Removing From Favorite",
      success: "Removed From Favorite",
      error: "Failed to Remove From Favorite",
    });
    setFavourite(false)
    setTimeout(() => {
      router.refresh()
    }, 2000)
  };
  const addHeart = () => {
    toast.promise(setAsFavoriteAction(images.public_id, true), {
      loading: "Adding To Favorite",
      success: "Added To Favorite",
      error: "Failed to Add to Favorite",
    });

    setFavourite(true)
    
    setTimeout(() => {
      router.refresh()
    }, 2000)
  };

  return (
    <>
      {favourite ? (
        <svg
          onClick={removeHeart}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart hover:text-white fill-red-600 text-red-500 cursor-pointer"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ) : (
        <svg
          onClick={addHeart}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart fill-white hover:text-red-500 cursor-pointer "
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )}
      <Toaster/>
    </>
  );
}
