import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    quote:
      "SasaPay SDK has revolutionized our payment processing. It's fast, reliable, and incredibly easy to integrate.",
    avatar: "https://avatar.iran.liara.run/public/girl",
  },
  {
    name: "Jane Smith",
    company: "E-commerce Solutions",
    quote: "The flexibility and security of SasaPay SDK have been game-changers for our platform. Highly recommended!",
    avatar: "https://avatar.iran.liara.run/public/boy",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

