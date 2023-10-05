import Nav from "./Nav";

const Header: React.FC = () => (
  <header className="header has-background-primary is-flex is-align-items-center is-justify-content-center">
    <h1 style={{ color: "red" }}>
      REPUBLIC OF FAKELANDIA <br />
      Ministry of Justice
    </h1>
    <Nav />
  </header>
);
export default Header;
