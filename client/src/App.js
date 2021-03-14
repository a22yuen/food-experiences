import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import noodles from './images/noodles.jpg';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); //dispatch hook from redux
  const classes = useStyles(); //material-ui styles function with file in styles.js

  useEffect(() => {
    //take getPosts from actions and dispatch to store
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    //materialui container to center everything
    <Container maxWidth="lg">  
      <AppBar className={classes.appBar} position="static" color="inherit">
      {/*Typography is for any text element with nice font */}
        <Typography className={classes.heading} variant="h2" align="center">Food Experiences!</Typography>
        <img className={classes.image} src={noodles} alt="icon" height="60" />
      </AppBar>
      {/* Grow is simple animation */}
      <Grow in>
        <Container>
        {/* Grid Similar to bootstrap grid,   */}
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;