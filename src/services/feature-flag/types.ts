import {
  detailsCtaFlagKey,
  launchBannerFlagKey,
  profileSectionFlagKey,
} from "./feature-flag-config";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface AllFeatureFlags {
  [profileSectionFlagKey]: "not-enrolled" | "control" | "variation";
  [detailsCtaFlagKey]: HEX;
  [launchBannerFlagKey]: boolean;
}
