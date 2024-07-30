import { init } from '@sh/analytics'
import createSnowplowAdapter from '@sh/analytics/adapters/snowplow'
import createYaAdapter from '@sh/analytics/adapters/yaMetrika'

import { SNOWPLOW_ID, YANDEX_METRIKA_ID } from '@/config'

let isInitialized = false

export const initAnalytics = () => {
  if (!isInitialized) {
    isInitialized = true

    init({
      adapters: [createSnowplowAdapter(SNOWPLOW_ID), createYaAdapter(YANDEX_METRIKA_ID)],
    })
  }
}
