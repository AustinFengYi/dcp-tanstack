import { createLazyFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: () => <Navigate to= "/dcp-kpi-dashboard/healthy-view"></Navigate> ,
})