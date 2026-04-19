interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-6 sm:max-w-2xl sm:px-8">
      <header className="flex justify-end gap-4">
        {/* Bonus: CV download, time, language dropdown - to be added */}
      </header>
      {children}
    </div>
  )
}
