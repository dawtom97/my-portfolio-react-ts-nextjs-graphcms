
import Link from 'next/link'
import { MenuList } from '../../molecules/MenuList/MenuList'
import * as Styled from './styles'
import Hamburger from 'hamburger-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { BrandIcon } from '../../BrandIcon/BrandIcon'

export type NavbarProps = {
    isOpen: boolean,
    setOpen?: Dispatch<SetStateAction<boolean>>
}

export const Navbar:FC<NavbarProps> = ({isOpen,setOpen}) => {
  return (
    <Styled.Container >
        <Styled.InnerWrapper isOpen={isOpen}>
        <BrandIcon/>
        <MenuList isOpen={isOpen}/>
        <Hamburger size={20} label="Show menu" color='#fff' toggled={isOpen} toggle={setOpen}/>
        </Styled.InnerWrapper>
    </Styled.Container>
  )
}

