import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { Button } from 'antd'

export const Route = createLazyFileRoute('/dcp-kpi-dashboard/healthy-view/drilldown/')({
  component: HealthyViewDrilldown
})



function HealthyViewDrilldown(){
    const { history } = useRouter()
  
    return(
      <>
         <h3>你好啊</h3>
        <Button type="primary" onClick={() => history.go(-1)}> Go Back</Button>
      </>
    )
  }