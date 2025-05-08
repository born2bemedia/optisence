import type { JSX } from 'react';

import {
  BusinessNeedsArticle,
  CustomerCentricArticle,
  DisruptArticle,
  SustainabilityStrategyArticle,
} from '../components';

export const articleComponents: Record<string, JSX.Element> = {
  '5-signs-your-business': <BusinessNeedsArticle />,
  'sustainability-as-strategy': <SustainabilityStrategyArticle />,
  'disrupt-or-be-disrupted': <DisruptArticle />,
  'customer-centric-strategy': <CustomerCentricArticle />,
};
