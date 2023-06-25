import { React, useState } from "react";

export default function TwitterFollowCard({
  children,
  formatUsername,
  userName,
  name = "unknown",
}) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="avatar"
        />
        <div className="tw-followCard-info">
          {children || name}
          <span className="tw-followCard-infoUserName">{formatUsername}</span>
        </div>
      </header>
      <aside>
        <button onClick={() => handleClick()} className={buttonClassName}>
          {text}
        </button>
      </aside>
    </article>
  );
}
