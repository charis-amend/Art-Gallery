import Navigation from "../Navigation/Navigation.js";

export default function Layout({ children }) {

    return (
        <>
            <main>{children}</main>
            <Navigation />
        </>)
}