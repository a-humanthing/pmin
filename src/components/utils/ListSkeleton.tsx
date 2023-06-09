import { Skeleton } from "@mui/material"

type list = {
  listsToRender: number
}

const ListSkeleton: React.FC<list> = ({ listsToRender }) => {
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((card, index) => (
          <div className="product" key={index}>
            <Skeleton animation="wave" variant="rectangular" height={"100%"} />
          </div>
        ))}
    </>
  )
}

export default ListSkeleton
