import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { DefaultTFuncReturn } from 'i18next';
import style from './RatingCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { StarsRating } from '@/shared/ui/StarsRating';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string | DefaultTFuncReturn;
  feedback?: boolean;
  modalTitle?: string | DefaultTFuncReturn;
  onSend?: (rate: number, feedback: string) => void;
  onCancel?: (rate: number) => void;
  rate?: number;
  size?: number;
}

export const RatingCard: FC<RatingCardProps> = props => {
  const { className, title, feedback, size = 34, rate = 0, modalTitle, onSend, onCancel } = props;
  const { t } = useTranslation('');

  const [isOpen, setIsOpen] = useState(false);
  const [countStar, setCountStar] = useState(rate);
  const [feedbackText, setFeedbackText] = useState('');

  const selectStar = (star: number) => {
    setCountStar(star);
    if (feedback) {
      setIsOpen(true);
    }
    if (onCancel) {
      onCancel(star);
    }
  };
  const onSendFeedback = () => {
    setIsOpen(false);
    onSend?.(countStar, feedbackText);
  };
  const onCancelFeedback = () => {
    setIsOpen(false);
    onCancel?.(countStar);
  };

  const modalContent = (
    <VStack data-testid='RatingCard.Modal' gap='gap16'>
      <Text theme='inverted' size='l' title={modalTitle} />
      <Input
        data-testid='RatingCard.Input'
        theme='clear'
        className={style.input}
        i18n-placeholder={t('Write a feedback')}
        value={feedbackText}
        onChange={feedbackText => setFeedbackText(feedbackText)}
      />
      <HStack full justify='justifyEnd' gap='gap8'>
        <Button
          data-testid='RatingCard.Cancel'
          onClick={onCancelFeedback}
          className={style.btn}
          theme={ButtonTheme.RED}
        >
          {t('Cancel')}
        </Button>
        <Button data-testid='RatingCard.Send' onClick={onSendFeedback} className={style.btn}>
          {t('Send')}
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <VStack data-testid='RatingCard' className={classNames(style.RatingCard, {}, [className])}>
      <Text size='l' title={title} />
      <StarsRating sizeStar={size} onSelect={selectStar} rating={countStar} />
      <BrowserView>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {modalContent}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpen} onOpen={() => undefined} onClose={() => setIsOpen(false)}>
          {modalContent}
        </Drawer>
      </MobileView>
    </VStack>
  );
};
