import React from 'react';
import './ProfileDropdown.css';
import type { AvatarUser } from '../../../types/AvatarUser';

type MenuAction = 'account' | 'settings' | 'logout';

interface ProfileDropdownProps {
  isOpen: boolean;
  user: AvatarUser;
  onAction: (action: MenuAction) => void;
  onClose: () => void;
}

const ProfileDropdown = React.forwardRef<HTMLDivElement, ProfileDropdownProps>(
  ({user, isOpen, onAction, onClose }) => (
    <>
      <div
        className={`profile-dropdown ${isOpen ? 'active' : ''}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div className="dropdown-header">
          <div className="dropdown-avatar">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt={user.userName} className="dropdown-avatar-image" />
            ) : (
              user.initials
            )}
          </div>
          <div className="dropdown-name">{user.userName}</div>
          {user.userEmail && <div className="dropdown-email">{user.userEmail}</div>}
        </div>

        <div className="profile-dropdown-menu">
          <button
            type="button"
            className="profile-dropdown-item divider"
            onClick={() => onAction('account')}
          >
            My Account
          </button>

          <button
            type="button"
            className="profile-dropdown-item divider"
            onClick={() => onAction('settings')}
          >
            Settings
          </button>

          <button
            type="button"
            className="profile-dropdown-item logout"
            onClick={() => onAction('logout')}
          >
            Log out
          </button>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={onClose} />}
    </>
  )
);

ProfileDropdown.displayName = 'ProfileDropdown';
export default ProfileDropdown;
