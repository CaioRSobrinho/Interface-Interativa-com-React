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
                <button className="contact-container">
                    <div className='btn-face-white'>
                        Contact us 
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                    <div className='btn-face-purple'>
                        Contact us 
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </button>
            </header>
            <div className="body-content-container">
                <h1>Lets grow your social presence</h1>
            </div>
            <div className="bubble__target">
                🎯
            </div>
            <div className="bubble__target">
                🛍️
            </div>
            <div className="bubble__target">
                🚀
            </div>
            <div className="bubble__target">
                🔥
            </div>
        </main>
    )
}

export default App