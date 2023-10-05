const Badge = ({ children, onClick, addOrRemove, clickable, current }) => {
  return (
    <div onClick={onClick} className={`${current ? 'bg-black text-white' : 'bg-zinc-200'} min-h-[25px] font-semibold h-fit rounded-md m-2 flex flex-row justify-center items-center cursor-pointer`}>
      <span className='text-xs px-4 translate-y-0.5'>{children}</span>

      {clickable
        ? <div className="h-full bg-black rounded-r-md text-white px-2">{addOrRemove === 'Add' ? '+' : '-'}</div>
        : ''
      }
    </div>

  )
}

export default Badge