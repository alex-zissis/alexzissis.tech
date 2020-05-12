import {Page} from '../elements/hocs';
import Link from 'next/link';

import './blog.scss';

const Blog = () => {
    return (
        <Page>
            <div className="az-page__container az-blog__container">
                <aside className="az-blog__sidebar">
                    <h3>Catagories</h3>
                    <ul>
                        <li>
                            <a href="#">Software</a>
                        </li>
                        <li>
                            <a href="#">Sports</a>
                        </li>
                    </ul>
                </aside>
                <main className="az-blog__content">
                    <h1>Blog</h1>
                </main>
            </div>
        </Page>
    );
};

export default Blog;
