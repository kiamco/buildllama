import { Box, Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {primaryBtn, navBtn} from './styles/templates'
import Image from 'next/image'
import {bgcolor, secondaryColor, subcolor} from './styles/colors'
import Link from 'next/link'
import {data} from '../src/assets/data/clientWebsites'

const useStyles = makeStyles({
    cardlistContainer: {
        display:'flex',
        flexFlow:'row wrap',
        margin: '50px',
    },
    cardContainer:{
        // height:'250px',
        width:'45%',
        margin: '20px'

    },
    cardWrapper: {
        // border:'1px solid grey',
        padding:'10px',
        transition:'500ms',
        '&:hover': {
            cursor:'pointer',
            background:'#E5E5E5'
        },
        // border:'1px dotted black'
    },
    cardTop: {
        minHeight:'100%',
        maxHeight:'100%',
        borderRadius:'50px 0'

    },
    cardBottom:{
        textAlign:'left'
    },
    name: {
        margin:'20px 10px 10px 0',
        fontSize:'2rem',
        fontWeight:'600'
    },
    description:{
        margin:'10px 10px 20px',
        
    },
    view:{
        maxWidth:"100%",
        maxHeight:"100%",
        borderRadius:'50px 0',
        transition:'500ms',
        '&:hover': {
            cursor:'pointer',
            borderRadius:'0px'
        },
    }
})

const Card = ({img,name,desc}) => {

    const classes = useStyles()

    return (
        <Box className={classes.cardContainer}>
            <Box className={classes.cardWrapper}>
                <Box className={classes.cardTop}>
                    <img className={classes.view} src={img} alt={name} />
                </Box>
                <Box className={classes.cardBottom}>
                    <Typography className={classes.name} variant='subtitle1'>{name}</Typography>
                    {/* <Typography className={classes.description} variant='subtitle2'>{desc}</Typography> */}
                </Box>
            </Box>
        </Box>
    )
}

const cardList = () => {
    const classes = useStyles()

    return (
        <Box className={classes.cardlistContainer}> 
              
            {data.map(el => <Card key={el.name} img={el.imgPath} name={el.name} desc={el.description} />)}
        </Box>
    )
}

export default cardList