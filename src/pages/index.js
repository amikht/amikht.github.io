import Head from 'next/head';
import { Jumbotron } from 'reactstrap';

export default function Home() {
  return (
    <div>
        <Head>
            {/*TODO: Fill this in later.*/}
        </Head>
        <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">I'm Aaron Thompson, and this is (going to be) my beautiful personal site and portfolio!</p>
        <hr className="my-2" />
        <p>There's not much to look at just yet, but I'm working hard every day to make this into something beautiful. I hope to have a more fully functional site available to show you soon. Thanks for your patience!</p>
        </Jumbotron>    
    </div>
  )
}
