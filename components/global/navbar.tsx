"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [isFilterOpen, setIsFilterOpen] = useState<Boolean>(false)
    const handleFilterState = () => { setIsFilterOpen(!isFilterOpen) }

    const [isSearchOpen, setIsSearchOpen] = useState<Boolean>(false)
    const handleSearchState = () => { setIsSearchOpen(!isSearchOpen) }
    const searchStyle = isSearchOpen

    return <nav className={`${isFilterOpen ? 'h-72' : 'h-16'} text-2xl flex justify-between sticky top-0 border-b-2 border-black px-5 z-50 transition-all duration-500 ease-in-out bg-white bg-opacity-20 backdrop-blur-lg`}>
        <section className='flex gap-7 items-center'>
            <Link href="/"><Image src="/icons/arrow-left.svg" alt="Back Arrow" width={30} height={30}/></Link>
            <div className='h-8 w-0.5 bg-black rounded-lg'></div>
            <button className='' onClick={handleFilterState}>filter</button>
        </section>
        <button className='' onClick={handleSearchState}>search</button>
    </nav>
}