import './header.css';

import ModeToggle from '../ModeToggle/ModeToggle';

function Header({ theme, setTheme }) {
    return <>
        <div className="header-container">
            <h1>Where in the world?</h1>
            <ModeToggle theme={theme} setTheme={setTheme}/>
        </div>
    </>
}

export default Header;