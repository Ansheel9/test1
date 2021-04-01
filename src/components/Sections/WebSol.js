import React from "react";


export const WebSol = () => {
    return (
		<section class="bg-white text-gray-800">
            <div class="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-5 lg:flex-row lg:justify-between">
                <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                   <img src={"/assets/images/macbook.png"} alt="" class="" />
                </div>
                <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 class="text-3xl font-bold leading-none sm:text-6xl">
						Web solution
					</h1>
                    <p class="my-8 text-xl leading-10 sm:mb-12">Based on years of experience growing wealth, Wealthbuddy makes it possible to define exactly what you want the future to be. You have come this far, Let's take you farther.
                    </p>
                </div>
            </div>
        </section>
	)
}
