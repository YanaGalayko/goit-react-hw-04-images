import { useState } from "react";
import toast from 'react-hot-toast';
import { SearchBarStyled, 
         SearchForm,
         SearchFormInput,
         SearchFormButton } from "./Searchbar.styled";
import { FiSearch } from 'react-icons/fi';

export const Searchbar = ({onSubmit}) => {
const [value, setValue] = useState('')

const handleValueChange = (e) => {
  setValue(e.currentTarget.value.toLowerCase())
}

const handleSubmit = (e) => {
  e.preventDefault();

  if (!value.trim()) {
      toast.error('Pleas, enter a search query!', {
          duration: 4000,
      });
      return;
    }

    onSubmit(value);
    setValue('');
};

return (
  <SearchBarStyled>
    <SearchForm onSubmit={handleSubmit}>
       <SearchFormButton type="submit">
         <FiSearch size="30"/>
       </SearchFormButton>


    <SearchFormInput
       type="text"
       value={value}
       autoComplete="off"
       autoFocus
       placeholder="Search images and photos"
       onChange={handleValueChange}
    />
    </SearchForm>
  </SearchBarStyled>
  )
}






