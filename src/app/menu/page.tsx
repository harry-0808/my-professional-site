"use client";

import { motion } from "framer-motion"? Actually correct import is from "framer-motion".

We need to write correct file.

Let's write:


<tool_call>
<function=write_file>
<parameter=content>
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
              className="bg-white rounded-lg p-6 shadow-sm transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.items.map(item => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-start space-x-4 p-3 border rounded hover:bg-gray-50 transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="font-semibold text-indigo-600">₹{item.price}</p>
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