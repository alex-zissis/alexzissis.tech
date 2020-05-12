import Head from 'next/head';

import {Menu} from '../../components';

import '../../../styles/App.scss';
import './page.scss';

const Page = ({children}: React.PropsWithChildren<{}>) => {
    return (
        <>
            <Head>
                <title>Alex Zissis</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Spartan&display=swap"
                    rel="stylesheet"></link>
            </Head>
            <div className="az-app__container">
                <main className="az-app__content">{children}</main>
                <Menu />
            </div>
        </>
    );
};

export {Page};
