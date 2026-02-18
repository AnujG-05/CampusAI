'use client'

import { motion } from 'framer-motion'
import { FileText, Video, Headphones, Image as ImageIcon, Presentation } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'PDF Documents',
    description: 'Search lecture notes, textbooks, and research papers',
  },
  {
    icon: Video,
    title: 'Video Lectures',
    description: 'Find relevant lecture recordings and tutorials',
  },
  {
    icon: Headphones,
    title: 'Audio Content',
    description: 'Discover podcasts and audio materials',
  },
  {
    icon: ImageIcon,
    title: 'Images',
    description: 'Search through diagrams, charts, and visual resources',
  },
  {
    icon: Presentation,
    title: 'Presentations',
    description: 'Browse course slides and presentation materials',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
    },
  },
}

export function AnimatedFeatureCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
    >
      {features.map((feature) => {
        const Icon = feature.icon
        return (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            whileHover="hover"
            className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-background hover:border-accent hover:bg-secondary/50 transition-all cursor-pointer"
          >
            <motion.div
              className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="h-5 w-5 text-accent" />
            </motion.div>
            <h3 className="font-semibold text-foreground">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
