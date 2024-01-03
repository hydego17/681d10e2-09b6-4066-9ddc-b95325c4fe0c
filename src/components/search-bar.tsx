"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "lucide-react";

import { debounce } from "@/lib/utils";

import { Input } from "./ui/input";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    const encodedSearchQuery = encodeURI(value);
    router.push(`${pathname}${encodedSearchQuery && `/?q=${encodedSearchQuery}`}`);
  }, 450);

  return (
    <div className='relative'>
      <Input placeholder='Search Posts' defaultValue={searchParams.get("q") ?? ""} onChange={onSearch} />
      <SearchIcon size={15} className='absolute right-3 top-3 text-muted-foreground pointer-events-none' />
    </div>
  );
};

export default SearchBar;
