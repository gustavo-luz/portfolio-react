import {Container, Row, Col} from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About";
import homeConfig from "../../assets/configs/homeConfig";

import "./Home.css"

const Home = () => {
    return (
        <section>
            <Container fluid className="home-content" id="home">
                <Row>
                    <Col className="home-header">
                        <div>
                            {homeConfig.greeting}
                    </div>
                        <div style={{textAlign: "center"}}>
                            <DynamicTyping titles={homeConfig.titles}/>
                        </div>
                        <div>
                            <About about={homeConfig.about}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>)

}

export default Home