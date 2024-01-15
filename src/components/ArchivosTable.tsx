import Box from '@mui/material/Box'
import { IArchivo } from '@/models'
import { GridColDef } from '@mui/x-data-grid'
import MyDataGrid from '@/components/MyDataGrid'

interface Props {
  archivos: IArchivo[]
}

export default async function ArchivosTable({ archivos }: Props) {
  const columns = [
    {
      field: 'Nro_de_referencia',
      headerName: 'Nro_de_referencia',
      minWidth: 180,
      flex: 1,
    },
    {
      field: 'Asociacion_de_tabla',
      headerName: 'Asociacion_de_tabla',
      minWidth: 200,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Clave_ajena',
      headerName: 'Clave_ajena',
      minWidth: 130,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Desactivado',
      headerName: 'Desactivado',
      minWidth: 110,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Descripcion',
      headerName: 'Descripcion',
      minWidth: 130,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'Fecha_de_ultima_actualizacion',
      headerName: 'Fecha_de_ultima_actualizacion',
      minWidth: 210,
      flex: 2,
      filterable: false,
    },

    {
      field: 'ID_de_archivo_anexo',
      headerName: 'ID_de_archivo_anexo',
      minWidth: 180,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Indice_de_palabras_clave',
      headerName: 'Indice_de_palabras_clave',
      minWidth: 180,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Nombre',
      headerName: 'Nombre',
      minWidth: 130,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Nombre_de_archivo_de_usuario',
      headerName: 'Nombre_de_archivo_de_usuario',
      minWidth: 400,
      flex: 2,
      filterable: true,
    },
    {
      field: 'Nombre_de_archivo_local',
      headerName: 'Nombre_de_archivo_local',
      minWidth: 400,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Privado',
      headerName: 'Privado',
      minWidth: 280,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Secuencia',
      headerName: 'Secuencia',
      minWidth: 170,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Tamanio',
      headerName: 'Tamanio',
      minWidth: 150,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Tipo',
      headerName: 'Tipo',
      minWidth: 170,
      flex: 2,
      filterable: false,
    },
    {
      field: 'Tipo_de_contenido',
      headerName: 'Tipo_de_contenido',
      minWidth: 170,
      flex: 2,
      filterable: false,
    },
  ]

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <MyDataGrid
        columns={columns as GridColDef[]}
        rows={archivos}
      />
    </Box>
  )
}
