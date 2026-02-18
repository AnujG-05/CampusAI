'use client'

import { useState } from 'react'
import { ChevronDown, FileText, Video, Headphones, Image as ImageIcon, Presentation, Clock, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contentTypes = [
  { id: 'pdf', label: 'PDF Documents', icon: FileText },
  { id: 'video', label: 'Videos', icon: Video },
  { id: 'audio', label: 'Audio', icon: Headphones },
  { id: 'image', label: 'Images', icon: ImageIcon },
  { id: 'ppt', label: 'Presentations', icon: Presentation },
]

const timeFilters = [
  { id: 'week', label: 'Last Week' },
  { id: 'month', label: 'Last Month' },
  { id: 'year', label: 'Last Year' },
  { id: 'all', label: 'All Time' },
]

interface SearchFiltersProps {
  onFilterChange?: (filters: any) => void
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    contentType: true,
    time: false,
    relevance: false,
  })

  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState('all')
  const [sortBy, setSortBy] = useState('relevance')

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleTypeChange = (typeId: string) => {
    const newTypes = selectedTypes.includes(typeId)
      ? selectedTypes.filter((t) => t !== typeId)
      : [...selectedTypes, typeId]
    setSelectedTypes(newTypes)
    onFilterChange?.({ types: newTypes, time: selectedTime, sortBy })
  }

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-20 space-y-6">
        {/* Content Type Filter */}
        <div className="rounded-lg border border-border bg-card p-4">
          <button
            onClick={() => toggleSection('contentType')}
            className="flex w-full items-center justify-between gap-2 font-semibold text-foreground"
          >
            <span>Content Type</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedSections.contentType ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSections.contentType && (
            <div className="mt-4 space-y-3">
              {contentTypes.map((type) => {
                const Icon = type.icon
                return (
                  <label key={type.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type.id)}
                      onChange={() => handleTypeChange(type.id)}
                      className="h-4 w-4 rounded border border-border bg-background checked:bg-accent checked:border-accent accent-accent"
                    />
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{type.label}</span>
                  </label>
                )
              })}
            </div>
          )}
        </div>

        {/* Time Filter */}
        <div className="rounded-lg border border-border bg-card p-4">
          <button
            onClick={() => toggleSection('time')}
            className="flex w-full items-center justify-between gap-2 font-semibold text-foreground"
          >
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              When
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedSections.time ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSections.time && (
            <div className="mt-4 space-y-2">
              {timeFilters.map((time) => (
                <label key={time.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value={time.id}
                    checked={selectedTime === time.id}
                    onChange={(e) => {
                      setSelectedTime(e.target.value)
                      onFilterChange?.({ types: selectedTypes, time: e.target.value, sortBy })
                    }}
                    className="h-4 w-4 accent-accent"
                  />
                  <span className="text-sm text-foreground">{time.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sort By */}
        <div className="rounded-lg border border-border bg-card p-4">
          <button
            onClick={() => toggleSection('relevance')}
            className="flex w-full items-center justify-between gap-2 font-semibold text-foreground"
          >
            <span className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Sort By
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedSections.relevance ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSections.relevance && (
            <div className="mt-4 space-y-2">
              {[
                { id: 'relevance', label: 'AI Relevance Score' },
                { id: 'recent', label: 'Most Recent' },
                { id: 'popular', label: 'Most Popular' },
              ].map((sort) => (
                <label key={sort.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="sort"
                    value={sort.id}
                    checked={sortBy === sort.id}
                    onChange={(e) => {
                      setSortBy(e.target.value)
                      onFilterChange?.({ types: selectedTypes, time: selectedTime, sortBy: e.target.value })
                    }}
                    className="h-4 w-4 accent-accent"
                  />
                  <span className="text-sm text-foreground">{sort.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {(selectedTypes.length > 0 || selectedTime !== 'all' || sortBy !== 'relevance') && (
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setSelectedTypes([])
              setSelectedTime('all')
              setSortBy('relevance')
              onFilterChange?.({ types: [], time: 'all', sortBy: 'relevance' })
            }}
          >
            Clear All Filters
          </Button>
        )}
      </div>
    </aside>
  )
}
