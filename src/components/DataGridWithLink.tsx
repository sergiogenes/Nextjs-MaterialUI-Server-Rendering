'use client'

import { FC, Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import { IIncidente } from '@/models'
import { DataGrid, GridCallbackDetails, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid'
import TableSkeleton from './TableSkeleton'

interface Props {
  columns: GridColDef[]
  rows: any[]
  urlBase: string
}

const ClientDataGrid: FC<Props> = ({ columns, rows, urlBase }) => {
  const router = useRouter()
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  })

  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([])

  const getRowId = (row: IIncidente) => row._id?.toString()

  const onRowSelectionModelChangeHandler = (newRowSelectionModel: GridRowSelectionModel) => {
    setRowSelectionModel(newRowSelectionModel)
    router.replace(`${urlBase}/${newRowSelectionModel[0]}`)
  }

  return (
    <Suspense fallback={<TableSkeleton />}>
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
        onRowSelectionModelChange={onRowSelectionModelChangeHandler}
        rowSelectionModel={rowSelectionModel}
      />
    </Suspense>
  )
}

export default ClientDataGrid
