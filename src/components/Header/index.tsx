import { HeaderContainer } from "./styles";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <span>Logo</span>
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={25}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={25}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}