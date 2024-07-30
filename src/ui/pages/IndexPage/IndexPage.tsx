import { SMSField } from '@sds/smsfield'
import { useEffect, useState } from 'react'

import { DefaultLayout } from '@/ui/layouts/DefaultLayout'

export const IndexPage = () => {
  useEffect(() => {
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', (e) => {
        const input = document.querySelector('input[autocomplete="one-time-code"]')

        if (!input) return
        // Set up an AbortController to use with the OTP request
        const ac = new AbortController()
        const form = input.closest('form')

        if (form) {
          // Abort the OTP request if the user attempts to submit the form manually
          form.addEventListener('submit', () => {
            ac.abort()
          })
        }
        // Request the OTP via get()
        navigator.credentials
          .get({
            // @ts-ignore
            otp: { transport: ['sms'] },
            signal: ac.signal,
          })
          .then((otp) => {
            // When the OTP is received by the app client, enter it into the form
            // input and submit the form automatically
            // @ts-ignore
            input.value = otp.code

            if (form) form.submit()
          })
          .catch((error) => {
            console.error(error)
          })
      })
    }
  }, [])
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
        cake
      </div>
    </DefaultLayout>
  )
}
