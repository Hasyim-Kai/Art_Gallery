import Image from 'next/image'

export default function ArtDetailPage({ params }: { params: { id: string } }) {
    const { id } = params;

  return <main className="">
    <h1 className='text-5xl'>Detail {id}</h1>

  </main>
}
