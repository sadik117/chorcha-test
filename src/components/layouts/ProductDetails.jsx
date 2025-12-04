import React, { useState } from "react";
import { Star, Minus, Plus, Truck, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const productImages = [
    "../../assets/shoe-logo.png",
    "../../assets/shoe-logo.png",
    "../../assets/shoe-logo.png",
    "../../assets/shoe-logo.png",
  ];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ========== LEFT IMAGE SECTION ========== */}
        <div className="lg:col-span-1">
          <div className="border rounded-xl p-4 flex items-center justify-center bg-white">
            <img src={selectedImage} alt="Product" className="w-full h-auto" />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-24 border rounded-xl cursor-pointer flex items-center justify-center ${
                  selectedImage === img ? "border-green-600" : "border-gray-300"
                }`}
              >
                <img src={img} alt="" className="w-full h-auto rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* ========== MIDDLE PRODUCT INFO ========== */}
        <div className="lg:col-span-1">
          <p className="text-sm text-gray-500 mb-2">
            Outfit › Shoe & Slippers
          </p>

          <h1 className="text-2xl font-bold">Adidas Samba</h1>

          <div className="flex items-center gap-1 text-yellow-500 mt-1">
            <Star size={18} fill="gold" />
            <span className="text-sm text-green-600">4.5/5</span>
            <span className="text-gray-500 text-sm">(459 reviews)</span>
          </div>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Originally A Soccer Trainer, The Adidas Samba Has Evolved Into A
            Streetwear Icon Known For Its Classic Low-Profile Silhouette...
          </p>

          {/* Color Selector */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-2 flex-wrap">
              {["Red", "Green", "Blue", "Pink", "Black", "White"].map((c) => (
                <button
                  key={c}
                  className="px-4 py-2 border rounded-full hover:bg-green-700 hover:text-white transition"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex gap-2 flex-wrap">
              {["S", "M", "L", "XL", "XXL", "XXXL"].map((s) => (
                <button
                  key={s}
                  className="px-4 py-2 border rounded-full hover:bg-green-700 hover:text-white transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Variant Selector */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Variant</h3>
            <div className="flex gap-2 flex-wrap">
              {["USA", "SG/UAE", "China", "India"].map((v) => (
                <button
                  key={v}
                  className="px-4 py-2 border rounded-full hover:bg-green-700 hover:text-white transition"
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Price + Quantity + Buttons */}
          <div className="mt-8">
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-green-700">$35.56</span>
              <span className="line-through text-gray-400">$36.80</span>
            </div>

            <div className="flex items-center gap-6 mt-5">

              {/* Quantity */}
              <div className="flex items-center gap-4 border rounded-2xl px-4 py-2">
                <Minus
                  className="cursor-pointer"
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                />
                <span>{quantity}</span>
                <Plus
                  className="cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>

              {/* Add to Cart */}
              <button className="flex items-center gap-2 bg-white border border-green-600 px-4 py-2 rounded-2xl text-green-700 font-semibold hover:bg-green-700 hover:text-white transition">
                + Add to Cart
              </button>

              {/* Buy Now */}
              <Link to="/checkout" className=
              "bg-green-700 text-white px-4 py-2 rounded-2xl font-semibold hover:bg-green-800">
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        {/* ========== RIGHT INFO BOX ========== */}
        <div className="lg:col-span-1">
          <div className="border bg-gray-50 rounded-xl p-6 space-y-6">

            {/* Delivery Info */}
            <div>
              <h3 className="font-semibold mb-2">Delivery Information</h3>

              <div className="flex items-center gap-3 text-gray-700 mt-2">
                <Truck size={18} className="text-green-600" />
                Delivery Fee: 70tk
              </div>

              <div className="flex items-center gap-3 text-gray-700 mt-2">
                <Truck size={18} className="text-green-600" />
                Estimate: 0–3 days
              </div>

              <div className="flex items-center gap-3 text-gray-700 mt-2">
                <Truck size={18} className="text-green-600" />
                Cash on Delivery Available
              </div>
            </div>

            {/* Warranty */}
            <div>
              <h3 className="font-semibold mb-2">Policy & Warranty</h3>

              <div className="flex items-center gap-3 text-gray-700 mt-2">
                <ShieldCheck size={18} className="text-green-600" />
                No Question Warranty (7 Days)
              </div>

              <div className="flex items-center gap-3 text-gray-700 mt-2">
                <ShieldCheck size={18} className="text-green-600" />
                Insurance: 6 Months
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
