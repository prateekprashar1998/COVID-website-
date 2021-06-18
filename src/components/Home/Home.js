import classes from './Home.module.css'

import Binary from'./../../img/Binary.svg'
const  Home = () => {
    return (
        <div className={classes.Home}id="Home">
           <div className={classes.container}>
             <h3>COVID-2021</h3>
             <h1>We give you real time Covid statistics</h1>
           </div>
           
           
           <img className={classes.Binary} src={Binary} alt="binary world"></img>

        </div>
      );
}
export default Home;