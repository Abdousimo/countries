import Card from "@/components/Card";
import Head from "next/head";
import { useState,useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";


export default function Home() {

  const [countries, setCountries] = useState([]);
  const [region,setRegion] = useState('')
  const [all, setAll] = useState(false);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [country,setCountry] = useState('')
 
  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      let response = await fetch("https://restcountries.com/v2/all");
      let countries = await response.json();
      countries = countries.filter((elem) => elem.name !== "Israel");
      setCountries(countries);
      setLoading(false);
      console.log(countries)
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };


  const getCountriesPerContinent = async (region)=>{
        try {
          setError(false);
          setLoading(true);
          let response = await fetch(`https://restcountries.com/v2/region/${region}`);
          let countries = await response.json();
          countries = countries.filter((elem) => elem.name !== "Israel");
          setCountries(countries);
          setLoading(false);
        } catch (error) {
          console.log(error)
        }
  }

  const searchCountryByName = async (country) => {
    try {
      setError(false);
      setLoading(true);
      let response = await fetch(`https://restcountries.com/v2/name/${country}`);
      let countries = await response.json();
      countries = countries.filter((elem) => elem.name !== "Israel");
      setCountries(countries);
      setLoading(false);
      console.log(countries)
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchData();
  }, [all]);

  useEffect(() => {
    getCountriesPerContinent(region);
  }, [region]);

  useEffect(() => {
    searchCountryByName(country);
  }, [country]);

  return (
    <section>
      <Head>
        <title>Country Finder</title>
      </Head>
      <div className="w-full flex flex-col justify-center items-center px-10">
          <div className='w-full flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center py-5'>
              <div className="w-[25rem] flex justify-between p-2 rounded-xl border-2 border-slate-400">
                <input onChange={(e)=>{setCountry(e.target.value)}} placeholder="Search for a country" className="w-10/12 focus:outline-none"/>
              </div>
              <div className="relative w-68 shadow-md">
                <div className="w-full flex justify-center items-center py-2 px-4 rounded-t-sm">
                    <p>Filter by region</p>
                    <button onClick={toggleDropdown}>
                      {!isOpen ? <RiArrowDropDownLine  size={35}/>
                      :<RiArrowDropUpLine size={35}/>}
                    </button>
                </div>
                {isOpen && (
                  <div className="absolute z-50 mt-2 right-0 w-full flex flex-col items-center justify-center bg-white shadow-lg">
                      <button onClick={()=>setAll(!all)} className="w-full px-4 py-2 hover:bg-gray-100">All</button>
                      <button onClick={()=>setRegion('africa')} className="w-full px-4 py-2 hover:bg-gray-100">Africa</button>
                      <button onClick={()=>setRegion('asia')} className="w-full px-4 py-2 hover:bg-gray-100">Asia</button>
                      <button onClick={()=>setRegion('europe')} className="w-full px-4 py-2 hover:bg-gray-100">Europe</button>
                      <button onClick={()=>setRegion('americas')} className="w-full px-4 py-2 hover:bg-gray-100">America</button>
                      <button onClick={()=>setRegion('oceania')} className="w-full px-4 py-2 hover:bg-gray-100">Oceania</button>
                  </div>)}
              </div>
          </div>
          <div className="w-full grid justify-center items-center gap-[4rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-8">
                {countries.map((country,index)=>
                  <Card key={index} country={country}/>
                )}
          </div>
          
      </div>
    </section>
  );
}





