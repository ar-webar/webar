type PropsType = {
  show: any
}


const Burger = ({ show }: PropsType) => {
  return (
    <svg onClick={() => { show(true) }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.5 20c0 0.828-0.672 1.5-1.5 1.5v0h-22c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5v0h22c0.828 0 1.5 0.672 1.5 1.5v0zM5 13.5h22c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5v0h-22c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5v0z">
    </path></svg>
  )
}

export default Burger