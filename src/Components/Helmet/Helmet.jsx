
export const Helmet = (props) => {
    document.title = `Maltimart` + props.title
  return (
    <div>{props.child}</div>
  )
}

