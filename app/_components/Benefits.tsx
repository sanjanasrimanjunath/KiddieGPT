// app/_components/Benefits.tsx
"use client";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefits = [
    { title: "Boosts Creativity", description: "Encourages imaginative thinking and storytelling." },
    { title: "Enhances Literacy", description: "Supports reading comprehension and vocabulary growth." },
    { title: "Engages Emotionally", description: "Creates personal connections through customized stories." },
    { title: "Accessible Anywhere", description: "Read or share stories anytime on any device." }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Benefits of Our Platform
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
