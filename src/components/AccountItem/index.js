import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(style);

function AccountItem({ user }) {
    return (
        <Link to={`/@${user.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={user.avatar}
                alt={user.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{user.full_name}</span>
                    {user.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{user.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
