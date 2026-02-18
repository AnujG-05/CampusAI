'use client'

import { useState } from 'react'
import { BookOpen, Users, Zap, TrendingUp, Download, Clock, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface DashboardProps {
  role: 'student' | 'faculty'
}

export function Dashboard({ role }: DashboardProps) {
  const [savedResources] = useState([
    { id: '1', title: 'Quantum Mechanics Fundamentals', type: 'PDF' },
    { id: '2', title: 'Data Science Advanced Topics', type: 'Video' },
  ])

  const [recentSearches] = useState([
    'Quantum mechanics',
    'Machine learning algorithms',
    'Organic chemistry synthesis',
    'Linear algebra',
  ])

  const stats = role === 'student' ? [
    { label: 'Resources Saved', value: '24', icon: BookOpen },
    { label: 'Searches This Week', value: '47', icon: TrendingUp },
    { label: 'Study Time', value: '12h 34m', icon: Clock },
  ] : [
    { label: 'Resources Published', value: '156', icon: BookOpen },
    { label: 'Student Downloads', value: '2,340', icon: Download },
    { label: 'Course Students', value: '428', icon: Users },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="rounded-lg border border-border bg-gradient-to-br from-accent/10 to-secondary/10 p-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {role === 'student' ? 'Student' : 'Professor'}!
          </h1>
          <p className="text-muted-foreground mb-6">
            {role === 'student' 
              ? 'Continue your learning journey with personalized resource recommendations.'
              : 'Manage your course materials and track student engagement.'}
          </p>
          <Button className="gap-2 bg-accent hover:bg-accent/90">
            <Zap className="h-4 w-4" />
            {role === 'student' ? 'Start Learning' : 'Upload Resource'}
          </Button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Saved resources */}
        <div className="lg:col-span-2 rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">
            {role === 'student' ? 'Saved Resources' : 'Recent Materials'}
          </h2>
          <div className="space-y-3">
            {savedResources.map((resource) => (
              <a
                key={resource.id}
                href={`/resource/${resource.id}`}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent hover:bg-secondary/50 transition-all group"
              >
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{resource.type}</p>
                </div>
                <Badge variant="secondary">{resource.type}</Badge>
              </a>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All {role === 'student' ? 'Saved' : 'Published'} Resources
          </Button>
        </div>

        {/* Recent searches / Trending */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">
            {role === 'student' ? 'Recent Searches' : 'Popular Topics'}
          </h2>
          <div className="space-y-2">
            {recentSearches.map((search, i) => (
              <a
                key={search}
                href={`/search?q=${encodeURIComponent(search)}`}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
              >
                <div className="h-2 w-2 rounded-full bg-accent opacity-60 group-hover:opacity-100" />
                <span className="text-sm text-foreground group-hover:text-accent transition-colors line-clamp-1">
                  {search}
                </span>
              </a>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Trending
          </Button>
        </div>
      </div>

      {/* Learning recommendations */}
      {role === 'student' && (
        <div className="rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Recommended for You</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-secondary/30 p-4 hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">PDF</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-xs text-muted-foreground">4.8</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 line-clamp-2">
                  Advanced Machine Learning Techniques
                </h4>
                <p className="text-xs text-muted-foreground mb-3">Based on your searches</p>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  View Resource
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
