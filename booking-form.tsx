"use client"

import { CardFooter } from "@/components/ui/card"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export default function BookingForm() {
  const [date, setDate] = useState<Date>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Obtener los datos del formulario
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("first-name")
    const lastName = formData.get("last-name")
    const service = formData.get("service")
    const selectedTime = formData.get("time")
    const notes = formData.get("notes")

    // Formatear la fecha si existe
    const formattedDate = date ? format(date, "dd/MM/yyyy") : "No seleccionada"

    // Crear el mensaje para WhatsApp
    const message = `
*Hola me gustaria agendar un turno en VOS*
Nombre: ${firstName} ${lastName}
Servicio: ${service || "No seleccionado"}
Fecha: ${formattedDate}
Hora: ${selectedTime || "No seleccionada"}
Notas: ${notes || "Ninguna"}
    `.trim()

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/5493517182845?text=${encodedMessage}`, "_blank")

    // Marcar como enviado
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reserva Confirmada</CardTitle>
          <CardDescription>Gracias por agendar tu cita</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10 space-y-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <p className="text-center text-muted-foreground">
            Hemos recibido tu solicitud de reserva y confirmaremos tu cita en breve.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setSubmitted(false)}>
            Reservar Otra Cita
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reserva tu cita</CardTitle>
        <CardDescription>Completa el formulario para agendar tu sesión</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">Nombre</Label>
              <Input id="first-name" name="first-name" placeholder="Ingresa tu nombre" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Apellido</Label>
              <Input id="last-name" name="last-name" placeholder="Ingresa tu apellido" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Servicio</Label>
            <Select name="service" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masaje-sueco">Masaje Sueco</SelectItem>
                <SelectItem value="masaje-tejido">Masaje de Tejido Profundo</SelectItem>
                <SelectItem value="masaje-deporte">Masaje Deportivo</SelectItem>
                <SelectItem value="evaluacion-pie">Evaluación del Pie</SelectItem>
                <SelectItem value="ortesis">Ortesis Personalizadas</SelectItem>
                <SelectItem value="podologia">Cuidado de Piel y Uñas</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Fecha</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Selecciona una fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => {
                      // Disable past dates and Sundays
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      return date < today || date.getDay() === 0
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Hora</Label>
              <Select name="time" required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una hora" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="12:00">12:00 PM</SelectItem>
                  <SelectItem value="13:00">1:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                  <SelectItem value="17:00">5:00 PM</SelectItem>
                  <SelectItem value="18:00">6:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Solicitudes especiales o notas</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Háznos saber si tienes alguna inquietud o preferencia específica"
              className="resize-none"
            />
          </div>
          <Button type="submit" className="w-full">
            Reservar Cita
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

