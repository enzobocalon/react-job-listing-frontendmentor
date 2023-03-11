import styled, { css } from 'styled-components';

interface Props {
  isFeatured?: boolean;
}

export const Container = styled.article<Props>`
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-inline: 4px solid transparent;

  :focus-visible {
    outline: none;
  }

  display: flex;

  img {
    max-height: 88px;
  }

  & + & {
    margin-top: 1rem;
  }

  .card-content-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  ${({isFeatured, theme}) => isFeatured && css`
    border-left-color: ${theme.primary.darkCyan};
  `};

  @media (max-width: 920px) {
    position: relative;
    img {
      position: absolute;
      top: -28px;
      left: 24px;

      width: 48px;
      height: 48px;
    }

    & + & {
      margin-top: 2.5rem;
    }

    .card-content-container {
      align-items: flex-start;
      flex-direction: column;

    }
  }

`;

export const CardContent = styled.div`
  margin-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: .5rem;

  h1 {
    font-size: 1.4rem;
  }

  @media (max-width: 920px) {
    margin-left: 0;
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.neutral.darkGrayishCyan};
    margin-top: .25rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;


export const CardHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  > strong {
    color: ${({theme}) => theme.primary.darkCyan};
    font-size: 1.2rem;
  }
`;

export const CardFeatures = styled.div`
  display: flex;
  gap: 1rem;

  .feature {
    padding: .4rem .5rem;
    border-radius: 4px;
    background-color: ${({theme}) => theme.primary.darkCyan};
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .featured {
    background-color: ${({theme}) => theme.neutral.veryDarkGrayishCyan};
  }

  @media (max-width: 920px) {
    flex-wrap: wrap;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  color: ${({theme}) => theme.neutral.darkGrayishCyan};

  span:not(:last-of-type) {
    position: relative;
    margin-right: 1rem;

    ::after {
      content: '';
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 4px;
      height: 4px;
      background-color: ${({theme}) => theme.neutral.darkGrayishCyan};
      border-radius: 50%;
    }
  }
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;

  @media (max-width: 920px) {
    margin-left: 0;
  }
`;
