import { FileText, Play, Headphones, Image as ImageIcon, Presentation, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { AnimatedRelevanceBadge } from '@/components/animated-relevance-badge'

interface SearchResultCardProps {
  id: string
  title: string
  description: string
  type: 'pdf' | 'video' | 'audio' | 'image' | 'ppt'
  relevanceScore: number
  tags: string[]
  source: string
  date: string
  highlights?: string[]
}

const typeConfig = {
  pdf: { icon: FileText, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950' },
  video: { icon: Play, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950' },
  audio: { icon: Headphones, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950' },
  image: { icon: ImageIcon, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-950' },
  ppt: { icon: Presentation, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950' },
}

export function SearchResultCard({ 
  id, 
  title, 
  description, 
  type, 
  relevanceScore, 
  tags, 
  source, 
  date,
  highlights 
}: SearchResultCardProps) {
  const config = typeConfig[type]
  const Icon = config.icon

  // Determine relevance color
  const getRelevanceColor = (score: number) => {
    if (score >= 95) return 'text-green-600 dark:text-green-400'
    if (score >= 85) return 'text-blue-600 dark:text-blue-400'
    if (score >= 75) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-muted-foreground'
  }

  return (
    <article className="group rounded-lg border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all p-6 cursor-pointer">
      <div className="flex gap-4">
        {/* Icon */}
        <div className={`flex-shrink-0 h-12 w-12 rounded-lg ${config.bg} flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${config.color}`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header with relevance score */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
              {title}
            </h3>
            <div className="flex-shrink-0">
              <AnimatedRelevanceBadge score={relevanceScore} />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mb-3 p-2 bg-secondary/30 rounded border border-border/50 text-xs text-muted-foreground line-clamp-1">
              <span className="font-semibold text-foreground">Match: </span>
              {highlights[0]}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Meta information */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>{source}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
          </div>
        </div>
      </div>
    </article>
  )
}
