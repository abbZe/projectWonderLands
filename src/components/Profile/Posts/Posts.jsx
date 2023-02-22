import Post from './Post/Post';
import s from './Posts.module.css';

const Posts = () => {
  return (
    <div className={s.posts}>
      <textarea className={s.textInput}></textarea>
      <input type='submit' className={s.submit} value='submit'></input>
      <Post count='1.' message='Hellow'/>
      <Post count='2.' message='How are you?'/>
      <Post count='3.' message='How am i?'/>
    </div>
  );
}
 
export default Posts;