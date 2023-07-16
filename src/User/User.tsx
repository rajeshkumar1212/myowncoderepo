import React, { FC } from 'react';
import styles from './User.module.scss';

interface UserProps {}

const User: FC<UserProps> = () => (
  <div className={styles.User}>
    User Component
  </div>
);

export default User;
