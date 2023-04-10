'use client'
import { HeroSection } from "@/components/HomePage";
import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('../components/HomePage/Contact/index'))

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="contact-us">
        <Contact />
      </section>
    </>
  )
}
