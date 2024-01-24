import React, { useEffect } from 'react'

const Covid = () => {

    const geCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        geCovidData();
    }, []);

  return (
    <>
        <h1>🔴 Live</h1>
        <h2>Covid-19 CORONAVIRUS TRACKER</h2>
    </>
  )
}

export default Covid