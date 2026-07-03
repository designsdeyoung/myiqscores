/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as iqResults } from './iq-results.tsx'
import { template as careerFit } from './career-fit.tsx'
import { template as improvementTips } from './improvement-tips.tsx'
import { template as discountOffer } from './discount-offer.tsx'
import { template as brainTeaser } from './brain-teaser.tsx'
import { template as challengeShare } from './challenge-share.tsx'
import { template as retestReminder } from './retest-reminder.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'iq-results': iqResults,
  'career-fit': careerFit,
  'improvement-tips': improvementTips,
  'discount-offer': discountOffer,
  'brain-teaser': brainTeaser,
  'challenge-share': challengeShare,
  'retest-reminder': retestReminder,
}
