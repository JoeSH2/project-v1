import { FeaturesFlags } from '@/shared/types/featuresFlags';

let featuresFlag: FeaturesFlags = {};

export const setFeaturesFlag = (newFlags?: FeaturesFlags) => {
  if (newFlags) {
    featuresFlag = newFlags;
  }
  return {};
};

export const getFeaturesEnabled = (feature: keyof FeaturesFlags) => featuresFlag[feature];
