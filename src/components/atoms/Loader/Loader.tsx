
import * as Styled from './styles';

type LoaderProps = {
    message?: string
}

export const Loader = ({message = 'Loading...'}:LoaderProps) => {
    return (
        <Styled.Container>
            <Styled.Ball/>
            <Styled.Ball/>
            <Styled.Ball/>
            <span>{message}</span>
        </Styled.Container>
    );
};
