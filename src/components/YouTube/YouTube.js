import classes from './YouTube.module.css'
import Pageheader from '../Pageheader/Pageheader'
import who from './../../img/who.jpg'
import who3 from './../../img/who3.jpg'
import who2 from './../../img/who2.jpg'
import universe from './../../img/universe.jpg'

const playBtnSvg = (url) =>{
    return(
        <div className={classes.PlayButton}
        onClick={(e) => window.open(url," _blank").focus}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </div>

    );
}
const youtubeVideo = (url, thumbnail, description) =>
{
    return(
        <div className={classes.VideoContainer}>
            <div className={classes.Thumbnail}>
                {playBtnSvg(url)
                }
                <img src={thumbnail} alt="thumbnail"></img>
            </div>
            <div className={classes.Text}>
                <h7>{description}</h7>
            </div>
            </div>
    )
}
const cleancodeVideoDescription = ' "Step out of the house only if it essential. STAY AT HOME. STAY SAFE. For information on precautions to be taken or to speak to our doctors if you are showing symptoms"  '

const JavaStreamsVideoDescription = 'WHO declares the outbreak of the new coronavirus is a pandemic'

const PythonLambdasDescription = '‘We don’t actually have that answer yet’: WHO clarifies comments on asymptomatic spread of Covid-19'

const  YouTube = ()  => 
{

     return( 
        <div className={classes.YouTube}id="YouTube">
            <img className={classes.Background}src={universe} alt="Background" />
        <Pageheader title={"COVID-19 WHO Helpful Resources"}/>
        <div className={classes.YouTubeContent}>
            <div className={classes.Paragraph}>
               
            </div>
            <div className={classes.Videos}>
              {youtubeVideo("https://www.youtube.com/watch?v=qHksVwOrpbE&list=PL9S6xGsoqIBU2V6AZYGlJwZRAFJ3YDreb ",who,cleancodeVideoDescription)}
              {youtubeVideo(" https://www.youtube.com/watch?v=oDeSCVGi-pM&list=PL9S6xGsoqIBU2V6AZYGlJwZRAFJ3YDreb&index=9",who3,JavaStreamsVideoDescription)}
              {youtubeVideo("https://www.youtube.com/watch?v=mOV1aBVYKGA&list=PL9S6xGsoqIBU2V6AZYGlJwZRAFJ3YDreb&index=2 ",who2,PythonLambdasDescription)}

            </div>
        </div>
      </div>
     );
      
    }
export default YouTube;