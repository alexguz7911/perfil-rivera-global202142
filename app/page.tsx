import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, TrendingUp, Award, Phone, Mail, MapPin, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
    <>
      <title>Rivera Global</title>
      <meta name="description" content="Consultoría estratégica y servicios empresariales integrales" />
      <link rel="icon" href="/Global Consulting.png" type="image/png" />
    </>
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/Global Consulting.png" alt="Rivera Global Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold">Rivera Global</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="hover:text-accent transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="hover:text-accent transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="hover:text-accent transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="hover:text-accent transition-colors">
                Contacto
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-24"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Más de 15 años de experiencia
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transformamos su <span className="text-accent">visión empresarial</span> en realidad
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Consultoría estratégica y servicios empresariales integrales para impulsar el crecimiento sostenible de su
              organización
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Conocer Servicios
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Agendar Reunión
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos soluciones integrales diseñadas para optimizar cada aspecto de su negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Consultoría Estratégica</CardTitle>
                <CardDescription>
                  Desarrollo de estrategias empresariales para maximizar el crecimiento y la rentabilidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Planificación estratégica</li>
                  <li>• Análisis de mercado</li>
                  <li>• Optimización de procesos</li>
                  <li>• Gestión del cambio</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Recursos Humanos</CardTitle>
                <CardDescription>
                  Gestión integral del talento humano para potenciar el capital más valioso de su empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reclutamiento y selección</li>
                  <li>• Capacitación y desarrollo</li>
                  <li>• Evaluación de desempeño</li>
                  <li>• Clima organizacional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Transformación Digital</CardTitle>
                <CardDescription>
                  Modernización tecnológica para mantener su empresa competitiva en la era digital
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automatización de procesos</li>
                  <li>• Sistemas de gestión</li>
                  <li>• Análisis de datos</li>
                  <li>• Seguridad informática</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Certificaciones</CardTitle>
                <CardDescription>
                  Implementación de estándares internacionales de calidad y gestión empresarial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ISO 9001 - Calidad</li>
                  <li>• ISO 14001 - Ambiental</li>
                  <li>• ISO 45001 - Seguridad</li>
                  <li>• Auditorías internas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Finanzas Corporativas</CardTitle>
                <CardDescription>
                  Optimización financiera y estructuración de capital para el crecimiento sostenible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Análisis financiero</li>
                  <li>• Presupuestos y proyecciones</li>
                  <li>• Control de costos</li>
                  <li>• Inversiones estratégicas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Capacitación</CardTitle>
                <CardDescription>
                  Programas de formación empresarial para desarrollar competencias clave
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Liderazgo ejecutivo</li>
                  <li>• Habilidades gerenciales</li>
                  <li>• Trabajo en equipo</li>
                  <li>• Comunicación efectiva</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre Rivera Global</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Con más de 15 años de experiencia en el mercado, Rivera Global se ha consolidado como una firma líder en
                consultoría empresarial, brindando soluciones integrales que transforman organizaciones y potencian su
                crecimiento.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro equipo multidisciplinario de expertos trabaja de la mano con nuestros clientes para identificar
                oportunidades, optimizar procesos y alcanzar objetivos estratégicos de manera sostenible.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Proyectos Exitosos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Consultores Expertos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Global Consulting.png"
                alt="Logo Rivera Global"
                className="rounded-lg shadow-lg w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contactanos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos listos para impulsar el crecimiento de su empresa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+1 (849) 846-5112</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">eurijimeneza@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Oficina Principal</h3>
                  <p className="text-muted-foreground">Av. Tiradentes #14, Edificio Alfonso Comercial, Local 3-4C, Ensanche Naco</p>
                  <p className="text-muted-foreground">Santo Domingo, República Dominicana</p>
                </div>
              </div>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Contactanos</CardTitle>
                <CardDescription>
                  Complete el formulario y nos pondremos en contacto en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nombre</label>
                    <input className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Apellido</label>
                    <input className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input" />
                </div>
                <div>
                  <label className="text-sm font-medium">Empresa</label>
                  <input className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input" />
                </div>
                <div>
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-input"
                  ></textarea>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Enviar Mensaje</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/Global Consulting.png" alt="Rivera Global Logo" className="h-8 w-auto" />
                <span className="text-2xl font-bold">Rivera Global</span>
              </div>
              <p className="text-primary-foreground/80 mb-4">
                Transformando empresas a través de consultoría estratégica y soluciones innovadoras.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Consultoría Estratégica</li>
                <li>Recursos Humanos</li>
                <li>Transformación Digital</li>
                <li>Certificaciones</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Sobre Nosotros</li>
                <li>Nuestro Equipo</li>
                <li>Casos de Éxito</li>
                <li>Carreras</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>+1 (849) 846-5112</li>
                <li>eurijimeneza@gmail.com</li>
                <li>Av. Tiradentes #14, Edificio Alfonso Comercial, Local 3-4C, Ensanche Naco</li>
                <li>Santo Domingo, República Dominicana</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Rivera Global. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
