export interface IRoute {
  TITLE: string
  LINK: string
  SUBHEADER?: boolean
  SECURE?: boolean
}
export interface IRoutes {
  [key: string]: IRoute
}
const ROUTES: IRoutes = {
  HOME: {
    TITLE: 'TEST',
    LINK: '/',
    SUBHEADER: false,
    SECURE: false,
  },
  TEST: {
    TITLE: 'TEST',
    LINK: '/test',
    SUBHEADER: false,
    SECURE: true,
  },
  THANKYOU: {
    TITLE: 'TEST',
    LINK: '/thankyou',
    SUBHEADER: false,
    SECURE: true,
  },
}
export default ROUTES
