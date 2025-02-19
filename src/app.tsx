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
            <div className="content-container">
                <div className="heading-container">
                    <h2>Lets grow your</h2>
                    <h2>social presence.</h2>
                </div>
                <div className="bubble target">
                    🎯
                </div>
                <div className="bubble shop">
                    🛍️
                </div>
                <div className="bubble rocket">
                    🚀
                </div>
                <div className="bubble fire">
                    🔥
                </div>
            </div>
        </main>
    )
}

export default App