import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import ProgressBar from "@badrap/bar-of-progress"
import { store } from './redux/store'
import { Provider } from 'react-redux'

const progress = new ProgressBar({
  size: 4,
  color: '#2666CF',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )


}

export default MyApp
