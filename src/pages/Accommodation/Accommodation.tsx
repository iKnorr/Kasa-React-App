import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/data.json';
import styles from './Accommodation.module.scss';
import StarRating from '../../components/StarRating/StarRating';
import Dropdown from '../../components/Dropdown/Dropdown';
import { AccommodationData } from '../../types/accommodation.types';
import Carousel from '../../components/Carousel/Carousel';
import Tags from '../../components/Tag/Tags';
import UserAvatarName from '../../components/UserAvatarName/UserAvatarName';

const Accommodation = () => {
  const { id: idParams } = useParams();
  const navigate = useNavigate();

  const [accommodation, setAccommodation] = useState<AccommodationData>({
    id: '',
    title: '',
    cover: '',
    pictures: [],
    description: '',
    host: {
      name: '',
      picture: '',
    },
    rating: '',
    location: '',
    equipments: [],
    tags: [],
  });

  useEffect(() => {
    if (data.length === 0) {
      navigate('*');
    } else {
      const result = data.filter(d => d.id === idParams);
      if (result.length > 0) {
        setAccommodation({ ...result[0] });
      } else {
        navigate('*');
      }
    }
  }, [navigate, idParams]);

  const {
    id,
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  }: AccommodationData = accommodation;

  const equipmentList = () => {
    return (
      <ul className={styles.equipmentList}>
        {equipments?.map((e, index) => (
          <li key={`${index}-${e}`}>{e}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.accommondationContainer}>
      <Carousel images={pictures} />
      <section className={styles.infoSectionContainer}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.location}>{location}</span>
          <Tags id={id} tags={tags} />
        </div>
        <div className={styles.userProfileRatingContainer}>
          <StarRating rating={rating} />
          <UserAvatarName id={id} host={host} />
        </div>
      </section>
      <div className={styles.dropdownWrapper}>
        <Dropdown
          title="Description"
          children={<p className={styles.description}>{description}</p>}
          context="accommodation-page"
        />
        <Dropdown
          title="Équipements"
          children={equipmentList()}
          context="accommodation-page"
        />
      </div>
    </div>
  );
};

export default Accommodation;
