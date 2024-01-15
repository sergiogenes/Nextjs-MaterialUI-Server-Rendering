import { Skeleton, Stack } from '@mui/material'

const TableSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant='rectangular'
        animation='wave'
        height={40}
        width='100%'
      />
      <Skeleton
        variant='rectangular'
        animation='wave'
        height={440}
        width='100%'
      />
      <Skeleton
        variant='rectangular'
        animation='wave'
        height={40}
        width='100%'
      />
    </Stack>
  )
}

export default TableSkeleton
