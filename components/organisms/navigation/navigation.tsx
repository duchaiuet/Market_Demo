import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {faWallet} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [showWalletDropDown, setShowWalletDropDown] = useState(false)
    const [showMenuDropDownChild, setShowMenuDropDownChild] = useState(false)
    return (
        <>
            <nav className="top-0 z-40 flex-none w-full mx-auto bg-zinc-900 border-b border-gray-200 border-gray-600 ">
                <div className="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4">
                    <div className="flex items-center">
                        <div className="flex items-center justify-between">
                            <a href="#" className="flex">
                                <img src="/bear-market.png" className="h-12 mr-3" alt=""/>
                                <span
                                    className="self-center text-2xl font-bold font-sans whitespace-nowrap dark:text-white">Market NFT</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 mx-6 xl:mx-16 xl:pl-4 w-full items-center">
                        {/*<label htmlFor="simple-search" className="sr-only">Search</label>*/}
                        {/*<div className="relative w-full">*/}
                        {/*    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">*/}
                        {/*        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"*/}
                        {/*             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path*/}
                        {/*                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"*/}
                        {/*            ></path>*/}
                        {/*        </svg>*/}
                        {/*    </div>*/}
                        {/*    <input type="text" id="simple-search"*/}
                        {/*           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  bg-zinc-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"*/}
                        {/*           placeholder="Search" required/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex items-center">
                        <button type="button" onClick={() => {}}
                                className="text-gray-900 ml-2  hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 bg-zinc-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                            <FontAwesomeIcon className="mr-2 h-6 dark:text-white" icon={faCoins} />
                            Buy Coin
                        </button>
                        <button type="button" onClick={() => {setShowWalletDropDown(!showWalletDropDown)}}
                                className="text-gray-900 ml-2 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 bg-zinc-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                            <FontAwesomeIcon icon={faWallet} className="mr-2 h-6 dark:text-white" />
                            Wallet Connect
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;