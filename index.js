import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Dancing Cactus Toy",
    price: 799,
    image: "/images/cactus.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Remote Control Car",
    price: 1299,
    image: "/images/rc-car.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "DIY Science Kit",
    price: 499,
    image: "/images/science-kit.jpg",
    rating: 4.6,
  },
];

export default function ToyWorld() {
  return (
    <div className="min-h-screen bg-white p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-pink-600">ToyWorld</h1>
        <p className="text-gray-500">Exciting Toys Delivered to Your Doorstep</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-pink-600 font-bold text-lg">₹{product.price}</p>
              <div className="flex items-center text-yellow-500 mb-2">
                <Star className="h-4 w-4 mr-1" /> {product.rating}
              </div>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white mt-2">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <footer className="mt-10 text-center text-gray-400 text-sm">
        © 2025 ToyWorld. All rights reserved.
      </footer>
    </div>
  );
}