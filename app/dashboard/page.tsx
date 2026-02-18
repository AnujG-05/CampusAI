'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Dashboard } from '@/components/dashboard'
import { Button } from '@/components/ui/button'
import { GraduationCap, Briefcase } from 'lucide-react'

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<'student' | 'faculty'>('student')

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Role selector */}
        <div className="mb-8 flex items-center gap-4">
          <span className="text-sm text-muted-foreground">View as:</span>
          <div className="flex gap-2">
            <Button
              variant={userRole === 'student' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setUserRole('student')}
              className="gap-2"
            >
              <GraduationCap className="h-4 w-4" />
              Student
            </Button>
            <Button
              variant={userRole === 'faculty' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setUserRole('faculty')}
              className="gap-2"
            >
              <Briefcase className="h-4 w-4" />
              Faculty
            </Button>
          </div>
        </div>

        {/* Dashboard content */}
        <Dashboard role={userRole} />
      </main>
    </div>
  )
}
