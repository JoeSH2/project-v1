import React, { FC } from 'react';

import { Modal } from '@/shared/ui/Modal';

import { LoginFormAsync } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => (
  <Modal lazy isOpen={isOpen} onClose={onClose}>
    <LoginFormAsync />
  </Modal>
);
