import styled from "styled-components";

export const BlogContainer = styled.main`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;

  margin-bottom: 3.2rem;
`

export const BlogTitle = styled.div`
  display:  flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7.2rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 160%;

    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;

    color: ${(props) => props.theme["base-span"]};
  }
`

export const SearchForm = styled.form`
  width: 100%;
  margin-top: 1.2rem;

  input {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`

export const BlogCards = styled.section`
  margin-top: 4.8rem;

  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 3.2rem;
`