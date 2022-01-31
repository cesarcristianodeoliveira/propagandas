import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const PatternSearch = ({ searchPattern, setActivePagePatterns }) => {
    const [textPattern, setTextPattern] = useState('');
    const [clear, setClear] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        searchPattern(textPattern);
        setActivePagePatterns(1)
    }
    const handleClear = (e) => {
        e.preventDefault();
        document.getElementById('pixabay-search').value = ''
        setClear(false)
        searchPattern('')
        document.getElementById('pixabay-search').focus()
        setActivePagePatterns(1)
    }

    return (
        
        <form onSubmit={onSubmit} className="w-full mb-5">
            <div className="flex items-center justify-between">
                <input id='pixabay-search' onChange={e => {setTextPattern(e.target.value); setClear(true)}} className="appearance-none bg-transparent border-none w-full text-lg text-white text-opacity-75 mr-2 py-2 leading-tight focus:outline-none" type="text" placeholder="Pesquisar imagem..." />
                <div className='ml-auto flex items-center'>
                    <span
                        onClick={handleClear}
                        className={`${clear ? 'block' : 'hidden'} mr-2 rounded p-2 cursor-pointer text-truegray-800 bg-white hover:bg-white hover:bg-opacity-75`}
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

export default PatternSearch;