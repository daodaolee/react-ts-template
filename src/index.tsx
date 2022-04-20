import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/css/common.less'
import RouteConfig from '@/router/index'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <RouteConfig />
  </BrowserRouter>
)
