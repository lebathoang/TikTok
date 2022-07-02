import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './discover.module.scss';

const cx = classNames.bind(styles);

function Hastag({ title, to, icon }) {
  return (
    <Link className={cx('link')} to={to}>
      <div className={cx('wrapper')}>
        <span>{icon}</span>
        <p className={cx('title')}>{title}</p>
      </div>
    </Link>
  );
}

export default Hastag;
