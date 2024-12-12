import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={style.navbar}>
      <h1>
        <Link to="/">WebTech PUC Minas</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tasks/completed">Completed Tasks</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
