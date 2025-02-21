"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function UsageStats() {
  const [stats, setStats] = useState({
    users: 0,
    transactions: 0,
    volume: 0,
  })

  useEffect(() => {
    // Simulating API call to fetch real-time stats
    const interval = setInterval(() => {
      setStats({
        users: Math.floor(Math.random() * 10000) + 5000,
        transactions: Math.floor(Math.random() * 1000000) + 500000,
        volume: Math.floor(Math.random() * 10000000) + 5000000,
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Real-time Usage Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard label="Active Users" value={stats.users.toLocaleString()} />
          <StatCard label="Transactions Processed" value={stats.transactions.toLocaleString()} />
          <StatCard label="Transaction Volume" value={`$${(stats.volume / 1000000).toFixed(2)}M`} />
        </div>
      </div>
    </section>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="bg-card p-6 rounded-lg shadow-lg text-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-3xl font-bold text-primary">{value}</p>
    </motion.div>
  )
}

