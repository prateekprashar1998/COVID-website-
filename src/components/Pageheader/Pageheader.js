import classes from  "./Pageheader.module.css"
const Pageheader = (props) => {
    return ( 
    <div className={classes.container}>
        <hr/>
        <h1>{props.title}</h1>
     </div>    
           );
}
 
export default Pageheader;