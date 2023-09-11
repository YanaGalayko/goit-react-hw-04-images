import { styled } from "styled-components";

export const LoadMoreButton = styled.button`
    padding: 16px 32px;
    margin: 0px auto;
    margin-top: 20px;
    border-radius: 2px;
    background-color: #6A5ACD;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    text-align: center;
    display: block;
    color: rgb(255, 255, 255);
    border: 0px;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 22px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 300px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

 &:hover,
 &:focus {
  background-color: #483D8B;
}
`;