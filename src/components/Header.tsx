import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Header = () => {
  return (
    <section className="bg-black text-white h-16">
      <div className="mx-auto h-full px-8 flex flex-row justify-between items-center ">
        <Link href="/">
        <div>MY PHOTOS</div>
        </Link>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Header;
