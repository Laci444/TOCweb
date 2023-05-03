import { NavLink } from "react-router-dom"

function Navbar(
    { navPages }: { navPages: Array<Page> }
) {
    return (
        <nav>
            <ul>
            <li><NavLink to="/">
                HOME
            </NavLink></li>
            {
                navPages.map((page: Page) => 
                    <li><NavLink to={page.title}>
                        {page.title}
                    </NavLink></li>
                )
            }
            </ul>
        </nav>
    )
}

export default Navbar