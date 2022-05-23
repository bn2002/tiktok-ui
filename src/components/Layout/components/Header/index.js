import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo"></img>
                <div className={cx('search')}>
                    <div className={cx('input-group')}>
                        <input type="text" placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
                    </div>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className="action"></div>
            </div>
        </header>
    );
}

export default Header;
