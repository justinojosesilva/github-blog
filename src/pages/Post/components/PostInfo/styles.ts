import styled from "styled-components";

export const PostInfoContainer = styled.section`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;
  padding: 3.2rem 4rem;

  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  margin-top: -8.5rem;

  > h1 {
    margin-top: 2rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme["base-title"]};

    margin-bottom: 0.8rem;
  }
`

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    text-decoration: none;

    color: ${(props) => props.theme.blue};
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 160%;
  }
`

export const PostInfoFooter = styled.footer`
  display: flex;
  gap: 2.4rem;

  > span {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    font-family: 'Nunito', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-subtitle"]};



    svg {
      font-size: 1.8rem;
      color: ${(props) => props.theme["base-label"]};
    }

  }
`

