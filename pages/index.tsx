import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Quote from '../components/Quote';
import ShapedSection from '../components/ShapedSection';
import MultipleShapedSection from '../components/MultipleShapedSection';
import About from '../components/About';
import Projects from '../components/Projects';
import ArrowSection from '../components/ArrowSection';
import Contact from '../components/Contact';
import ReversedMultipleShapedSection from '../components/ReversedMultipleShapedSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Johan Eriksson</title>
        <meta name="description" content="Portfolio - Johan Eriksson@2021" />
      </Head>
      <Navbar />
      <Header />
      <ShapedSection />
      <Quote quoteNumber={0}/>
      <MultipleShapedSection />
      <About />
      <ReversedMultipleShapedSection />
      <Quote quoteNumber={1}/>
      <MultipleShapedSection />
      <Projects />
      <ArrowSection />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
