"use client";

import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Create Your Story?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-lg"
        >
          Join thousands of parents bringing personalized adventures to life.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
}
