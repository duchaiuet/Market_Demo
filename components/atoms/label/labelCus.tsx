interface props {
    content: String,
}

const LabelCus = (props: props) => {
    return (
        <>
            <label className={`bg-yellow-300 flex flex-wrap border border-yellow-500  rounded px-1 h-auto w-26` }>
               <p style={{
                   fontSize: 10,
               }} className={`items-center font-semibold `}>{props.content.toUpperCase()}</p>
            </label>
        </>
    )
}
export default LabelCus;