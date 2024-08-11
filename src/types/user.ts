import type { ViteSSGContext } from 'vite-ssg'
import type { BaseApiResponse } from './common'

type UserModule = (ctx: ViteSSGContext) => void

interface Log {
  org_id: string
  ip_address: string
  user_agent: string
  referrer: string
}

interface RecordVisitorResponse extends BaseApiResponse {
  log: Log
}

export type { UserModule, RecordVisitorResponse }
