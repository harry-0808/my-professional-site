"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";

export default function HeroContentContainer() {
  return (
    <Container className="relative">
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-bounce-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }} />
      </motion.div>

      <motion.div
        className="relative text-center py-20 md:py-32"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
      >
        {/* Badge */}
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6"
          variants={fadeUpAnimationVariants}
          whileHover={{ scale: 1.05 }}
        >
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          Est. 2024 • Authentic Indian Cuisine
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 hero-gradient-text"
          variants={fadeUpAnimationVariants}
        >
          Spice Garden
          <br />
          <span className="text-primary-600">Restaurant</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          variants={fadeUpAnimationVariants}
        >
          Experience authentic flavors crafted with passion. Fresh ingredients,
          traditional recipes, and warm hospitality await you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          variants={fadeUpAnimationVariants}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Reserve a Table
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Menu
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={fadeUpAnimationVariants}
        >
          <div className="text-center">
            <motion.div
              className="text-3xl md:text-4xl font-bold text-primary-600 mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              50+
            </motion.div>
            <div className="text-sm text-gray-600">Signature Dishes</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl md:text-4xl font-bold text-primary-600 mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            >
              15+
            </motion.div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl md:text-4xl font-bold text-primary-600 mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            >
              10+
            </motion.div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl md:text-4xl font-bold text-primary-600 mb-1"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            >
              500+
            </motion.div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <motion.div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}