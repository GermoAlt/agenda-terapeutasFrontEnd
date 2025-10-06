import React, { useEffect, useRef, useState } from 'react';
import AvatarButton from './AvatarButton';
import ProfileDropdown from './ProfileDropdown';
import './UserAvatar.css';

interface UserAvatarProps {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
  initials?: string;
}

type MenuAction = 'account' | 'settings' | 'logout';

const UserAvatar: React.FC<UserAvatarProps> = ({
  userName = 'Joe Jonas',
  userEmail = 'jjonas@mail.com',
  avatarUrl,
  initials = 'JJ',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar al hacer clic fuera
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
    // acá irían tus rutas/acciones reales
    switch (action) {
      case 'account':
        // navigate('/account');
        break;
      case 'settings':
        // navigate('/settings');
        break;
      case 'logout':
        // logout();
        break;
    }
  };

  return (
    <div className="profile-section">
      <AvatarButton
        ref={buttonRef}
        userName={userName}
        avatarUrl={avatarUrl}
        initials={initials}
        onClick={toggleDropdown}
      />

      <ProfileDropdown
        ref={dropdownRef}
        isOpen={isOpen}
        userName={userName}
        userEmail={userEmail}
        avatarUrl={avatarUrl}
        initials={initials}
        onAction={handleAction}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default UserAvatar;
