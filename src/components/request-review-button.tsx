import React from "react";

// Problem:
//     This should be coloured based on FF value
// Feature flag name:
//     details-section-cta-colour
// Setup:
//     Fill background color with flag value.

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;
interface RequestReviewButtonProps {
  backgroundColor: Color;
}
export const RequestReviewButton: React.FC<RequestReviewButtonProps> = ({
  backgroundColor,
}) => {
  return <button style={{ backgroundColor }}>Request doctor review</button>;
};
