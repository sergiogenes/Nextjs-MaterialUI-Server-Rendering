import Box from '@mui/material/Box'
import { ILogActividad } from '@/models'
import { GridColDef } from '@mui/x-data-grid'
import MyDataGrid from '@/components/MyDataGrid'

interface Props {
  logs: ILogActividad[]
}

export default async function LogsTable({ logs }: Props) {
  const columns = [
    {
      field: 'ID_de_contacto',
      headerName: 'ID_de_contacto',
      minWidth: 130,
      flex: 1,
    },
    {
      field: 'ID_de_incidente',
      headerName: 'ID_de_incidente',
      minWidth: 130,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: true,
    },
    {
      field: 'Fecha',
      headerName: 'Fecha',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'Sector',
      headerName: 'Sector',
      minWidth: 230,
      flex: 2,
    },
    {
      field: 'Asesor',
      headerName: 'Asesor',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'Accion_realizada',
      headerName: 'Accion_realizada',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'Descripcion',
      headerName: 'Descripcion',
      minWidth: 350,
      flex: 2,
    },
    {
      field: 'ID_de_tipo_de_transaccion',
      headerName: 'ID_de_tipo_de_transaccion',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'Inicial',
      headerName: 'Inicial',
      minWidth: 110,
      flex: 2,
    },
    {
      field: 'Direccion_IP_del_cliente',
      headerName: 'Direccion_IP_del_cliente',
      minWidth: 180,
      flex: 2,
    },
  ]

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <MyDataGrid
        columns={columns as GridColDef[]}
        rows={logs}
      />
    </Box>
  )
}
