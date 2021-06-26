import { Box, Button, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {primaryBtn, navBtn} from './styles/templates'
import Image from 'next/image'
import {bgcolor} from './styles/colors'
import Link from 'next/link'
// import img from '../../public/'


const useStyles = makeStyles({
    navWrapper:{
        display:'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        height: '10vh',
        alignItems: 'center',
        maxWidth: '1000px',
        margin:'auto'
    },
    navLeft:{
        display:'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth:'140px'
    },
    navRight:{
        
    },
    navBtn: {
        ...navBtn
        
    },
    button:{
        ...primaryBtn
    },
    logo: {
        margin: "10px",
        '&:hover': {
            cursor:'pointer'
        }
        
    },
    container: {
        background: bgcolor
    }
})

const NavBar = () => {

    const classes = useStyles()

    return (
        <Box className={classes.container}>
        <Box className={classes.navWrapper}>
            <Box className={classes.navLeft}>
                <Link href='/'>
                    <Image className={classes.logo} src="/llama.png" alt="me" width="50" height="50" />
                </Link>
                <Link href='/solutions'>
                    <a className={classes.navBtn}>Solutions</a>
                </Link>
                <Link href='/portfolio'>
                    <a className={classes.navBtn}>Portfolio</a>
                </Link>
            </Box>
            <Box className={classes.navRight}>
                <Link href='/contact'>
                    <button className={classes.button}>Contact us</button>
                </Link>
            </Box>
        </Box>
        </Box>
    )
}

export default NavBar