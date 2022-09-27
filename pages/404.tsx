import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NotFound from '../public/assets/NotFound.png'
const NotFoundPage: NextPage = () => {
  return (
    <>
        <Header />
        <main className='notfound'>
            <div className="container">
                <div className='notfound_image'>
                    <Image src={NotFound} alt='Not Found' width={250} height={250} />
                </div>
                <div>
                    <h2>Oops!</h2>
                    <p>We can't seem to find the page you're looking for</p>
                    <Link href='/'>
                        <a className='notfound_link'>Home</a>
                    </Link>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default NotFoundPage