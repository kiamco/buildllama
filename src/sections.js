import { Box, Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {primaryBtn} from './styles/templates'
import Image from 'next/image'
import {bgcolor} from './styles/colors'
import Link from 'next/link'
import Fade from './FadeInWhenVisible'


const useStyles = makeStyles({
    container:{
        minHeight:'400px',
        maxWidth:'900px',
        margin:'auto'
    },
    section: {
        display:'flex',
        flexFlow: 'row nowrap',
        justifyContent:'space-around'
    },
    left:{
        width:'50%',
        display: 'flex',
        justifyContent:'center'

    },
    right:{
        width:'50%',
        display: 'flex',
        flexFlow:'column',
        justifyContent: 'center'
    },
    keyPoint:{
        margin: '-20px 0 20px'
    },
    desc:{
        width:'400px'
    },
    subheader:{
        textAlign:'center',
        margin: '50px'
    },
    btn:{
        ...primaryBtn,
        width:'200px',
        margin:'20px 0px 0px 0px !important',
        height: '50px'
    }
})

const Pointers = () => {
    const classes = useStyles()

    return (
        <Box className={classes.container}>
            <Typography className={classes.subheader} variant='h4'>Sub headline that user might want to read or maybe logos of websites we have built</Typography>
            <Fade>
            <Box className={classes.section}>
                <Box className={classes.left}>
                    <Image src='/sectionImg1.svg' height='350px' width='350px'/>
                </Box>
                <Box className={classes.right}>
                    <Typography className={classes.keyPoint} variant='h5'>Expand your business</Typography>
                    <Typography className={classes.desc} variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print.</Typography>
                </Box>
            </Box>
            </Fade>
            <Fade>
            <Box className={classes.section} style={{flexDirection:"row-reverse"}}>
            <Box className={classes.left}>
                    <Image src='/sectionImg2.svg' height='350px' width='350px'/>
                </Box>
                <Box className={classes.right}>
                    <Typography className={classes.keyPoint} variant='h5'>Don't worry about building your website.</Typography>
                    <Typography className={classes.desc} variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print.</Typography>
                </Box>
            </Box>
            </Fade>
            <Fade>
            <Box className={classes.section}>
            <Box className={classes.left}>
                    <Image src='/sectionImg3.svg' height='350px' width='350px'/>
                </Box>
                <Box className={classes.right}>
                    <Typography className={classes.keyPoint} variant='h5'>We know what we are doing.</Typography>
                    <Typography className={classes.desc} variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print.</Typography>
                    <Link href='/contact'>
                        <button  className={classes.btn}>Check our portfolio</button>
                    </Link>
                </Box>
            </Box>
            </Fade>
        </Box>
    )

}

export default Pointers