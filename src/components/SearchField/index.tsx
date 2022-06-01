import React, { useState } from 'react'
import localities from '../../data/data.json';
import { ILocalities } from '../../data/interface';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const places = localities.stores

export default function SearchField(): JSX.Element {
  const [query, setQuery] = useState("");
  const [searchedplacesResults, setSearchedPlacesResults] = useState<ILocalities[]>([])

  function handleChange(e: any) {
    const { value } = e.target;
    setQuery(value);

    console.log({value})
    let matchingNames: ILocalities[] = [];

    if (value.length > 0) {
      for (let local of places) {
        if (matchingNames.length > 5) {
          break;
        }

        const macth = local.name.toLowerCase().startsWith(value.toLowerCase());

        if (macth) {
          matchingNames.push(local)
        }
      }
    }
    return setSearchedPlacesResults(matchingNames)
// retun CallbackFunction(matchingNames)
  }

  // console.log(searchedplacesResults)

  return (
    <>
      <FormControl fullWidth sx={{ m: 0 }}>
      <InputLabel htmlFor="outlined-adornment-password">Pesquisa</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={query}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          label="Pesquisa"
        />
      </FormControl>
    </>
  )
}
