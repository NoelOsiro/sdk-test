"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

import { useToast } from "@/components/hooks/use-toast"

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
const { toast } = useToast()
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Code Copied",
      description: "The code has been copied to your clipboard.",
    })
  }

  return (
    <div className="relative">
      <SyntaxHighlighter language={language} style={vscDarkPlus} className="rounded-md !bg-muted">
        {code}
      </SyntaxHighlighter>
      <Button variant="outline" size="sm" className="absolute top-2 right-2" onClick={handleCopy}>
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  )
}

