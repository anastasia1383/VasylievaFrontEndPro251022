import './sidebar.css';

function Sidebar({isMenuOpen}) {
    return (
        <nav>
            <ul className={[
                'menu-items',
                isMenuOpen ? 'active' : '',
            ].join(' ')}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </nav>
    )
};

export default Sidebar;