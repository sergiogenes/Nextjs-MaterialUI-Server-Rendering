'use client'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { IIncidenteApp } from '@/models'
import NotasPrivadasTable from './NotasPrivadasTable'
import RespuestasTable from './RespuestasTable'
import TareasTable from './TareasTable'
import LogsTable from './LogsTable'
import ArchivosTable from './ArchivosTable'
import { Suspense, useState } from 'react'
import TableSkeleton from './TableSkeleton'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

interface Props {
  incidente: IIncidenteApp
}

export default function TabsIncidentes({ incidente }: Props) {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab
            label='Notas Privadas'
            {...a11yProps(0)}
          />
          <Tab
            label='Respuestas'
            {...a11yProps(1)}
          />
          <Tab
            label='Tareas'
            {...a11yProps(2)}
          />
          <Tab
            label='Logs de Actividad'
            {...a11yProps(3)}
          />
          <Tab
            label='Archivos'
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
      >
        <Suspense fallback={<TableSkeleton />}>
          <NotasPrivadasTable nota_privada={incidente.Notas_Privadas} />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={1}
      >
        <Suspense fallback={<TableSkeleton />}>
          <RespuestasTable respuestas={incidente.Respuestas} />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={2}
      >
        <Suspense fallback={<TableSkeleton />}>
          <TareasTable tareas={incidente.Tareas} />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={3}
      >
        <Suspense fallback={<TableSkeleton />}>
          <LogsTable logs={incidente.Log_Actividad} />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel
        value={value}
        index={4}
      >
        <Suspense fallback={<TableSkeleton />}>
          <ArchivosTable archivos={incidente.Archivos} />
        </Suspense>
      </CustomTabPanel>
    </Box>
  )
}
