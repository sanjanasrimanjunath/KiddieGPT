"use client";

import { motion } from "framer-motion";
import { Lightbulb, Edit, Send } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Choose a Theme",
    description: "Select from a range of magical, adventurous, or futuristic worlds."
  },
  {
    icon: Edit,
    title: "Customize Your Story",
    description: "Add your child's name, preferences, and special details."
  },
  {
    icon: Send,
    title: "Get Your Story",
    description: "Download instantly or share directly with loved ones."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <step.icon className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
