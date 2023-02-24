import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const isSelected = () => {
  return (
    selected => selected.isActive ? `${s.dialogLink} ${s.active}` : s.dialogLink
  )
}
const Dialog = (props) => {
  return (
    <li className={s.dialog}>
      <NavLink className={isSelected()} to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </li>
  )
}
const Message = (props) => {
  return (
    <li className={s.message}>{props.message}</li>
  )
}

const Dialogs = (props) => {
  const userElements = props.users.map( user => <Dialog name={ user.name } id={ user.id } /> );
  const messageElements = props.messages.map( message => <Message message={ message.message } id={ message.id } /> );

  return (
    <div className={s.dialogsWrapper}>
      <ul className={s.dialogs}>
        { userElements }
      </ul>
      <ul className={s.messages}>
        { messageElements }
      </ul>
    </div>
  )
}

export default Dialogs;