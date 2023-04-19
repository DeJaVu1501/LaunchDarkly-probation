import React from "react";
import { useMedication } from "../services/mock-data";
import { RequestReviewButton } from "./request-review-button";
import { useFlags } from "launchdarkly-react-client-sdk";
import {
  detailsCtaFlagKey,
  profileSectionFlagKey,
  AllFeatureFlags,
} from "../services/feature-flag";

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     profile-render-details-section
// Setup:
//     Show to users with flag value 'variation'

const generateEmptyFeaturesTemplate = (profileSectionFeatureValue) => {
  return (
    <div>
      <h3>Realization {profileSectionFeatureValue} feature</h3>
      <p>Here is some interesting text</p>
    </div>
  );
};

export const MedicationDetails = () => {
  const medication = useMedication();
  const flags = useFlags<AllFeatureFlags>();

  const profileSectionFeatureValue = flags[profileSectionFlagKey];
  const detailsCtaFeatureValue = flags[detailsCtaFlagKey];

  if (profileSectionFeatureValue === "variation") {
    return (
      <div>
        <ul>
          <li>Common side effects: {medication.sideEffects}</li>
          <li>Warning signs: {medication.warnings}</li>
        </ul>
        <p>Experiencing any of these? Please contact your doctor</p>
        <RequestReviewButton backgroundColor={detailsCtaFeatureValue} />
      </div>
    );
  }

  if (profileSectionFeatureValue === "not-enrolled")
    generateEmptyFeaturesTemplate(profileSectionFeatureValue);

  if (profileSectionFeatureValue === "control")
    generateEmptyFeaturesTemplate(profileSectionFeatureValue);

  return <>Error template</>;
};
