"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "../contexts/cart";
import CartProductItem from "./cart-product-item";

interface CartSheetProps {
  product: Pick<Product, "name" | "imageUrl">;
}

const CartSheet = ({ product }: CartSheetProps) => {
  const { isOpen, toggleCart, products } = useContext(CartContext);

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="py-5">
          {products.map((product) => (
            <CartProductItem key={product.id} product={product} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
