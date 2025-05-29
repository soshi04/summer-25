import { useNavigate } from 'react-router-dom' 

function MainPageS() {
    const navigate = useNavigate()

    return (
        <>
        <h1>Hello Sohum</h1>
        <p>testing s</p>
        <button onClick={() => navigate('/')}>back to main</button>
        </>
    )
}

export default MainPageS