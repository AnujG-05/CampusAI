'use client'

import { motion } from 'framer-motion'
import { AISearchBar } from '@/components/ai-search-bar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

export function AnimatedHero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className="absolute -bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Main heading */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
          Discover Knowledge, Instantly
        </h1>
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance"
        >
          Unified AI-powered semantic search across all campus resources. Find exactly what you need in seconds.
        </motion.p>
      </motion.div>

      {/* Search Bar */}
      <motion.div variants={itemVariants} className="mb-16">
        <AISearchBar />
      </motion.div>

      {/* Trust indicators */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground border-t border-border pt-8"
      >
        {[
          'Trusted by 10,000+ students',
          '50+ course materials indexed',
          '<200ms response time',
        ].map((indicator, i) => (
          <motion.div
            key={indicator}
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-accent"
            />
            <span>{indicator}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
