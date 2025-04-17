"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "NIKE E-Commerce Website",
    description:
      "A full-featured online store built with Next.js, TypeScript, and Sanity CMS. Includes product listings, cart functionality, and secure checkout.",
    image: "/hac.PNG",
    tags: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],
    liveUrl: "https://hackathon-project-rho-khaki.vercel.app/",
    githubUrl: "https://github.com/Sunaina-ismail/hackathon-project",
  },

  {
    id: 2,
    title: "Glow Giver – Skincare Blog Website",
    description:
      "A clean and modern skincare blog built with Next.js and Tailwind CSS. Features product reviews, beauty tips, and a responsive design for smooth reading on all devices.",
    image: "/blog.PNG",
    tags: ["Next.js", "Tailwind CSS", "Blog", "Responsive Design"],
    liveUrl: "https://milestone-3-blog-smoky.vercel.app/",
    githubUrl: "https://github.com/Sunaina-ismail/milestone-3-blog",
  },

  {
    id: 4,
    title: "PurePlates – Food Website",
    description:
      "A visually appealing and responsive food website created using pure HTML and CSS. Showcases healthy meals, delicious recipes, and a clean layout for food lovers.",
    image: "/food.PNG",
    tags: ["HTML", "CSS", "Responsive Design"],
    liveUrl: "https://food-website-five-mu.vercel.app/",
    githubUrl: "https://github.com/Sunaina-ismail/food-website",
  },

  {
    id: 5,
    title: "Nike Admin Dashboard",
    description:
      "A modern admin dashboard for managing products on a Nike-style e-commerce platform. Built with Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI. Features include CRUD operations, stock tracking, search functionality, Clerk authentication, and seamless integration with Sanity CMS.",
    image: "/dash.PNG",
    tags: [
      "Next.js",
      "TypeScript",
      "Sanity",
      "Tailwind CSS",
      "ShadCN",
      "Clerk Auth",
    ],
    liveUrl: "https://nike-dashboard-sigma.vercel.app/",
    githubUrl: "https://github.com/Sunaina-ismail/nike-dashboard",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container md:mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="overflow-hidden h-full border border-transparent hover:border-primary hover:shadow-[0_0_20px_#5eead4] transition-all duration-300 dark:bg-gray-800 shadow-md">

                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
