import Image from "next/image";
import NavbarButton from "./NavbarButton";
export default function Navbar(){
    
    
    return(
        <div className="grid grid-cols-2 bg-white">
            {/* part 1 */}
            
            <Image src="/logo.png" alt="logo" width={90} height={90} className="ml-5"/>
            <div className="flex justify-end items-center mr-5 gap-2">

                <NavbarButton/>
           
                
                
            </div>

        </div>
    );
}