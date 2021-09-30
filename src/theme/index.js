import { createTheme } from '@material-ui/core/styles'
import darkPalette from './palette/dark'
import lightPalette from './palette/light'
import typography from './typography'

export const lightTheme = createTheme({ palette: lightPalette, typography: typography });
export const darkTheme = createTheme({ palette: darkPalette, typography: typography });
const theme = { light: lightTheme, dark: darkTheme }
export default theme;