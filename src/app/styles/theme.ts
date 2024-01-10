import { createTheme } from '@mui/material/styles'
import { red, indigo } from '@mui/material/colors'
import type {} from '@mui/x-data-grid/themeAugmentation'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      paper: '#fff', // '#abb1b58a'
    },
  },
  components: {
    // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
    MuiDataGrid: {
      styleOverrides: {
        root: {
          height: '70vh',
          width: '90vw',
        },
        columnHeaders: {
          backgroundColor: indigo[200],
        },
        virtualScrollerRenderZone: {
          scrollbarColor: indigo[500], // Cambia el color según sea necesario
        },
      },
    },
  },
})

export default theme
