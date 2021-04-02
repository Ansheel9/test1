import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUsers , faLock , faLockOpen } from '@fortawesome/free-solid-svg-icons'


export const Savings = () => {
    return (
		<section class="bg-white py-10 relative">
            <img class="hidden  lg:block lg:absolute -inset-y-32 inset-x-96 ml-64 " src={"/assets/images/MaskGroup.svg"} alt=""/>
            <img class="hidden lg:block lg:absolute top-40 right-32 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>
            <img class="hidden lg:block lg:absolute bottom-20 right-52 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>

            <div class="container relative mx-auto flex flex-col justify-center sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
                <div class="flex bg-white flex-col justify-center lg:-ml-20  text-center border rounded-br-3xl shadow-2xl lg:max-w-3xl lg:text-left">
                    <span className=""></span>
                    <div class="flex py-2 ml-auto w-80  -mt-8 rounded-t-xl shadow-2xl bg-green-50">
                        <h1 className="text-white mx-auto  font-semibold text-2xl ">Savings</h1>
                    </div>
                    <section class="mt-10 lg:ml-20">
                        <div class="container">
                            <div class="flex flex-wrap lg:mx-12 ">
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-12 lg:mb-10">
                                    <div class="">
                                    <div className="flex space-x-6">
                                        <FontAwesomeIcon icon={faUser} size="lg" />
                                        <h3 class="text-xl font-semibold font-heading">Personal Target</h3>
                                    </div>
                                    <p class="text-md font-light pr-6 pt-3 text-gray-900 ">
                                    Choose from a list of targets and save 
                                        regularly towards your goals with great returns on your savings</p>                            
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-12 lg:mb-10">
                                    <div class="">
                                        <div className="flex space-x-6">
                                            <FontAwesomeIcon icon={faLock} size="lg"  /> 
                                            <h3 class="text-xl font-semibold font-heading">Fixed Lock</h3>
                                        </div>
                                        <p class="text-md font-light pt-3 text-gray-900 ">
                                        Put money away for a set period of time - minimum of 6 months, Only put money you can do without immediately as you will not be able to access to it until maturity.</p>                            
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-12 lg:mb-10">
                                    <div class="">
                                        <div className="flex space-x-6">
                                            <FontAwesomeIcon icon={faLockOpen} size="lg"  /> 
                                            <h3 class="text-xl font-semibold font-heading">Fixed Flexible</h3>
                                        </div>
                                        <p class="text-md font-light pr-6 pt-3 text-gray-900 ">
                                        Create a source of ready cash in case of an unplanned expense and other unexpected things without having to turn to debt.</p>                            
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-6 lg:mb-10">
                                    <div class="">
                                            <div className="flex space-x-6">
                                                <FontAwesomeIcon icon={faUsers} size="lg" />
                                                <h3 class="text-xl font-semibold font-heading">Group Savings</h3>
                                            </div>
                                            <p class="text-md font-light pt-3 text-gray-900 ">
                                            Make money with your friends and family (start a group savings plan today.Group Target, Group Challenge and Group Contributory)
                                            </p>                            
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </section>
                </div>
                {/* <div class="flex mr-40  ">
                    <img src={"/assets/images/MaskGroup.png"} alt="" />
                </div> */}
            </div>
        </section>
	)
}
