import classes from './Skills.module.css'
import Pageheader from '../Pageheader/Pageheader';

const listTitleStyle={ fontWeight: 900, color :'white',marginBottom:'6px'}
const backendSkills =
<ul>
  <li style={listTitleStyle} >Total Cases</li>
    <li style={{color:'red'}}>178,247,235</li>
 
</ul>
const frontendSkills =
<ul>
  <li style={listTitleStyle}>Deaths</li>
  <li style={{color:'red'}}>3,859,053</li>
</ul>
const DataScienceSkills =
<ul>
  <li style={listTitleStyle} >Recovered</li>
  <li style={{color:'red'}}>162,743,477</li>
</ul>
const OtherSkills =
<ul>
  <li style={listTitleStyle}>Other :</li>
  <li>Git-Github-Tensorflow</li>
</ul>
const totalSkills =[backendSkills,frontendSkills,DataScienceSkills]


  const Skills = () => {
    return ( 
      <div className={classes.Skills}id="Skills">
        
          <Pageheader title={'LIVE UPDATES'} />
          <h4 style={{width:'70vw',textAlign:'center',marginLeft:'250px'}}>
          
Globally, as of 5:14pm CEST, 17 June 2021, there have been 176,693,988 confirmed cases of COVID-19, including 3,830,304 deaths, reported to WHO. As of 16 June 2021, a total of 2,377,780,590 vaccine doses have been administered.

          </h4>
          <div className={classes.Container}>
           
            
            {totalSkills.map(skills => {
               return(
                 <div  className={classes.List}>
                   {skills}
                   </div>
                   

               )
            })}
          </div>
      </div>
     );
}
 
export default Skills;
