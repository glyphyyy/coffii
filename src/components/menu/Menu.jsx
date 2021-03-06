import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#infoBanner">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#info">What is coffii?</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#footer">Goodbye</a>
                </li>
            </ul>
            <div className="bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.05 59.23">
                    <defs>
                        <style>{'.cls-1,.cls-3,.cls-4{fill:none;stroke:#2d1e2f;stroke-miterlimit:10;}.cls-1,.cls-4{stroke-width:6px;}.cls-2{fill:#b87e6c;}.cls-3,.cls-4{stroke-linecap:round;}.cls-3{stroke-width:2px;}'}</style>
                        </defs>
                        <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Logo">
                            <path id="cup" class="cls-1" d="M3.63,11C-4.54.52,69,.39,60.71,10.31c-3.85,4.61-3.37,21.2-3.37,21.2A24.71,24.71,0,0,1,32.63,56.23h0A24.71,24.71,0,0,1,7.92,31.51h0S7.33,15.73,3.63,11Z"/>
                            <path id="small-splash" class="cls-2" d="M42.41,18.38c5.17-2.25,10.67,7.83,4.62,6.89-7.73-1.21-3.78,4.61-3.78,4.61C38.85,28.32,37.18,20.66,42.41,18.38Z"/>
                            <path id="large-splash" class="cls-2" d="M51.51,33C51,38.94,47.51,44,42.68,47.4a17,17,0,0,1-16.77,1.82C20.79,47,14.46,42.56,14.21,33.63c-.41-15.1,12.69-12,19.74-3.4S51.51,33,51.51,33Z"/>
                            <path id="brim" class="cls-3" d="M10.86,11.57a94.43,94.43,0,0,0,37.78.67"/><circle id="handle" class="cls-4" cx="66.95" cy="23.97" r="9.1"/></g></g></g>
                </svg>
                <a href="#intro" className="logo-text">Coffii</a>
            </div>
        </div>
    )
}
