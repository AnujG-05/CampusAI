'use client'

import { motion } from 'framer-motion'
import { SearchResultCard } from '@/components/search-result-card'

interface AnimatedSearchResultProps {
  index: number
  [key: string]: any
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
    },
  },
}

export function AnimatedSearchResult({
  index,
  ...props
}: AnimatedSearchResultProps) {
  return (
    <motion.div
      key={props.id}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        delay: index * 0.1,
      }}
    >
      <SearchResultCard {...props} />
    </motion.div>
  )
}
