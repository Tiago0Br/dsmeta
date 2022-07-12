import './styles.css'
import logo from '../../assets/img/logo.svg'

export default function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/Tiago0Br" target="_blank"> Tiago0Br</a>
                </p>
            </div>
        </header>
    )
}