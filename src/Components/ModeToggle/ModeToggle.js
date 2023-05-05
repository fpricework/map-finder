import './modetoggle.css';

function ModeToggle({ theme, setTheme }) {
    
    function handleToggle(event) {
        if (event.target.checked) {
            setTheme('dark');
        } 
        else 
        {
            setTheme('light');
        }
    }

    return <>
    <div className="toggle-container">
        <label className="switch">
            <input type="checkbox" onChange={handleToggle}/>
            <span className="slider round"></span>
        </label>
        <h2>{theme === "light" ? "Light Mode" : "Dark Mode"}</h2>
    </div>
    </>
}

export default ModeToggle;