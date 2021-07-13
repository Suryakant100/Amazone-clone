import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/basketSlice";

const CheckoutPro = ({
  id,
  title,
  price,
  rating,
  category,
  description,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();
  const addItemsToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      category,
      description,
      image,
      hasPrime,
    };
    dispatch(addToCart(product));
  };

  const removeItemsToCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5 max-w-7xl ">
      <Image src={image} width={200} height={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="inr" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-sm text-gray-500 -mt-1">
              Free Next-Day Dilevery
            </p>
          </div>
        )}
      </div>
      {/* Right add/remove btn */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end col-span-1 ">
        <button className="btn" onClick={addItemsToCart}>
          Add to cart
        </button>
        <button onClick={removeItemsToCart} className="btn">
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutPro;
