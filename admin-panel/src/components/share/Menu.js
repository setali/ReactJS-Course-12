import React from 'react'
import {
  CopyOutlined,
  DashboardOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Menu as AntMenu } from 'antd'

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}
const items = [
  getItem('داشبورد', 'dashboard', <DashboardOutlined />),
  getItem('مدیریت کاربران', 'users', <UserOutlined />, [
    getItem('لیست کاربران', 'user_list'),
    getItem('افزودن کاربر', 'add_user')
  ]),
  {
    type: 'divider'
  },
  getItem('مدیریت مقالات', 'posts', <CopyOutlined />, [
    getItem('لیست مقالات', 'post_list'),
    getItem('افزودن مقالات', 'add_post')
  ])
]
const Menu = () => {
  const onClick = e => {
    console.log('click ', e)
  }
  return (
    <AntMenu
      onClick={onClick}
      style={{
        width: 256
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
    />
  )
}
export default Menu
