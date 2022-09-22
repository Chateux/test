import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from '../components/styles/defaultTheme'
import GlobalStyle from '../components/styles/globalStyles'
import store from '../features/store';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
     <Provider store={store}>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      </Provider>
    </>
  )
}