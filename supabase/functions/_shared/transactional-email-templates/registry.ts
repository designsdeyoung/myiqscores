/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export type TemplateData = Record<string, unknown>

export interface TemplateEntry {
  component: React.ComponentType<TemplateData>
  subject: string | ((data: TemplateData) => string)
  to?: string
  displayName?: string
  previewData?: TemplateData
}

import { template as iqResults } from './iq-results.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  // Template components take their own specific props; the registry treats
  // props as opaque TemplateData supplied by the caller at render time.
  'iq-results': iqResults as unknown as TemplateEntry,
}
