import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <nav className="navbar">
        <button className="navbar-item">
          <Link href="/">Spotlight</Link>
        </button>
        <button className="navbar-item">
          <Link href="/art-pieces/">Pieces</Link>
        </button>
        <button className="navbar-item">
          <Link href="/favorites/">Favorites</Link>
        </button>
      </nav>
    </>
  );
}

// const StyledNav = styled.nav`
//   background-color: grey;
//   bottom: 0;
//   box-sizing: border-box;
//   margin: 1px;
//   padding: 5px;
//   border: 2px black solid;
//   width: 100vw;
//   height: 30px;
//   position: sticky;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// const StyledNavbarItem = styled.button`
//   background-color: white;
//   box-sizing: border-box;
//   margin: 5px;
// `;
