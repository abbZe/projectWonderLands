import Avatar from './Avatar/Avatar'
import Data from './Data/Data'
import s from './About.module.css'

const About = () => {
  return (
    <div className={s.aboutUser}>
      <Avatar />
      <Data />
    </div>
  );
};

export default About;