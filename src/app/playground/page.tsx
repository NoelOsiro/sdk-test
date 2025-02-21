/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/hooks/use-toast"
import CodeBlock from "@/components/code-block"
import ResponseVisualizer from "@/components/response-visualizer"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"




export default function Playground() {
  const [apiResponse, setApiResponse] = useState(null)
  const { toast } = useToast()

  const handleApiCall = async (endpoint: string, params: any) => {
    setApiResponse(null);
    try {
      const response = await fetch(`/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
  
      const data = await response.json();
      setApiResponse(data);
      toast({
        variant: "default",
        title: "API Call Successful",
        description: "Check the response visualizer for details.",
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "API Call Failed",
        description: "An error occurred while calling the API.",
      });
    }
  };
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">SasaPay SDK Playground</h1>
      <Tabs defaultValue="make-payment">
        <TabsList>
          <TabsTrigger value="get-access-token">Get Access Token</TabsTrigger>
          <TabsTrigger value="make-payment">Make Payment</TabsTrigger>
          <TabsTrigger value="stk-push">STK Push</TabsTrigger>
          <TabsTrigger value="check-balance">Check Balance</TabsTrigger>
        </TabsList>
        <TabsContent value="get-access-token">
          <GetAccessToken onSubmit={handleApiCall} />
        </TabsContent>
        <TabsContent value="make-payment">
          <MakePaymentForm onSubmit={handleApiCall} />
        </TabsContent>
        <TabsContent value="check-balance">
          <CheckBalanceForm onSubmit={handleApiCall} />
        </TabsContent>
        <TabsContent value="stk-push">
          <STKPushForm onSubmit={handleApiCall} />
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Response Visualizer</h2>
        <ResponseVisualizer response={apiResponse} />
      </div>
    </div>
  )
}

function GetAccessToken({ onSubmit }: { onSubmit: (endpoint: string, params: any) => void }) {
    const [clientSecret, setClientSecret] = useState("")
    const [clientId, setClientId] = useState("")
    const [environment, setEnvironment] = useState("sandbox")   
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit("get-access-token", { clientSecret, clientId, environment })
    }
  
    const codeExample = `
  import  SasaPay  from 'sasapay-sdk';
  
  const sasapay = new SasaPay({
    clientSecret: '${clientSecret}',
    clientId: '${clientId}',
    environment: '${environment}'
  });
  
  const response = await sasapay.getAccessToken();
  console.log('Access token:', response);
    `
  
    return (
      <div>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
            <Label htmlFor="clientId">Client ID</Label>
            <Input
              id="clientId"
              type="text"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="Enter client ID"
              required
            />
          </div>
          <div>
            <Label htmlFor="clientSecret">Client Secret</Label>
            <Input
              id="clientSecret"
              type="text"
              value={clientSecret}
              onChange={(e) => setClientSecret(e.target.value)}
              placeholder="Enter client secret"
              required
            />
          </div>
          <div>
        <Select onValueChange={setEnvironment}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Environment" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Environments</SelectLabel>
      <SelectItem value="sandbox">Sandbox</SelectItem>
      <SelectItem value="production">Production</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
      </div>
          
          <Button type="submit">Get Access Token</Button>
        </form>
        <CodeBlock code={codeExample} language="javascript" />
      </div>
    )
  }

function MakePaymentForm({ onSubmit }: { onSubmit: (endpoint: string, params: any) => void }) {
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit("make-payment", { amount, phoneNumber })
  }

  const codeExample = `
import  SasaPay  from 'sasapay-sdk';

const sasapay = new SasaPay({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

const response = await sasapay.makePayment({
  amount: ${amount || "1000"},
  phoneNumber: '${phoneNumber || "254712345678"}'
});
  `

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </div>
        <Button type="submit">Make Payment</Button>
      </form>
      <CodeBlock code={codeExample} language="javascript" />
    </div>
  )
}

function CheckBalanceForm({ onSubmit }: { onSubmit: (endpoint: string, params: any) => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit("check-balance", {})
  }

  const codeExample = `
import  SasaPay  from 'sasapay-sdk';

const sasapay = new SasaPay({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

const balance = await sasapay.checkBalance();
console.log('Current balance:', balance);
  `

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <Button type="submit">Check Balance</Button>
      </form>
      <CodeBlock code={codeExample} language="javascript" />
    </div>
  )
}

function STKPushForm({ onSubmit }: { onSubmit: (endpoint: string, params: any) => void }) {
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit("stk-push", { amount, phoneNumber })
  }

  const codeExample = `
import  SasaPay  from 'sasapay-sdk';

const sasapay = new SasaPay({
  apiKey: 'your-api-key',
  environment: 'sandbox'
});

const response = await sasapay.stkPush();
console.log('STK Push response:', response);
  `
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </div>
        <Button type="submit">STK Push</Button>
      </form>
      <CodeBlock code={codeExample} language="javascript" />
    </div>
  )
}

