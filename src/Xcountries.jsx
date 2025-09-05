import { useEffect, useState } from "react";

export default function Xcountries() {

    const Card = ({ flag, name }) => {
        return (
            <div className="card" style={{ height: 200, width: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "1px solid gray", borderRadius: "8px", textAlign: "center" }}>
                <img src={flag} alt="Country Flag" style={{ height: 100, width: 100 }} />
                <h2 style={{ margin: "0", padding: "4px 0" }}>{name}</h2>

            </div>
        );

    }
    const [countries, setCountries] = useState([]);

    useEffect(() => {

        // async function fetchData() {
        //     try {
        //         const res = await fetch('https://xcountries-backend.azurewebsites.net/all');
        //         const data = await res.json();
        //         setCountries(data);
        //     }
        //     catch (err) {
        //         console.error("Error fetching data: ", err)
        //     }

        // }

        // fetchData()
        // }
        // try {

        fetch('https://xcountries-backend.azurewebsites.net/all').then(res => res.json()).then(data => setCountries(data)).catch(err => console.error("Error fetching data : ", err))
        // } catch (err) {
        //     console.error("Error in fetching data : ", err)
        // }
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'center', alignItems: "center" }}>
            {countries.map(country => <Card key={country.name + country.abbr + Math.random()} flag={country.flag} name={country.name} />)}
        </div>
    );
}