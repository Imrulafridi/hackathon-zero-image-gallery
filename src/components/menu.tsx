import {  MenuIcon, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchResult } from "@/app/gallery/page";
import AddToALbum from "./addtoalbum";
import Link from "next/link";
import { useState } from "react";

export default function MenuDropDown({ images }: { images: SearchResult }) {
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenu open={open} onOpenChange={setOpen} >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost"><MenuIcon/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuItem asChild>
          <AddToALbum images={images} onClose={() => setOpen(false)} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
            <Button
              className="cursor-pointer flex justify-start pl-4"
              asChild
              variant="ghost"
            >
              <Link
                href={`/edit?publicId=${encodeURIComponent(images.public_id)}`}
              >
                <Pencil className="mr-2 w-4 h-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
