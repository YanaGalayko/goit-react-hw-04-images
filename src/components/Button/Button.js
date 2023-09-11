import { LoadMoreButton } from "./Button.styled";

export const LoadMoreBtn = ({onLoadMore}) => {
    return(
        <>
        <LoadMoreButton type="button" onClick={onLoadMore}>Load more</LoadMoreButton>
        </>
    )
};