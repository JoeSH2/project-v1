import { FC, ImgHTMLAttributes, ReactElement, useLayoutEffect, useState } from 'react';
import style from './AppImage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  alt?: string;
  loadingFeedback?: ReactElement;
  errorFeedback?: ReactElement;
}

export const AppImage: FC<AppImageProps> = props => {
  const { className, alt = 'image', src, loadingFeedback, errorFeedback, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setHasError(true);
    };
  }, [src]);

  if (isLoading && loadingFeedback) {
    return loadingFeedback;
  }
  if (hasError && errorFeedback) {
    return errorFeedback;
  }

  return <img {...otherProps} src={src} alt={alt} className={classNames(style.AppImage, {}, [className])} />;
};
