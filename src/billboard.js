import { Box, Button, Container, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {primaryBtn} from './styles/templates'
import Image from 'next/image'
import {bgcolor} from './styles/colors'
// import img from '../../public/'


const useStyles = makeStyles({
    conatiner:{
        
    },
    wrapper:{
        background: bgcolor,
        minHeight: '400px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        textAlign:'center'
    },
    header:{
        margin: '-90px auto 10px auto',
        fontSize:'3rem'
    },
    sub:{
        margin: '10px auto',
        fontSize:'1rem'
    },
    btnWrapper: {
        margin: '10px auto'
    },
    btn:{
        ...primaryBtn,
        height:'60px'
    }
})

const BillBoard = () => {

    const classes = useStyles()

    return(
        <Box className={classes.conatiner}>
            <Box className={classes.wrapper}>
                <Typography className={classes.header} variant='h2'>Some Catchy Headline</Typography>
                <Typography className={classes.sub} variant='h4'>some descrition nice and short.something about website and stuff like that</Typography>
                <Box className={classes.btnWrapper}>
                    <Link href='/portfolio'>
                    <button className={classes.btn}>Portfolio</button>
                    </Link>
                    <Link href='/contact'>
                    <button className={classes.btn}>Contact Us</button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default BillBoard

