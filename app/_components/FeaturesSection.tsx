"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Book, Share2, Palette } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Personalized Stories",
    description: "Every tale adapts to your child's name, age, and preferences."
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description: "Choose magical worlds, futuristic cities, or cozy bedtime vibes."
  },
  {
    icon: Book,
    title: "AI Customization",
    description: "Change plotlines, characters, or illustrations instantly."
  },
  {
    icon: Share2,
    title: "Export & Share",
    description: "Download as PDF or share directly with friends and family."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Features
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6 text-center">
                  <feature.icon className="mx-auto h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
