import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorAllDreamteam } from '../store/dreamteam/dreamteam-selectors';
import { removeDreamteam } from '../store/dreamteam/dreamteam-actions';

const Header = () => {
  const dispatch = useDispatch();
  const dreamTeam = useSelector((item) => selectorAllDreamteam(item));
  useEffect(() => { }, [dreamTeam]);

  return (
    <div className='flex flex-col'>
      <h1 className='flex flex-row items-center justify-center pt-5 font-semibold text-2xl text-center'>Create your Dream team Dota2!</h1>
      <div className='h-fit w-4/6 mx-auto py-10 flex flex-col md:flex-row justify-between overflow-hidden'>
        {dreamTeam.map(player =>
          <div key={player.nickname} onClick={() => dispatch(removeDreamteam(player))} className='flex flex-row md:flex-col justify-start items-center md:items-center mb-4 md:mb-0 cursor-pointer hover:opacity-70'>
            {player.avatar
              ? <div className=' bg-slate-200 rounded-full w-32 h-32 overflow-hidden mb-3 mr-4 md:mr-0'>
                <img src={player.avatar} alt="?"></img>
              </div>
              :
              <div className=' bg-slate-200 rounded-full w-32 h-32 mb-3 mr-4 md:mr-0 flex flex-row justify-center items-center opacity-50'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            }

            <div>
              <p className='font-bold'>{player.nickname}</p>
              <p className='font-medium text-sm mb-2'>{player.team}</p>
              <p className='font-semibold text-sm'>{player.earning ? `${new Intl.NumberFormat("en-ES", { style: "currency", currency: "USD", minimumFractionDigits: 0 }).format(player.earning)}` : ''}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header