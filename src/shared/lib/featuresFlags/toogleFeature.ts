import { FeaturesFlags } from '@/shared/types/featuresFlags';

import { getFeaturesEnabled } from './setGetFeatures';

interface ToggleFeatureFlag<T> {
  name: keyof FeaturesFlags;
  newFeature: () => T;
  defaultFeature: () => T;
}

export const toggleFeature = <T>({ name, newFeature, defaultFeature }: ToggleFeatureFlag<T>): T => {
  if (getFeaturesEnabled(name)) {
    return newFeature();
  }

  return defaultFeature();
};
