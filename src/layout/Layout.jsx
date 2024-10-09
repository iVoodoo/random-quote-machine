import { memo } from 'react'

import { Header } from './header/Header'

const LayoutComponent = (prop) => {
  console.log('@@@ RENDER LAYOUT')

  return (
    <>
      <Header />
      <main className='container'>{prop.children}</main>
    </>
  )
}

export const Layout = memo(LayoutComponent)
