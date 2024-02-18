import { Provider } from 'jotai'

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>
}

export default StoreProvider
