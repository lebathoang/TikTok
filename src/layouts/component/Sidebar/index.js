import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import DivContainer from './Container/DivContainer';
import AccountItems from '~/Components/AccountItems';
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
  HastagIcon,
  MusicIcon,
} from '~/Components/Icons';
import styles from './Sidebar.module.scss';
import Hastag from './Discover/hastag';
import Music from './Discover/music';
import HoverItem from './HoverItems/HoverItem';

const cx = classNames.bind(styles);
function Sidebar() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=less')
      .then((res) => res.json())
      .then((response) => setResults(response.data));
  }, []);

  return (
    <div className={cx('wrap')}>
      <div className={cx('div-scrollbar')}>
        <aside className={cx('wrapper')}>
          <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
            <MenuItem
              title="Following"
              to={config.routes.following}
              icon={<UserGroupIcon />}
              activeIcon={<UserGroupActiveIcon />}
            />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
          </Menu>
          <DivContainer>
            <p className={cx('acount-title')}>Suggested accounts</p>
            {results.map((item) => (
              <>
                <div className={cx('suggest-item')}>
                  <AccountItems key={item.id} data={item} />
                  <div className={cx('hover-item')}>
                    <HoverItem key={item.id} data={item} />
                  </div>
                </div>
              </>
            ))}
            <button className={cx('all-item')}>See all</button>
          </DivContainer>
          <DivContainer>
            <p className={cx('acount-title')}>Suggested accounts</p>
            {results.map((item) => (
              <>
                <AccountItems key={item.id} data={item} />
              </>
            ))}
            <button type="button" className={cx('all-item')}>
              See more
            </button>
          </DivContainer>
          <DivContainer>
            <p className={cx('acount-title')}>Discover</p>
            <div className={cx('d-flex')}>
              <Hastag title="7749 hieuung" icon={<HastagIcon />} to={config.routes.hastag} />
              <Hastag title="genzlife" icon={<HastagIcon />} to={config.routes.hastag} />
              <Hastag title="truyen ngon tinh" icon={<HastagIcon />} to={config.routes.hastag} />
              <Music
                title="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media - h0n"
                icon={<MusicIcon />}
                to={config.routes.music}
              />
              <Music title="Sóng gió - Jack - K-ICM" icon={<MusicIcon />} to={config.routes.music} />
            </div>
          </DivContainer>
          <DivContainer>
            <div className={cx('outside-item')}>
              <a href="#" className={cx('link-item')}>
                About
              </a>
              <a href="#" className={cx('link-item')}>
                TikTokBrowse
              </a>
              <a href="#" className={cx('link-item')}>
                Newsroom
              </a>
              <a href="#" className={cx('link-item')}>
                Contact
              </a>
              <a href="#" className={cx('link-item')}>
                Careers
              </a>
              <a href="#" className={cx('link-item')}>
                ByteDance
              </a>
            </div>
            <div className={cx('outside-item')}>
              <a href="#" className={cx('link-item')}>
                TikTok for Good
              </a>
              <a href="#" className={cx('link-item')}>
                Advertise
              </a>
              <a href="#" className={cx('link-item')}>
                Developers
              </a>
              <a href="#" className={cx('link-item')}>
                Transparency
              </a>
              <a href="#" className={cx('link-item')}>
                TikTok Rewards
              </a>
            </div>
            <span className={cx('copyright')}>© 2022 TikTok</span>
          </DivContainer>
        </aside>
      </div>
    </div>
  );
}
export default Sidebar;
