"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    role: "Frontend Developer",
    company: "TechCorp",
    content:
      "The React Mastery course completely transformed my career. I went from struggling with basic concepts to confidently building complex applications in just a few months.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Emily Johnson",
    role: "Full Stack Engineer",
    company: "StartupX",
    content:
      "The Node.js Backend Development course was exactly what I needed to round out my skills. The instructor's explanations were clear and the projects were challenging but achievable.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Kunal Singh",
    role: "Junior Developer",
    company: "CodeWorks",
    content:
      "As someone with no prior experience, the Web Development Fundamentals course provided the perfect foundation. I'm now employed as a junior developer thanks to this course!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">What Our Menber Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from developers who have taken our courses and transformed their careers at cheap prices.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Card className="border-2 border-primary/10 bg-gradient-to-b from-muted/50 to-background">
              <CardContent className="pt-10 pb-10">
                <Quote className="h-12 w-12 text-primary/20 absolute top-6 left-6" />

                <div className="text-xl italic mb-8 relative z-10 px-8">&quot;{testimonials[activeIndex].content}&quot;</div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-muted">
                    <Image
                      src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonials[activeIndex].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full absolute top-1/2 -left-5 transform -translate-y-1/2 bg-background shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full absolute top-1/2 -right-5 transform -translate-y-1/2 bg-background shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

