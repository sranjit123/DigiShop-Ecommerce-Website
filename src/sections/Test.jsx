export default function Test(){
 return(
    <>
         <div className="flex flex-col space-y-6 justify-center items-center mb-4">
                <div className="flex h-16 w-16 bg-green-500 text-white rounded-full items-center justify-center">Hey</div>
                <div className="h-16 w-16 bg-blue-500 text-white rounded-full"></div>
                <div className="h-16 w-16 bg-red-500 text-white rounded-full"></div>
        </div>
         <div className="grid grid-cols-3 gap-6 mb-5 mx-5 ">
                <div className="flex h-16 w-16 bg-green-500 text-white items-center justify-center">Hey</div>
                <div className="h-16 w-16 bg-blue-500 text-white "></div>
                <div className="h-16 w-16 bg-red-500 text-white "></div>
                 <div className="flex h-16 w-16 bg-green-500 text-white items-center justify-center">Hey</div>
                <div className="h-16 w-16 bg-blue-500 text-white "></div>
                <div className="h-16 w-16 bg-red-500 text-white "></div>
                 <div className="flex h-16 w-16 bg-green-500 text-white items-center justify-center">Hey</div>
                <div className="h-16 w-16 bg-blue-500 text-white "></div>
                <div className="h-16 w-16 bg-red-500 text-white "></div>
                <input 
  type="text" 
  className="w-full p-2 rounded-md ring-1 ring-slate-100 focus:ring-2 focus:ring-blue-500 outline-none" 
  placeholder="Click here..."
/>
        </div>
    
    </>
 );
};