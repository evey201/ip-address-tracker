import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    width: 100%;
    height: 40px;

`

export const SearchInput = styled.input`
    padding: 0 16px;
    width: 100%;
    font-size: var(--text-font-size-input);
    border-radius: 10px 0 0 10px;
    border: 0;

    &::placeholder {
        color: var(--color-dark-gray);
    }
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 0 16px;
  position: relative;
  width: 60px;
  border: 0;
  border-radius: 0 10px 10px 0;

  &:hover {
    background-color: var(--color-very-dark-gray);
  }

  &::after {
    content: '';
    width: 11px;
    height: 14px;
    background: url('/icons/arrow.svg') center/cover no-repeat;
    position: absolute;
    left: 24px;
  }
`

