import './header.css';

function Header({ isMenuOpen, onClickMenu }) {
    return (
        <header>
            <div>
                <a className='logo' href="/">
                    <img src="logo.svg" width="50" height="50" alt="lorem" />
                </a>
            </div>
            <button onClick={() => {
                onClickMenu(!isMenuOpen);
            }} className={[
                'hamburger-lines',
                isMenuOpen ? 'active' : ''
            ].join(' ')}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </button>
        </header>
    )
};

export default Header;