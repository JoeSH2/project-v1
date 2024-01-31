import { FC, useState } from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import StarIcon from '../../../assets/icon/star.svg';
import { Svg } from '../../Svg/ui/Svg';
import style from './StarsRating.module.scss';
import { HStack } from '../../Stack/HStack/HStack';

interface StarsRatingProps {
  className?: string;
  sizeStar?: number;
  rating: number;
  onSelect?: (star: number) => void;
}

const stars = [1, 2, 3, 4, 5];
export const StarsRating: FC<StarsRatingProps> = props => {
  const { className, rating, onSelect, sizeStar = 30 } = props;
  const [hoveredStar, setHoveredStar] = useState(rating);
  const [isSelect, setIsSelect] = useState(Boolean(rating));

  const onHover = (star: number) => () => {
    if (!isSelect) {
      setHoveredStar(star);
    }
  };
  const onLeave = () => {
    if (!isSelect) {
      setHoveredStar(0);
    }
  };
  const onClick = (star: number) => () => {
    if (!isSelect) {
      onSelect?.(star);
      setIsSelect(true);
      setHoveredStar(star);
    }
  };

  return (
    <HStack className={classNames(style.StarsRating, {}, [className])}>
      {stars.map(star => (
        <Svg
          onClick={onClick(star)}
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          className={classNames(
            style.star,
            {
              [style.selected]: isSelect,
              [style.hovered]: hoveredStar >= star && isSelect,
              [style.hovered]: hoveredStar >= star,
            },
            [],
          )}
          height={sizeStar}
          width={sizeStar}
          key={star}
          Svg={StarIcon}
        />
      ))}
    </HStack>
  );
};
