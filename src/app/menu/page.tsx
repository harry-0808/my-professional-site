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
    <>
      {/* Hero Section */}
      <motion.section
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative h-96 bg-gradient-to-r from-primary-600/90 to-primary-800/90 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-white">
          <motion.h1
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mb-4 text-5xl font-bold drop-shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Exquisite Menu
          </motion.h1>
          <motion.p
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mb-6 text-lg max-w-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Authentic Indian cuisine crafted with fresh ingredients, aromatic spices, and culinary passion.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/30 transition-all"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/contact" className="text-white font-medium">
              Make a Reservation →
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Menu Description */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mx-auto max-w-7xl px-6 py-12 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          A Culinary Journey Through India
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our diverse menu featuring regional specialties, timeless classics, and innovative creations.
          Each dish is prepared with the finest ingredients and served with warm hospitality.
        </p>
      </motion.div>

      {/* Menu Categories */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mx-auto max-w-7xl px-6 pb-16"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map((group, index) => (
            <motion.section
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-8 shadow-xl transition-all border border-gray-100 hover:border-primary-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <motion.h2
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-3xl font-bold text-center text-primary-600"
                >
                  {group.category}
                </motion.h2>
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    whileTap={{ rotate: 0 }}
                    className="text-primary-600 text-2xl"
                  >
                    🍽️
                  </motion.div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  >
                    {/* Image Container */}
                    <div className="relative group">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Price Badge */}
                      <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow">
                        ₹{item.price}
                      </div>
                      {/* Favorite Icon (placeholder) */}
                      <div className="absolute top-3 left-3 text-primary-500 hover:text-primary-600 text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                        ♡
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <motion.h3
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="font-semibold text-lg text-gray-900 flex-1"
                        >
                          {item.name}
                        </motion.h3>
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-indigo-600 font-medium px-3 py-1 bg-indigo-50 rounded-full text-sm"
                        >
                          ₹{item.price}
                        </motion.span>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex justify-end">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors transform"
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
      </motion.div>

      {/* Call to Action */}
      <motion.section
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative h-96 bg-gradient-to-r from-primary-50 to-primary-100 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <motion.h2
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mb-4 text-3xl font-bold text-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to Feast?
          </motion.h2>
          <motion.p
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mb-6 text-lg max-w-xl text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Reserve your table today and embark on a memorable dining experience.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/contact" className="font-medium">
              Make a Reservation →
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}