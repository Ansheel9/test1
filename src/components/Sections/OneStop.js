import React from "react";

export const OneStop = () => {
    return (
        <section class="bg-white relative -mt-40 lg:-mt-0 pt-20 lg:pt-20 lg:pb-40  text-gray-800">
            <div>
                <img class=" lg:block lg:absolute top-72 left-10 animate-bounce-slow " src={"/assets/images/nairacoin-01b.png"} alt=""/>
                <img class="hidden lg:block lg:absolute top-72 right-10 animate-bounce-slow " src={"/assets/images/nairacoin-01a.png"} alt=""/>
                <div class="container -mt-24 lg:-mt-0 pb-1 lg:pb-0 relative flex flex-col mx-auto lg:flex-row lg:px-24 ">
                    <div className="pr-10">
                        <img class="h-full hidden lg:block " src={"/assets/images/Rectangle1945.svg"} alt="" width="500px" />
                    </div>
                    {/* <div class="w-full lg:w-1/3" style={{ backgroundImage: `url('/assets/images/Rectangle1945.png')` , backgroundPosition: 'center ' , backgroundSize: 'cover'}}></div> */}
                    <div class="flex flex-col w-full p-6 lg:w-2/3 ">
                            {/* <div class="flex items-center justify-between p-4 space-x-4 rounded-full bg-white text-gray-800 shadow-2xl ">
                                <div class="flex items-center self-stretch justify-center">
                                <img class="pr-10" src={"/assets/images/Group735.png"} alt="" width="auto" />
                                <span className="font-bold text-2xl" >Your one stop financial partner</span>
                                </div>   
                            </div> */}
                        <div className="">
                            <img class=" w-full h-full pt-12 lg:-ml-52 " src={"/assets/images/Group735.svg"} alt="" 
                            />
                        </div>
                       
                        <p class="mb-8 text-justify text-xl font-light ">Do you need to save more, reduce debt, invest or
                            make progress towards long-term financial targets. 
                            We will help you evaluate financial situations and needs, 
                            guide and engage you to achieve your financial goals.
                        </p>
                        <button class="self-start transform hover:scale-110 px-10 py-3 text-lg font-medium rounded-lg bg-green-50 text-white">Get started</button>
                    </div>
                </div>
                <div className=" hidden lg:block z-20  " style={{ marginTop: -590 , marginBottom: 250, marginLeft: 260 ,  }}  >
                    <img class=" w-72 h-full -mt-64 ml-64  " src={"/assets/images/Group729.png"} alt="" />
                </div>
            </div>
            
        </section>
    )
}