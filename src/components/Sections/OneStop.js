import React from "react";

export const OneStop = () => {
    return (
        <section class="bg-coolGray-100 py-10 text-coolGray-800">
            <div>
                <div class="container flex flex-col mx-auto lg:flex-row lg:px-20 ">
                    <div className="pr-10">
                        <img class="" src={"/assets/images/Rectangle1945.png"} alt="" width="auto" />
                    </div>
                    {/* <div class="w-full lg:w-1/3" style={{ backgroundImage: `url('/assets/images/Rectangle1945.png')` , backgroundPosition: 'center ' , backgroundSize: 'cover'}}></div> */}
                        <div class="flex flex-col w-full p-6 lg:w-2/3 ">
                            <div class="flex items-center justify-between p-4 space-x-4 rounded-full bg-gray-100 text-gray-800">
                                <div class="flex items-center self-stretch justify-center">
                                <img class="pr-10" src={"/assets/images/Group735.png"} alt="" width="auto" />
                                <span className="font-bold text-2xl" >Your one stop financial partner</span>
                                </div>   
                            </div>
                       
                        <p class="mt-4 mb-8 text-justify text-xl">Do you need to save more, reduce debt, invest or
                            make progress towards long-term financial targets. 
                            We will help you evaluate financial situations and needs, 
                            guide and engage you to achieve your financial goals.
                        </p>
                        <button class="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-green-50 text-white">Get started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}