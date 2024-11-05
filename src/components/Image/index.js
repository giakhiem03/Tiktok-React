import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ className, fallback: customFallback = images.noImage, src, alt, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
