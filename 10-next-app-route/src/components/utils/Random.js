import React from 'react'
// import _ from 'lodash'

const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function Random () {
  return <div>{random(1, 10)}</div>
}
