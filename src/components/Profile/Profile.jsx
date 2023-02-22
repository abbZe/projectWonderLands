import About from './About/About';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import Posts from './Posts/Posts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <article className={s.profile}>
      <ProfileHeader />
      <About />
      <Posts />
    </article>
  );
}

export default Profile;