interface props {
    content: string,
    className: string,
    fontSize: number,
}
// ` bg-gradient-to-r from-yellow-300 to-orange-400 flex flex-wrap border border-yellow-500  rounded px-1 h-auto w-26`
const LabelCus = (props: props) => {
    return (
        <>
            <label className={props.className}>
               <p style={{
                   fontSize: props.fontSize,
               }} className={`items-center font-semibold  `}>{props.content}</p>
            </label>
        </>
    )
}
export default LabelCus;