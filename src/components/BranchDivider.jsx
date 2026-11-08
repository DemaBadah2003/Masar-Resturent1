
import React from "react";

export default function BranchDivider() {
  return (
    <div className="branch-divider" aria-hidden="true">
      <svg viewBox="0 0 200 40">
        <line
          x1="0"
          y1="20"
          x2="200"
          y2="20"
          stroke="#B5602F"
          strokeWidth="1"
        />
        <circle cx="100" cy="20" r="4" fill="#5B6B43" />
        <circle cx="80" cy="14" r="3" fill="#5B6B43" />
        <circle cx="120" cy="26" r="3" fill="#5B6B43" />
        <circle cx="60" cy="24" r="2.5" fill="#5B6B43" />
        <circle cx="140" cy="16" r="2.5" fill="#5B6B43" />
      </svg>
    </div>
  );
}