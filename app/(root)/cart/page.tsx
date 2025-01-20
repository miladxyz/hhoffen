"use client";

import useCart from "@/lib/hooks/useCart";

import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">سبد خرید</p>
        <hr className="my-6 border-[#46000C]" />

        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">سبد خرید خالی می‌باشد</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-[#E1DCCD] px-4 py-3 items-center max-sm:items-start justify-between">
                <div className="flex items-center justify-between gap-[100px]">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold">{cartItem.item.title}</p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    <p className="text-small-medium">{cartItem.item.price} تومان</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                <PlusCircle
                    className="hover:text-[#46000C] cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                  <p className="text-body-bold">{cartItem.quantity}</p>
                  <MinusCircle
                    className="hover:text-[#46000C] cursor-pointer"
                    onClick={() => cartItem.quantity > 1 && cart.decreaseQuantity(cartItem.item._id)}
                  />
                </div>

                <Trash
                  className="hover:text-[#46000C] cursor-pointer"
                  onClick={() => cart.removeItem(cartItem.item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-[#46000C] rounded-lg px-4 py-5 text-[#E1DCCD]">
        <p className="text-heading4-bold pb-4">
          صورتحساب{" "}
          <span>{`(${cart.cartItems.length} ${
            cart.cartItems.length > 1 ? "محصولات" : "محصول"
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>مجموع</span>
          <span>{totalRounded} تومان</span>
        </div>
        <button
          className="text-[black] hover:text-[#E1DCCD] border rounded-lg text-body-bold bg-[#E1DCCD] py-3 w-full hover:bg-[rgb(70,0,12)]"
          onClick={handleCheckout}
        >
          ادامه پرداخت
        </button>
      </div>
    </div>
  );
};

export default Cart;
