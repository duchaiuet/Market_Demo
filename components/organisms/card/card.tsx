import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LabelCus from "../../atoms/label/labelCus";
import Star from "../../atoms/star/star";
import {toast} from 'react-toastify';

interface CardProps {
    title: String,
    vote: number,
    price: number,
    medal: number,
    img?: string,

}

const Card = (props: CardProps) => {
    const AddToCart = () => {
        toast.info("add to cart", {
            position : "bottom-right"
        })
    }

    return (
        <>
            <div
                className="flex flex-col m-3 w-full bg-gradient-to-t from-zinc-900 to-zinc-800 max-w-sm bg-zi rounded-lg shadow dark:bg-black dark:border-gray-700">
                <div className="flex items-center">
                    {props.medal === 1 && <img src="/medal/medal_gold.png" className="h-14 p-3" alt=""/>}
                    {props.medal === 2 && <img src="/medal/medal_ag.png" className="h-14 p-3" alt=""/>}
                    {props.medal === 3 && <img src="/medal/medal_cu.png" className="h-14 p-3" alt=""/>}
                    <LabelCus fontSize={10} content="CHARACTER"
                              className={` bg-gradient-to-r from-yellow-300 to-orange-400 flex flex-wrap border border-yellow-500  rounded px-1 h-auto w-26`}/>
                </div>
                <a href="#">
                    <img className="p-8 rounded-t-lg"
                         src="https://store.corginft.io/pets/dodo/small/61b02722e4b08b49a3b94827.png"
                         alt="product image"/>
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                            {props.title}</p>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        {props.vote >= 1 && <Star/>}
                        {props.vote >= 2 && <Star/>}
                        {props.vote >= 3 && <Star/>}
                        {props.vote >= 4 && <Star/>}
                        {props.vote >= 5 && <Star/>}
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src="/coin.png" className="h-6 mr-2" alt=""/>
                            <span className="sm:text-2xl text-xl font-bold text-gray-900 dark:text-white">
                            {props.price}
                        </span>
                        </div>
                        <button onClick={()=>{AddToCart()}}
                                className="flex text-white bg-yellow-800 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">
                                Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;