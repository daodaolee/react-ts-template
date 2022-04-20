import React, { ReactElement } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import Home from '@/views/Home'

const routes:RouteObject[] = [{
  path: '/',
  element: <Home />,
  children: []
}]

export default function RouteConfig ():ReactElement {
  const element = useRoutes(routes)
  return (
    <>
      { element }
    </>
  )
}
