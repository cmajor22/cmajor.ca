import { useContext, useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import { CustomThemeContext } from './themes/ThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import StorageIcon from '@material-ui/icons/Storage';
import Zoom from '@material-ui/core/Zoom';
import profile from './assets/profile.jpg';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import IconButton from '@material-ui/core/IconButton';
import Particles from 'react-tsparticles';
import Fade from '@material-ui/core/Fade';
import ProjectCard from './components/ProjectCard';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import InspeQ from './assets/inspeq.jpg';
import DataEntry from './assets/dataEntry.jpg';
import Tmhl from './assets/tmhl.jpg';
import Inview from './assets/inview.jpg';
import Punchclock from './assets/punchclock.jpg';
import Insync from './assets/insync.jpg';


const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.appBar + 1,
    height: theme.spacing(13),
  },
  spacer: {
    flexGrow: 1
  },
  avBox: {
    width: '100%',
  },
  avatar: {
    zIndex: theme.zIndex.appBar + 2,
    marginTop: '10px',
    width: theme.spacing(25),
    height: theme.spacing(25),
    '@media (max-width: 479px)': {
      width: theme.spacing(16),
      height: theme.spacing(16),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    }
  },
  scrollToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  card: {
    width: '300px',
    marginLeft: '30px',
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.dark
  },
  cardContent: {
    backgroundColor: theme.palette.primary.light,
    padding: '0px',
    paddingBottom: '0px !important'
  },
  itemSelected: {
    backgroundColor: theme.palette.primary.light,
  },
  itemError: {
    backgroundColor: '#FF0000',
  },
  itemAttention: {
    backgroundColor: '#FFFF00',
    color: '#000000'
  },
  cardSubContent: {
    padding: '5px'
  },
  introContainer: {
    zIndex: theme.zIndex.appBar,
    height: window.innerHeight,
    width: '100%',
    marginTop: - theme.spacing(25) - 10,
  },
  introText: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing(1),
    backgroundColor: ('rgba(0,0,0, .1)'),
  },
  introSpacer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerText: {
    textAlign: 'center'
  },
  headerSubText: {
    textAlign: 'center'
  },
  scrollDown: {
    position: 'fixed',
    bottom: theme.spacing(5),
    margin: '2% auto',
    left: 0,
    right: 0
  },
  appIcon: {
    color: theme.palette.primary.contrastText,
    height: '40px',
    width: '40px'
  },
  particleColoring: {
    background: theme.palette.primary.light
  },
  particleLines: {
    color: theme.palette.primary.contrastText
  },
  aboutMeContent: {
    width: '100%',
    backgroundColor: theme.palette.background.medium
  },
  projectsContent: {
    width: '100%',
    backgroundColor: theme.palette.background.light
  },
  contactContent: {
    width: '100%',
    backgroundColor: theme.palette.primary.dark
  },
  centeredText: {
    flexGrow: 1
  },
  specialistPaper: {
    padding: '15px',
    backgroundColor: theme.palette.background.light,
    textAlign: 'center',
    maxWidth: '450px',
    margin: 'auto'
  },
  specialistIcon: {
    margin: 'auto',
    backgroundColor: theme.palette.text.primary,
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginTop: '15px',
    marginBottom: '15px'
  },
  underline: {
    width: '80%',
    height: '2px',
    backgroundColor: theme.palette.primary.light,
    margin: 'auto',
    marginTop: '5px'
  },
  iconSpacer: {
    height: '100%'
  },
  iconPadding: {
    marginTop: theme.spacing(3),
  },
  downPointer: {
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    backgroundColor: 'red',
    position: 'relative'
  },
  copyText: {
    color: theme.palette.primary.contrastText
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollDown(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
        {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollToTop}>
        {children}
      </div>
    </Zoom>
  );
}

function DownArrow(props) {
  const startColour = props.startColour;
  const toColour = props.toColour;

  return (
    <div style={{backgroundColor: toColour}}>
      <svg width="100%" height="75" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 L50,95 L100,0Z" fill={startColour} stroke={startColour} strokeWidth="1" />
      </svg>
    </div>
  )
}

function isInViewport(offset = 0, element) {
  if (!element) return true;
  const top = element.getBoundingClientRect().top;
  return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
}

function App(props) {
  const classes = useStyles();
  const { currentTheme, setTheme } = useContext(CustomThemeContext);
  const isDark = Boolean(currentTheme === 'dark');
  const theme = useTheme();
  const [ devVisible, setDevVisible ] = useState(false);
  const [ managerVisible, setManagerVisible ] = useState(false);
  const [ adminVisible, setAdminVisible ] = useState(false);
  const [ projectsVisible, setProjectsVisible ] = useState(false);
  let projectsContainer = null;
  let managerContainer = null;
  let devContainer = null;
  let adminContainer = null;

  useEffect(() => {
    console.log(`

    
    
    Hi there, thanks for checking out my site!
    
    
    
    `);

    window.onscroll = (e) => {
      if(isInViewport(0, projectsContainer)) {
        setTimeout(() => {setProjectsVisible(true)}, 500);
      }
      if(isInViewport(0, managerContainer)) {
        setTimeout(() => {setManagerVisible(true)}, 500);
      }
      if(isInViewport(0, devContainer)) {
        setTimeout(() => {setDevVisible(true)}, 500);
      }
      if(isInViewport(0, adminContainer)) {
        setTimeout(() => {setAdminVisible(true)}, 500);
      }
    }
  }, [adminContainer, devContainer, managerContainer, projectsContainer]);

  let particleOptions = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": theme.palette.particles.background
      },
    },
    "fullScreen": {
      "enable": true,
      "zIndex": -5
    },
    "particles": {
      "color": {
        "value": theme.palette.particles.dots,
        "animation": {
          "enable": true,
          "speed": 20,
          "sync": true
        }
      },
      "links": {
        "distance": 100,
        "color": {
          "value": theme.palette.particles.lines
        },
        "enable": true,
        "opacity": 0.4,
        "width": 1,
      },
      "move": {
        "enable": true,
        "speed": 6,
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 80
      },
      "opacity": {
        "value": 0.5,
      },
    },
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{height: '100%'}}>
            <div className={classes.spacer} />
            <div className={classes.iconSpacer}>
              <IconButton onClick={() => { isDark ? setTheme('normal') : setTheme('dark') }} className={classes.iconPadding}>
                <SettingsBrightnessIcon className={classes.appIcon}/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Grid container position="fixed" justify="center" id="back-to-top-anchor">
        <Avatar position="fixed" alt="Casey Major" src={profile} className={classes.avatar}/>
      </Grid>
      <Grid container className={classes.introContainer} justify="center" alignItems="center">
        <Grid item xs={12} className={classes.introText}>
          <div className={classes.introSpacer}>
            <Typography variant="h1" className={classes.headerText}>Hi there, I'm Casey Major.</Typography>
            <Typography variant="h5" className={classes.headerText}>I'm a full stack developer passionate about helping team members by creating tools that empower and amaze.</Typography>
          </div>
        </Grid>
      </Grid>
      <Particles id="backdropParticles" options={particleOptions}>
      </Particles>
      <ScrollDown {...props}>
        <Fab color="secondary" size="large" aria-label="scroll down" justify="center" className={classes.scrollDown}
          onClick={(event) => {(event.target.ownerDocument || document).querySelector('#contentAnchor').scrollIntoView({ behavior: 'smooth', block: 'start' })}}>
          <KeyboardArrowDownIcon />
        </Fab>
      </ScrollDown>

      <div id="contentAnchor" className={classes.aboutMeContent}>
        <Container>
          <br /><br /><br /><br />
          <Grid container justify="center">
            <Typography inline="true" variant='h4' align="center">A little bit about me...</Typography>
          </Grid>
          <br /><br /><br /><br />
          <Grid container spacing={2} ref={(r) => {managerContainer = r}}>
            <Grid item xs={12} md={4}>
              <Slide direction="up" in={managerVisible}>
                <Fade in={managerVisible}>
                  <Paper className={classes.specialistPaper}>
                    <Avatar className={classes.specialistIcon}>
                      <WorkIcon />
                    </Avatar>
                    <Typography variant="h5">IT Manager</Typography>
                    <div className={classes.underline}/>
                    <br /><br />
                    <Typography variant="h5">
                      Movitivating, inspiring, and empowering team members to do their best work.
                    </Typography>
                    <br />
                    <Typography variant="h6">
                      Agile & Waterfall,
                      Mentor Team Members,
                      Provide Effective Solutions,
                      Systems Implementation
                    </Typography>
                    <br />
                    <div className={classes.underline}/>
                    <br />
                  </Paper>
                </Fade>
              </Slide>
            </Grid>
            <Grid item xs={12} md={4} ref={(r) => {devContainer = r}}>
              <Slide direction="up" in={devVisible}>
                <Paper className={classes.specialistPaper}>
                  <Avatar className={classes.specialistIcon}>
                    <CodeIcon />
                  </Avatar>
                  <Typography variant="h5">Developer</Typography>
                  <div className={classes.underline}/>
                  <br /><br />
                  <Typography variant="h5">
                    Writing clean, functional, and performant code; taking ideas from the back of a napkin to fully realized apps.
                  </Typography>
                  <br />
                  <Typography variant="h6">
                    React, Angular, HTML + CSS,
                    Node, PHP, VBScript, ColdFusion,
                    MySQL, MSSQL, DynamoDB, SQLite,
                    Android, React Native
                  </Typography>
                  <br />
                  <div className={classes.underline}/>
                  <br />
                </Paper>
              </Slide>
            </Grid>
            <Grid item xs={12} md={4} ref={(r) => {adminContainer = r}}>
              <Slide direction="up" in={adminVisible}>
                <Fade in={adminVisible}>
                  <Paper className={classes.specialistPaper}>
                      <Avatar className={classes.specialistIcon}>
                        <StorageIcon />
                      </Avatar>
                      <Typography variant="h5">Systems Administrator</Typography>
                      <div className={classes.underline}/>
                      <br /><br />
                      <Typography variant="h5">
                        Architecting and maintaining the backbone that keeps the team up and running.
                      </Typography>
                      <br />
                      <Typography variant="h6">
                        AWS, Azure,
                        Windows & Linux Servers,
                        PowerShell, Bash,
                        Network Administration,
                        Phone Systems
                      </Typography>
                      <br />
                      <div className={classes.underline}/>
                      <br />
                  </Paper>
                </Fade>
              </Slide>
            </Grid>
          </Grid>
        </Container>
        <br /><br /><br /><br />
      </div>

      <div className={classes.projectsContent}>
        <Container>
          <br /><br /><br /><br />
          <Grid container justify="center">
            <Typography inline="true" variant='h4' align="center">Some projects I've been a part of</Typography>
          </Grid>
          <br /><br /><br /><br />
          <Grid container spacing={1} ref={(r) => {projectsContainer = r}}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ProjectCard isVisible={projectsVisible} timeout={500}
                background="inspeq.jpg"
                projectTitle="InspeQ Tech"
                projectDescription="Enterprise Resource Planning software built on React, Node, MySQL, DynamoDB, and S3.  Legacy app built with AS3, ColdFusion, and MySQL"
                projectImage={InspeQ}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ProjectCard isVisible={projectsVisible} timeout={1000}
                projectTitle="Data Entry"
                projectDescription="Android app used to upload inspection data to the cloud.  Built with Android, PHP, and MySQL"
                projectImage={DataEntry}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ProjectCard isVisible={projectsVisible} timeout={1500}
                projectTitle="Punchclock"
                projectDescription="Android app that uses NFC to record personnel punch in and punch outs.  Built with Android, Node, MySQL, and DynamoDB"
                projectImage={Punchclock}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ProjectCard isVisible={projectsVisible} timeout={1750}
                projectTitle="InView"
                projectDescription="Webapp providing staff with invoice production and issuance.  Built with HTML + CSS, Bootstrap, jQuery, PHP, and MySQL"
                projectImage={Inview}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ProjectCard isVisible={projectsVisible} timeout={2000}
                projectTitle="InSync"
                projectDescription="Human capital scheduling webapp built with Angular, Bootstrap, PHP, and MySQL"
                projectImage={Insync}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <ProjectCard isVisible={projectsVisible} timeout={2250}
                projectTitle="TMHL"
                projectDescription="Local hockey league website with stat tracking.  Built on Worpress, with custom HTML + CSS, PHP, and MySQL"
                projectImage={Tmhl}/>
            </Grid>
          </Grid>
          <br /><br /><br /><br />
        </Container>
      </div>

      <DownArrow startColour={theme.palette.background.light} toColour={theme.palette.primary.dark} />

      <div className={classes.contactContent}>
        <Container>
          <br /><br /><br /><br />
          <Grid container justify="center">
            <IconButton href="https://github.com/cmajor22">
              <GitHub className={classes.appIcon}/>
            </IconButton>
            <IconButton href="mailto:c.major88@live.com">
              <Email className={classes.appIcon}/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/casey-major-723548102/">
              <LinkedIn className={classes.appIcon}/>
            </IconButton>
          </Grid>
          <br /><br />
          <Grid container justify="center">
            <Typography variant="caption" className={classes.copyText}>Casey Major | &copy; 2021</Typography>
          </Grid>
          <br /><br />
        </Container>
      </div>
      
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top" justify="right">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}

export default App;
