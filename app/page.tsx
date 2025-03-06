import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import TestimonialCarousel from "../testimonial-carousel"
import BookingForm from "../booking-form"

export default function WellnessPractice() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Toque curativo VOS</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Sobre nosotros
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonios
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button asChild>
            <Link href="#booking">Reservar Cita</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Terapia de masajes profesional y atención podológica
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Experimente el poder curativo del tacto con nuestros servicios expertos de terapia de masajes y
                  podología. Estamos dedicados a mejorar su bienestar y ayudarlo a sentirse lo mejor posible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="#booking">Agenda tu sesion</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">Explora nuestros servicios</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="https://www.origensalud.com/wp-content/uploads/2023/12/blog-1.png"
                  alt="Massage therapy session"
                  width={1280}
                  height={720}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre nuestra practica</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con más de 5 años de experiencia, nuestro equipo de profesionales certificados está comprometido a
                  brindar atención personalizada que aborde sus necesidades únicas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="https://i.ibb.co/Xx2bPVwW/imagepodologia.jpg"
                  alt="Our wellness center"
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Filosofia</h3>
                  <p className="text-muted-foreground">
                    Creemos en un enfoque holístico del bienestar, combinando técnicas tradicionales con prácticas
                    modernas para brindar un cuidado integral tanto para el cuerpo como para la mente.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Nuestro equipo</h3>
                  <p className="text-muted-foreground">
                    Valeria Oliva es la encargada de gestionar los turnos y brindarte una atencion personalizada de
                    acuerdo a cada requerimiento para que sea unica, con certificaciones en ambos rubros y adopcion de
                    tecnicas profesionales
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Facilidad</h3>
                  <p className="text-muted-foreground">
                    Nuestro espacio moderno y tranquilo está diseñado para promover la relajación y la curación, con
                    salas de tratamiento privadas y equipos de última generación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestro Servicio</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios de terapia de masajes y podología adaptados a sus necesidades
                  individuales.
                </p>
              </div>
            </div>

            <Tabs defaultValue="massage" className="mt-12 max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="massage">Terapia de masajes</TabsTrigger>
                <TabsTrigger value="podiatry">Podología</TabsTrigger>
              </TabsList>
              <TabsContent value="massage" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Masaje sueco</CardTitle>
                      <CardDescription>Relajación y alivio del estrés</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Una técnica de masaje suave de cuerpo completo que promueve la relajación, alivia la tensión
                        muscular y mejora la circulación. Adicional: Opcion de implementacion de piedras y aceites
                        naturales
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium">60 min - $ | 90 min - $</p>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Masaje de tejido profundo</CardTitle>
                      <CardDescription>Dolor y tensión crónicos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Se dirige a las capas más profundas del músculo y el tejido conectivo para liberar la tensión
                        crónica y aliviar el dolor.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium">60 min - $ | 90 min - $</p>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Masaje deportivo</CardTitle>
                      <CardDescription>Rendimiento atlético y recuperación</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Diseñado para deportistas para mejorar el rendimiento, prevenir lesiones y promover una
                        recuperación más rápida después de una actividad física intensa.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium">60 min - $ | 90 min - $</p>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="podiatry" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Evaluación del pie</CardTitle>
                      <CardDescription>Evaluación integral</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Un examen exhaustivo de la estructura, la función y la marcha del pie para identificar problemas
                        y desarrollar planes de tratamiento personalizados.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium">Initial Assessment - $</p>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ortesis personalizadas</CardTitle>
                      <CardDescription>Soporte personalizado</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Plantillas hechas a medida diseñadas para corregir la alineación del pie, brindar soporte y
                        aliviar el dolor.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium">Consulta y ajuste: $50</p>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cuidado de la piel y las uñas</CardTitle>
                      <CardDescription>Mantenimiento de la salud de los pies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Tratamiento profesional para uñas encarnadas, infecciones por hongos, callos, durezas y otras
                        afecciones comunes de los pies.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm font-medium">Tratamiento - $</p>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Que dicen nuestros clientes :)
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  No se fíe solo de nuestras palabras. Esto es lo que nuestros clientes dicen sobre sus experiencias.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Reserva tu cita</h2>
                <p className="text-muted-foreground md:text-xl">
                  Programe hoy mismo su cita de terapia de masajes o podología. Esperamos poder ayudarlo en su camino
                  hacia el bienestar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Lunes - Viernes: 9am - 7pm | Sábado: 10am - 4pm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Alta Gracia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+54 9 351 718-2845</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contáctenos</h2>
                <p className="text-muted-foreground">
                  ¿Tiene preguntas sobre nuestros servicios? Contáctenos hoy mismo y nuestro amable equipo estará
                  encantado de ayudarlo.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="tel:3517182845">
                      <Phone className="mr-2 h-4 w-4" /> Llamanos
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="mailto:dimencrott@gmail.com">
                      <MessageCircle className="mr-2 h-4 w-4" /> Por Email
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3396.148100333058!2d-64.43294832438308!3d-31.65716767415157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM5JzI1LjgiUyA2NMKwMjUnNDkuMyJX!5e0!3m2!1ses!2sar!4v1741192810225!5m2!1ses!2sar"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Ubicación en el mapa"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="w-full px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Toque curativo VOS - Valeria Oliva Soledad</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()}Toque curativo VOS. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

