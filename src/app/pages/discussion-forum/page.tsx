import Image from "next/image";

import data from '../../lib/static.json'

export default function DiscussPage() {
     
    let discussdata = data.discussionforum;
    let userdata= data.users;

  return (<>
      
      <div className="Fullcontainer p-2" >

        <h2 className=" heading text-slate-500 my-6">Discussion forum</h2>

        <div className="discussListContainer space-y-10">

        {discussdata.map((dis)=>{
                  
                  let User = userdata.filter(user => user.id === dis.userId)[0];

                return(

                    // Each discussion cont 
                    <div className="eachdiscusslist border shadow-xl p-5 flex space-x-4" key={dis.id}>

                        {/* prof image  */}
                        <div  className="w-16 shrink-0 ">
                            <img className="rounded-full overflow-hidden size-12 mt-2"
                              src={User.imageurl}                           
                              alt={User.name}
                            />
                        </div>

                         {/* details  */}
                         <div className="details ">

                            {/* header  name and sector*/}
                            <div className="header flex justify-between w-1/2 sm:w-1/3 md:w-1/4 space-x-3">
                              
                                    <p className="font-bold text-slate-700">{User.name}</p> 
                                    <p className="bg-blue-800 text-white px-5 py-1 rounded-full text-sm">Sector {dis.sector}</p>
                           
                               
                            </div>

                            {/* description  */}
                            <div className="my-2">
                                <p className="font text-slate-600">{dis.desc}</p>
                            </div>

                            {/* buttons  like, views, comments, share */}
                            <div className="flex flex-row justify-between font-bold text-slate-600 w-full ">
                                <div className="space-x-2"><button>L</button><span>{dis.like}</span></div>
                                <div className="space-x-2"><button>V</button><span>{dis.views}</span></div>
                                <div className="space-x-2"><button>C</button><span>{dis.comments}</span></div>
                                <div className="space-x-2"><span>^</span><button>Share</button></div>
                               
                            </div>
                        </div>

                        {/* time  */}
                        <div className="-translate-y-4 w-44 text-blue-600 font-semibold">{dis.updated_on}</div>
                    </div>
                );
        })}
        </div>

        </div>   
  </>
  );
}
