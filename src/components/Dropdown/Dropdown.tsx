import React, { ReactNode, useState } from 'react';
import styles from './Dropdown.module.scss';
import { ArrowUp } from '../Icons/Arrow/ArrowUp';
import { ArrowDown } from '../Icons/Arrow/ArrowDown';

interface DropdownProps {
  title: string;
  children: ReactNode;
  context?: string;
  // width?: string;
  // height?: string;
  // fontSize?: string;
  // lineHeight?: string;
}

const Dropdown = ({
  title,
  children,
  context,
}: // width,
// height,
// fontSize,
// lineHeight,
DropdownProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  let titleStyles;
  let contentStyles;
  let containerStyles;

  if (context === 'about-page') {
    containerStyles = styles.dropdownContainerAbout;
    titleStyles = styles.dropdownTitleAbout;
    contentStyles = styles.dropdownContentAbout;
  } else if (context === 'accommodation-page') {
    containerStyles = styles.dropdownContainerAccommodation;
    titleStyles = styles.dropdownTitleAccommodation;
    contentStyles = styles.dropdownContentAccommodation;
  }

  return (
    <div
      className={`${styles.dropdownContainer} ${containerStyles}`}
      onClick={handleClick}
    >
      <div className={`${styles.dropdownTitle} ${titleStyles}`}>
        <span>{title}</span>
        {show ? <ArrowUp /> : <ArrowDown />}
      </div>
      {show && (
        <div className={`${styles.dropdownContent} ${contentStyles}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
