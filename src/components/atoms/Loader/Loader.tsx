
import { FC } from 'react';
import * as Styled from './styles';

type LoaderProps = {
    message?: string
}

export const Loader:FC<LoaderProps> = ({message = 'Loading...'}) => {
    return (
        <Styled.Container>
            <Styled.Ball/>
            <Styled.Ball/>
            <Styled.Ball/>
            <span>{message}</span>
        </Styled.Container>
    );
};
