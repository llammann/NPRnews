import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../assets/style/user/Politics.scss";
import { Link } from "react-router-dom";

type Props = {}

function Economy({}: Props) {
  return (
    <>
    <section className="head">
      <div className="container">
        <h1>Economy</h1>
        <ul>
          <li>
            <a href="#">ENERGY</a>
          </li>
          <li>
            <a href="#">INDUSTRY</a>
          </li>
          <li>
            <a href="#">FINANCE</a>
          </li>
          <li><a href="#">ICT</a></li>
          <li>
            <a href="#">INFRASTRUCTURE</a>
          </li>
          <li><a href="#">AIC</a></li>
          <li><a href="#">BUSINESS</a></li>
          <li><a href="#">TOURISM</a></li>
        </ul>
      </div>
    </section>
    <section className="allNews">
      <div className="container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={3} sm={4} md={3}>
              <Link to="/sports">
                <div className="card">
                  <div className="imgWrapper">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <div className="articles">
                    <p className="header">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="time">
                      <p className="day">december 16,2023</p>
                      <span>.</span>
                      <p className="clock">11:16</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <Link to="/sports">
                <div className="card">
                  <div className="imgWrapper">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <div className="articles">
                    <p className="header">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="time">
                      <p className="day">december 16,2023</p>
                      <span>.</span>
                      <p className="clock">11:16</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <Link to="/sports">
                <div className="card">
                  <div className="imgWrapper">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <div className="articles">
                    <p className="header">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="time">
                      <p className="day">december 16,2023</p>
                      <span>.</span>
                      <p className="clock">11:16</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <Link to="/sports">
                <div className="card">
                  <div className="imgWrapper">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <div className="articles">
                    <p className="header">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="time">
                      <p className="day">december 16,2023</p>
                      <span>.</span>
                      <p className="clock">11:16</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <Link to="/sports">
                <div className="card">
                  <div className="imgWrapper">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <div className="articles">
                    <p className="header">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="time">
                      <p className="day">december 16,2023</p>
                      <span>.</span>
                      <p className="clock">11:16</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <Link to="/sports">
                <div className="card">
                  <div className="imgWrapper">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <div className="articles">
                    <p className="header">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="time">
                      <p className="day">december 16,2023</p>
                      <span>.</span>
                      <p className="clock">11:16</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={3} sm={4} md={3}>
              <Link to="/sports">
                <div className="card">
                  <div className="imgWrapper">
                    <img src="https://picsum.photos/200" alt="" />
                  </div>
                  <div className="articles">
                    <p className="header">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                    <div className="time">
                      <p className="day">december 16,2023</p>
                      <span>.</span>
                      <p className="clock">11:16</p>
                    </div>
                  </div>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>
  </>
  )
}

export default Economy