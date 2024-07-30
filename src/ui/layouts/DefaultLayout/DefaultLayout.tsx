import * as s from './styles'

interface IProps {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: IProps) => {
  return <s.Layout>{children}</s.Layout>
}
