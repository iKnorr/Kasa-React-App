import React, { useState } from 'react';
import styles from './Dropdown.module.scss';
import { ArrowUp } from '../Icons/Arrow/ArrowUp';
import { ArrowDown } from '../Icons/Arrow/ArrowDown';

interface DropdownProps {
  title: string;
  content: string | JSX.Element;
}

const Dropdown = ({ title, content }: DropdownProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={styles.dropdownContainer} onClick={handleClick}>
      <div className={styles.dropdownTitle}>
        <span>{title}</span>
        {show ? <ArrowUp /> : <ArrowDown />}
      </div>
      {show && <div className={styles.dropdownContent}>{content}</div>}
    </div>
  );
};

export default Dropdown;
