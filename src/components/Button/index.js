import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ to, href, text = false, rounded = false, disable = false, primary = false, small = false, large = false, children, outline,
    className,
    leftIcon,
    rightIcon,
    onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };

    // remove event listener when btn is disable
    if(disable) {
        Object.keys(props).forEach(keys => {
            if(keys.startsWith('on') && typeof props[keys] === 'function'){
                delete props[keys];
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className] : className,
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disable
    })

    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;