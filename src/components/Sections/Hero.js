import React from "react";

export const Hero = () => {
    return (
        <section class="relative pb-20">
            <nav class="flex justify-between items-center py-4 px-4 xl:px-10 top-0 fixed z-50 w-full flex-wrap navbar-expand-lg bg-white shadow">
                <a class="text-lg font-semibold" href="#">
                    <img class="" src={"/assets/images/logo.png"} alt="" width="auto" />
                </a>
                <div class="lg:hidden">
                <button class="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                    <svg class="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
                </div>
                <ul class="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
                <li><a class="text-sm font-medium" href="#">Login</a></li>
                </ul>
                <div class="hidden lg:block">
                    <a class="inline-block py-3 px-8 text-sm leading-normal font-medium bg-green-50 hover:bg-green-600 text-white rounded transition duration-200" href="#">
                    Get Started</a>
                </div>
            </nav>
            <img class="hidden lg:block lg:absolute top-0 left-0 mt-32" src="zeus-assets/icons/dots/blue-dot-left-bars.svg" alt=""/>
            <img class="hidden lg:block lg:absolute bottom-0 right-0 mt-20" src="zeus-assets/icons/dots/yellow-dot-right.svg" alt=""/>
            <img class="lg:hidden absolute bottom-0 left-0 -mb-20" src="zeus-assets/icons/dots/blue-dot-left-bars.svg" alt="" />
            <div class="relative container pt-12 px-4 mx-auto text-center">
                
                <h2 class="mt-8 lg:py-20 mb-8 lg:mb-12 text-4xl lg:text-6xl font-semibold">Money Management <br></br> Reimagined</h2>
                <p class="max-w-3xl mx-auto mb-8 lg:mb-12 text-xl text-gray-500">
                Because growing your wealth does not have to be a full time job for you. Let's grow wealth for you!</p>
                </div>
            <div class="hidden navbar-menu relative z-50">
                <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div class="flex items-center mb-8">
                    <a class="mr-auto text-lg font-semibold leading-none" href="#">
                        <img class="h-7" src="zeus-assets/logo/logo-zeus-red.svg" alt="" width="auto"/>
                    </a>
                    <button class="navbar-close">
                    <svg class="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                </div>
                <div>
                    <ul>
                    <li class="mb-1"><a class="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="#">Login</a></li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <div class="pt-6"><a class="block py-3 text-center text-sm leading-normal bg-green-50 hover:bg-green-600 text-white font-semibold rounded transition duration-200" href="#">Get Started</a></div>
                </div>
                </nav>
            </div>
            </section>
    )
}