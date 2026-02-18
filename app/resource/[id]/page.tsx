'use client'

import { Header } from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, ArrowLeft, Download, Share2, Bookmark, Eye, Clock, User, Tag } from 'lucide-react'

export default function ResourceDetail({ params }: { params: { id: string } }) {
  const resource = {
    id: params.id,
    title: 'Introduction to Quantum Mechanics - Lecture Series',
    type: 'PDF',
    source: 'Physics Department',
    author: 'Prof. John Smith',
    date: '2 days ago',
    views: 2450,
    relevanceScore: 98,
    tags: ['Physics', 'Quantum Mechanics', 'Lecture Notes', 'Advanced'],
    description:
      'Comprehensive lecture notes covering quantum mechanics fundamentals, wave functions, and Schrödinger equation with detailed explanations and practice problems.',
    fullContent: `
      ## Chapter 1: Introduction to Quantum Mechanics
      
      Quantum mechanics is the branch of physics that deals with the behavior of matter and energy at the atomic and subatomic level. Unlike classical mechanics, which describes the motion of macroscopic objects, quantum mechanics governs the behavior of electrons, photons, and other fundamental particles.
      
      ### Key Concepts:
      - Wave-particle duality
      - Superposition principle
      - Quantum entanglement
      - Uncertainty principle
      
      ## Chapter 2: Wave Functions and Schrödinger Equation
      
      The wave function (ψ) is a mathematical representation of the quantum state of a system. The time-dependent Schrödinger equation describes how the wave function evolves over time:
      
      iℏ ∂ψ/∂t = -ℏ²/2m ∇²ψ + V(r)ψ
      
      Where:
      - ℏ is the reduced Planck constant
      - m is the mass of the particle
      - V(r) is the potential energy
      
      ## Chapter 3: Quantum Operators and Observables
      
      In quantum mechanics, physical observables are represented by operators. The eigenvalues of these operators correspond to the possible measurement outcomes.
    `,
    highlights: [
      'Schrödinger equation explained with real-world examples',
      'Wave function properties and normalization conditions',
      'Quantum superposition and measurement collapse',
      'Energy eigenvalues for particle in a box',
    ],
    relatedResources: [
      {
        id: '2',
        title: 'Advanced Quantum Field Theory',
        type: 'PDF',
        relevance: 92,
      },
      {
        id: '3',
        title: 'Quantum Computing Basics',
        type: 'Video',
        relevance: 88,
      },
      {
        id: '4',
        title: 'Mathematical Methods in Physics',
        type: 'PPT',
        relevance: 85,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <a
            href="/search?q=quantum"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to search results
          </a>
        </div>

        {/* Main content */}
        <article className="space-y-8">
          {/* Header section */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-red-50 dark:bg-red-950 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight text-balance">
                  {resource.title}
                </h1>

                <p className="text-lg text-muted-foreground mb-6">
                  {resource.description}
                </p>

                {/* Meta information */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-card rounded-lg border border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Source</div>
                    <div className="text-sm font-semibold text-foreground">{resource.source}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Author</div>
                    <div className="text-sm font-semibold text-foreground">{resource.author}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Published</div>
                    <div className="text-sm font-semibold text-foreground">{resource.date}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">AI Relevance</div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {resource.relevanceScore}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex-shrink-0 flex flex-col gap-2 w-full sm:w-auto">
                <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                <Button variant="outline" className="gap-2 w-full">
                  <Bookmark className="h-4 w-4" />
                  <span className="hidden sm:inline">Save</span>
                </Button>
                <Button variant="outline" className="gap-2 w-full">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-b border-border py-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{resource.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{resource.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{resource.author}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Tag className="h-4 w-4" />
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/search?q=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 rounded-full bg-secondary hover:bg-accent/20 text-sm font-medium text-foreground transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Content preview */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Content Preview</h2>
            <div className="prose prose-invert max-w-none text-foreground text-sm leading-relaxed">
              {resource.fullContent.split('\n\n').map((paragraph, i) => (
                <p key={i} className={i > 2 ? 'line-clamp-2' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Full Content
            </Button>
          </div>

          {/* Key Highlights */}
          <div className="rounded-lg border border-border bg-secondary/30 p-6 space-y-4">
            <h2 className="text-lg font-bold text-foreground">AI-Extracted Highlights</h2>
            <ul className="space-y-3">
              {resource.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Resources */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Related Resources</h2>
            <div className="grid gap-4">
              {resource.relatedResources.map((item) => (
                <a
                  key={item.id}
                  href={`/resource/${item.id}`}
                  className="group flex items-start justify-between p-4 rounded-lg border border-border bg-card hover:border-accent hover:bg-secondary/50 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="ml-4 px-3 py-1 rounded-full bg-secondary/30 text-xs font-semibold text-accent">
                    {item.relevance}% match
                  </div>
                </a>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
