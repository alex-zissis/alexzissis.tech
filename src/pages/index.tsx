import {Page, Band} from '../elements/hocs';

import './index.scss';
import Link from 'next/link';

const Home = () => {
    return (
        <Page>
            <div className="az-page__container az-home__container">
                <h1>Alex Zissis</h1>
                <h3>I try to make cool stuff</h3>
                <p style={{textAlign: 'center'}}>
                    I'm a software engineer from Sydney, Australia. I like writing about software, engineering, tech and
                    sports. <br />
                    <br /> I also make websites, apps and solutions for people and companies.{' '}
                    <Link href="/contact">
                        <a>Reach out</a>
                    </Link>{' '}
                    if you'd like to discuss potential work.
                </p>
                <p></p>
                <div>
                    <h4>Recent Postings:</h4>
                </div>
            </div>
        </Page>
    );
};

export default Home;
