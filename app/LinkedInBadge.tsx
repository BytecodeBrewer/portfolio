"use client";

import { useEffect, useRef, useState } from "react";

export function LinkedInBadge() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [badgeLoaded, setBadgeLoaded] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const checkBadge = () => {
      const frames = Array.from(card.querySelectorAll("iframe"));
      setBadgeLoaded(frames.some((frame) => frame.offsetWidth > 100 && frame.offsetHeight > 100));
    };

    checkBadge();
    const observer = new MutationObserver(checkBadge);
    observer.observe(card, { childList: true, subtree: true });
    const timeout = window.setTimeout(checkBadge, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`linkedin-card${badgeLoaded ? " badge-loaded" : ""}`} aria-label="LinkedIn profile badge" ref={cardRef}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="lev-gusiev"
        data-version="v1"
      >
        <a className="badge-base__link LI-simple-link" href="https://de.linkedin.com/in/lev-gusiev/en?trk=profile-badge">Lev G.</a>
      </div>
      <div className="linkedin-badge-fallback">
        <div className="linkedin-fallback-header" aria-hidden="true">
          <span>Linked</span><b>in</b>
        </div>
        <div className="linkedin-fallback-content">
          <img className="linkedin-fallback-avatar" src="/profile/lev-linkedin.png" alt="Lev G." />
          <strong>Lev G.</strong>
          <p>Data, automation and systems projects.</p>
          <a href="https://de.linkedin.com/in/lev-gusiev/en?trk=profile-badge" target="_blank" rel="noreferrer">View profile</a>
        </div>
      </div>
    </div>
  );
}
