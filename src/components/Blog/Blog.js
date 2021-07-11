import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogInitiate } from "../../redux/Actions";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Blog = () => {
  const classes = useStyles();
  const { blogs } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogInitiate());
  }, [dispatch]);
  return (
    <section id="blog">
      <div className="container pb-50">
        <div className="section-title text-center">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="mt-0 line-height-1">
                Recent <span className="text-theme-colored"> News</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                autem
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div>
              {blogs &&
                blogs.map((item, index) => {
                  // if (index < 3) {
                    return (
                      <Card
                        className={(classes.root, "col-md-3")}
                        key={item._id}
                      >
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={"http://3.142.172.158:8000/" + item.imageUrl}
                            title="Contemplative Reptile"
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {item.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    );
                  // }

                  // <div key={item._id} className="item">
                  //   <article
                  //     className="post clearfix maxwidth600 mb-30 wow fadeInRight"
                  //     data-wow-delay=".2s"
                  //   >
                  //     <div className="entry-header">
                  //       <div className="post-thumb thumb">
                  //         <img
                  //           src={"http://3.142.172.158:8000/" + item.imageUrl}
                  //           alt=""
                  //           className="img-responsive img-fullwidth"
                  //         />
                  //       </div>
                  //     </div>
                  //     <div className="bg-theme-colored2 p-5 text-center pt-10 pb-10">
                  //       <span className="mb-10 text-white mr-10 font-13">
                  //         <i className="fa fa-calendar mr-5 text-white"></i>21
                  //         February
                  //       </span>
                  //       <span className="mb-10 text-white mr-10 font-13">
                  //         <i className="fa fa-commenting-o mr-5 text-white"></i>{" "}
                  //         214 Comments
                  //       </span>
                  //       <span className="mb-10 text-white mr-10 font-13">
                  //         <i className="fa fa-heart-o mr-5 text-white"></i> 895
                  //         Likes
                  //       </span>
                  //     </div>
                  //     <div className="entry-content bg-lighter p-20 pr-10">
                  //       <div className="entry-meta mt-0 no-bg no-border">
                  //         <div className="event-content">
                  //           <h3 className="entry-title text-white text-capitalize m-0">
                  //             <a href="#">{item.title}</a>
                  //           </h3>
                  //         </div>
                  //       </div>
                  //       <p className="mt-10">{item.description}</p>
                  //       <div className="mt-10">
                  //         {" "}
                  //         <a
                  //           href="blog-single-left-sidebar.html"
                  //           className="btn btn-theme-colored btn-sm"
                  //         >
                  //           Read More
                  //         </a>{" "}
                  //       </div>
                  //       <div className="clearfix"></div>
                  //     </div>
                  //   </article>
                  // </div>
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
