import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import LabelCus from "../label/labelCus";

const ButtonSelect = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [total] = useState(0)

    return (
        <>
            <div className="flex items-center justify-between flex-row-reverse px-10 py-2">
                <button id="states-button" onClick={() => {setShowDropDown(!showDropDown)}}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-500 bg-transparent border border-gray-300 rounded-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:bg-transparent"
                        type="button">
                    Latest
                    {showDropDown? <FontAwesomeIcon className="text-white h-4 ml-2" icon={faChevronUp}/>: <FontAwesomeIcon className="text-white h-4 ml-2" icon={faChevronDown}/>}
                </button>
                {showDropDown &&
                    <div className="z-10 bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-transparent">
                        <ul className="absolute top-[7.5rem] right-[2.5rem] bg-gray-700 rounded-md right-0 py-2 text-sm text-gray-700 dark:text-white" aria-labelledby="states-button">
                            <li>
                                <button type="button" onClick={() => setShowDropDown(false)}
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className="inline-flex items-center">
                                        Latest Sale
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setShowDropDown(false)}
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className="inline-flex items-center">
                                        Lowest Price
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setShowDropDown(false)}
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className="inline-flex items-center">
                                        Highest Price
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setShowDropDown(false)}
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className="inline-flex items-center">
                                        Highest Rarity
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setShowDropDown(false)}
                                        className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className="inline-flex items-center">
                                        Lowest Rarity
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                }
                <LabelCus fontSize={22} content={total.toString() + " PET"} className={"bg-transparent text-white text-xl px-4 py-2"} />
            </div>
        </>
    )
};
export default ButtonSelect;