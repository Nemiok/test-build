import { SMSField } from '@sds/smsfield'
import { useState } from 'react'

import { DefaultLayout } from '@/ui/layouts/DefaultLayout'

export const IndexPage = () => {
  const [value, setValue] = useState('')
  console.log(value)

  return (
    <DefaultLayout>
      <div>
        <h1>Index Page</h1>
        <form>
          <SMSField
            autoComplete="one-time-code"
            inputMode="numeric"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
        </form>
      </div>
    </DefaultLayout>
  )
}
