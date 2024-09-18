import logo1 from '../assets/question.svg';
import logo2 from '../assets/logo2.svg';


const Separation = () => {
    return(
      <>
      <div className="pl-3 flex flex-col justify-between ">
       <img src={logo1}  className=''/>
       <img src={logo2} className=' opacity-80' />
       <img  className='' />
       </div>
      </>
    )
};

export default Separation;