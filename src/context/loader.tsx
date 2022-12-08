import { createContext } from 'react'
interface ILoaderContext {
  loader: boolean
  setLoader: any
}
const defaultState = {
  loader: false,
  setLoader: () => null,
}
const LoaderContext = createContext<ILoaderContext>(defaultState)
export { LoaderContext }
