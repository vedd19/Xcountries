import { useEffect, useState } from "react";

export default function Xcountries() {

    const Card = ({ flag, name }) => {
        return (
            <div className="card" style={{ height: 200, width: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <img src={flag} alt="Country Flag" style={{ height: 100, width: 100 }} />
                <h2>{name}</h2>

            </div>
        );

    }
    const [countries, setCountries] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await fetch('https://xcountries-backend.azurewebsites.net/all');
                const data = await res.json();
                setCountries(data);
            }
            catch (err) {
                console.error("Error fetching data: ", err)
            }

        }

        fetchData()
        // }
        // try {

        //     fetch('https://xcountries-backend.azurewebsites.net/al').then(res => res.json()).then(data => setCountries(data))
        // } catch (err) {
        //     console.error("Error in fetching data : ", err)
        // }
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {countries.map(country => <Card key={country.name + country.abbr} flag={country.flag} name={country.name} />)}
        </div>
    );
}