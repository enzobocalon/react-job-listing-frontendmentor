import styled from 'styled-components';
import desktopBG from '../../assets/images/bg-header-desktop.svg';

export const Container = styled.header`
  min-width: 100%;
  min-height: 169px;
  background-color: ${({theme}) => theme.primary.darkCyan};
  background-image: url(${desktopBG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: flex-end;
`;
