"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah L.",
    text: "My kids absolutely love these personalized stories. It’s like magic every night!"
  },
  {
    name: "David R.",
    text: "I never imagined bedtime stories could be so creative and interactive."
  },
  {
    name: "Emily P.",
    text: "The customization options are incredible. We’ve made dozens of unique tales."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          What Parents Say
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <p className="italic mb-4 text-gray-700">"{t.text}"</p>
                  <p className="font-semibold text-gray-900">- {t.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
