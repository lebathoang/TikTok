import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://sc04.alicdn.com/kf/H5b0183557cec4043946f03208a7a29dat.jpg" alt="" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Toni Stark</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('usename')}>tonistark</span>
      </div>
    </div>
  );
}
export default AccountItems;
