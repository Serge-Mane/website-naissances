
function ActionButton({ classes, label, action }: any) {
    return (
        <button type="button" className={`p-2 text-center ${classes}`} onClick={action}>
            {label}
        </button>
    )
}

export default ActionButton