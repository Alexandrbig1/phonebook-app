import styled from "styled-components";

export const UserWrap = styled.div`
  display: flex;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 6px 0 6px;
`;

export const SpanName = styled.span`
  color: inherit;
  font-family: "Raleway", sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 330px) {
    font-size: 1.4rem;
  }
`;
