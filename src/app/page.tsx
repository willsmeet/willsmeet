import {
  Header,
  Footer,
  Hero,
  Solutions,
  Features,
  Stats,
  ClientLogos,
  Testimonials,
  Team,
  ContactForm,
  CTA,
  WhatsAppButton,
  FloatingShare
} from '@/components'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Features />
        <ClientLogos />
        <Team />
        <Testimonials />
        {/* <CTA /> */}
        <ContactForm />
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
      <FloatingShare/>
    </>
  )
}
