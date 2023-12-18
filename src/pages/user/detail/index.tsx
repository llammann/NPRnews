import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../../../assets/style/user/Politics.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
type Props = {};

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// like
import { like } from "../../../redux/slices/PageSlice";
import { dislike } from "../../../redux/slices/PageSlice";
import type { RootState } from "../../../redux/store/Store";
import { useSelector, useDispatch } from "react-redux";

function MilliMajlis({}: Props) {
  const { id } = useParams();

  const relatedNews = useSelector((state: RootState) => state.allPages.value);
  let selected:object | undefined;
  if (id) {
    selected = relatedNews.politics.find((news) => news.id === parseInt(id));
  }
  const dispatch = useDispatch();
  console.log("relatedNews", relatedNews);
  return (
    <>
      <section className="head">
        <div className="container">
          <h1>Detailed News</h1>
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
              {selected ? (
                <Grid item key={selected.id} xs={3} sm={4} md={3} style={{margin:"auto", width:"100%"}}>
                  <Link to="#">
                    <div className="card">
                      <div className="imgWrapper">
                        <img src="https://picsum.photos/200" alt="" />
                      </div>
                      <div className="articles">
                        <p className="header">{selected.title}</p>
                        <div className="time">
                          <p className="day">{selected.date}</p>
                          <span>.</span>
                          <p className="clock">{selected.time}</p>
                        </div>
                        <div className="content" style={{margin:"10px 0"}}>{selected.content}</div>
                        <div className="info">
                          <button
                            id={String(selected.id)}
                            onClick={() => {
                              dispatch(like(selected));
                              console.log("likee");
                            }}
                          >
                            <ThumbUpOutlinedIcon />
                            <p>{selected.likes}</p>
                          </button>
                          <button
                            id={String(selected.id)}
                            onClick={() => {
                              dispatch(dislike(selected));
                              console.log("dislikee");
                            }}
                          >
                            <ThumbDownAltOutlinedIcon />
                            <p>{selected.dislikes}</p>
                          </button>
                          <button id={String(selected.id)}>
                            <VisibilityOutlinedIcon />
                            <p>{selected.views}</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Grid>
              ) : null}
            </Grid>
          </Box>
        </div>
      </section>
    </>
  );
}

export default MilliMajlis;
