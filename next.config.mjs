import withLinaria from 'next-linaria'
import { withSentryConfig } from '@sentry/nextjs'
import { patchWebpackConfig } from 'next-global-css'
import StatoscopeWebpackPlugin from '@statoscope/webpack-plugin'
import withBundleAnalyzer from '@next/bundle-analyzer'

const withSentryPlugin = (config) => {
  return withSentryConfig(config, {
    silent: true,
    errorHandler: (err, invokeErr, compilation) => {
      compilation.warnings.push(`Sentry CLI Plugin: ${err.message}`)
    },
  })
}

const isAnalyzeEnabled = !!process.env.ANALYZE

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sentry: {
    hideSourceMaps: true,
  },
  env: {
    NEXT_PUBLIC_SENTRY_CLIENT_DSN: process.env.NEXT_PUBLIC_SENTRY_CLIENT_DSN,
    SENTRY_SERVER_DSN: process.env.SENTRY_SERVER_DSN,
  },
  webpack: (config, { isServer }) => {
    if (isAnalyzeEnabled) {
      config.plugins.push(
        // eslint-disable-next-line new-cap
        new StatoscopeWebpackPlugin.default({
          saveReportTo: './.next/report-[name]-[hash].html',
          saveStatsTo: './.next/stats-[name]-[hash].json',
        }),
      )
    }

    return patchWebpackConfig(config, { isServer })
  },
}

export default () => {
  const plugins = [withLinaria, withSentryPlugin, withBundleAnalyzer({ enabled: isAnalyzeEnabled })]

  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig)
}
