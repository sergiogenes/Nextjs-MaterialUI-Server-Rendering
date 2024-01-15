import Box from '@mui/material/Box'
import { ITarea } from '@/models'
import { GridColDef } from '@mui/x-data-grid'
import MyDataGrid from '@/components/MyDataGrid'

interface Props {
  tareas: ITarea[]
}

export default async function TareasTable({ tareas }: Props) {
  const columns = [
    {
      field: 'Asignado',
      headerName: 'Asignado',
      minWidth: 180,
      flex: 1,
    },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 180,
      flex: 1,
    },
    {
      field: 'Fecha_de_inicio',
      headerName: 'Fecha_de_inicio',
      minWidth: 180,
      flex: 2,
    },

    {
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'Fecha_de_vencimiento',
      headerName: 'Fecha_de_vencimiento',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'Herencia',
      headerName: 'Herencia',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'ID_de_contacto',
      headerName: 'ID_de_contacto',
      minWidth: 130,
      flex: 2,
    },
    {
      field: 'ID_de_incidente',
      headerName: 'ID_de_incidente',
      minWidth: 130,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: true,
    },
    {
      field: 'Motivo',
      headerName: 'Motivo',
      minWidth: 280,
      flex: 2,
    },
    {
      field: 'Nombre',
      headerName: 'Nombre',
      minWidth: 170,
      flex: 2,
    },
    {
      field: 'Notas',
      headerName: 'Notas',
      minWidth: 350,
      flex: 2,
    },
    {
      field: 'Plantilla_de_tarea',
      headerName: 'Plantilla_de_tarea',
      minWidth: 170,
      flex: 2,
    },
  ]

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <MyDataGrid
        columns={columns as GridColDef[]}
        rows={tareas}
      />
    </Box>
  )
}
