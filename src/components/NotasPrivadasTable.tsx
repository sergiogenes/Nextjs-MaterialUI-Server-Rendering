import Box from '@mui/material/Box'
import { INotaPrivada } from '@/models'
import { GridColDef } from '@mui/x-data-grid'
import MyDataGrid from '@/components/MyDataGrid'

interface Props {
  nota_privada: INotaPrivada[]
}

export default async function NotasPrivadasTable({ nota_privada }: Props) {
  type HtmlRendererProps = {
    value: string
  }

  const HtmlRenderer: React.FC<HtmlRendererProps> = ({ value }) => (
    <div dangerouslySetInnerHTML={{ __html: value ? value : '' }} />
  )

  const columns = [
    // {
    //   field: 'Nro_de_referencia',
    //   headerName: 'Nro_de_referencia',
    //   minWidth: 150,
    //   flex: 1,
    //   headerClassName: 'theme--header',
    // },
    // {
    //   field: 'ID_de_incidente',
    //   headerName: 'ID_de_incidente',
    //   minWidth: 180,
    //   flex: 2,
    //   headerClassName: 'theme--header',
    //   filterable: false,
    // },
    // {
    //   field: 'ID_de_hilo_del_incidente',
    //   headerName: 'ID_de_hilo_del_incidente',
    //   minWidth: 180,
    //   flex: 2,
    //   headerClassName: 'theme--header',
    //   filterable: false,
    // },
    {
      field: 'Fecha_de_creacion',
      headerName: 'Fecha_de_creacion',
      type: 'dateTime',
      minWidth: 180,
      flex: 1,
      headerClassName: 'theme--header',
      filterable: false,
    },
    {
      field: 'Fecha_de_cierre',
      headerName: 'Fecha_de_cierre',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
      filterable: false,
    },

    // {
    //   field: 'Modo_de_Contacto',
    //   headerName: 'Modo_de_Contacto',
    //   minWidth: 180,
    //   flex: 2,
    //   headerClassName: 'theme--header',
    //   filterable: false,
    // },
    {
      field: 'Jerarquia_de_categoria',
      headerName: 'Jerarquia_de_categoria',
      minWidth: 180,
      flex: 2,
      headerClassName: 'theme--header',
    },
    // {
    //   field: 'ID_de_categoria',
    //   headerName: 'ID_de_categoria',
    //   minWidth: 180,
    //   flex: 2,
    //   headerClassName: 'theme--header',
    //   filterable: false,
    // },
    // {
    //   field: 'Estado',
    //   headerName: 'Estado',
    //   minWidth: 170,
    //   flex: 2,
    //   headerClassName: 'theme--header',
    //   filterable: false,
    // },
    {
      field: 'Texto',
      headerName: 'Texto',
      minWidth: 750,
      flex: 2,
      headerClassName: 'theme--header',

      renderCell: HtmlRenderer,
    },
  ]

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <MyDataGrid
        columns={columns as GridColDef[]}
        rows={nota_privada}
      />
    </Box>
  )
}
