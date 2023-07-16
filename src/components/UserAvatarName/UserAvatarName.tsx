import React from 'react';
import styles from './UserAvatarName.module.scss';
import { AccommodationData } from '../../types/accommodation.types';

const UserAvatarName = ({
  host,
  id,
}: Pick<AccommodationData, 'host' | 'id'>) => {
  return (
    <div className={styles.userAvatarNameContainer}>
      <div className={styles.nameWrapper}>
        {host?.name.split(' ').map(n => (
          <p key={`${id}-${n}`} className={styles.name}>
            {n}
          </p>
        ))}
      </div>
      <div className={styles.avatar}>
        <img src={host?.picture} alt={`${host?.name}-avatar`} />
      </div>
    </div>
  );
};

export default UserAvatarName;
