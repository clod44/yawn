//because radixui card causes fps issues on mobile for somereason

const Card = ({
    className = "",
    children,
    ...props
}) => {
    return (
        <div className={"shadow-lg border dark:border-neutral-700 border-neutral-200 p-2 dark:bg-neutral-800 bg-white rounded-md " + className} {...props}>
            {children}
        </div>
    )
}

export default Card