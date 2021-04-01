import React from "react";

export const ThreeFeatures = () => {
    return (
        <section class="py-20 bg-violet-50 ">
        <div class="">
            <div class="flex items-center lg:mx-28 space-x-7">
                <div class="w-full lg:w-1/3 px-1 py-28 mb-10 lg:mb-0 bg-white shadow-2xl border rounded-xl lg:text-center">
                    <img class="lg:pb-16 lg:mx-auto " src={"/assets/images/Group.png"} alt="" width="auto" />
                    <p class="text-xl lg:px-10 text-gray-900 font-normal ">
                    Enable clients to onboard 
                    seamlessly within not 
                    more than 2 minutes
                    </p>
                </div>
                <div class="w-full lg:w-1/3 px-1 py-28 mb-10 lg:mb-0 bg-white shadow-2xl border rounded-xl lg:text-center">
                    <img class="lg:pb-16 lg:mx-auto " src={"/assets/images/Group727.png"} alt="" width="auto" />
                    <p class="text-xl lg:px-10 text-gray-900 font-normal ">
                    Gain access to local and 
                    foreign denominated 
                    investments to grow and 
                    protect your wealth
                    </p>
                </div>
                <div class="w-full lg:w-1/3 px-1 py-28 mb-10 lg:mb-0 bg-white shadow-2xl border rounded-xl lg:text-center">
                    <img class="lg:pb-16 lg:mx-auto " src={"/assets/images/Group728.png"} alt="" width="auto" />
                    <p class="text-xl lg:px-16 text-gray-900 font-normal ">
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