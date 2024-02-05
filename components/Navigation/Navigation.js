import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
    return (
        <>
            <StyledNav className="navbar">

                <StyledNavbarItem className="navbar-item">
                    <Link href="../../pages/index.js">Spotlight</Link>
                </StyledNavbarItem>
                <StyledNavbarItem className="navbar-item">
                    <Link href="../../pages/art-pieces-page/">Pieces</Link>
                </StyledNavbarItem>
                <StyledNavbarItem className="navbar-item">
                    <Link href="../../pages/favorites-page/">Favorites</Link>
                </StyledNavbarItem>

            </StyledNav>
        </>
    )
}

const StyledNav = styled.nav`
    background-color: grey;
    bottom: 0;
    box-sizing: border-box;
    margin: 1px;
    padding: 5px;
    border: 2px black solid;
    width: 100vw;
    height: 30px;
    position: sticky;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

const StyledNavbarItem = styled.p`
        background-color: white;
        box-sizing: border-box;
margin: 5px;
  `
