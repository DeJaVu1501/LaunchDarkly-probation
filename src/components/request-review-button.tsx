import React from "react";
import { Color } from "../services/feature-flag";

// Problem:
//     This should be coloured based on FF value
// Feature flag name:
//     details-section-cta-colour
// Setup:
//     Fill background color with flag value.

interface RequestReviewButtonProps {
  backgroundColor?: Color;
}
export const RequestReviewButton: React.FC<RequestReviewButtonProps> = ({
  backgroundColor = "#FFFFFF",
}) => {
  return <button style={{ backgroundColor }}>Request doctor review</button>;
};
