import { useNavigate } from 'react-router-dom'
import './Start.css'

function StartPage() {
    const navigate = useNavigate()

    return(
        <div>
            <h1>pick sohum button</h1>
            <button className='harry-buttons' onClick={() => navigate('/harrison')}>Harrison</button>
            <button className='sohum-buttons' onClick={() => navigate('/sohum')}>Sohum</button>
        </div>
    )
}

export default StartPage