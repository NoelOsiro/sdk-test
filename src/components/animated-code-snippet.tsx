"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const codeSnippets = [
  `import { SasaPay } from 'sasapay-sdk';

const sasapay = new SasaPay({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

const response = await sasapay.makePayment({
  amount: 1000,
  phoneNumber: '254712345678'
});`,
  `import { SasaPay } from 'sasapay-sdk';

const sasapay = new SasaPay({
  apiKey: 'your-api-key',
  environment: 'production'
});

const balance = await sasapay.checkBalance();
console.log('Current balance:', balance);`,
]

export default function AnimatedCodeSnippet() {
  const [currentSnippet, setCurrentSnippet] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      key={currentSnippet}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-muted p-4 rounded-lg max-w-2xl mx-auto"
    >
      <pre className="text-sm overflow-x-auto">
        <code>{codeSnippets[currentSnippet]}</code>
      </pre>
    </motion.div>
  )
}

