import React from 'react';
import styles from './Tag.module.scss';

interface TagProps {
  tagTitle: string;
}

const Tag = ({ tagTitle }: TagProps) => {
  return <div className={styles.tag}>{tagTitle}</div>;
};

export default Tag;
