"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";

export default function AboutPage() {
  return (
    <Container>
      <main className="min-h-screen bg-gray-50 py-12 md:py-20">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            About Spice Garden
          </motion.h1>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                  alt="Restaurant interior"
                  className="w-full h-48 md:h-96 object-cover rounded-lg shadow-xl"
                />
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Spice Garden Restaurant brings the authentic flavors of India to your table. Our chefs use traditional recipes and fresh, locally sourced ingredients to create dishes that are both comforting and exciting.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Established in 2024, we have quickly become a favorite destination for families, couples, and food enthusiasts seeking a memorable dining experience. Our warm ambiance, attentive service, and commitment to quality make every visit special.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Whether you're craving classic butter chicken, exploring regional specialties, or enjoying our freshly baked naan, Spice Garden promises a culinary journey that celebrates the rich diversity of Indian cuisine.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-6 text-primary-600"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Our Values
              </motion.h2>
              <motion.div
                className="space-y-3"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-start space-x-3 p-4 border-l-4 border-primary-500 bg-primary-50 rounded-lg"
                  variants={fadeUpAnimationVariants}
                  whileHover={{ x: 8, boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800">Quality Ingredients</h3>
                    <p className="text-sm text-gray-600">
                      We source the freshest produce, finest spices, and highest quality meats and dairy.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-3 p-4 border-l-4 border-primary-500 bg-primary-50 rounded-lg"
                  variants={fadeUpAnimationVariants}
                  whileHover={{ x: 8, boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 20H1a2 2 0 01-2-2V6a2 2 0 012-2h2.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800">Authentic Flavors</h3>
                    <p className="text-sm text-gray-600">
                      Our recipes are passed down through generations, ensuring genuine taste and aroma.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-3 p-4 border-l-4 border-primary-500 bg-primary-50 rounded-lg"
                  variants={fadeUpAnimationVariants}
                  whileHover={{ x: 8, boxShadow: "0 4px 20px rgba(99, 102, 241, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H3m8 4H3m8 4H3m11-8H9m8 4h-5m8 4h-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-800">Warm Hospitality</h3>
                    <p className="text-sm text-gray-600">
                      Our friendly staff treats every guest like family, ensuring a welcoming atmosphere.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/menu" className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium transition-all inline-block">
                  View Our Menu
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </Container>
  );
}