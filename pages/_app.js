import {ThemeProvider, CssBaseline, createTheme} from "@material-ui/core"
import theme from "../theme"

const customizer = createTheme(theme)

function MyApp({ Component, pageProps }) {
  return (
    <html style={{scrollBehavior: "smooth"}}>
      <ThemeProvider theme={customizer}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </html>
  )
}

export default MyApp
