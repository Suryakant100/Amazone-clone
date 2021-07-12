import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  // console.log(products);

  return (
    <div className=" grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, category, description, image }) => {
          return (
            <>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            </>
          );
        })}

      <img
        className="md:col-span-full bg-contain"
        src="https://links.papareact.com/dyz"
        alt="offer"
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, category, description, image }) => {
            return (
              <>
                <Product
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                />
              </>
            );
          })}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, category, description, image }) => {
          return (
            <>
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            </>
          );
        })}
    </div>
  );
}

export default ProductFeed;
