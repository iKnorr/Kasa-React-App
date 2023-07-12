import React, { ReactNode, useState } from 'react';
import styles from './Dropdown.module.scss';
import { ArrowUp } from '../Icons/Arrow/ArrowUp';
import { ArrowDown } from '../Icons/Arrow/ArrowDown';

interface DropdownProps {
  title: string;
  children: ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
}

const Dropdown = ({
  title,
  children,
  width,
  height,
  fontSize,
  lineHeight,
}: DropdownProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className={styles.dropdownContainer}
      onClick={handleClick}
      style={{ width: width, height: height }}
    >
      <div className={styles.dropdownTitle}>
        <span style={{ fontSize: fontSize }}>{title}</span>
        {show ? <ArrowUp /> : <ArrowDown />}
      </div>
      {show && (
        <div
          className={styles.dropdownContent}
          style={{ fontSize: fontSize, lineHeight: lineHeight }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
