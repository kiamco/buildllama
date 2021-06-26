import { Box, Button, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {primaryBtn} from './styles/templates'
import {bgcolor} from './styles/colors'


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
        fontSize:'3rem',
        fontWeight:'600'
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

const PageHeader= ({header, subheader}) => {

    const classes = useStyles()

    return(
        <Box className={classes.conatiner}>
            <Box className={classes.wrapper}>
                <Typography className={classes.header} variant='h2'>{header}</Typography>
                <Typography className={classes.sub} variant='h4'>{subheader}</Typography>
            </Box>
        </Box>
    )
}

export default PageHeader

