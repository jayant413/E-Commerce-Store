"use client";

import { LuShoppingBag } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/custom-button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const router = useRouter();
  // const cart = useCart();

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4"
        onClick={() => router.push("/cart")}
      >
        <LuShoppingBag className="text-white " size={20} />
        <span className="ml-2 text-sm font-medium text-white">
          {/* {cart.items.length} */}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
