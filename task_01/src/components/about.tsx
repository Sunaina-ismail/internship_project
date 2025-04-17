"use client";

import { motion } from "framer-motion";
import {
  Code,
  GitBranch,
  Figma,
  Database,
  Braces,
  PenTool,
  Github,
} from "lucide-react";
import Image from "next/image";

const skills = [
  { name: "HTML/CSS", icon: <PenTool className="h-6 w-6" />, level: 90 },
  { name: "TypeScript", icon: <Code className="h-6 w-6" />, level: 95 },
  { name: "React", icon: <Braces className="h-6 w-6" />, level: 88 },
  { name: "Next.js", icon: <Braces className="h-6 w-6" />, level: 90 },
  { name: "Github", icon: <Github className="h-6 w-6" />, level: 80 },
  { name: "Figma", icon: <Figma className="h-6 w-6" />, level: 50 },
  { name: "Sanity", icon: <Database className="h-6 w-6" />, level: 60 },
  { name: "Python", icon: <Code className="h-6 w-6" />, level: 60 },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <section id="about" className="py-10 bg-white dark:bg-background">
      <div className="container md:mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              About <span className="text-primary">Me</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              I'm a passionate full stack developer skilled in building modern,
              scalable, and responsive web applications. With a solid grasp of
              both front-end and back-end technologies, I bring ideas to life
              with clean code, functional design, and performance in mind.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              My journey began with HTML and CSS, later growing into powerful
              frameworks like React and Next.js on the front end, and now
              expanding with backend tools and languages like Node.js and Python
              to strengthen my full stack development expertise.
            </motion.p>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
            >
              My Skills
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-2">
                    <div className="mr-3 text-primary">{skill.icon}</div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>

                  <motion.div
                    className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <div className="bg-primary h-2.5 rounded-full"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-me.avif"
                alt="Coding workspace"
                width={700}
                height={400}
                className="object-cover w-full md:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent mix-blend-multiply"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
