import React from 'react'
import { waitFor } from '@testing-library/react'
import { useRouter } from 'next/router'

import { IndexPage } from '@/ui/pages/IndexPage'
import { initServerMocks } from '@/mocks'
import { renderWithProviders } from '@/lib/utils/jest'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// @ts-ignore
useRouter.mockReturnValue({
  query: {},
  push: () => {},
})

it('renders index page successfully', async () => {
  await initServerMocks()

  const { container } = renderWithProviders(<IndexPage />)

  await waitFor(() => {
    expect(container).toBeInTheDocument()
  })
})
