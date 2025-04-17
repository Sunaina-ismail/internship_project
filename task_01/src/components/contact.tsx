"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

   
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-background">
      <div className="container md:mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Contact Information
            </motion.h3>

            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">naina@example.com</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
  <h4 className="font-medium text-gray-800 dark:text-white mb-4">Follow Me</h4>
  <div className="flex space-x-4">
   
    <a
      href="https://www.linkedin.com/in/sunaina-ismail-7bb965334"
      className="bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 p-3 rounded-full transition-colors"
    >
      <svg
        className="h-5 w-5 text-gray-700 dark:text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
        2.761 2.239 5 5 5h14c2.761 0 5-2.239 
        5-5v-14c0-2.761-2.239-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.268c-.966 
        0-1.75-.79-1.75-1.764s.784-1.764 
        1.75-1.764 1.75.79 
        1.75 1.764-.784 1.764-1.75 
        1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.112-4 
        0v5.604h-3v-10h3v1.604c1.396-2.586 
        7-2.777 7 2.476v5.92z"/>
      </svg>
    </a>

    <a
      href="https://github.com/Sunaina-ismail"
      className="bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 p-3 rounded-full transition-colors"
    >
      <svg
        className="h-5 w-5 text-gray-700 dark:text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.58 2 12.15c0 4.45 2.865 8.2 
          6.84 9.51.5.09.682-.22.682-.48 
          0-.237-.01-.867-.015-1.703-2.782.61-3.37-1.343-3.37-1.343-.454-1.158-1.11-1.467-1.11-1.467-.91-.622.07-.61.07-.61 
          1.003.07 1.53 1.034 1.53 
          1.034.893 1.53 2.34 1.09 2.91.834.09-.65.35-1.09.637-1.34-2.22-.256-4.56-1.115-4.56-4.955 
          0-1.093.39-1.99 1.03-2.69-.104-.256-.447-1.273.098-2.65 
          0 0 .84-.27 2.75 1.025a9.478 9.478 
          0 0 1 5 0c1.91-1.296 2.75-1.025 
          2.75-1.025.546 1.377.202 2.394.098 
          2.65.64.7 1.03 1.597 1.03 2.69 0 
          3.85-2.34 4.695-4.57 4.95.36.31.68.92.68 
          1.857 0 1.34-.012 2.42-.012 
          2.75 0 .27.18.58.69.48A10.02 10.02 
          0 0 0 22 12.15C22 6.58 17.52 2 12 2z"
        />
      </svg>
    </a>

    <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 dark:hover:bg-primary/20 p-3 rounded-full transition-colors"
                >
                  <svg
                    className="h-5 w-5 text-gray-700 dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
  </div>
</motion.div>

          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Send Me a Message
            </motion.h3>

            <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px]"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
