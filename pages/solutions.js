import Nav from '../src/nav'
import PageHeader from '../src/pageheader'
import Footer from '../src/footer'
import SolutionsSection from '../src/solutionsSection'
import { Box } from "@material-ui/core"


const Solutions = () => {

    return (
        <Box style={{display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <Box>
                <Nav />
                <PageHeader header="Our Solutions" subheader="some random stuff related to our approach" />
                <SolutionsSection />
            </Box>
        <Box>
            <Footer />
        </Box>
    </Box>
    )
}

export default Solutions