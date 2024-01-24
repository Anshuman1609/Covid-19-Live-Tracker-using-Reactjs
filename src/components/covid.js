import React, { useEffect, useState } from 'react';
import './covid.css';


const Covid = () => {

    const[data, setData] = useState([]);

    const geCovidData = async () => {
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);

        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        geCovidData();
    }, []);

  return (
    <>

        <section>
        <h1>🔴 Live</h1>
        <h2>Covid-19 CORONAVIRUS TRACKER</h2>
        <ul>
            <li className="card l1">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span className="noic">OUR</span> Country</p>
                        <p className="card__total card__small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card l2">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span className="noic">TOTAL</span> RECOVERED</p>
                        <p className="card__total card__small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card l3">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span className="noic">TOTAL</span> CONFIRMED</p>
                        <p className="card__total card__small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className="card l4">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span className="noic">TOTAL</span> Death</p>
                        <p className="card__total card__small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card l5">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span className="noic">TOTAL</span> ACTIVE</p>
                        <p className="card__total card__small">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card l6">
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span className="noic">Last</span> Updated</p>
                        <p className="card__total card__small">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>

    </>
  )
}

export default Covid