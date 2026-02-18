'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/header'
import { SearchFilters } from '@/components/search-filters'
import { AnimatedSearchResult } from '@/components/animated-search-result'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, ArrowLeft } from 'lucide-react'

// Mock data - in a real app, this would come from an API
const mockResults = [
  {
    id: '1',
    title: 'Introduction to Quantum Mechanics - Lecture Series',
    description: 'Comprehensive lecture notes covering quantum mechanics fundamentals, wave functions, and Schrödinger equation with detailed explanations.',
    type: 'pdf' as const,
    relevanceScore: 98,
    tags: ['Physics', 'Quantum Mechanics', 'Lecture Notes'],
    source: 'Physics Department',
    date: '2 days ago',
    highlights: ['Schrödinger equation and quantum states discussed in detail'],
  },
  {
    id: '2',
    title: 'Advanced Organic Chemistry Lab Procedures',
    description: 'Step-by-step laboratory procedures for organic chemistry experiments including synthesis and characterization techniques.',
    type: 'pdf' as const,
    relevanceScore: 92,
    tags: ['Chemistry', 'Lab Procedures', 'Organic Chemistry'],
    source: 'Chemistry Department',
    date: '1 week ago',
    highlights: ['Detailed synthesis procedures and safety protocols'],
  },
  {
    id: '3',
    title: 'Machine Learning Fundamentals - Video Lecture',
    description: 'Complete video series on machine learning basics including supervised learning, neural networks, and classification algorithms.',
    type: 'video' as const,
    relevanceScore: 95,
    tags: ['AI/ML', 'Computer Science', 'Deep Learning'],
    source: 'CS Department',
    date: '3 days ago',
    highlights: ['Neural network architectures and training methods covered'],
  },
  {
    id: '4',
    title: 'Data Structures and Algorithms Presentation',
    description: 'PowerPoint presentation covering essential data structures, algorithm complexity analysis, and optimization techniques.',
    type: 'ppt' as const,
    relevanceScore: 88,
    tags: ['Computer Science', 'Algorithms', 'Data Structures'],
    source: 'CS Department',
    date: '1 week ago',
    highlights: ['Binary trees and search algorithms explained'],
  },
  {
    id: '5',
    title: 'Statistics in Research - Podcast Series',
    description: 'Audio podcast discussing statistical methods, hypothesis testing, and data analysis techniques for research projects.',
    type: 'audio' as const,
    relevanceScore: 85,
    tags: ['Statistics', 'Research Methods'],
    source: 'Research Institute',
    date: '4 days ago',
    highlights: ['P-values and significance testing discussed'],
  },
  {
    id: '6',
    title: 'Circuit Design Diagrams and Schematics',
    description: 'Collection of circuit diagrams, schematics, and visual representations of electronic circuits for reference.',
    type: 'image' as const,
    relevanceScore: 82,
    tags: ['Electronics', 'Engineering', 'Circuits'],
    source: 'Engineering Department',
    date: '2 weeks ago',
    highlights: ['Power supply and amplifier circuit designs'],
  },
]

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [filteredResults, setFilteredResults] = useState(mockResults)

  const handleFilterChange = (filters: any) => {
    // In a real app, this would filter the results from an API
    console.log('Filters applied:', filters)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to home */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>

        {/* Search header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-3xl font-bold text-foreground">Search Results</h1>
          </div>
          <p className="text-muted-foreground mb-6">
            {query && <span>Results for <span className="font-semibold text-foreground">"{query}"</span></span>}
            Found {filteredResults.length} resources
          </p>

          {/* New search bar */}
          <div className="relative max-w-2xl">
            <Input
              type="text"
              placeholder="Search across all campus resources..."
              defaultValue={query}
              className="pl-12 bg-card border-border"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Results with filters */}
        <div className="flex gap-8">
          {/* Filters sidebar */}
          <SearchFilters onFilterChange={handleFilterChange} />

          {/* Results grid */}
          <div className="flex-1">
            <div className="space-y-4">
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <a
                    key={result.id}
                    href={`/resource/${result.id}`}
                    className="block"
                  >
                    <AnimatedSearchResult index={index} {...result} />
                  </a>
                ))
              ) : (
                <div className="rounded-lg border border-border bg-card p-12 text-center">
                  <p className="text-muted-foreground text-lg">
                    No results found. Try refining your search or adjusting filters.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredResults.length > 0 && (
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button variant="outline" disabled>
                  ← Previous
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Page</span>
                  <span className="text-sm font-semibold text-foreground">1</span>
                </div>
                <Button variant="outline">
                  Next →
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}
