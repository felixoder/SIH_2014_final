import Image from "next/image";
export default function Page() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-center font-bold text-5xl">
        This page is now owned By
      </h1>

      <span className="bg-green-800 text-white text-center font-bold text-5xl mt-5 p-3">
        CipherSquad
      </span>

      <Image 
        className="mt-4"
        src="/construction.gif" 
        alt="Construction in Progress" 
        width={400} 
        height={400} 
      />
   
      
      <p>Construction is in Progress!</p>

      <footer className="mt-10">
        Copyright
        &copy;CipherSquad {currentYear} 
      </footer>
    </div>
  );
}
