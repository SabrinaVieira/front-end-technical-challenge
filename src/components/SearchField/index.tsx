import React, { useContext, useState } from 'react'
import localities from '../../data/data.json';
import { ILocalities } from '../../data/interface';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StoreDataContext } from '../../providers/SearchProvider';

const places = localities.stores

interface ISearchField {
  searchType: string;
  searchPlaceholder: string;
  label: string;
};

export default function SearchField({ searchType, searchPlaceholder, label }: ISearchField): JSX.Element {
  const { setStoredata } = useContext(StoreDataContext);
  const [query, setQuery] = useState("");

  function handleChange(e: any) {
    const { value } = e.target;
    setQuery(value);

    let matchingNames: ILocalities[] = [];

    if (value.length > 0) {

      if (searchType === "loja") {
        for (let local of places) {
          const macth = local.name.toLowerCase().startsWith(value.toLowerCase());
          if (macth) {
            matchingNames.push(local)
          }
        }
        return setStoredata(matchingNames)
      }
      for (let local of places) {
        if (local.revenue > value) {
          matchingNames.push(local)
        }
      }
      return setStoredata(matchingNames)
    }
  }


  return (
    <>
      <TextField
        fullWidth
        label={label}
        value={query}
        variant="outlined"
        id="standard-textarea"
        placeholder={searchPlaceholder}
        type="text"
        onChange={handleChange}

        InputProps={{
          endAdornment: (
            searchType == "loja" ? (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ) : false
          )
        }}

      />
    </>
  )
}
