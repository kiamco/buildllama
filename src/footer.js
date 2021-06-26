import { Box, Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {primaryBtn, navBtn} from './styles/templates'
import Image from 'next/image'
import {bgcolor} from './styles/colors'


const useStyles = makeStyles({
    container:{
        
    },
    wrapper:{
        background:bgcolor,
        minHeight:'50px',
        display:'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems:'center',
        width:'100%'
    },
    text:{

    },
    socialIcons:{

    }
})

const Footer = () => {

    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.container}>
                <Box className={classes.socialIcons}>

                </Box>
                <Typography className={classes.text}>
                    © 2021 Buildllama, Inc. All rights reserved.
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer