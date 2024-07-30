import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { initStore } from '@/store'

import '@/assets/styles/fonts.css'
import '@sds/tokens/lib/style.css'
import '@sds/tokens-colors/lib/style.css'
import '@sds/tokens-typography/lib/style.css'

const App = ({ pageProps, Component }: AppProps) => {
  const store = initStore()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
