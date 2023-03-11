import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  border-radius: 8px;
  box-shadow: 0 15px 15px -4px hsl(180deg 29% 50% / 20%);

  display: flex;
  justify-content: space-between;
  align-items: center;

  transform: translateY(50%);

  .tag-group {
    display: flex;
    gap: .5rem;
    flex-wrap: wrap;

    > div {
      margin-right: .5rem;
      font-size: 1.1rem;
    }
  }

  button {
    background-color: transparent;
    color: ${({theme}) => theme.primary.darkCyan};
    outline: transparent;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: ${({theme}) => theme.primary.darkCyan};
      transform: scaleX(0);
      transform-origin: center;
      transition: all .3s ease;
    }

    :hover {
      :after {
        transform: scaleX(1);
      }
    }

  }
`;
