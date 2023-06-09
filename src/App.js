import React from 'react';
import { useState } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { motion } from 'framer-motion';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import logo from './logo.svg';
import './styles.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pg2 from './pages/pg2';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import TextField from '@mui/material/TextField';

function MyComponent() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const cardData = [
    {
      title: 'Parents',
      image: logo,
      description: 'Parents Benefits',
    },
    {
      title: 'Students',
      image: logo,
      description: 'Students Benefits',
    },
    {
      title: 'Schools',
      image: logo,
      description: 'Schools Benefits',
    },
  ];
/*
  const menuBar = (
    <nav>
      <ul>
        <li><a href="https://www.react-spring.dev/docs/components/parallax-layer">Parents</a></li>
        <li><a href="https://www.react-spring.dev/docs/components/parallax-layer">Students</a></li>
        <li><a href="https://www.react-spring.dev/docs/components/parallax-layer">Schools</a></li>
      </ul>
    </nav>
  );
*/
  return (
    <div>
    <Parallax pages={11}>
    <ParallaxLayer sticky={{ start: 0, end: 5 }}offset={0} speed={0.5}>
    <Router>
    <Navbar />         
      <Routes>
        <Route path='src\pages\pg2.js' component={Pg2} />
      </Routes>
    </Router>
    </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0, end: 5}} offset={0} speed={0.5}>
        <div className="sticky-parallax">
                    
        <img src={logo} alt="logo" style={{width: 100, height: 100, position: 'absolute', alignSelf: 'top', yOffset:-10 }}   ></img>

        </div> 
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1.5}>
        <div className="section section1">
          <Typography variant="h1" align="left" gutterBottom>
            Learnplay
          </Typography>
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0, end: 0.5}} offset={0} speed={1}>
        
      <div className="container">
        <h2>Sign Up</h2>
        <div className="form-group">
            <TextField label="Name" />
          </div>
            <div className="form-group">
              <TextField label="Email" type="email" />
            </div>
            <div className="form-group">
              <TextField label="Phone" />
            </div>
          <div className="form-group">
            <Button variant="contained" color="primary">
              Request a Demo
            </Button>
        </div>
      </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <div className="section section2">
          3.
          <TransitionGroup component={Grid} container spacing={3}>
            {cardData.map((card, index) => (
              <CSSTransition key={index} classNames="card-transition" timeout={500}>
                <Grid item xs={12} sm={6} md={4}>
                  <motion.div
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0 }}
                    className="card"
                  >
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={card.image}
                        alt={card.title}
                      />
                      <CardContent>
                        <Typography variant="h5" component="div" gutterBottom>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5}>
        4.
        <div className="section section3">
          <Typography variant="h3" align="center" gutterBottom>
            Request a demo
          </Typography>
          <Typography variant="body1" align="center">
            Demo details
          </Typography>
          <Button variant="contained" color="primary" style={{ marginTop: '2rem' }}>
            Book a demo
          </Button>
        </div>
      </ParallaxLayer>
     
      <ParallaxLayer offset={3} speed={0.5}>
        5.
        <div className="section section3">
          <Typography variant="h3" align="center" gutterBottom>
            text
          </Typography>
          
        </div>
      </ParallaxLayer>
       <ParallaxLayer offset={3} speed={0.5}>
        6.
      <Button onClick={handleDialogOpen} variant="contained" color="primary">
        Open Dialog
      </Button>
      <Dialog open={openDialog} onClose={handleDialogClose} className="custom-dialog">
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent style={{ minWidth: '500px', minHeight: '300px', backgroundColor: 'transparent' }}>
          <p>Dedicated App</p>
          <p>Parental Control</p>
          <p>Dashboard</p>
          <p>Learning Progress Report</p>
          <p>Usage Statistics</p>
          <p>Communication with Child and Teachers</p>
<p>Time Management  School Time, Bedtime, Playtime</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </ParallaxLayer>
      <ParallaxLayer  offset={4} speed={0.5}>
        7.
        \n
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sagittis tellus, nec ultricies diam. Mauris tincidunt nulla eget pulvinar feugiat. Quisque blandit orci lorem, ac fermentum ipsum sodales at. Nullam a nisi non velit fermentum pharetra. Vestibulum gravida venenatis dui, eu tempus tellus tempor vel
      </ParallaxLayer>
      <ParallaxLayer offset={10} speed={0.1}>
      <footer className="footer">
      <div className="footcontainer">
        <div className="contact-info">
          <h4>Contact Info</h4>
          <p>Email: example@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div className="social-media">
          <h4>Social Media</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="playstore">
          <h4>Download Our App</h4>
          <a href="https://play.google.com/store">
            <img src="playstore.png" alt="Google Play Store" />
          </a>
        </div>
      </div>
      <div className="footer-line"></div>
    </footer>
      </ParallaxLayer>
    </Parallax>
    </div>
  );
}

export default MyComponent;
