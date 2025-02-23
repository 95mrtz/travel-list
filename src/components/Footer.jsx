import { AiOutlineX, AiOutlineGithub  } from "react-icons/ai";

const Footer = () => {
    return ( 
        <footer className="w-full max-w-4xl py-4 flex justify-center items-center gap-5">
          <AiOutlineGithub />
          <p className="text-md font-bold"> Sobre este proyecto </p>
          <AiOutlineX />
        </footer>
     );
}
 
export default Footer;