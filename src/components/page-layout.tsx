import React from "react";
import { useFlags } from "launchdarkly-react-client-sdk";
import { launchBannerFlagKey, AllFeatureFlags } from "../services/feature-flag";

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     general-render-launch-banner
// Setup:
//     Show to users with flag value: true
const PromotionalBanner = () => (
  <div className="promotional-banner">
    <p>50% launch sale! Use code TAKEHOME</p>
  </div>
);

export const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const flags = useFlags<AllFeatureFlags>();

  return (
    <div className={`page-layout ${className}`}>
      {flags[launchBannerFlagKey] && <PromotionalBanner />}
      {children}
    </div>
  );
};
