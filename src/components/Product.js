import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";

const max_rating = 5;
const min_rating = 1;

const Product = ({ id, title, price, category, description, image }) => {
  const [rating] = useState(
    //   generating the random no between 1 to 5
    Math.floor(Math.random() * (max_rating - min_rating + 1) + min_rating)
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-sm italic text-gray-500 capitalize">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3 text-center font-bold">{title}</h4>

      {/* This id tricky for generating of Star */}

      <div className="flex ">
        {Array(rating)
          .fill()
          .map(() => (
            <StarIcon className="h-4 text-yellow-500 " />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="inr" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="prime_logo"
          />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className=" btn">Add to Cart</button>
    </div>
  );
};

export default Product;
