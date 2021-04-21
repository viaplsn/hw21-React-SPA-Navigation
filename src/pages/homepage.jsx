import logo from '../assets/images/logo.svg';
import '../assets/css/homepage.css'

export const Homepage = () => {
    return <div className="homepage-container">
        <div className="homepage-content">
            <h1>React homepage</h1>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </div>
}