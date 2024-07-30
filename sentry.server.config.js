import * as Sentry from '@sentry/nextjs'

import { SENTRY_SERVER_DSN } from '@/config'

try {
  Sentry.init({
    dsn: SENTRY_SERVER_DSN,
    tracesSampleRate: 1,
  })
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(`Ошибка инициализации Sentry: ${error.message}`)
}
