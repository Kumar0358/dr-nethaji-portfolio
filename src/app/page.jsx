'use client';

import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Achievements from '@/components/Achievements';
import Experience from '@/components/Experience';
import Trust from '@/components/Trust';
import Gallery from '@/components/Gallery';
import Appointment from '@/components/Appointment';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Expertise />
      <Achievements />
      <Experience />
      <Trust />
      <Gallery />
      <Appointment />
      <Contact />
    </Layout>
  );
}
