'use client';

export const TranslateIcon = ({ color = '#575551' }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="16"
    viewBox="0 0 19 16"
    fill="none"
  >
    <path
      d="M11 15L14.5 6L18 15M11.875 13H17.125M1 3H8M8 3H10M8 3C8 4.63 7.207 6.926 5.761 8.655M5.761 8.655C4.79 9.82 3.521 10.725 2 11M5.761 8.655L3 6M5.761 8.655L8.2 11M5.5 2.818V1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
