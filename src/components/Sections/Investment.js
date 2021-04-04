import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyCheck, faUserFriends , faUniversity , faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'

export const Investment = () => {
    return (
		<section class="bg-white relative ">
            <img class="hidden lg:block lg:absolute -bottom-10 inset-x-20 ml-52 transform hover:scale-110" src={"/assets/images/MaskGroup1.svg"} alt=""/>
            <img class="hidden lg:block lg:absolute top-5 left-32 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>
            <img class="hidden lg:block lg:absolute bottom-10 left-52 animate-bounce-slow" src={"/assets/images/nairacoin-01a.png"} alt=""/>

            <div class="container relative ml-auto flex flex-col justify-center sm:py-12 lg:py-12 lg:flex-row lg:justify-between">
                <div class="flex items-center justify-center ">
                    
                </div>
            
                <div class="flex bg-white  flex-col justify-center lg:-mr-0 text-left lg:border-t lg:border-b border-l  rounded-bl-3xl lg:shadow-2xl lg:max-w-3xl lg:text-left">
                    <div class="flex py-2 mr-auto w-72 -mt-8 rounded-t-xl shadow-2xl bg-green-50">
                        <h1 className="text-white mx-auto  font-semibold text-2xl ">Investment</h1>
                    </div>
                    <section class="mt-10">
                        <div class="container">
                            <div class="flex flex-wrap lg:mx-10">
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-12 lg:mb-10">
                                    <div class="">
                                    <div className="flex space-x-6">
                                        <FontAwesomeIcon icon={faMoneyCheck} size="lg" />
                                        <h3 class="text-xl lg:-mt-1 font-semibold font-heading">Fixed Deposit</h3>
                                    </div>
                                    <p class="text-md font-light  pt-3 text-gray-900 ">
                                    The fixed term investment account serves as a better alternative to a savings account, especially for people looking to achieve set short-term projects. It affords individuals the opportunity to set aside money and get higher interest than a typical savings account
                                    </p>                            
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-12 lg:mb-10">
                                    <div class="">
                                        <div className="flex space-x-6">
                                            <FontAwesomeIcon icon={faUserFriends} size="lg" />
                                            <h3 class="text-xl lg:-mt-1 font-semibold font-heading">Mutual Funds</h3>
                                        </div>
                                        <p class="text-md font-light pt-3 text-gray-900 ">
                                        The money market fund is a low risk fund, that invests in a combination of fixed income instruments like treasury bills, commercial papers, fixed deposit and call placement.</p>                            
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-12 lg:mb-10">
                                    <div class="">
                                        <div className="flex space-x-6">
                                            <FontAwesomeIcon icon={faUniversity} size="lg" />
                                            <h3 class="text-xl lg:-mt-1 font-semibold font-heading">Treasury Bills</h3>
                                        </div>
                                        <p class="text-md font-light pt-3 text-gray-900 ">
                                        Treasury Bills afford you the opportunity to lend money to the government and get paid back with interest after a period time usually 91days, 182 days or 364days subject to your choice.</p>                            
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-6 lg:mb-10">
                                    <div class="">
                                            <div className="flex space-x-2">
                                                <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
                                                <h3 class="text-xl lg:-mt-1 font-semibold font-heading">Meristem Dollar Investment</h3>
                                            </div>
                                            <p class="text-md font-light pt-3 text-gray-900 ">
                                            The Meristem Dollar investment creates a platform for you to earn interest in foreign currency and invest in dollar denominated instruments.
                                            </p>                            
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </section>
                </div>
               </div>
        </section>
	)
}
