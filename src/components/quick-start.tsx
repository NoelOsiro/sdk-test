import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export default function QuickStart() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
        <div className="bg-muted p-6 rounded-lg max-w-2xl mx-auto">
          <p className="mb-4">Install the SasaPay SDK:</p>
          <div className="flex items-center space-x-2 mb-4">
            <code className="bg-background p-2 rounded flex-grow">npm install sasapay-sdk</code>
            <Button size="sm" variant="outline">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="mb-4">Initialize the SDK:</p>
          <pre className="bg-background p-4 rounded overflow-x-auto">
            <code>{`import { SasaPay } from 'sasapay-sdk';

const sasapay = new SasaPay({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}

