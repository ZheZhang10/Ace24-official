export const metadata = {
  title: 'Home - Ace 24',
  description: 'Ace 24: AI-Humanized Products, Delivered Conversationally',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
// import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import logger from '@/logger'


export default function HomeSub() {
  logger.info('Home Sub acccesd')
  return (
    <>
        <Hero />
        <Features />
        <FeaturesBlocks />
        {/* <Testimonials /> */}
        <Newsletter />
    </>
  )
}
