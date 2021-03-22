import Head from 'next/head';
import { Navbar, Container, Row, Col, NavItem, NavLink, NavbarBrand, Nav } from 'reactstrap';

export default function Home() {
  return (
    <div>
        <Head>
            {/*TODO: Fill this in later.*/}
        </Head>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Aaron Makes Tech</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem >
                    <NavLink href="/">Blog</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink href="/">Projects</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        <Container fluid={true}>
            <Row xs="1" md="2" className="row-eq-height align-items-center">
                <Col className="align-center text-center">
                    <Nav vertical>
                        <NavLink href="https://github.com/amikht">
                            Github
                        </NavLink>
                        <NavLink href="https://www.linkedin.com/in/aaron-t-software/">
                            LinkedIn                            
                        </NavLink>
                    </Nav>
                </Col>
                <Col className="text-center">
                    About Me:
                </Col>
            </Row>
        </Container>

    </div>
  )
}
