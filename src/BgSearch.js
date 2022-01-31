import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const BgSearch = ({ searchTextBg, setActivePageBgs }) => {
    const [textBg, setTextBg] = useState('');
    const [clearBg, setClearBg] = useState(false)
    const onSubmitBg = (e) => {
        e.preventDefault();
        searchTextBg(textBg);
        setActivePageBgs(1)
    }
    const handleBgClear = (e) => {
        e.preventDefault();
        document.getElementById('bg-search').value = ''
        setClearBg(false)
        searchTextBg('')
        document.getElementById('bg-search').focus()
        setActivePageBgs(1)
    }

    return (
        
        <form onSubmit={onSubmitBg} className="w-full mb-5">
            <div className="flex items-center justify-between">
                <input id='bg-search' onChange={e => {setTextBg(e.target.value); setClearBg(true)}} className="appearance-none bg-transparent border-none w-full text-lg text-white text-opacity-75 mr-2 py-2 leading-tight focus:outline-none" type="text" placeholder={`Pesquisar...`} />
                <div className='ml-auto flex items-center'>
                    <span
                        onClick={handleBgClear}
                        className={`${clearBg ? 'block' : 'hidden'} mr-2 rounded p-2 cursor-pointer text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75`}
                    >
                        <ClearRoundedIcon className='block w-6 h-6' />
                    </span>
                    <button className="rounded p-2 text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75" type="submit">
                        <SearchRoundedIcon className='block w-6 h-6' />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default BgSearch;