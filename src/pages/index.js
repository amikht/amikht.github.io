import Head from 'next/head';
import Image from 'next/image';
import { Row, Col, NavItem, NavLink, Nav } from 'reactstrap';

const imgLoader = ({src, width, height}) => {
    return src
}

export default function Home() {
  return (
    <div className="vh-100">
        <Head>
            {/*TODO: Fill this in later.*/}
        </Head>
        
        <Row className="row" style={{minHeight: "100%", margin:0}}>
            <Col className="landing-col"> {/* Name */}
                <div>
                <h1 style={{textAlign:"right"}}>Aaron<br />Thompson</h1>
                <Nav className="ico-nav">
                    <NavItem> {/** LinkedIn Icon */}
                        <NavLink
                            href="https://www.linkedin.com/in/aaron-t-software/"
                            title="LinkedIn">
                            <Image fixed
                                src="/LinkedIn.png"
                                alt="Linked In"
                                width={48}
                                height={48}
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem> {/** Github Icon */}
                        <NavLink
                            href="https://github.com/amikht"
                            title="Github">
                            <Image fixed
                                src="/Github.png"
                                alt="Github"
                                width={48}
                                height={48}
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem> {/** Instagram Icon */}
                        <NavLink
                            href="https://www.instagram.com/ohsrryitsjustme/"
                            title="Instagram">
                            <Image fixed
                                src="/Instagram.png"
                                alt="Instagram"
                                width={48}
                                height={48}
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem> {/** Mail Icon */}
                        <NavLink
                            href="mailto:amt4049@rit.edu"
                            title="Email">
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
                    <h2 style={{textAlign:"center"}}>Not Just Making Tech</h2>
                    <Nav className="website-nav">
                        <NavLink href="/about">
                            About Me
                        </NavLink>
                        <NavLink href="/blog">
                            Blog
                        </NavLink>
                        <NavLink href="/projects">
                            Projects
                        </NavLink>
                    </Nav>
                    <p style={{maxWidth:"725px"}}>
                        &emsp;I am a software engineer currently attending Rochester Institute of Technology, however I am also a musician, visual artist, and lifelong learner. I want to leave the world better than I left it, by whatever means are available to me. I aim to create software and art that brings people together.
                        <br />
                        &emsp;Feel free to drop me an email and recommend your favorite non-fiction book! I'm always open to suggestions and excited to learn about new topics. Right now I am on a business book kick, but I will take anything.
                    </p>
                </div>
        </Col>
        </Row>
    </div>
  )
}
