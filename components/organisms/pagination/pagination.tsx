import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
        <nav aria-label="Page navigation example" className="content-center">
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <a href="#"
                       className="block px-2 py-1 ml-0 leading-tight bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Previous</span>
                        <FontAwesomeIcon className="sm:h-5 h-4 dark:text-white" icon={faChevronLeft} />
                    </a>
                </li>
                <li>
                    <a href="#"
                       className="px-2 py-1 mx-1 rounded-md leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#"
                       className="px-2 py-1 mx-1 rounded-md leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page"
                       className="z-10 px-2 py-1 mx-1 rounded-md leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:bg-zinc-900">3</a>
                </li>
                <li>
                    <a href="#"
                       className="px-2 py-1 mx-1 rounded-md leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#"
                       className="px-2 py-1 mx-1 rounded-md leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                    <a href="#"
                       className="block px-2 py-1 leading-tight bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:bg-zinc-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <span className="sr-only">Next</span>
                        <FontAwesomeIcon className="sm:h-5 h-4 dark:text-white" icon={faChevronRight} />
                    </a>
                </li>
            </ul>
        </nav>

    )
}
export default Pagination;