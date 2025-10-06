import React from 'react';
import './UserAvatar.css';

interface AvatarButtonProps {
  userName: string;
  avatarUrl?: string;
  initials: string;
  onClick: () => void;
}

const AvatarButton = React.forwardRef<HTMLButtonElement, AvatarButtonProps>(
  ({ userName, avatarUrl, initials, onClick }, ref) => (
    <button
      ref={ref}
      type="button"
      className="profile-button"
      onClick={onClick}
      aria-haspopup="menu"
      aria-label={`Open menu for ${userName}`}
    >
      {avatarUrl ? (
        <img src={avatarUrl} alt={userName} className="avatar-image" />
      ) : (
        initials
      )}
    </button>
  )
);

AvatarButton.displayName = 'AvatarButton';
export default AvatarButton;
