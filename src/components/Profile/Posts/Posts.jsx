import Post from "./Post/Post";
import s from './Posts.module.css';

const postMessages = [
  {id: 1, message: 'hello', count: 1},
  {id: 2, message: 'Im very popular', count: 2},
  {id: 3, message: 'BANG!', count: 3},
]
const postMessage = postMessages.map( message => <Post id={message.id} message={message.message} count={message.count}/> );

const Posts = () => {
  return (
    <div className={s.posts}>
      <textarea className={s.textInput}></textarea>
      <input type='submit' className={s.submit} value='submit'></input>
      { postMessage }
    </div>
  );
}
 
export default Posts;