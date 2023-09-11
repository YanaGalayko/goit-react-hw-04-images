import { Component } from "react";
import toast from 'react-hot-toast';
import { SearchBarStyled, 
         SearchForm,
         SearchFormInput,
         SearchFormButton } from "./Searchbar.styled";
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
    state = {
        value: '',
    }

handleValueChange = e => {
    this.setState({value: e.currentTarget.value.toLowerCase()})
};

handleSubmit = e => {
    e.preventDefault();

    const {value} = this.state
    if (!value.trim()) {
        toast.error('Pleas, enter a search query!', {
            duration: 4000,
        });
        return;
      }

      this.props.onSubmit(value);
      this.setState({ value: '' });
};

render() {
    const {value} = this.state

    return (
    <SearchBarStyled>
      <SearchForm onSubmit={this.handleSubmit}>
         <SearchFormButton type="submit">
           <FiSearch size="30"/>
         </SearchFormButton>


      <SearchFormInput
         type="text"
         value={value}
         autoComplete="off"
         autoFocus
         placeholder="Search images and photos"
         onChange={this.handleValueChange}
      />
      </SearchForm>
    </SearchBarStyled>
    )
  };
};