import Navbar from '@/components/global/navbar'
import Image from 'next/image'

export default function Explore() {
    return <main className="">
        <Navbar />
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
            <div className='relative w-full aspect-square'>
                <Image className='art' src="/art (5).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy'/>
            </div>
            <div className='relative w-full aspect-square'>
                <Image className='art' src="/art (5).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy'/>
            </div>
            <div className='relative w-full aspect-square'>
                <Image className='art' src="/art (5).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy'/>
            </div>
            <div className='relative w-full aspect-square'>
                <Image className='art' src="/art (5).jpg" alt="Picture of Art" fill={true} objectFit='fill' placeholder="blur" blurDataURL='/blur-placeholder.png' loading='lazy'/>
            </div>

        </section>

    </main>
}
