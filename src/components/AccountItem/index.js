import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9366bed55819a1889d53ff3a508c766b~c5_300x300.webp?x-expires=1653753600&x-signature=2kUGFLECCxkD8RNeZ1zC7t6biTU%3D"
                alt="Hoaa"
                className={cx('avatar')}
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoaa.hanassiii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>hoaa.hanassiii</span>
            </div>
        </div>
    );
}

export default AccountItem;
