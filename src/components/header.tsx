import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center m-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">SasaPay SDK</span>
        </Link>
        <nav className="flex items-center space-x-10 text-sm font-medium">
          <Link href="/docs">Docs</Link>
          <Link href="/playground">Playground</Link>
        </nav>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

