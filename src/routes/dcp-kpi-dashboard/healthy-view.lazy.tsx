import { createLazyFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Button } from 'antd'
import { useState } from 'react'

export const Route = createLazyFileRoute('/dcp-kpi-dashboard/healthy-view')({
  component: HealthyView
})

function HealthyView(){
    const [count, setCount] = useState(0)

    return(
        <>
            <h2>Healthy View</h2>
            <div>
                <Button className="m-2" type="primary" onClick={() => {setCount(prev => prev + 1)}}> CLICK!!</Button>
                <span>Button Count {count}</span>
            </div>
            <hr />
            <Outlet />
        </>

    )
    
}