'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from '@/sanity/lib/image'
import { allProducts } from "@/sanity/lib/query";
import Link from "next/link";
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2";

const Sofa = () => {

    const [product, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProduct() {
            const fetchProduct: Product[] = await client.fetch(allProducts);
            setProduct(fetchProduct);
        }
        fetchProduct()

    }, [])
    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        addToCart(product);
        Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: `${product.name} has been added to your cart!`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className='max-w-6xl mx-auto px-4 py-8 text-black'>
            <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((product) => (
                <div 
                key={product._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
                >
               <Link href={`/product/${product.slug.current}`}>
                {product.image && (
                    <Image
                    src={urlFor(product.image).url()}
                    alt="image"
                    width={200}
                    height={200}
                    className="w-full h-48 object-fill rounded-md"
                    />

                )}
                <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                <p className="text-gray-500 mt-2"> {product.price ? `$${product.price}` : "Price not available"}</p>
               
                {product.description}
                <br/>
              
                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) => handleAddToCart(e, product)}
                >Add to Cart</button>
            </Link>
                </div>

    )
)}
                </div>
                </div>
        )
}
export default Sofa;





