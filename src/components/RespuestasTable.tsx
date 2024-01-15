import Box from '@mui/material/Box'
import { INotaPrivada, IRespuesta } from '@/models'
import { GridColDef } from '@mui/x-data-grid'
import MyDataGrid from '@/components/MyDataGrid'

interface Props {
  respuestas: IRespuesta[]
}

export default async function RespuestasTable({ respuestas }: Props) {
  type HtmlRendererProps = {
    value: string
  }

  const soloRespuestas = respuestas.filter(
    (respuesta) => respuesta.Tipo_de_entrada_de_hilo !== 'Nota'
  )

  const HtmlRenderer: React.FC<HtmlRendererProps> = ({ value }) => (
    <div dangerouslySetInnerHTML={{ __html: value ? value : '' }} />
  )

  const columns = [
    {
      field: 'Nro_Incidente',
      headerName: 'Nro_Incidente',
      minWidth: 150,
      flex: 1,
    },
    {
      field: 'Clave_ajena',
      headerName: 'Clave_ajena',
      minWidth: 130,
      flex: 2,
    },
    {
      field: 'Cuenta',
      headerName: 'Cuenta',
      minWidth: 180,
      flex: 2,
    },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 180,
      flex: 1,
    },
    {
      field: 'ID_de_contacto',
      headerName: 'ID_de_contacto',
      minWidth: 130,
      flex: 2,
    },
    {
      field: 'ID_de_cuenta_de_canal',
      headerName: 'ID_de_cuenta_de_canal',
      minWidth: 170,
      flex: 2,
    },
    {
      field: 'ID_de_hilo_del_incidente',
      headerName: 'ID_de_hilo_del_incidente',
      minWidth: 170,
      flex: 2,
    },
    {
      field: 'Secuencia',
      headerName: 'Secuencia',
      minWidth: 110,
      flex: 2,
    },
    {
      field: 'Texto',
      headerName: 'Texto',
      minWidth: 750,
      flex: 2,
      renderCell: HtmlRenderer,
    },
    {
      field: 'Tipo_de_entrada_de_hilo',
      headerName: 'Tipo_de_entrada_de_hilo',
      minWidth: 180,
      flex: 1,
    },
    {
      field: 'Peso',
      headerName: 'Peso',
      minWidth: 130,
      flex: 1,
    },
  ]

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <MyDataGrid
        columns={columns as GridColDef[]}
        rows={soloRespuestas}
      />
    </Box>
  )
}
