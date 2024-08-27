"use client";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import {AlignVerticalJustifyEnd, LogOut} from "lucide-react";
import  Link  from "next/link";
import { usePathname } from "next/navigation";
export default function NavbarButton(){
    const pathname = usePathname();

    const teacherRoutes = pathname.startsWith("/teacher")

    return(
        <>  
        {teacherRoutes ? (
 <Link href="/">
 <Button variant="outline" className="text-black" >
        Exit
        <LogOut className="h-4 w-4 ml-2"/>
          
      </Button>
 </Link>
        ): (
            <Link href="/teacher/courses">
            <Button variant="outline" className="text-black" >
                   
                  <AlignVerticalJustifyEnd />
                  Teacher's Mode
                     
                 </Button>
            </Link>
        )}

       

        <UserButton/>
        </>
      
    );
}