import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
  primary: {
    darkCyan: string,
  },
  neutral: {
    grayishCyanBackground: string,
		grayishCyanTablets: string,
		darkGrayishCyan: string,
		veryDarkGrayishCyan: string,
  }
  }
}
