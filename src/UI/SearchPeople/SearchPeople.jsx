import { FaSearch } from "react-icons/fa";

import "./SearchPeople.scss";
const SearchPeople = () => {
  return (
    <div className="search">
      {/* {<faSearch />} */}
      <div className="icon-block" > <FaSearch /> </div>
      <input type="text" name="" id="" placeholder="search" />
    </div>
  );
};

export default SearchPeople;
