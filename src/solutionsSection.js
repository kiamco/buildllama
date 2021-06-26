import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"


const useStyles = makeStyles({
    wrapper:{
        display:'flex',
        flexFlow:'column',
        marginTop: '50px',
    },
    container:{
        margin:'10px auto',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'

    },
    left:{
        maxWidth:'45%'
    }, 
    right:{
        maxWidth:'45%'
    },
    row1:{
        display:'flex',
        flexFlow:'column wrap',
        margin:'auto 10px',
        // width:'100%'
    },
    row2:{
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'space-evenly',
        margin:'50px 10px'
    },  
    solutionCards:{
        display:'flex',
        flexFlow:'row nowrap',

    },
    solutionCard:{
        margin:'20px 150px 20px 0',
        maxWidth:'100px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    icon:{
        maxWidth:'100px',
        minHeight:'100px'
    },
    solutionDesc:{
        lineHeight:'1.2',
        width:'200px'
    },
    header:{
        fontWeight:'bold'
    },
    keyPoint:{
        fontWeight:'600',
        margin: '20px 0'
    }
})


const KeySolution = ({img, solution, description}) => {
    const classes = useStyles()

    return(
        <Box className={classes.solutionCard}>
            <img  className={classes.icon} src={img} />
            <Box>
            <Typography variant='h5' className={classes.solutionKey}>{solution}</Typography>
            <Typography variant='subtitle2' className={classes.solutionDesc}>{description}</Typography>
            </Box>
        </Box>
    )
}

const Solutions = () => {
    const classes = useStyles()

    return(
        <Box className={classes.wrapper}>
            <Box className={classes.container}>
                <Box className={classes.row1}>
                    <Box className={classes.header}>
                        <Typography variant='h5' className={classes.header}>Our Way</Typography>
                        <Typography variant='subtitle1' className={classes.subheader}>Some shit about our way that people will probably not read </Typography>
                    </Box>
                    <Box className={classes.solutionCards}>
                        <KeySolution img="/meeting.svg" solution="Meet" description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" />
                        <KeySolution img="/builid.svg" solution="Build" description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" />
                        <KeySolution img="/optimize.svg" solution="Optimize" description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" />
                        <KeySolution img="/deploy.svg" solution="Deploy" description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" />
                    </Box>
                </Box>
                <Box className={classes.row2}>
                    <Box className={classes.left}>
                        {/* <Image src='/sectionImg1.svg' height='350px' width='350px'/> */}
                        <img src="" />
                        <Typography variant='subtitle1'>aasdasd s asd asd asdasd as das</Typography>
                    </Box>
                    <Box className={classes.right}>
                        <Typography className={classes.keyPoint} variant='h5'>Expand your business</Typography>
                        <Typography className={classes.desc} variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print.</Typography>
                    </Box>
                </Box>
                <Box className={classes.row2} style={{flexDirection:'row-reverse'}}>
                    <Box className={classes.left}>
                        {/* <Image src='/sectionImg1.svg' height='350px' width='350px'/> */}
                        <img src="" />
                        <Typography variant='subtitle1'>aasdasd s asd asd asdasd as das</Typography>
                    </Box>
                    <Box className={classes.right}>
                        <Typography className={classes.keyPoint} variant='h5'>Expand your business</Typography>
                        <Typography className={classes.desc} variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print.</Typography>
                    </Box>
                </Box>
                <Box className={classes.row2}>
                    <Box className={classes.left}>
                        {/* <Image src='/sectionImg1.svg' height='350px' width='350px'/> */}
                        <img src="" />
                        <Typography variant='subtitle1'>aasdasd s asd asd asdasd as das</Typography>
                    </Box>
                    <Box className={classes.right}>
                        <Typography className={classes.keyPoint} variant='h5'>Expand your business</Typography>
                        <Typography className={classes.desc} variant='subtitle1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print.</Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Solutions