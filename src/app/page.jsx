import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { OutLicensing } from '@/components/OutLicensing'
import { InLicensing } from '@/components/InLicensing'
import { Testimonials } from '@/components/Testimonials'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <OutLicensing />
        <InLicensing />
        <CallToAction />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
