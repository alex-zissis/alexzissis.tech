import Link from 'next/link';
import './menu.scss';

const Menu = () => {
    return (
        <nav className="az-el-menu">
            <div className="az-el-menu__left">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="/potfolio">
                    <a>Portfolio</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
            <div className="az-el-menu__right" />
        </nav>
    );
};

export {Menu};
