import { FaInstagram,FaYoutube,FaLinkedin, FaFacebook } from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL= (url) =>
{
    return () => window.open(url, "_blank")
}


const Contact = () => {
    return ( 
            <div className={classes.Contact}id="Contact">
                <div className={classes.icons}>
            <FaYoutube color='white' size='30px'style={{padding : '1%'}}
            onClick={handleURL('https://www.youtube.com/channel/UC07-dOwgza1IguKA86jqxNA')} />
            <FaFacebook color='white' size='30px'style={{padding : '1%'}}
            onClick={handleURL('https://www.facebook.com/WHO//')} />
            <FaInstagram color='white' size='30px'style={{padding : '1%'}}
            onClick={handleURL('https://www.instagram.com/who/?hl=en')}/>
      </div>
      </div>
     );
}
 
export default Contact;