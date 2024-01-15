'use client'

import { FC, useState } from 'react'

import { IIncidente } from '@/models'
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid'

interface Props {
  columns: GridColDef[]
  rows: any[]
}

const MyDataGrid: FC<Props> = ({ columns, rows }) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  })

  const getRowId = (row: IIncidente) => row._id.toString()

  return (
    <DataGrid
      columns={columns}
      rows={rows}
      getRowId={getRowId}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
            page: 0,
          },
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      getRowHeight={() => 'auto'}
      sx={{
        [`& .${gridClasses.cell}`]: {
          py: 1,
        },
      }}
    />
  )
}

export default MyDataGrid
