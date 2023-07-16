import React from 'react';
import Tag from './Tag';
import styles from './Tags.module.scss';
import { AccommodationData } from '../../types/accommodation.types';

const Tags = ({ id, tags }: Pick<AccommodationData, 'id' | 'tags'>) => {
  return (
    <div className={styles.tags}>
      {tags?.map(tagTitle => (
        <Tag key={`${id}-${tagTitle}`} tagTitle={tagTitle} />
      ))}
    </div>
  );
};

export default Tags;
