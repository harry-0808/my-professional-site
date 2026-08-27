"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";

export default function HeroContentContainer() {
  return (
    <Container>
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
      >
        <motion.h1
          className="text-3xl font-bold uppercase md:text-5xl"
          variants={fadeUpAnimationVariants}
        >
          Spice Garden Restaurant
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-xl text-gray-600"
          variants={fadeUpAnimationVariants}
        >
          Authentic flavors, fresh ingredients, and a warm ambiance. Reserve your table today and enjoy a memorable dining experience.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all"
          variants={fadeUpAnimationVariants}
        >
          Make a Reservation
        </motion.button>
      </motion.div>
    </Container>
  );
}