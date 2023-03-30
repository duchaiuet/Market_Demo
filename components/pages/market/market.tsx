import Card from "../../organisms/card/card";

const Market = () => {
    return (
        <>
            <div className=" px-4 flex flex-row flex-wrap overflow-y-scroll h-[90vh] ">
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
        </>
    )
}
export default Market;