"use client";

import Link from "next/link";
import Logo from "../Icons/Logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      {/* <Link
        href='/'
        className={cn(
          "text-sm font-bold transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        HOME
      </Link> */}
      <Link
        href='/blog'
        className={cn(
          "text-sm font-bold transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        BLOG
      </Link>
      <Link
        href='/projects'
        className={cn(
          "text-sm font-bold transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/projects" ? "text-foreground" : "text-foreground/60"
        )}
      >
        PROJECTS
      </Link>
    </nav>
  );
};

export default MainNav;
