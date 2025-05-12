'use client'

import { CheckCircle, Package, Truck } from "lucide-react"
import React from "react"

const features = [
  {
    icon: <CheckCircle size={32} className="text-[#FF6A28]" />,
    title: "Modern Design",
    desc: "Crafted with a focus on simplicity and elegance."
  },
  {
    icon: <Package size={32} className="text-[#FF6A28]" />,
    title: "Best Quality",
    desc: "We use only the finest materials for durability."
  },
  {
    icon: <Truck size={32} className="text-[#FF6A28]" />,
    title: "Free Shipping",
    desc: "Enjoy fast and free delivery on all orders."
  },
]

const FeatureSection = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-#2F241F text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        We care about details and the quality of our products
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Every piece is designed with attention to detail, ensuring the highest quality and comfort.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl shadow-md bg-[#F9F9F9]"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureSection
