import { ArticleView } from 'entity/Article';
import { FC } from 'react';
import IconGrid from 'shared/assets/icon/grid.svg';
import IconLine from 'shared/assets/icon/line.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import style from './ViewSwitcher.module.scss';

interface ViewSwitcherProps {
   className?: string;
   view: ArticleView;
   onChangeView: (view: ArticleView) => void
}

export const ViewSwitcher: FC<ViewSwitcherProps> = (props) => {
  const { className, onChangeView, view } = props;

  const activeSmall = view === 'SMALL';
  const activeBig = view === 'BIG';

  const onClickView = (view: ArticleView) => () => {
    onChangeView(view);
  };

  return (
    <div className={classNames(style.viewSwitcher, {}, [className])}>
      <Button onClick={onClickView('SMALL')} theme={ButtonTheme.CLEAR}>
        <IconGrid className={classNames(style.viewIcon, { [style.active]: activeSmall }, [])} width={35} height={35} />
      </Button>
      <Button onClick={onClickView('BIG')} theme={ButtonTheme.CLEAR}>
        <IconLine className={classNames(style.viewIcon, { [style.active]: activeBig }, [])} width={35} height={35} />
      </Button>
    </div>
  );
};
