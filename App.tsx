import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', () => {
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;
        const ac = new AbortController();
        const form = input.closest('form');
        if (form) {
          form.addEventListener('submit', () => {
            ac.abort();
          });
        }
        navigator.credentials.get({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          otp: { transport:['sms'] },
          signal: ac.signal
        }).then(otp => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          input.value = otp.code;
          if (form) form.submit();
        }).catch(err => {
          console.log(err);
        });
      });
    }
  },[])

  return (
    <div>
      <form >
        <input autoComplete="one-time-code" inputMode="numeric" type="text" />
      </form>
    </div>  
  )
}

export default App
