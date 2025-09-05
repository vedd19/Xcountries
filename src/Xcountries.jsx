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
        fetch('https://xcountries-backend.azurewebsites.net/all').then(res => res.json()).then(data => setCountries(data));
    }, [])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {countries.map(country => <Card key={country.name + country.abbr} flag={country.flag} name={country.name} />)}
        </div>
    );
}