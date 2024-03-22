import React from 'react'
import { useRouter } from 'next/router';

const Card = ({country}) => {
const router = useRouter()

const handleClick = (e) =>{
  router.push(`/${country.name}`);
}

  return (
    <div onClick={handleClick} className='w-full pb-4 rounded-md shadow-lg cursor-pointer hover:scale-x-[1.02] hover:scale-y-[1.02] transition'>
        <img src={country.flag} alt='/' className='w-full h-[12rem] object-cover rounded-t-md'/>
        <div className='w-full flex-col justify-between pl-4'>
            <p className='font-bold text-xl py-3'>{country.name}</p>
            <p className='py-2'><span className='font-semibold'>Population : </span>{country.population}</p>
            <p className='py-2'><span className='font-semibold'>Region : </span>{country.region}</p>
            <p className='py-2'><span className='font-semibold'>Capital : </span>{country.capital}</p>
        </div>
    </div>
  )
}

export default Card