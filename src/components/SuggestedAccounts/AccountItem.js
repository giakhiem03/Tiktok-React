import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '~/components/Popper'
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20,0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://img.nimo.tv/t/1629515621023/202106141623695568351_1629515621023_avatar.png/w120_l0/img.webp"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Huỳnh Khiêm</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Huỳnh Gia Khiêm</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    
};

export default AccountItem;
