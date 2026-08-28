"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { menuItems } from "@/data/menuItems";

export default function MenuPage() {
  // Group items by category
  const categories = [...new Set(menuItems.map(item => item.category))];
  const grouped = categories.map(cat => ({
    category: cat,
    items: menuItems.filter(item => item.category === cat)
  }));

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-4xl font-bold text-center mb-10"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Our Menu
        </motion.h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map((group, index) => (
            <motion.section
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl p-6 shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-6 text-primary-600">
                {group.category}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map(item => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      {/* Price badge */}
                      <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                        ₹{item.price}
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-indigo-600 font-medium">₹{item.price}</span>
                        <motion.button
                          className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full hover:bg-primary-100 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          Order Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}