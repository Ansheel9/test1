import React from "react";
// import logo from '/assets/images/logo.png';


export const Navbar = () => {
    return (
        <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-1 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
         <a
            class="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            href="logo"
          >
           <img class="" src={"/assets/images/logo.png"} alt="" width="auto" />
          </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          
        >
          ####
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        // :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center my-2 lg:my-0 ml-10 lg:ml-0 " 
        //   style="{{@media (min-width: 1024px) {margin-right: 20px}}}"
          >
              Login
           </li>         
          <li class="flex items-center ml-5">
              <button
              class="bg-green-50 hover:bg-green-600 text-white active:bg-green-600 text-sm font-bold uppercase px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              Get Started 
            </button>
            
          </li>
        </ul>
      </div>
    </div>
    </nav>
    )
}