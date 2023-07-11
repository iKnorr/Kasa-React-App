import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json';
import styles from './Accommodation.module.scss';
import Tag from '../Tag/Tag';
import StarRating from '../StarRating/StarRating';

const Accommodation = () => {
  const { id: idParams } = useParams();
  const result = data.filter(d => d.id === idParams);
  const {
    id,
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = result[0];

  return (
    <>
      <div className={styles.carousel}>
        <h1>Carousel coming soon...</h1>
      </div>
      <section className={styles.infoSectionContainer}>
        <div className={styles.accommodationInfoContainer}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.location}>{location}</span>
            <div className={styles.tags}>
              {tags?.map(tagTitle => (
                <Tag key={`${id}-${tagTitle}`} tagTitle={tagTitle} />
              ))}
            </div>
          </div>
          <div className={styles.userProfileRatingContainer}>
            <div className={styles.ratingTagsContainer}>
              <StarRating rating={rating} />
            </div>
            <div className={styles.userAvatarNameContainer}>
              <div className={styles.nameWrapper}>
                {host.name.split(' ').map(n => (
                  <p key={`${id}-${n}`} className={styles.name}>
                    {n}
                  </p>
                ))}
              </div>
              <div className={styles.avatar}>
                <img src={host.picture} alt={`${host.name}-avatar`} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.UserProfileRatingContainer}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.location}>{location}</span>
          </div>
          <div className={styles.UserAvatarNameContainer}>
            <div>
              {host.name.split(' ').map(n => (
                <p key={`${id}-${n}`} className={styles.name}>
                  {n}
                </p>
              ))}
            </div>
            <div className={styles.avatar}>
              <img src={host.picture} alt={`${host.name}-avatar`} />
            </div>
          </div>
        </div>
        <div className={styles.ratingTagsContainer}>
          <div className={styles.tags}>
            {tags?.map(tagTitle => (
              <Tag key={`${id}-${tagTitle}`} tagTitle={tagTitle} />
            ))}
          </div>
          <StarRating rating={rating} />
        </div> */}
      </section>
    </>
  );
};

export default Accommodation;
