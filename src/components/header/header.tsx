import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import { useContext } from "react";
import { ContentContext } from "../../context/content-context";

const navList = [{ link: "/", text: "Home" }];
const Header = () => {
  const activePath = useLocation();
  const { buttonCount } = useContext(ContentContext);

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

        <div className={buttonCount == 9 ? "complete" : ""}>
          R{buttonCount} / R9
        </div>
      </nav>
    </header>
  );
};

export default Header;
