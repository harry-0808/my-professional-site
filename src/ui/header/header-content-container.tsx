"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants } from "@/consts";

export default function HeaderContentContainer() {
  return (
    <Container>
      <nav className="flex flex-col items-center justify-center py-10">
        <motion.h1
          className="text-center text-4xl font-bold mb-6"
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          variants={fadeUpAnimationVariants}
        >
          Spice Garden Restaurant
        </motion.h1>
        <motion.div
          className="flex space-x-6"
          whileInView="show"
          initial="hidden"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          variants={fadeUpAnimationVariants}
        >
          <Link href="/" className="hover:text-indigo-600 transition-colors px-3 py-1 rounded">
            Home
          </Link>
          <Link href="/menu" className="hover:text-indigo-600 transition-colors px-3 py-1 rounded">
            Menu
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors px-3 py-1 rounded">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors px-3 py-1 rounded">
            Contact
          </Link>
        </motion.div>
      </nav>
    </Container>
  );
}