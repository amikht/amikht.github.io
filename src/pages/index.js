import Head from 'next/head';
import { Navbar, Container, Row, Col, NavItem, NavLink, NavbarBrand, Nav } from 'reactstrap';

export default function Home() {
  return (
    <div className="vh-100">
        <Head>
            {/*TODO: Fill this in later.*/}
        </Head>
        
        <Row className="row" style={{minHeight: "100%", margin:0}}>
            <Col className="landing-col"> {/* Name */}
                <h1>Aaron<br />Thompson</h1>
            </Col>
            <Col className="landing-col"> {/* Planet */}
                <div>
                    <h2>placeholder lorem ipsum blah</h2>
                    <p>
Morbi libero urna, placerat eu fringilla et, dapibus non turpis. Morbi molestie, nunc quis faucibus hendrerit, odio nisi ultricies dolor, eu maximus neque nulla at diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod eleifend tempor. Cras lobortis diam eu congue consectetur. Integer ante ex, blandit pharetra urna eget, commodo ullamcorper lacus. Cras eu lacus diam.
                    </p>
                </div>
        </Col>
        </Row>
    </div>
  )
}
