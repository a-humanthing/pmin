type headBarProp = {
  text: string
}
const HeadBar: React.FC<headBarProp> = ({ text }) => {
  return (
    <>
      <div className="headBarContainer">
        <span className="headBarText">{text}</span>
      </div>
    </>
  )
}

export default HeadBar
