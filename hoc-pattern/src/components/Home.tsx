import { useNavigate } from "react-router-dom";
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home_nav">
            <h3>Welcome to the Home Page !! We will learn about HOC pattern in React</h3>
            <button onClick={()=> navigate('/profile')}>Profile Page</button>
            <button onClick={()=> navigate('/reports')}>Reports Page</button>
            <button onClick={()=> navigate('/admin')}>Admin Panel</button>
        </div>
    )
}

export default Home;