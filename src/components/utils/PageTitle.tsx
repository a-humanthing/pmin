import { useEffect } from "react"
type titleType = {
  title: string
}
const PageTitle: React.FC<titleType> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return null
}

export default PageTitle
