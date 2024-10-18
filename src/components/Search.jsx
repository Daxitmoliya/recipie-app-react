import './Search.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleInput = (e) => { setInput(e.target.value) }
    const handleSubmit = (e) => { 
        e.preventDefault();
        navigate('/searched/' + input);
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className='search-field'
                    value={input}
                    onChange={handleInput}
                    placeholder="Search for recipes..." 
                />
                <FaSearch />
            </form>
        </div>
    )
}

export default Search;
