import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css'


const Navbar = () => {
    return (
      <div className={styles.nav}>
       <h1>My React Todo List</h1>

       <div className={styles.links}></div>
       <Link className={styles.link}  to={'/'}>Home</Link>
       <Link className={styles.link} to={'/add'}>Add</Link>
       
      </div>
    );
  };
  
  export default Navbar;
  