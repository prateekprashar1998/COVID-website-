import classes from './NavBar.module.css'

const NavBar= () =>
{

    return (  
        <div className={classes.NavBar }>
          <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/#About">About Covid</a>
                </li>
                <li>
                    <a href="/#Skills">Statistics</a>
                </li>
                <li>
                    <a href="/#YouTube">WHO-Youtube</a>
                </li>
                <li>
                    <a href="/#Contact">WHO-Contact</a>
                </li>
            </ul>
          </nav>
        </div>
    );
}
  

export default NavBar;