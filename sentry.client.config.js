import * as Sentry from '@sentry/nextjs'

import { SENTRY_CLIENT_DSN } from '@/config'

try {
  Sentry.init({
    dsn: SENTRY_CLIENT_DSN,
    tracesSampleRate: 1,
    integrations: [new Sentry.BrowserTracing()],
  })
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(`Ошибка инициализации Sentry: ${error.message}`)
}
