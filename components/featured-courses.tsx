"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { courses } from "@/lib/data"

interface FeaturedCoursesProps {
  id?: string;
}

export function FeaturedCourses({id}: FeaturedCoursesProps) {
  const featuredCourses = courses.slice(0, 3)
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % featuredCourses.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + featuredCourses.length) % featuredCourses.length)
  }

  return (
    <section id={id} className="py-12">
      <div className="flex items-center justify-between mb-8">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Courses
        </motion.h2>

        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${activeIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {featuredCourses.map((course) => (
            <div key={course.id} className="min-w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative aspect-video rounded-xl overflow-hidden"
                  >
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                          {course.level}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <motion.h3
                    className="text-2xl font-bold mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {course.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {course.description}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src="https://i.ibb.co/8Ljg4VTC/image3.png"
                        alt={course.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{course.author}</div>
                      <div className="text-sm text-muted-foreground">Instructor</div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    {/* <div className="text-2xl font-bold">${course.price}</div> */}
                    <Button onClick={() => window.open(course.telegramLink, "_blank")} className="group">
                      Enroll Now
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-6 gap-2">
          {featuredCourses.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

