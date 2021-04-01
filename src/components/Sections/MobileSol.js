import React from "react";


export const MobileSol = () => {
    return (
		<section class="bg-white text-gray-800">
			<div class="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:py-5 lg:flex-row lg:justify-between">
				<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
					<h1 class="text-3xl font-bold leading-none sm:text-6xl">
						Mobile solution
					</h1>
					<p class="my-8 text-xl leading-10 sm:mb-12">
						We know that the best way to is not to pick the time you invest, but to invest anytime you have cash. 
						<br ></br>
					With the Wealthbuddy Mobile app, you can always invest, no matter where or when. 
					<br></br>
					In 4 clicks you are able to put your money to work yielding the highest interest-output value for any amount spent
						
					</p>
				</div>
				<div class="flex lg:mr-20">
					<img src={"/assets/images/Screen+Phone.png"} alt="" class="" />
				</div>
			</div>
		</section>
	)
}
