import { useState, useRef, useEffect } from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import data from "../../../data/data.json";
import SearchResult from "../SearchResult/SearchResult";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const debounced = useDebuonced(searchValue, 500);
  const [suggestedResults, setSuggestedResults] = useState([]);

  const formattedSearchValue = searchValue.replace(/\s/g, "");

  const inputRef = useRef();
  const tippyRef = useRef();

  useEffect(() => {
    if (searchValue === "") {
      setShowCloseIcon(false);
    } else {
      setShowCloseIcon(true);
    }
  }, [searchValue]);

  function handleHideResult() {
    setShowResult(false);
  }

  function useDebuonced(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);

      return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
  }
  useEffect(() => {
    const filteredDrivers = data.drivers.filter((driver) =>
      driver.Name.toLowerCase().includes(formattedSearchValue.toLowerCase())
    );
    const filteredTeams = data.teams.filter((team) =>
      team.Name.toLowerCase().includes(formattedSearchValue.toLowerCase())
    );
    const results = [...filteredDrivers, ...filteredTeams];
    setSuggestedResults(results);
  }, [debounced]);

  return (
    <div className={styles.searchBox}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} />

      <Tippy
        instance={tippyRef}
        interactive
        visible={showResult}
        placement="bottom"
        render={(attrs) => (
          <div className={styles.tippySearch} tabIndex="-1" {...attrs}>
            {suggestedResults.slice(0, 5).map((result) => (
              <div key={result.id}>{<SearchResult data={result} />}</div>
            ))}
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <input
          ref={inputRef}
          className={styles.searchInput}
          value={searchValue}
          onFocus={() => setShowResult(true)}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          spellCheck={false}
        />
      </Tippy>
      {showCloseIcon && (
        <FontAwesomeIcon
          className={styles.closeSearchIcon}
          icon={faCircleXmark}
          onClick={() => {
            setSearchValue("");
            inputRef.current.focus();
          }}
        />
      )}
    </div>
  );
}

export default Search;
