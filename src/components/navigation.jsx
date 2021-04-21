import { Link } from 'react-router-dom'; 

import '../assets/css/nav.css'

const links = [
    {
        to: "/hw21-React-SPA-Navigation",
        label: "Homepage"
    },
    {
        to: "/publications",
        label: "Publications"
    },
    {
        to: "/photos",
        label: "Photos"
    },
    {
        to: "/contacts",
        label: "Contacts"
    }
]

export const Navigation = () => {
    return (
        <nav className="nav">
            {links.map(link => (
                <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
        </nav>
    )
}