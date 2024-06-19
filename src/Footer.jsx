import React from 'react'

let y = new Date()
let year = y.getFullYear()

function Footer() {
    return <div className="footer">
        <p>© Copyright {year}</p>
        <h3>Callum Connell</h3>
        <ul>
            <li>Instagram</li>
            <li>X</li>
            <li>LinkedIn</li>
        </ul>
    </div>
}

export default Footer;