import React from 'react';
import './UserAvatar.css';

type MenuAction = 'account' | 'settings' | 'logout';

interface ProfileDropdownProps {
  isOpen: boolean;
  userName: string;
  userEmail?: string;
  avatarUrl?: string;
  initials: string;
  onAction: (action: MenuAction) => void;
  onClose: () => void;
}

const ProfileDropdown = React.forwardRef<HTMLDivElement, ProfileDropdownProps>(
  ({ isOpen, userName, userEmail, avatarUrl, initials, onAction, onClose }, ref) => (
    <>
      <div
        ref={ref}
        className={`profile-dropdown ${isOpen ? 'active' : ''}`}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div className="dropdown-header">
          <div className="dropdown-avatar">
            {avatarUrl ? (
              <img src={avatarUrl} alt={userName} className="dropdown-avatar-image" />
            ) : (
              initials
            )}
          </div>
          <div className="dropdown-name">{userName}</div>
          {userEmail && <div className="dropdown-email">{userEmail}</div>}
        </div>

        {/* 🔁 RENOMBRADO para evitar conflicto con Bootstrap */}
        <div className="profile-dropdown-menu">
          <button
            type="button"
            className="profile-dropdown-item divider"
            onClick={() => onAction('account')}
            role="menuitem"
          >
            My Account
          </button>

          <button
            type="button"
            className="profile-dropdown-item divider"
            onClick={() => onAction('settings')}
            role="menuitem"
          >
            Settings
          </button>

          <button
            type="button"
            className="profile-dropdown-item logout"
            onClick={() => onAction('logout')}
            role="menuitem"
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