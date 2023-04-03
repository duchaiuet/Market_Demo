import Card from "../../organisms/card/card";
import Pagination from "../../organisms/pagination/pagination";
import ButtonSelect from "../../atoms/button/buttonSelect";
import React from "react";
import SideFilter from "../../organisms/sideFilter/sideFilter";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const Market = () => {
    return (
        <>
            <div className="flex flex-col ">
                <div className="flex flex-row">
                    <div className="items-center w-auto h-8">
                        <img src="/pet/pet.png" className="w-10 z-10" alt=""/>
                        <button id="states-button"
                                className="flex-shrink-0 w-fit inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-500 bg-transparent border border-gray-300 rounded-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:bg-transparent"
                                type="button">
                            Latest
                        </button>
                    </div>
                    <img src="/item.png" alt=""/>
                    <img src="/card.png" className="grayscale" alt=""/>
                    <img src="/building.png" className="grayscale" alt=""/>
                    <img src="/land.png" className="grayscale" alt=""/>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full px-4 py-2 sm:w-[30%]">
                        <SideFilter/>
                    </div>
                    <div className="flex flex-col">
                        <div className="items-center">
                            <ButtonSelect/>
                        </div>
                        <div className="flex flex-col px-4">
                            <div className="sm:grid sm:grid-cols-4 sm:gap-4 px-4 flex flex-row flex-wrap ">
                                <Card title="#1172 DODO" vote={5} price={500} medal={1}/>
                                <Card title="#1172 DODO" vote={3} price={500} medal={2}/>
                                <Card title="#1172 DODO" vote={2} price={500} medal={3}/>
                                <Card title="#1172 DODO" vote={4} price={500} medal={3}/>
                                <Card title="#1172 DODO" vote={1} price={500} medal={2}/>
                                <Card title="#1172 DODO" vote={4} price={500} medal={2}/>
                                <Card title="#1172 DODO" vote={5} price={500} medal={3}/>
                                <Card title="#1172 DODO" vote={3} price={500} medal={3}/>
                                <Card title="#1172 DODO" vote={2} price={500} medal={1}/>
                                <Card title="#1172 DODO" vote={2} price={500} medal={2}/>
                                <Card title="#1172 DODO" vote={1} price={500} medal={3}/>
                                <Card title="#1172 DODO" vote={3} price={500} medal={1}/>
                            </div>
                            <div className="flex justify-center items-center">
                                <Pagination/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Market;