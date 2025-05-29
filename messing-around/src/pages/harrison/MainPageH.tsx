import { useNavigate } from 'react-router-dom' 

function MainPageH() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Hello Harrison</h1>
            <p>test</p>
            <button onClick={() => navigate('/')}>back to main</button>
        </div>
    )
}

export default MainPageH