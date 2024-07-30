import process from 'process'

export const SENTRY_CLIENT_DSN = process.env.NEXT_PUBLIC_SENTRY_CLIENT_DSN || 'SENTRY_CLIENT_DSN'
export const SENTRY_SERVER_DSN = process.env.SENTRY_SERVER_DSN || 'SENTRY_SERVER_DSN'

export const YANDEX_METRIKA_ID = '11111111'
export const SNOWPLOW_ID = 'snowplow_id'
