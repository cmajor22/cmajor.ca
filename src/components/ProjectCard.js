import { React, useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, ButtonBase, Fade } from '@material-ui/core'
import Grow from '@material-ui/core/Grow';


const useStyles = makeStyles((theme) => ({
    projectButtonBase: {
      backgroundColor: 'red'
    },
    image: {
      position: 'relative',
      height: '100%',
      minHeight: '200px',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        width: '100% !important',
        height: 100,
      },
      '&:hover, &:focusVisible': {
        zIndex: 1,
        '& $projectBackdrop': {
          opacity: 0.85,
        },
      },
    },
    projectButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    projectImageSrc: {
      height: '100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    },
    projectBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.75,
      transition: theme.transitions.create('opacity'),
    },
    cardContent: {
        padding: '15px'
    }
  }));

const ProjectCard = (props) => {
    const classes = useStyles();
    const [isHovered, setHovered] = useState(false);
    const projectTitle = props.projectTitle;
    const projectDescription = props.projectDescription;
    const projectImage = props.projectImage;

    return (
        <Grow in={props.isVisible} {...(props.isVisible ? {timeout: props.timeout} : {})}>
            <ButtonBase className={classes.image} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <span className={classes.projectImageSrc} style={{backgroundImage: `url(${projectImage})`}}/>
            <span className={classes.projectBackdrop} />
            <span className={classes.projectButton}>
                {isHovered ?
                <Fade in={isHovered} {...(isHovered ? {timeout: 1000} : {})}>
                    <Typography component="span" variant="subtitle2" color="inherit" className={classes.cardContent}>
                        {projectDescription}
                    </Typography>
                </Fade>
                :
                <Typography component="span" variant="button" color="inherit" style={{fontSize: '24px'}}>{projectTitle}</Typography>
                }
            </span>
            </ButtonBase>
        </Grow>
    )
}
export default ProjectCard