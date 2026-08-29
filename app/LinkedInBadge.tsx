"use client";

import { useEffect, useRef, useState } from "react";

export function LinkedInBadge() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [badgeLoaded, setBadgeLoaded] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const checkBadge = () => {
      setBadgeLoaded(Boolean(card.querySelector("iframe")));
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
        <span>LinkedIn profile</span>
        <strong>Lev G.</strong>
        <a href="https://de.linkedin.com/in/lev-gusiev/en?trk=profile-badge" target="_blank" rel="noreferrer">View profile</a>
      </div>
    </div>
  );
}
