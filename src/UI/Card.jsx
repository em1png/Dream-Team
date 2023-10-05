const Card = ({ colorTheme = 'dark', children }) => {
    return (
        <div className={`bg-white min-h-[60px] mx-auto w-4/6 rounded shadow-xl m-4 flex flex-row justify-start items-center border-l-4 ${colorTheme === "dark" ? 'border-black' : 'border-zinc-300'}`}>
            <p className="flex flex-col p-2 w-full">{children}</p>
        </div>
    )
}

export default Card