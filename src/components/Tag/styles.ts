import styled, { css } from 'styled-components';

interface IProps {
  canBeRemoved?: boolean;
}

export const Container = styled.div<IProps>`
  color: ${({ theme }) => theme.primary.darkCyan};
  border-radius: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;

  :focus-visible {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary.darkCyan};
  }

  .tag-container {
    background-color: ${({ theme }) => theme.neutral.grayishCyanTablets};
    padding: .5rem 1rem;

    border-radius: 4px 0 0 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;

    ${({ canBeRemoved, theme }) => !canBeRemoved && css`
      border-radius: 4px;

      :hover {
        background-color: ${theme.primary.darkCyan};
        color: ${theme.neutral.grayishCyanBackground};
      }
    `}
  }

  .tag-remove {
    background-color: ${({ theme }) => theme.primary.darkCyan};
    padding: .5rem 1rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;

    border-radius: 0 4px 4px 0;

    :hover {
      background-color: ${({ theme }) => theme.neutral.veryDarkGrayishCyan};
    }
  }
`;
