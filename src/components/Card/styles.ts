import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  width: 100%;
  padding: 3.2rem;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};
  text-decoration: none;

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  > h1 {
    width: 28rem;
    font-size: 2rem;
    font-weight: 700;
    line-height: 160%;

    color: ${(props) => props.theme["base-title"]};
  }

  > h2 {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;

    color: ${(props) => props.theme["base-span"]};
  }
`

export const CardDescription = styled.p`
  margin-top: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;

  color: ${(props) => props.theme["base-text"]};
`