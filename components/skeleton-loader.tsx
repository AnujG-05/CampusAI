export function SkeletonCard() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="flex gap-4">
        <div className="h-12 w-12 rounded-lg bg-muted flex-shrink-0" />
        <div className="flex-1">
          <div className="h-6 w-3/4 rounded bg-muted mb-2" />
          <div className="h-4 w-full rounded bg-muted mb-2" />
          <div className="h-4 w-5/6 rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonSearchBar() {
  return (
    <div className="animate-pulse">
      <div className="h-12 w-full rounded-full bg-muted" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-10 w-full rounded-lg bg-muted" />
        ))}
      </div>
    </div>
  )
}

export function SkeletonResourceDetail() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="h-12 w-1/2 rounded-lg bg-muted" />
        <div className="h-6 w-full rounded bg-muted" />
        <div className="h-6 w-5/6 rounded bg-muted" />
      </div>

      {/* Meta info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-20 rounded bg-muted" />
            <div className="h-6 w-32 rounded bg-muted" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-4 w-full rounded bg-muted" />
        ))}
      </div>
    </div>
  )
}

export function SkeletonFilterPanel() {
  return (
    <div className="w-full lg:w-64 space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse rounded-lg border border-border p-4 space-y-3">
          <div className="h-5 w-24 rounded bg-muted" />
          <div className="space-y-2">
            {[1, 2, 3].map((j) => (
              <div key={j} className="h-4 w-20 rounded bg-muted" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
