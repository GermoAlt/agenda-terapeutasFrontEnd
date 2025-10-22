import React, { useEffect, useRef } from "react";
import AvatarButton from "./AvatarButton/AvatarButton";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import "./AvatarButton/AvatarButton.css";
import "./ProfileDropdown/ProfileDropdown.css";
import "./UserAvatar.css";
import type { AvatarUser } from "../../types/AvatarUser";
import { useModal } from "../../hooks/useModal";

interface UserAvatarProps {
  user: AvatarUser;
}

type MenuAction = "account" | "settings" | "logout";

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  const { isOpen, closeModal, toggleModal } = useModal(false);
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
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAction = (action: MenuAction) => {
    closeModal();
    switch (action) {
      case "account":
        // navegar a cuenta
        break;
      case "settings":
        // navegar a configuración
        break;
      case "logout":
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
        onClick={toggleModal}
      />

      <ProfileDropdown
        ref={dropdownRef}
        isOpen={isOpen}
        user={user}
        onAction={handleAction}
        onClose={() => closeModal()}
      />
    </div>
  );
};

export default UserAvatar;
