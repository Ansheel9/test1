import React from "react";

export const ThreeFeatures = () => {
    return (
        <section class="py-28 relative bg-violet-50 ">
        <div class="">
            <img class="hidden lg:block lg:absolute bottom-0 left-0 " src={"/assets/images/Group730.svg"} alt=""/>
            <img class="hidden lg:block lg:absolute top-0 right-0 " src={"/assets/images/Group731.svg"} alt=""/>
            <img class="hidden lg:block lg:absolute top-72 left-10 animate-bounce-slow " src={"/assets/images/nairacoin-01b.png"} alt=""/>
            <img class="hidden lg:block lg:absolute top-96 right-10 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>
           
            <div class=" relative  flex items-center lg:mx-32 space-x-7">
                <div class="w-full lg:w-1/3 px-1 py-32 mb-10 lg:mb-0 bg-white shadow-3xl border rounded-xl lg:text-center">
                    <img class="lg:pb-10 lg:mx-auto " src={"/assets/images/Group.svg"} alt="" width="auto" />
                    <p class="text-lg lg:px-12 text-gray-900 font-medium ">
                    Enable clients to onboard 
                    seamlessly within not 
                    more than 2 minutes
                    </p>
                </div>
                <div class="w-full lg:w-1/3 px-1 py-24 mb-10 lg:mb-0 bg-white shadow-3xl border rounded-xl lg:text-center">
                    <img class="lg:pb-12 lg:mx-auto pt-5 " src={"/assets/images/Group727.svg"} alt="" width="auto" />
                    <p class="text-lg lg:px-10 text-gray-900 font-medium ">
                    Gain access to local and 
                    foreign denominated 
                    investments to grow and 
                    protect your wealth
                    </p>
                </div>
                <div class="w-full lg:w-1/3 px-1 py-32 mb-10 lg:mb-0 bg-white shadow-3xl border rounded-xl lg:text-center">
                    <img class="lg:pb-10 lg:mx-auto " src={"/assets/images/Group728.svg"} alt="" width="auto" />
                    <p class="text-lg lg:px-16 text-gray-900 font-medium ">
                    Save, Invest, and Pay 
                    bills without even thinking 
                    about it.
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}