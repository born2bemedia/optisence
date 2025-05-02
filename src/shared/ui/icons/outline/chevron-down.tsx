'use client';

export const ChevronDown = ({ color = '#575551' }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
    >
      <g clipPath="url(#clip0_56_20)">
        <path
          d="M13.7908 2.69117L14.63 3.53113L10.0565 8.10617C9.98324 8.17992 9.89609 8.23845 9.8001 8.27838C9.70411 8.31832 9.60117 8.33888 9.49721 8.33888C9.39324 8.33888 9.2903 8.31832 9.19431 8.27838C9.09832 8.23845 9.01118 8.17992 8.93789 8.10617L4.36206 3.53113L5.20123 2.69196L9.49602 6.98596L13.7908 2.69117Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_56_20">
          <rect
            width="9.5"
            height="19"
            fill="white"
            transform="translate(19 0.75) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
