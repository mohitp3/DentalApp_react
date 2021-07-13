import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogInitiate } from "../../redux/Actions";
import { makeStyles } from "@material-ui/core/styles";
import ItemsCarousel from 'react-items-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Blog = () => {
  const classes = useStyles();
  const { blogs } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [activeItemIndex,setActiveItem] = useState(0)

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
          <div className={"col-md-12 "}>
          <ItemsCarousel
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        requestToChangeActive={setActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={<ChevronRightIcon fontSize="large" />}
        leftChevron={<ChevronLeftSharpIcon fontSize="large" />}
        outsideChevron={false}
      >
              {blogs &&
                blogs.map((item, index) => {
                  // if (index < 3) {
                  return (
                    <div  key={item._id}>
                      <Card  className={classes.root}>
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
                    </div>
                  );
                })}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
