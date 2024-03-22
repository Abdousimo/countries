import Head from 'next/head';
import React from 'react'
import Link from 'next/link';


const Details = (props) => {
  
  return (
    
    <section className='w-full md:h-screen absolute top-0 z-0 flex flex-col items-center justify-around py-20'>
      <Head>
        <title>{props.country[0].name}</title>
      </Head>
      <div className='w-full flex items-center justify-start py-5 md:py-0 pl-10'>
        <Link href='/' className='px-16 py-4 shadow-md mb-4 hover:scale-105 transition'><i className='fa fa-arrow-left' aria-hidden="true"></i>{"  "}Back</Link>
      </div>
      <div className='w-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/2 lg:1/3 max-w-[400px] max-h-[500px] shadow-md'>
           <img src={props.country[0].flag} alt='flag' className='w-full object-cover'/>
        </div>
      <div className='w-full md:w-1/2 lg:2/3 pl-6'>
        <h1 className='text-2xl font-bold py-4'>{props.country[0].name}</h1>
        <div className='w-full flex flex-col sm:grid sm:grid-cols-2 justify-center'>
              <div className='w-full flex flex-col'>
                   <p className='text-gray-500'><span className='text-lg text-black font-bold'>Native Name :</span>{props.country[0].nativeName}</p>
                   <p className='text-gray-500'><span className='text-lg text-black font-bold'>Population :</span>{props.country[0].population}</p>
                   <p className='text-gray-500'><span className='text-lg text-black font-bold'>Region : </span>{props.country[0].region}</p>
                   <p className='text-gray-500'><span className='text-lg text-black font-bold'>Sub Region :</span> {props.country[0].subregion}</p>
                   <p className='text-gray-500'><span className='text-lg text-black font-bold'>Capital :</span> {props.country[0].capital}</p>
              </div>
              <div className='w-full flex flex-col'>
                   <p className='text-gray-500'><span className='text-lg text-black font-bold'>currencencies :</span>{props.country[0].currencies[0].name}</p>
                   <p className='text-gray-500'><span className='text-lg text-black font-bold'>Languages : </span>{props.country[0].languages[0].name}</p>
              </div>
        </div>
        <div>
          <h4 className='font-bold text-2xl pt-7'>Border countries :</h4>
          {
           props.country[0]?.borders ? props.country[0]?.borders.map((bor,index)=>(
            <span className='py-8 px-2' key={index}>{bor}</span>
           ))
           : <></>
          }
        </div>
      </div>
    </div>
    </section>
  )
}


export async function getServerSideProps(context) {
    // Fetch data from an external API based on the slug parameter
  
    const res = await fetch(`https://restcountries.com/v2/name/${context.params.id}?fullText=true`);
    const data = await res.json();
  
    return {
      props: {
        country : data
      },
    };
}
export default Details;