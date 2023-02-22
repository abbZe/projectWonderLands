import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post}>
      <img className={s.userAvatar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mr._Bean_2011.jpg/200px-Mr._Bean_2011.jpg" alt="user avatar"/>
    <p>{ props.count } { props.message }</p>
    </div>
  );
}
 
export default Post;