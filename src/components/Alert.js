import React from 'react'
import {Alert as AlertDialog} from 'react-bootstrap'

export default function Alert(props) {
    return (
      <AlertDialog variant={props.variant}>
          {props.message}
      </AlertDialog>
    )
}
