import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const navList = [{ link: "/", text: "Home" }];
const Header = () => {
  const activePath = useLocation();

  return (
    <header className="header">
      <nav>
        {navList.map((item) => (
          <Link
            to={item.link}
            className={item.link == activePath.pathname ? "selected" : ""}
          >
            {item.text}
          </Link>
        ))}

        <div></div>
      </nav>
    </header>
  );
};

export default Header;
