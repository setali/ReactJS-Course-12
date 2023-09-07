import React from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['ADD_TASK', 'DELETE_TASK', 'EDIT_TASK', 'VIEW_TASK_LIST'],
  roles: ['ADMIN', 'OPERATOR'],
  role: 'ADMIN'
}

export function checkPermission (permission) {
  return user.permissions.includes(permission)
}

// High Order Component  => HOC

export default Component => props =>
  checkPermission(props.permission) && <Component {...props} />

// export default function ACL (Component) {
//   return function (props) {
//     return checkPermission(props.permission) && <Component {...props} />
//   }
// }
//   export default function ACL (Component) {
//     return class MyACL extends React.Component {
//       render () {
//         return (
//           checkPermission(this.props.permission) && <Component {...this.props} />
//         )
//       }
//     }
//   }
