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
          ताज़ा पौधे & बर्तन
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-xl text-gray-600"
          variants={fadeUpAnimationVariants}
        >
          हर पौधा सावधानी से चुना गया, हर बर्तन स्टाइलिश और टिकाऊ। आज ही ऑर्डर करें और अपने स्थान को हरित बनाइए!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all"
          variants={fadeUpAnimationVariants}
        >
          अब खरीदें
        </motion.button>
      </motion.div>
    </Container>
  );
}