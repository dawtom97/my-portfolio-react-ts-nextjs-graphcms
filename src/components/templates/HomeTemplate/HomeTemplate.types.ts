import { ReactNode } from 'react'

import { AllPlacesProps } from '../../../types/AllPlaces.types'

export type HomeTemplateProps = {
    children: ReactNode,
    places: AllPlacesProps[]
}

export type StylesProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image:string | any
}