import { useState } from "react";
import useDebounce from "hooks/useDebounce";
import useMediaQuery from "hooks/useMediaQuery";

import { DropdownOverlay, FormWrapper, InputWrapper } from "./Layout.styled";
import Dropdown from "./Dropdown";

import { searchGames } from "api/get";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [gamesCount, setGamesCount] = useState(0);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFind = () => {
    setIsLoading(true);
    setOpen(true);
    setSearchResults([]);
    setGamesCount(0);

    let pageSize = 10;
    if (isSmallScreen) {
      document.body.style.overflow = "hidden";
      pageSize = 20;
    }
    const val = inputText;

    searchGames({
      pageSize,
      searchVal: val,
      onSuccess: (data) => {
        if (data.count > 0) {
          setSearchResults(data.results);
          setGamesCount(data.count);
        } else {
          setOpen(false);
        }
      },
      onFinally: (_) => setIsLoading(false),
    });
  };

  const handleClose = () => {
    if (isSmallScreen) {
      document.body.style.overflow = "auto";
    }
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key == "Escape") {
      handleClose();
    }
  };

  const isSmallScreen = useMediaQuery(980);
  useDebounce(handleFind, 1000, [inputText]);

  return (
    <FormWrapper>
      <div>
        <InputWrapper open={open}>
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            onClick={handleClose}
            onKeyDown={handleKeyDown}
          />

          {open && (
            <Dropdown
              gamesCount={gamesCount}
              isLoading={isLoading}
              isSmallScreen={isSmallScreen}
              searchResults={searchResults}
              handleClose={handleClose}
            />
          )}
        </InputWrapper>

        {open && !isSmallScreen && <DropdownOverlay onClick={handleClose} />}
      </div>
    </FormWrapper>
  );
};

export default Search;
