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
        <ClientLogos />
        <Stats />
        <Solutions />
        <Features />
       
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
