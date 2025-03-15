"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Play, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Course } from "@/lib/data"

interface CourseCardProps {
  course: Course
  index: number
}

export function CourseCard({ course, index }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary transition-all duration-300 group">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
            <Badge variant="outline" className="ml-2">
              {course.level}
            </Badge>
          </div>
          <CardDescription className="text-sm text-muted-foreground">{course.author}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />

            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <Button size="icon" variant="secondary" className="rounded-full">
                <Play className="h-5 w-5" />
              </Button>
            </motion.div>

            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs font-medium flex items-center">
              <Star className="h-3 w-3 text-yellow-500 mr-1 fill-yellow-500" />
              4.8
            </div>
          </div>

          <p className="text-sm mb-4">{course.description}</p>

          {/* <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>1.2k students</span>
            </div>
            <div>
              <span>12 modules</span>
            </div>
            <div>
              <span>6 hours</span>
            </div>
          </div> */}

          <div className="flex flex-wrap gap-2 mt-2">
            {course.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center border-t pt-4">
          {/* <div className="font-bold text-lg">${course.price}</div> */}
          <Button onClick={() => window.open(course.telegramLink, "_blank")} className="group">
            Buy Course
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

