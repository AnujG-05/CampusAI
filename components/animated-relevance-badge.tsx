'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

interface AnimatedRelevanceBadgeProps {
  score: number
}

export function AnimatedRelevanceBadge({ score }: AnimatedRelevanceBadgeProps) {
  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 95) return 'text-green-600 dark:text-green-400'
    if (score >= 85) return 'text-blue-600 dark:text-blue-400'
    if (score >= 75) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-muted-foreground'
  }

  const getBarColor = (score: number) => {
    if (score >= 95) return 'bg-green-600 dark:bg-green-400'
    if (score >= 85) return 'bg-blue-600 dark:bg-blue-400'
    if (score >= 75) return 'bg-yellow-600 dark:bg-yellow-400'
    return 'bg-muted-foreground'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/30"
    >
      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Zap className="h-3 w-3 text-accent" />
      </motion.div>

      {/* Animated score number */}
      <motion.span
        className={`text-sm font-semibold ${getColor(score)}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {score}%
      </motion.span>

      {/* Subtle background bar animation */}
      <motion.div
        className={`ml-1 h-1 rounded-full ${getBarColor(score)}`}
        initial={{ width: 0 }}
        animate={{ width: `${score / 100 * 24}px` }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      />
    </motion.div>
  )
}
