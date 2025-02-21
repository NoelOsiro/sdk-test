"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeBlock from "@/components/code-block"

interface ResponseData {
    status: string;
    // data: {}; // You can further specify this if you know the structure
    message?: string; // Optional property
  }
  
  interface ResponseVisualizerProps {
    response: ResponseData; // Use the defined type here
  }

export default function ResponseVisualizer({ response }: ResponseVisualizerProps) {
  const [view, setView] = useState<"pretty" | "raw">("pretty")

  if (!response) {
    return <div className="text-muted-foreground">No response yet. Make an API call to see the results.</div>
  }

  const prettyResponse = JSON.stringify(response, null, 2)
  const rawResponse = JSON.stringify(response)

  return (
    <div>
      <Tabs value={view} onValueChange={(value) => setView(value as "pretty" | "raw")}>
        <TabsList>
          <TabsTrigger value="pretty">Pretty</TabsTrigger>
          <TabsTrigger value="raw">Raw</TabsTrigger>
        </TabsList>
        <TabsContent value="pretty">
          <CodeBlock code={prettyResponse} language="json" />
        </TabsContent>
        <TabsContent value="raw">
          <CodeBlock code={rawResponse} language="json" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

