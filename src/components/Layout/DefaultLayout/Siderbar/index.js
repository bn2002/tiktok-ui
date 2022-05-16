import classNames from 'classnames/bind';
import styles from './Siderbar.module.scss';
const cx = classNames.bind(styles);
function Siderbar() {
    return <aside className={cx('wrapper')}>siderbar</aside>;
}

export default Siderbar;
