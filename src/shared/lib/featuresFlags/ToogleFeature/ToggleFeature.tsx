import { FC, ReactElement } from 'react';

import { FeaturesFlags } from '@/shared/types/featuresFlags';

import { getFeaturesEnabled } from '../setGetFeatures';

interface ToggleFeatureFlagComponent {
  name: keyof FeaturesFlags;
  newFeature: ReactElement;
  defaultFeature: ReactElement;
}

export const ToggleFeature: FC<ToggleFeatureFlagComponent> = ({
  name,
  newFeature,
  defaultFeature,
}) => {
  if (getFeaturesEnabled(name)) {
    return newFeature;
  }
  return defaultFeature;
};
