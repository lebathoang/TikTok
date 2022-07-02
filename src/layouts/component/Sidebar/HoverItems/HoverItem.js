import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HoverItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '~/Components/Image';
import Button from '~/Components/Button';

const cx = classNames.bind(styles);

function HoverItem({ data }) {
  const currentButton = false;

  const [buttonFollow, setButtonFollow] = useState([1]);

  const handleFollow = () => {
    fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=less')
      .then((res) => res.json())
      .then(function (response) {
        response.data.forEach((database) => {
          if (!buttonFollow.includes(database.id)) {
            buttonFollow.push(database.id);
            setButtonFollow(buttonFollow);
            currentButton = true;
          } else {
            // eslint-disable-next-line
            buttonFollow = buttonFollow.filter((follow) => follow != database.id);
            setButtonFollow(buttonFollow);
            currentButton = false;
          }
        });
      });
  };

  return (
    <div className={cx('wrapper-hover')}>
      <div className={cx('head-hover')}>
        <Link to={`/@${data.nickname}`}>
          <Image className={cx('avatar-hover')} src={data.avatar} />
        </Link>
        {currentButton ? (
          <Button follow onClick={handleFollow}>
            Following
          </Button>
        ) : (
          <Button primary onClick={handleFollow}>
            Follow
          </Button>
        )}
      </div>
      <Link to={`/@${data.nickname}`} className={cx('main-hover')}>
        <div>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check-hover')} icon={faCheckCircle} />}
        </div>
        <span className={cx('usename-hover')}>{data.nickname}</span>
      </Link>
      <div className={cx('footer-hover')}>
        <div className={cx('footer-span')}>
          <span className={cx('footer-amount')}>{data.followers_count}M</span>
          <span className={cx('footer-label')}>Followers</span>
        </div>
        <div className={cx('footer-span')}>
          <span className={cx('footer-amount')}>{data.likes_count}M</span>
          <span className={cx('footer-label')}>Likes</span>
        </div>
      </div>
    </div>
  );
}
export default HoverItem;
