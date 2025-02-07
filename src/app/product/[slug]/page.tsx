
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface ProductPageProps{
    params : Promise <{slug : string}>
}
async function getProduct(slug : string) : Promise<Product> {

return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    _type,
    image,
    price,
    description,
    slug,
    inventory,
    }`,
    {slug}
)
}
export default async function ProductPage({params} : ProductPageProps){
const {slug} = await params;
const product = await getProduct(slug);


return(
    <div className="max-w-7xl mx-auto px-4 mt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
            {product?.image && (
                <img 
                src={urlFor(product.image).url()} 
                alt={product.name} 
                width={300}
                height={300}
                className="w-full h-full object-cover" />
            )}

        </div>
        <div className="flex flex-col gap-8 mt-10">
            <h1 className="text-4xl font-bold">{product?.name}</h1>
            <p className="text-2xl">
            {product.price}
            </p>
            <p className="text-2xl">
            {product.description}
            </p>
    <Link href="/shopnow">
            <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out">Add to Cart</button></Link>
        </div>
    </div>
    </div>
)

}