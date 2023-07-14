import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <main className="">
    {/* HERO */}
    <section className='flex flex-col lg:flex-row items-center gap-5'>
      <div className='relative w-full lg:w-1/2 aspect-square'>
        <Image className='art' src="/art (5).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' priority />
      </div>
      <div className='p-5'>
        <h1 className='text-display text-7xl lg:text-8xl font-medium'>Explore <br />The<br />Dreaming <br />Masterpiece</h1>
        <Link href="/explore"><p className='text-display text-2xl mt-5'><u>Explore</u></p></Link>
      </div>
    </section>

    {/* INTRO */}
    <section className='relative my-44'>
      <div className='relative w-full lg:w-1/2 aspect-square mx-auto'>
        <Image className='art' src="/art (1).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy' />
      </div>
      <div className='absolute top-2/3 left-5 lg:left-1/3'>
        <h1 className='text-display text-7xl lg:text-8xl'>One-Stop <br />Imagination<br />For <br /><u>Dream Cathcer</u></h1>
      </div>
    </section>

    {/* FEATURES */}
    <section className='flex flex-col items-center gap-44 mt-96 relative'>
      <div className='relative w-full lg:w-1/2 aspect-square'>
        <Image className='art' src="/art (2).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy' />
      </div>
      <div className='relative w-full lg:w-1/2 aspect-square'>
        <Image className='art' src="/art (3).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy' />
      </div>
      <div className='relative w-full lg:w-1/2 aspect-square'>
        <Image className='art' src="/art (4).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy' />
      </div>
      <div className='absolute lg:left-12'>
        <h1 className='text-7xl lg:text-8xl text-white lg:text-black'>Masterpieces <br />of<br />The <br />Moment</h1>
      </div>
    </section>

    {/* API THANKYOU */}
    <section className='my-44'>
      <div className='border-b-2 border-black p-5 mx-auto w-2/3 lg:w-1/3 text-center'>
        <h1 className='text-lg lg:text-xl'>I would like to Thankyou aaaa who provide this great API to use</h1>
        <h1 className=''>Check it out here</h1>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">aaaaaaaaaaaa</a>
      </div>
    </section>

    {/* ABOUT */}
    <section className='flex flex-col lg:flex-row items-center gap-5 bg-black text-white'>
      <div className='relative w-full lg:w-1/2 aspect-square grayscale-0'>
        <Image className='art' src="/art (2).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy' />
      </div>
      <div className=''>
        <h1 className=''>Built by me</h1>
        <p className=''>reach me out</p>
      </div>
    </section>
  </main>
}
