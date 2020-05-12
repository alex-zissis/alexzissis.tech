import './band.scss';

interface BandProps {
    color: 'primary' | 'secondary';
}

const Band = ({children, color}: React.PropsWithChildren<BandProps>) => {
    return <div className={`az-el-band az-el-band-${color}`}>{children}</div>;
};

export {Band};
