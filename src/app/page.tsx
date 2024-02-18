import TriangleCalculator from '@/components/TriangleCalculator'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto my-12 p-2 grid gap-4">
      <h1 className="justify-self-center">
        Extremely Cool Triangle Calculator WoW 🧮 🔥
      </h1>
      <TriangleCalculator />
      <Link
        className="text-sm text-muted-foreground justify-self-center hover:underline"
        href="https://github.com/lucasbsartor"
      >
        Lazily made by @lucasbsartor
      </Link>
    </main>
  )
}
