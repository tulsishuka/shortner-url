import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
<main className="bg-purple-100">
  <section className="grid grid-cols-2 h-[50vh]">
    <div className=" flex flex-col gap-4 items-center justify-center">
      <p className="text-3xl font-bold">
        The best URL shortner in the market
      </p>
      <p className="px-40">We are the most straightforword URl shortner in the world.Most of the url shorten will track you or ask you to give your debt</p>
<div className='flex gap-3'>
                    <Link href="/shorten">< button className='bg-purple-500 rounded-lg shadow-lg p-4 font-bold py-1 text-white'>TryNow</ button  ></Link>
                    <Link href="/github">< button className='bg-purple-500 rounded-lg shadow-lg p-4 font-bold py-1 text-white'>Github</ button  ></Link>
                    
                </div>

    </div>
    <div className="flex justify-start relative">
      <Image className="mix-blend-darken" alt="an image of vector" src={"/colla.jpg"} fill={true}/>
    </div>
  </section>
</main>
  );
}
