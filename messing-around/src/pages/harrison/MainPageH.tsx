import { useNavigate } from 'react-router-dom' 
import { useEffect, useState} from 'react';

function MainPageH() {
    const navigate = useNavigate()
    const [ip, setIp] = useState('');
    

    // changing some stuff test
    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
        .then(result => result.json())
        .then(data => setIp(data.ip));
    }, []);
    
    const [location, setLocation] = useState<any>(null);
    useEffect(() => {
        if (!ip) return;

        fetch(`https://ipapi.co/${ip}/json/`)
        .then(result => result.json())
        .then(data => setLocation(data))
    }, [ip]);

    return (
        <div>
            <h1>You've made a terrible mistake...</h1>
            <h3>{ip}</h3>
            <p>{location ? `Thanks! You're in ${location.city}, ${location.region}` : 'Loading your exact location...'}</p>
            <h2>Added to the database, GG</h2>
            <button onClick={() => navigate('/')}>back to main</button>
        </div>
    )
}

export default MainPageH