import { TagContainer } from './styles'

type Props = {
  children: string | number
}

const Tag = ({ children }: Props) => (
  <TagContainer>{children}</TagContainer>
)

export default Tag