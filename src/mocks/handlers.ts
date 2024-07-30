import { rest } from 'msw'

import { exampleData } from '@/mocks/data/example'

import { getResponse } from './utils'

export const handlers = [rest.get(`/some_url`, getResponse(exampleData))]
