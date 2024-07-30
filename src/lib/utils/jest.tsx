import React from 'react'
import { Provider } from 'react-redux'
import { render, RenderOptions } from '@testing-library/react'

import { initStore } from '@/store'

interface IExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: ReturnType<typeof initStore>
}

interface IWrapperProps {
  children: React.ReactNode
}

export const renderWithProviders = (
  ui: React.ReactElement,
  { store = initStore(), ...renderOptions }: IExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: IWrapperProps) => <Provider store={store}>{children}</Provider>

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
