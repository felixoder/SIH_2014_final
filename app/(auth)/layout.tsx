export default function LayoutPage({children}:{children:React.ReactNode}){
    return(
        <div className='h-full flex justify-center items-center mt-10'>
            {children}
        </div>
    );
}