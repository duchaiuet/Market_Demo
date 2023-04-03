interface Props {
    func: void,
    class: string,
    content: string
}

const button = (props: Props) => {
    return (
        <button type="button"
                onClick={() => props.func}
                className={props.class}>
            <div className="inline-flex items-center">
                {props.content}
            </div>
        </button>
    )
}