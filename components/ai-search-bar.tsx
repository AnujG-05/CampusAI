'use client'

import { useState } from 'react'
import { Search, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AISearchBar() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div
          className={`relative transition-all duration-300 ${
            isFocused
              ? 'ring-2 ring-accent/50 ring-offset-0'
              : 'ring-1 ring-border'
          } rounded-full bg-card border border-border overflow-hidden`}
        >
          <div className="flex items-center px-6 py-4">
            <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <Input
              type="text"
              placeholder="Search across all campus resources... Ask anything about your studies"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="ml-4 border-0 bg-transparent focus:outline-none focus:ring-0 text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              size="sm"
              className="ml-2 gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
            >
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>

          {/* Animated gradient indicator */}
          {isFocused && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 via-transparent to-accent/10 pointer-events-none animate-pulse" />
          )}
        </div>
      </form>

      {/* Quick suggestions */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          'Organic Chemistry lecture notes',
          'Recent research papers on AI',
          'Linear Algebra problem sets',
        ].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setQuery(suggestion)
              window.location.href = `/search?q=${encodeURIComponent(suggestion)}`
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent hover:bg-secondary/50 transition-all text-sm text-muted-foreground hover:text-foreground group"
          >
            <span className="text-muted-foreground group-hover:text-accent">
              <ArrowRight className="h-4 w-4" />
            </span>
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
