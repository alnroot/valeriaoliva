"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Gabriela Moreno",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "GM",
    role: "Cliente de terapia de masajes",
    content:
      "Valeria una genia! transmite mucha tranquilidad, estuvo atenta a mis necesidades y se aseguró de que estuviera cómoda durante toda la sesión. El masaje de tejido profundo que recibí fue exactamente lo que necesitaba para mi dolor de espalda crónico.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alan Rotta",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "Podologia",
    role: "Cliente de podologia",
    content:
      "Llevo años luchando contra la fascitis plantar y las sesiones me marcaron la diferencia. La podóloga se tomó el tiempo de explicarme todo y responder a todas mis preguntas, Valeria un exito! agradecido",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcos Moreno",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "ER",
    role: "Cliente terapia de masajes",
    content:
      "Llevo más de un año viniendo aquí para recibir terapia de masajes y atención de podología. El personal es siempre profesional y las instalaciones son limpias y relajantes. ¡Muy recomendable!",
    rating: 5,
  },
  {
    id: 1,
    name: "Valentina",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "V",
    role: "Cliente de terapia de masajes",
    content:
      "volveria mil veces con la tranquilidad que trabaja, fue exactamente lo que necesitaba para descontracturar!",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay]) //Fixed useEffect dependency

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 border-none shadow-none">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <blockquote className="italic text-muted-foreground">"{testimonial.content}"</blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            setAutoplay(false)
            prev()
          }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Testimonio previo </span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 p-0 rounded-full ${current === index ? "bg-primary" : "bg-muted"}`}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
          >
            <span className="sr-only">Ir a Testimonios {index + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => {
            setAutoplay(false)
            next()
          }}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Testimonio proximo </span>
        </Button>
      </div>
    </div>
  )
}

