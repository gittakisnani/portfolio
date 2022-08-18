import type { NextPage } from 'next'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Socials from '../components/Socials'
import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <>
      <Head>
          <title>Taki snani Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <Header />
        <div className='content'>
            <h3 className='job'>Frontend <br /> Developer.</h3>
            <p className='desc'>Hi, I am a beginner Front-End Developer, i can build responsive websites with an optimal User Experience that achieves your business goals and your customer desires! </p>
           <div className='two-btns'>
            <a href='mailto:takisnbusiness@gmail.com' className='hire-me'>Hire Me</a>
            <Link href='#works'><a className='hire-me'>See my work</a></Link>
           </div>
        </div>
        <About />
        <Skills />
        <Works />
        <Contact />
        <Socials />
        <Footer />
    </div>
    </>
  )
}

export default Home
