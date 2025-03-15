"use client"

import { motion } from "framer-motion"
import { CourseCard } from "@/components/course-card"
import type { Course } from "@/lib/data"

interface CourseListProps {
  courses: Course[]
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <>
      {courses.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <h3 className="text-xl font-medium">No courses found</h3>
          <p className="text-muted-foreground mt-2">Try adjusting your search criteria</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      )}
    </>
  )
}

