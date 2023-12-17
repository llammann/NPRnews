import { Link } from "react-router-dom";
import ".././assets/style/user/UserNavbar.scss";
type Props = {};
import logo from "../assets/image/logo-light-victory-en.webp";
import SearchIcon from '@mui/icons-material/Search';

function UserNavbar({}: Props) {
  return (
    <>
      <section className="header">
        <div className="container">
          {" "}
          <div className="language">
            <span>Azərbaycanca</span>
            <span>Русский</span>
            <span>English</span>
          </div>
          <div className="logo">
            <div className="imgWrapper">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <hr />
      </section>

      <section className="news">
       <div className="container">
       <ul>
          <li>
            <Link to="/">Main news</Link>
          </li>
          <li>
            <Link to="/latestNews">Latest news</Link>
          </li>
          <li>
            <Link to="/politics">Politics</Link>
          </li>
          <li>
            <Link to="/economy">Economy</Link>
          </li>
          <li>
            <Link to="/society">Society</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/culture">Culture</Link>
          </li>
          <li>
            <Link to="/world">World</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
          <li>
            <Link to="/multimedia">Multimedia</Link>
          </li>
          <li>
            <SearchIcon style={{color:"white"}}/>
          </li>
        </ul>
       </div>
       <hr />
      </section>
    </>
  );
}

export default UserNavbar;
