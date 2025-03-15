"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { CourseList } from "@/components/course-list"
import { courses } from "@/lib/data"
import { ThemeProvider } from "@/components/theme-provider"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCourses } from "@/components/featured-courses"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <ThemeProvider defaultTheme="dark" storageKey="dev-courses-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header title="Apex Courses" onSearch={setSearchQuery} searchQuery={searchQuery} />

        <HeroSection  />

        <main className="container mx-auto px-4 py-8">
        <FeaturedCourses id="featured-courses" />

          <h2 className="text-3xl font-bold mb-8 text-center mt-16">All Courses</h2>
          <CourseList courses={filteredCourses} />

          <Testimonials />

          <Newsletter />
        </main>

        <footer className="py-12 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Apex Courses</h3>
                <p className="text-muted-foreground">
                  Elevating developers through premium, industry-relevant courses.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#featured-courses" className="text-muted-foreground hover:text-primary transition-colors">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Categories</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Frontend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Backend
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Full Stack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
              © {new Date().getFullYear()} Apex Courses. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

