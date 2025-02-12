import './app.scss'
import {Logo} from './components/logo.tsx'

function App() {
    return(
        <main>
            <header className='header-container'>
                <Logo/>
                <nav className="menu-options">
                    <a href="#">What we offer</a>
                    <a href="#">How it works</a>
                    <a href="#">Portfolio</a>
                </nav>
                <button className="contact-container">Contact us</button>
            </header>
        </main>
    )
}

export default App