import { FcSearch} from 'react-icons/fc';
import './style.css'

export default function SearchBar ({onSearch,numResults}){
 
         return <div>
                   <h1>#5-Buscador &#128065;&#128065;</h1>
                   <div className='searchBar'><FcSearch className='searchIcon'/><input autoFocus name='searchBox' type="text" onChange={onSearch}  placeholder='   Busca . . .'/></div>
                   <h2>Resultados: {numResults}</h2>
                </div>
    }