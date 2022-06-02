import React, { useContext, useState } from 'react'
import localities from '../../data/data.json';
import { ILocalities } from '../../data/interface';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StoreDataContext } from '../../providers/SearchProvider';

const places = localities.stores

interface ISearchField {
  searchType: string;
  searchPlaceholder: string;
};

export default function SearchField({ searchType, searchPlaceholder }: ISearchField): JSX.Element {
  const { setStoredata } = useContext(StoreDataContext);
  const [query, setQuery] = useState("");

  function handleChange(e: any) {
    const { value } = e.target;
    setQuery(value);

    let matchingNames: ILocalities[] = [];

    if (value.length > 0) {
      for (let local of places) {

        const macth = local.name.toLowerCase().startsWith(value.toLowerCase());

        if (macth) {
          matchingNames.push(local)
        }
      }
    }

    return setStoredata(matchingNames)
  }

  return (
    <>
      <FormControl fullWidth sx={{ m: 0 }}>
        <InputLabel htmlFor="outlined-adornment-password">Pesquisa</InputLabel>
        <OutlinedInput
          type={searchType == "loja" ? "text" : "number"}
          id="outlined-adornment-amount"
          value={query}
          onChange={handleChange}
          startAdornment={
            searchType == "loja" ? (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ) : false
          }
          label={searchPlaceholder}
        />
      </FormControl>
    </>
  )
}
