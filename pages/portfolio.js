import Nav from '../src/nav'
import PageHeader from '../src/pageheader'
import Cardlist from '../src/cardlist'
import Footer from '../src/footer'
import { Box } from "@material-ui/core";

const Portfolio = () => {
    return (
        <Box style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            
            <Box>
                <Nav />
                <PageHeader header="Our Work" subheader="some random stuffx  related to our work " />
                <Cardlist />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>

    )
}

export default Portfolio