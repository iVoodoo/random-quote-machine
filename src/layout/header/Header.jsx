import { memo } from 'react'

import Logo from '@assets/logo.svg?react'

import style from './Header.module.scss'

const HeaderComponent = () => {
  return (
    <header className={`${style.header} container`}>
      <div className={style.header__inner}>
        <Logo className={style.header__logo} />
        <h1 className={style.header__title}>Random quote machine</h1>
      </div>
    </header>
  )
}

export const Header = memo(HeaderComponent)
