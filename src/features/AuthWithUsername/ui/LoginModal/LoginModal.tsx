import React, { FC } from 'react';
import style from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  theme?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal lazy isOpen={isOpen} onClose={onClose}><LoginForm /></Modal>
);
