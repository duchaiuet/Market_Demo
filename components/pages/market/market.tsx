import Card from "../../organisms/card/card";
import Pagination from "../../organisms/pagination/pagination";

const Market = () => {
    return (
        <>
            <div className="flex flex-col overflow-y-scroll sm:h-[calc(100vh-90px)]">
                <div className="sm:grid sm:grid-cols-4 sm:gap-4 px-4 flex flex-row flex-wrap ">
                    <Card title="#1172 DODO" vote={5} price={500} medal={1}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={2}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={3}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={3}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={2}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={2}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={3}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={3}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={1}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={2}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={3}/>
                    <Card title="#1172 DODO" vote={5} price={500} medal={1}/>
                </div>
                <div className="flex justify-center items-center">
                    <Pagination/>
                </div>
            </div>
        </>
    )
}
export default Market;