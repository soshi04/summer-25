import './harrison.css'

import { useNavigate } from 'react-router-dom' 
import { useEffect, useState} from 'react';

function MainPageH() {
    const navigate = useNavigate()
    const [ip, setIp] = useState('');
    const [flash, setFlash] = useState(false)
    
    function boom(){
        const audio = new Audio('audio/mysterious.mp3')
        audio.play()
    }

    function triggerFlash(){
        setFlash(true)
        boom()
        setTimeout(() => setFlash(false), 500)
    }

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
            <img className={`dog ${flash ? 'flash' : ''}`} src="dog.jpg" />
            <button onClick={triggerFlash}>very special button here</button>
            <button onClick={() => navigate('/')}>back to main</button>
        </div>
    )
}

export default MainPageH