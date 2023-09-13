"use client";

import createFolder from "@/app/albums/actions";
import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function AddToALbum({
  images,
  onClose,
}: {
  images: SearchResult;
  onClose: () => void;
}) {
  const [openDialog, setOpen] = useState(false);
  const [folder, setFolder] = useState("");
  const router = useRouter();

  const addPhotoToAlbm = () => {
    toast.promise(createFolder(images, folder), {
      loading: `Adding To ${folder}`,
      success: `Added To ${folder}`,
      error: `Failed Adding To ${folder}`,
    });
    onClose();
    setOpen(false);
  };

  return (
    <Dialog
      open={openDialog}
      onOpenChange={(newOpenState) => {
        setOpen(newOpenState);
        if (!newOpenState) {
          onClose();
        }
      }}
    >
      <DialogTrigger>
        <Button variant="outline">
          <FolderPlus className="mr-2 h-4 w-4" />
          <span>Add To Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Folder Name</DialogTitle>
          <DialogDescription>
            Enter a name in the field to Name after your Folder in your album
            collection. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={folder}
              onChange={(e) => setFolder(e.currentTarget.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={addPhotoToAlbm}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
      <Toaster />
    </Dialog>
  );
}
