import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
        <Head>
            <title>StellaX</title>
            <link rel='icon' href='/media/logo.png'/>
        </Head>
        <div>
            <Image
            src="/media/logo.png"
            height={500}
            width={500}
            alt='LogoOfStellaX'
            priority
            />
        </div>
        <main>
            <section>
            <div>
                <h1>Let's build a buisness together</h1>
                <p>
                    With StellaX, you can finally say goodbye to the long and tiring web and applicaiton development required for your business. Schedule a meet with us and get professional expertise from the software developers in StellaX and grow your business online as you've always wanted to be.
                </p>
                </div>
                <div>
                    <Image
                    src='/media/hero.svg'
                    height={500}
            width={500}
                    alt='Cool and animated hero'
                    />
                </div>
                <button type='button'>Schedule A Meet</button>
            </section>
            <section>
                <div>
                    <p>Trusted by many buisnesses across the globe</p>
                    <Image
                    src='/'
                    height={500}
                    width={500}
                    alt='Business1'
                    />
                    <Image
                    src='/'
                    height={500}
                    width={500}
                    alt='Buisness2'
                    />
                    <Image
                    src='/'
                    height={500}
                    width={500}
                    alt='Buisness3'
                    />
                </div>
            </section>

            <section>
                <div>
                    <Image
                    src='/media/Section2.svg'
                    height={500}
                    width={500}
                    alt='Need More Arguments Image'
                    />
                </div>
                <div>
                    <h2>Need More Arguments?</h2>
                    <ul>
                        <li>
                            <svg></svg>
                            <p>Hosting and publishing will be included and flexible.</p>
                        </li>
                        <li>
                            <svg></svg>
                            <p>Fulfills all data protection standards</p>
                        </li>
                        <li>
                            <svg></svg>
                            <p>Built by the world's most innovative software experts</p>
                        </li>
                    </ul>
                    <button type='button'>Schedule A Meet</button>
                </div>
            </section>

            <section>
                <div>
                    <h1>
                        "We just love how Developers from StellaX turn the business to online and grow into tangible insights. Keep on rocking!"
                    </h1>
                    <p>Rama Murthy, Vice-President of GITAM Aero Astro</p>
                    <div>
                        <Image
                        src='/media/PlaceholderofComments.svg'
                        height={500}
                        width={500}
                        alt="Person's Photo"
                        />
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <Image
                    src='/media/review4u.svg'
                    height={500}
                    width={500}
                    alt='5 stars in Review4u'
                    />
                    <Image
                    src='/media/RatingFox.svg'
                    height={500}
                    width={500}
                    alt='5 stars in Rating Fox'
                    />
                </div>
            </section>
        </main>
        </div>
  )
}
