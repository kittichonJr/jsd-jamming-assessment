/* eslint-disable jsx-a11y/anchor-is-valid */
import './SearchBar.css';

function SearchBar(props) {
  let keySearch;
  const search = (searchs)=>{
    props.onSearch(searchs)
  }
  const handleTermChange = ({target})=>{
    keySearch = target.value
  }
  const handleClick = ()=>{
    search(keySearch)
  }

  return <div className="SearchBar">
    <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
    <button className="SearchButton" onClick={handleClick}>SEARCH</button>
</div>
}

export default SearchBar;
