import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagicWandSparkles,
    faMagnifyingGlass,
    faMartiniGlass,
    faMessage,
    faQuestion,
    faQuestionCircle,
    faSignIn,
    faSignOut,
    faSliders,
    faUpload,
    faUser,
} 
from '@fortawesome/free-solid-svg-icons';
import config from '~/config'
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { type } from '@testing-library/user-event/dist/type';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboards shortcuts',
    },
];

function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search></Search>
                
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon></UploadIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu onChange={handleMenuChange} items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://i.ytimg.com/an/NSCWwgW-rwmoE3Yc4WmJhw/featured_channel.jpg?v=63a984d2"
                                alt="image"
                                fallback = "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e162ccf43b2f13fd3cbd46be2552ef21.jpeg?lk3s=a5d48078&nonce=15695&refresh_token=09172abed12bced3374be80470f26c70&x-expires=1731081600&x-signature=mlQfRUudi%2B7%2FlvqRL0d1M8x0rdo%3D&shp=a5d48078&shcp=b59d6b55"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
