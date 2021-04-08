import Head from 'next/head';
import Image from 'next/image';
import { Navbar, Container, Row, Col, NavItem, NavLink, NavbarBrand, Nav } from 'reactstrap';

export default function Home() {
  return (
    <div className="vh-100">
        <Head>
            {/*TODO: Fill this in later.*/}
        </Head>
        
        <Row className="row" style={{minHeight: "100%", margin:0}}>
            <Col className="landing-col"> {/* Name */}
                <div>
                <h1>Aaron<br />Thompson</h1>
                <Nav>
                    <NavItem> {/** LinkedIn Icon */}
                        <NavLink href="https://www.linkedin.com/in/aaron-t-software/">
                            <Image
                                src="/LinkedIn.png"
                                alt="Linked In"
                                width={48}
                                height={48}

                            />
                        </NavLink>
                    </NavItem>
                    <NavItem> {/** Github Icon */}
                        <NavLink href="https://github.com/amikht">
                            <Image
                                src="/Github.png"
                                alt="Github"
                                width={48}
                                height={48}
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem> {/** LinkedIn Icon */}
                        <NavLink href="https://www.instagram.com/ohsrryitsjustme/" >
                            <Image
                                src="/Instagram.png"
                                alt="Instagram"
                                width={48}
                                height={48}
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="amt4049@rit.edu" >
                            <Image
                                src="/Mail.png"
                                alt="Email"
                                width={48}
                                height={48}
                            />
                        </NavLink>
                    </NavItem>
                </Nav>
                </div>
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
