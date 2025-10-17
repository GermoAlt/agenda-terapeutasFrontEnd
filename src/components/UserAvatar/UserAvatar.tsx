import React, { useEffect, useRef, useState } from 'react';
import AvatarButton from './AvatarButton/AvatarButton';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';
import './AvatarButton/AvatarButton.css';
import './ProfileDropdown/ProfileDropdown.css';
import './UserAvatar.css';
import type { AvatarUser } from '../../types/AvatarUser';

interface UserAvatarProps {
  user: AvatarUser;
}

type MenuAction = 'account' | 'settings' | 'logout';



const UserAvatar: React.FC<UserAvatarProps> = ({ user}

  ) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((p) => !p);

  const handleAction = (action: MenuAction) => {
    setIsOpen(false);
    switch (action) {
      case 'account':
        // navegar a cuenta
        break;
      case 'settings':
        // navegar a configuración
        break;
      case 'logout':
        // cerrar sesión
        break;
    }
  };

  return (
    <div className="profile-section">
      <AvatarButton
        ref={buttonRef}
        userName={user.userName}
        avatarUrl={user.avatarUrl}
        initials={user.initials}
        onClick={toggleDropdown}
      />

      <ProfileDropdown
        ref={dropdownRef}
        isOpen={isOpen}
        user={user}
        onAction={handleAction}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default UserAvatar;
