import { FallingLines } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
    return(
        <LoaderStyled>
            <FallingLines
               color="#6A5ACD"
               width="150"
               visible={true}
               ariaLabel='falling-lines-loading'
/>
        </LoaderStyled>
    )
}