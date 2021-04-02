import React from "react";


export const WebSol = () => {
    return (
		<section class="bg-white relative text-gray-800 lg:mb-40">
            <img class="hidden lg:block lg:absolute top-0 left-0  " src={"/assets/images/Group733.png"} alt=""/>
            <img class="hidden lg:block lg:absolute -top-40 right-0 " src={"/assets/images/Group732.png"} alt=""/>
            <img class="hidden lg:block lg:absolute -top-32 inset-x-32 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>
            <img class="hidden lg:block lg:absolute bottom-0 left-10 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>

            <div class="container relative mx-auto flex flex-col justify-center  sm:py-1 lg:flex-row lg:justify-between">
                <div class="flex items-center justify-center">
                   <img src={"/assets/images/macbook.svg"} alt="" class="animate-bounce-slow" /> 
                </div>
                <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 class="lg:text-5xl font-bold leading-none text-3xl">
						Web solution
					</h1>
                    <p class="my-8 text-xl leading-9 sm:mb-12">Based on years of experience growing wealth, Wealthbuddy makes it possible to define exactly what you want the future to be. You have come this far, Let's take you farther.
                    </p>
                </div>
            </div>
        </section>
	)
}
