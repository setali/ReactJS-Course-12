import ACL from './ACL'

function Button ({ children, ...props }) {
  return <button {...props}>{children}</button>
}

export default ACL(Button)
