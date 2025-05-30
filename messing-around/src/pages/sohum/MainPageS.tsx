import { useNavigate, Link } from 'react-router-dom' 

function MainPageS() {
    const navigate = useNavigate()

    return (
        <>
        <h1>Sohum's Page</h1>
        <p>Click on the link to go to my first project!</p>
        
        <Link to="https://leetcode-suggest-and-track.vercel.app/">First Project</Link>
        <button onClick={() => navigate('/')}>Back to Main Page</button>

        </>
    )
}

export default MainPageS