import React, { useState, useRef, useEffect } from 'react';
import './UserAvatar.css';

interface UserAvatarProps {
  userName?: string;
  avatarUrl?: string;
  initials?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  userName = "John Doe",
  avatarUrl,
  initials = "JD"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

//   const handleMenuClick = (action: string) => {
//     console.log(`Clicked: ${action}`);
//     setIsOpen(false);
    
//     switch (action) {
//       case 'account':
//         // Navegar a cuenta
//         break;
//       case 'settings':
//         // Navegar a configuración
//         break;
//       case 'logout':
//         // Manejar logout
//         break;
//     }
//   };

  return (
    <div className="profile-section">
      <button 
        ref={buttonRef}
        className="profile-button" 
        onClick={toggleDropdown}
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt={userName} className="avatar-image" />
        ) : (
          initials
        )}
      </button>
      
      <div 
        ref={dropdownRef}
        className={`profile-dropdown ${isOpen ? 'active' : ''}`}
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
        </div>
        
        <div className="dropdown-menu">
          <button 
            className="dropdown-item" 
            onClick={() => handleMenuClick('account')}
          >
            My Account
          </button>
          <button 
            className="dropdown-item" 
            onClick={() => handleMenuClick('settings')}
          >
            Settings
          </button>
          <button 
            className="dropdown-item logout" 
            onClick={() => handleMenuClick('logout')}
          >
            Log out
          </button>
        </div>
      </div>
      
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default UserAvatar;