import React from 'react';

interface ProgressBarOptions {
  size: number;
  percentage: number;
  lineWidth: number;
  color: string;
  value: number;
}

export const ProgressBar = ({ size, percentage, lineWidth, color, value }: ProgressBarOptions) => {
  const radius = (size - lineWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle className="circle-background" cx={size / 2} cy={size / 2} r={radius} strokeWidth={`${lineWidth}px`} />
      <circle
        className="circle-progress"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${lineWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        stroke={color}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text className="circle-text" x="50%" y="50%" dy=".3em" textAnchor="middle" fontSize="40px" fill={color}>
        {value}
      </text>
    </svg>
  );
};
