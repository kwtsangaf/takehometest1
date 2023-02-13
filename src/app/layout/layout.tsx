import {Link, Outlet} from "react-router-dom";

/* eslint-disable-next-line */
export interface LayoutProps {
}

export function Layout(props: LayoutProps) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/airports">Airports</Link>
                    </li>
                    <li>
                        <Link to="/stadiums">Stadiums</Link>
                    </li>
                    <li>
                        <Link to="/sua">Special Use Airspace</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default Layout;
