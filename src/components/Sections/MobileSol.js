import React from "react";


export const MobileSol = () => {
    return (
		<section class="bg-white  relative text-gray-800">
			<img class="hidden lg:block lg:absolute top-20 inset-x-72 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>
            <img class="hidden lg:block lg:absolute top-96 right-20 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>

			<div class="container relative mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-5 lg:flex-row lg:justify-between">
				<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
					<h1 class="lg:text-5xl font-bold leading-none text-3xl">
						Mobile solution
					</h1>
					<p class="my-8 text-xl leading-9 sm:mb-12">
						We know that the best way to is not to pick the time you invest, but to invest anytime you have cash. 
						<br ></br>
					With the Wealthbuddy Mobile app, you can always invest, no matter where or when. 
					<br></br>
					In 4 clicks you are able to put your money to work yielding the highest interest-output value for any amount spent
						
					</p>
				</div>
				<div class="flex lg:mr-20 animate-bounce-slow">
					<img src={"/assets/images/Screen+Phone.svg"} alt="" class="" />
				</div>
			</div>
		</section>
	)
}
