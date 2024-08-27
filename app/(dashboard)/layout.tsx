import Navbar from "@/components/Navbar";

export default function DashBoardLayout({children}: {children: React.ReactNode}){
    return(
        <div className="h-full">
        <div className="h-[80px] md:pl-56  md:pr-56 fixed inset-y-0 w-full z-50">
            <Navbar/>
        </div>
        
        <main className="md:pl-56 md:pr-56 pt-[100px] h-full">
            {children}
        </main>
    </div>
    );
}