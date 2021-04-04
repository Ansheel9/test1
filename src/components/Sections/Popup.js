import React from "react";

export const Popup = () => {
    const [ showPopUp , setShowPopUp ] = React.useState(true)
    return (
        <>
        { showPopUp ? (
            <>
            <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    
            
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <div className="  mb-10 ">
                                <button
                                className=" ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowPopUp(false)}
                                    >
                                        <span className="bg-transparent text-black font-bold  h-12 w-12 text-3xl block outline-none focus:outline-none">
                                        ×
                                        </span>
                                </button>
                            </div>
                            <div className="mx-auto">
                                <img className=" mx-auto mt-3 mb-6 " src={"/assets/images/logo.svg"} alt="" width="auto" />
                            </div>
                            <h3 className="text-lg leading-6 font-medium text-green-50" id="modal-title">
                            Welcome
                            </h3>
                            <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="flex flex-row my-5">
                                <input type="text" placeholder="example@email.com" className="w-3/5 p-3 border border-gray-100 rounded-l-lg sm:w-2/3" />
                                <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-green-50 text-gray-50">Subscribe</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <div className="actions">
                    <button
                        className="button w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setShowPopUp(false)}
                    >
                        Close Popup
                    </button>
                    </div>
                    
                    <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Sign Up
                    </button>
                </div>
                </div>
            </div>
        </div>
        </>
        ) : null }
        </>
    )
}