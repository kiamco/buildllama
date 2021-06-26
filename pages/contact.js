import PageHeader from '../src/pageheader'
import Nav from '../src/nav' 
import Footer from '../src/footer'
import ContactForm from '../src/contactForm'

const Contact = () => {
    return(
        <>
            <Nav />
            <PageHeader header="Do you need a website?" subheader="Start working on it now!" />
            <ContactForm />

            <Footer />

        </>
    )
}

export default Contact