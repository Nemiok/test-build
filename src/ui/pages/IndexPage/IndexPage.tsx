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
        <SMSField
          autoComplete="one-time-code"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>
    </DefaultLayout>
  )
}
