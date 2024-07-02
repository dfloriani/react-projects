import React, { useEffect, useState } from 'react'
import ProductCard from "../../../components/Elements/ProductCard";
import { getFeaturedList } from '../../../services';
import {toast} from "react-toastify";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, {position: "bottom-center"});
      }
    }
    fetchProducts();
  }, [])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
            {products.map((product) => {
              return <ProductCard key={product.id} productInfo={product}/>
            })}
        </div>
    </section>
  )
}

export default FeaturedProducts
