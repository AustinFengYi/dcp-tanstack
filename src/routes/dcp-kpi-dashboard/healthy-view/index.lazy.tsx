import { createLazyFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Button } from 'antd'
import { useState } from 'react'


export const Route = createLazyFileRoute('/dcp-kpi-dashboard/healthy-view/')({
  component: () => {
    
    return (
      (
          
          <>
            <h3>Hello</h3>
            <Link to="/dcp-kpi-dashboard/healthy-view/drilldown">Link</Link>
          </>
      )
    )
  }
  
  
  
  

})



        