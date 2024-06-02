import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dcp-kpi-dashboard/healthy-view/drilldown')({
  component: () => (
      <>
        <h4>Drilldown Parent!</h4>
        <Outlet />
      </>
  )
})