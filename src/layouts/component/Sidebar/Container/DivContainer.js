import styles from './divcontainer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function DivContainer({ children }) {
  return <nav className={cx('wrapper')}>{children}</nav>;
}

export default DivContainer;
