import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lancet Architects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Lancet Architects aspires to establish a new milestone in the world of architecture by drafting instances in an exceptional approach." />
        <meta name="keywords" content="architect, best architects,lancet architects lucknow, architects in lucknow, home design, home designer, modular kitchen" />
      </Head>
      <main className='bg-gradient-to-tr from-[#AD8B73] to-[#E3CAA5]'>
        <section className='relative'>
          <div>
            <Image
              src="/media/home_img_1.webp"
              width="1920"
              height="900"
              alt="Landing page display image"
            />
          </div>
          <div className='absolute left-12 bottom-5 py-2 h-2/5 w-1/2 rounded-lg bg-[#c49770] opacity-95 sm:left-20 sm:h-1/3 sm:w-2/5 md:bottom-10 md:left-24 lg:hover:border-4 lg:hover:border-[#9581f002] lg:hover:scale-105 transition-all ease-in-out lg:bottom-14 lg:left-32 lg:w-1/3 xl:left-40 xl:bottom-28 xl:h-1/4'>
            <h1 className='animate-pulse uppercase px-4 text-gray-800 font-semibold sm:text-2xl sm:mb-1 md:text-3xl md:mb-1 lg:text-5xl lg:my-2 xl:px-8 xl:my-0 xl:py-1'>
              Lancet Architects
            </h1>
            <p className='animate-pulse text-xs px-4 text-gray-700 sm:text-sm lg:text-lg lg:mb-1 xl:text-xl xl:px-8'>
              The place where dreams are crafted
            </p>
          </div>
        </section>
        <section className=' py-5 md:py-12'>
          <div className='bg-gradient-to-r to-[#c0a389] from-[#f0d6a9] rounded-lg w-4/5 mx-auto py-5 md:flex lg:hover:scale-105 transition-all ease-in-out lg:rounded-2xl lg:py-0'>
            <div className='md:w-3/5 md:my-auto lg:w-7/12'>
              <h2 className='text-center uppercase font-semibold mb-3 sm:text-xl sm:font-bold md:text-left md:px-10 lg:text-2xl xl:text-3xl'>Thriving creativity</h2>
              <p className='text-center text-sm px-5 sm:px-10 md:text-left lg:text-base lg:pr-14 xl:text-lg'>We understand the gravity that artistry implants! Lancet Architects focuses on flourishing creativity to its fullest. Our shades, patterns, and fashion are the finest palettes you can acquire at the wittiest price!</p>
            </div>
            <div className='p-5 mx-auto sm:w-96 md:w-2/5 lg:w-5/12'>
              <Image
                src="/media/interior_planning.webp"
                height="415"
                width="415"
                alt="Company Logo"
              />
            </div>
          </div>
        </section>
        <section className='  py-5 md:py-12'>
          <div className='bg-gradient-to-r from-[#c0a389] to-[#f0d6a9] rounded-lg w-4/5 mx-auto py-5 md:flex md:flex-row-reverse lg:hover:scale-105 transition-all ease-in-out lg:rounded-2xl lg:py-0'>
            <div className='md:w-3/5 md:my-auto lg:w-7/12'>
              <h2 className='text-center text-black uppercase font-semibold mb-3 sm:text-xl sm:font-bold md:text-right md:px-10 lg:text-2xl xl:text-3xl'>Crafting Dreams</h2>
              <p className='text-center text-black text-sm px-5 sm:px-10 md:text-right lg:text-base lg:pl-14 xl:text-lg'>You are unique, so are your dreams! They deserve to solidify! We know you endeavor to shape your vision. Lancet does sterling designing to convert your picture into reality! Let us carve your imagination into the perfect existence.</p>
            </div>
            <div className='p-5 mx-auto sm:w-96 md:w-2/5 lg:w-5/12'>
              <Image
                src="/media/home_img_2.webp"
                height="415"
                width="415"
                alt="Company Logo"
              />
            </div>
          </div>
        </section>
        <section className='py-3 lg:mt-1'>
          <section className='p-3'>
            <h1 className='animate-pulse text-center text-xl font-bold md:text-2xl uppercase lg:text-3xl xl:text-4xl'>Why Us?</h1>
            <article>
              <p className='p-4 text-center text-sm sm:px-10 md:px-20 lg:px-32 lg:text-base xl:px-48 xl:text-lg'>
                Because we promise to lead your dreams with passion!
              </p>
            </article>
          </section>
          <section className='p-3 space-y-5 md:flex md:space-y-0 md:justify-center md:py-5 lg:py-8 lg:px-10 xl:px-20'>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-[#dba779] rounded-xl  p-3 shadow-xl hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='motion-safe:animate-bounce w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/trust.png"
                      width="40"
                      height="40"
                      alt="Trust Icon"
                    />
                  </div>
                  <h2 className='animate-pulse text-center uppercase font-semibold text-black text-lg lg:text-xl mb-3'>Ethics</h2>
                  <article>
                    <p className='text-center text-sm text-black lg:text-base'>
                      We hold the principle of faith being the building block to water the roots of a relationship. Henceforth, we, Lancet Architects, decorate our projects with the toppings of trust. To us, mutual apprehension is the key to mastering the output you yearned for.
                    </p>
                  </article>
                </div>
              </section>
            </div>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-[#dba779] rounded-xl  p-3 shadow-xl hover:scale-105 transition-all ease-in-out '>
                <div>
                  <div className='motion-safe:animate-bounce w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/experience.png"
                      width="40"
                      height="40"
                      alt="Experience Icon"
                    />
                  </div>
                  <h2 className='animate-pulse text-center uppercase font-semibold text-lg lg:text-xl mb-3'>Experience</h2>
                  <article>
                    <p className='text-center text-sm lg:text-base'>
                      Crowned with 07 years of expertise, Lancet continues to justify its excellence in crafting and designing interiors. We fathom your desires. We strive for their alluring realization. Be it composing of your dream domicile, corporate occupancy, or favorite fantasy- we ace it all!
                    </p>
                  </article>
                </div>
              </section>
            </div>
            <div className='w-3/5 mx-auto sm:w-1/3 md:w-52 lg:w-56 xl:w-64'>
              <section className='bg-[#dba779] rounded-xl  p-3 shadow-xl hover:scale-105 transition-all ease-in-out'>
                <div>
                  <div className='motion-safe:animate-bounce w-8 mx-auto xl:w-10'>
                    <Image
                      src="/media/perfection.png"
                      width="40"
                      height="40"
                      alt="Perfection Icon"
                    />
                  </div>
                  <h2 className='animate-pulse text-center uppercase font-semibold text-black text-lg lg:text-xl mb-3'>Exquisiteness</h2>
                  <article>
                    <p className='text-center text-sm text-black lg:text-base'>
                      We, at Lancet Architects, target the utmost flawlessness to deliver the most refined results. Our elite performance in the field presents us as the top-notch pick for remodeling your dream designs into authentic interiors.
                    </p>
                  </article>
                </div>
              </section>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}