"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-background to-muted/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 w-72 h-72"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10 + Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">
                  Premium Developer Education
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Level Up Your <span className="text-primary">Coding Skills</span>{" "}
              With Expert-Led Courses
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Apex Courses provides premium, industry-relevant programming
              courses designed to transform beginners into professionals and
              help experienced developers master new technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
                <Button size="lg" className="group" onClick={() => window.location.href = "https://t.me/+vPSMryVZqHFjNzll"}>
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {/* <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=32&width=32&text=${i + 1}`}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div> */}
              {/* <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">2,500+</span> developers enrolled
              </div> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 bg-primary/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-primary/20 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="font-medium">Real-world projects</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-primary/20 z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-medium">Expert instructors</span>
                </div>
              </motion.div>

              <motion.div
                className="rounded-xl overflow-hidden border-8 border-muted shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.ibb.co/fV8LpH5P/Screenshot-From-2025-03-14-23-42-40.png"
                  alt="Developer learning"
                  className="w-full h-full object-cover"
                  width={500} 
                  height={500}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
