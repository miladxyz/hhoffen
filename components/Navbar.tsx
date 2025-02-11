"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Exo } from "next/font/google";

const exo = Exo({ subsets: ["latin"] });

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-[#E1DCCD] max-sm:px-2 border-b-4 border-b-[#46000C]">

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-[#46000C] ${
            pathname === "/" && "text-[#46000C]"
          }`}
        >
          خانه
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-[#46000C] ${
            pathname === "/wishlist" && "text-[#46000C]"
          }`}
        >
           علاقه مندی
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-[#46000C] ${
            pathname === "/orders" && "text-[#46000C]"
          }`}
        >
          سفارشات
        </Link>
        <Link
              href={user ? "/aboutUs" : "/sign-in"}
              className="hover:text-[#46000C]"
            >
              درباره ما
            </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[120px] bg-[#E1DCCD]"
          placeholder="جستجو..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-[#46000C]" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-[#46000C] hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">سبد خرید ({cart.cartItems.length})</p>
        </Link>

        <Menu
          className="cursor-pointer lg:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/" className="hover:text-[#46000C]">
              خانه
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-[#46000C]"
            >
              لیست علاقه‌مندی
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-[#46000C]"
            >
              سفارشات
            </Link>
            <Link
              href={user ? "/aboutUs" : "/sign-in"}
              className="hover:text-[#46000C]"
            >
              درباره ما
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
            >
              <ShoppingCart />
              <p className="text-base-bold">سبد خرید ({cart.cartItems.length})</p>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
        <Link href="/">
            <div className="text-[28px] font-bold text-[#46000C] font-[exo]">
              HOFFEN
            </div>
          {/* <Image src="/logo.png" alt="logo" width={130} height={100} /> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
