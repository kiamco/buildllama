import { Box, Button, Container, Typography, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {primaryBtn, navBtn} from './styles/templates'
import Image from 'next/image'
import {bgcolor} from './styles/colors'
import Link from 'next/link'
import { useFormik } from 'formik'

const useStyles = makeStyles({
    formWrapper:{
        display:'flex',
        justifyContent:'center',
        minHeight:'100%',
        margin:'100px 0'
    },
    formContainer:{
        display:'flex',
        flexFlow:'column',
        maxWidth:'500px',
        minHeight:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    header:{    
        margin:'20px auto 10px',
        fontSize:'2rem',
        fontWeight:'600'

    },
    subheader:{

    },
    inputs:{
        margin:'10px',
        width:'400px'

    },
    descHeight:{
        minHeight:'300px'
    },
    btn:{
        ...primaryBtn,
        minWidth:'400px',
        margin:'0px auto 20px !important',
        minHeight:'80px'
    }
})

const ContactForm = () => {

    const classes = useStyles()
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            description: ""
        },
        onSubmit(values) {
            console.log(values)
        }
    })

    console.log(values)

    return(
        <Box className={classes.formWrapper}>
            <Box className={classes.formContainer}>
                <Typography className={classes.header}>Let us know what you need</Typography>
                <Typography className={classes.subheader}>some shit about trying to be specific about the website</Typography>
                <form className={classes.formContainer} onSubmit={handleSubmit}>
                    {/* <TextField name='name' onChange={ handleChange} label="Outlined" variant="outlined" /> */}

                    <TextField
                        className={classes.inputs}
                        label='name'
                        variant='outlined' 
                        name="name" 
                        onChange={ handleChange } 
                        values={ values.name }
                    />
                    <TextField
                        className={classes.inputs}
                        label='email'
                        variant='outlined' 
                        name="email" 
                        onChange={ handleChange } 
                        values={ values.email }
                    />
                    <TextField
                        className={classes.inputs}
                        label='phone'
                        variant='outlined' 
                        name="phone" 
                        onChange={ handleChange } 
                        values={ values.phone }
                    />
                    <TextField
                        className={classes.inputs}
                        InputProps={{ classes: { input: classes.descHeight } }}
                        label='description'
                        variant='outlined'
                        multiline 
                        name="description" 
                        onChange={ handleChange } 
                        values={ values.description }
                    />
                    <button className={classes.btn} type='submit'>Send your message</button>
                </form>
            </Box>
        </Box>
    )
}

export default ContactForm 