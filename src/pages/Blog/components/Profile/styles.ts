import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;
  padding: 3.2rem 4rem;

  background: ${(props) => props.theme["base-profile"]};

  display: flex;
  gap: 3.2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  margin-top: -10rem;
`

export const Avatar = styled.img`
  border: 0;
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  width: 100%;
  margin-top: 0.8rem;
`

export const ProfileTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    color: ${(props) => props.theme.blue};

    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 160%;

    text-decoration: none;
  }
`

export const ProfileDescription = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;

  margin-bottom: 2.4rem;
`

export const ProfileFooter = styled.footer`
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