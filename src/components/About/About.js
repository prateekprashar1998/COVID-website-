import classes from './About.module.css'
import React from 'react';
import Pageheader from './../Pageheader/Pageheader'



  

const About = () => {
    return ( 
        <div className={classes.AboutMe}id="About">
            <Pageheader title={'About Covid'} />
            <div className={classes.Container} >
               <div className={classes.Text} >
                  <h2>"Covid a Pandemic"</h2>
                    <h4>
                   Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

                   Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
                   </h4>
                   <h9>Preventions:</h9>
                     <ul>
                         <li>
                         Clean your hands often. Use soap and water, or an alcohol-based hand rub.
                         </li>
                         <li>
                         Maintain a safe distance from anyone who is coughing or sneezing.
                         </li>
                         <li>
                         Wear a mask when physical distancing is not possible.
                         </li>
                         <li>
                         Don’t touch your eyes, nose or mouth.
                         </li>
                         <li>
                         Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
                         </li>
                         <li>
                         If you have a fever, cough and difficulty breathing, seek medical attention.
                         </li>
                     </ul>
                     
                
           
     
</div>
       
    </div>
   </div>

    
    
    );
}
 
export default About;