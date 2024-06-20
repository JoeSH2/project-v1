import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox, Transition } from '@headlessui/react';

import { classNames } from '../../../../lib/classNames/classNames';
import { PositionPopup } from '../../styles/consts';

import popupStyles from '../../styles/popups.module.scss';
import style from './SelectList.module.scss';

type ThemeMenuPopup = 'clear' | 'theme';

type ListBox = { value: string; content: ReactNode };

interface MenuPopupProps {
  classNameList?: string;
  classNameBtn?: string;
  value?: ReactNode;
  items: ListBox[];
  onChange?: (value: any) => void;
  theme?: ThemeMenuPopup;
  readonly?: boolean;
  transition?: boolean;
  positionList?: PositionPopup;
}

export const SelectList: FC<MenuPopupProps> = props => {
  const {
    classNameList,
    classNameBtn,
    items,
    value,
    onChange,
    readonly,
    theme = 'theme',
    transition,
    positionList = 'bottom',
  } = props;
  const { t } = useTranslation();
  const defaultValueLanguage = t('Select from the list');

  const listOptions = (
    <Listbox.Options className={classNames(style.list, {}, [popupStyles[positionList]])}>
      {items.map((value, i) => (
        <Listbox.Option key={i} className={style.item} value={value.content}>
          {({ selected }) => (
            <span className={classNames('', { [style.selected]: selected }, [])}>{value.content}</span>
          )}
        </Listbox.Option>
      ))}
    </Listbox.Options>
  );

  return (
    <Listbox
      disabled={readonly}
      as='div'
      className={classNames(style.MenuPopup, { [popupStyles.disabled]: readonly }, [classNameList])}
      value={value ?? defaultValueLanguage}
      onChange={onChange}
    >
      <div className='relative mt-1'>
        <Listbox.Button className={classNames(style.button, {}, [classNameBtn, style[theme]])}>
          {value ?? defaultValueLanguage}
        </Listbox.Button>
        {transition ? (
          <Transition
            enter={popupStyles.enter}
            enterFrom={popupStyles.enterFrom}
            enterTo={popupStyles.enterTo}
            leave={popupStyles.leave}
            leaveFrom={popupStyles.leaveFrom}
            leaveTo={popupStyles.leaveTo}
          >
            {listOptions}
          </Transition>
        ) : (
          listOptions
        )}
      </div>
    </Listbox>
  );
};
