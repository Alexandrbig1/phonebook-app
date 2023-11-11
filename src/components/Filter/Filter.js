import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/contactSlice";
import { selectFiltersContacts } from "../../redux/selectors";
import {
  FilterDiv,
  FilterInput,
  FilterLabel,
  FilterSearchIcon,
} from "./Filter.styled";

export default function Filter() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFiltersContacts);
  function changeFilter(e) {
    const searchContact = e.toLowerCase();
    dispatch(setFilter(searchContact));
  }

  return (
    <FilterDiv>
      <FilterLabel htmlFor="search">
        Find contacts by name:
        <FilterInput
          type="text"
          name="search"
          value={filteredContacts}
          placeholder="Search"
          onChange={(e) => {
            changeFilter(e.target.value);
          }}
        />
        <FilterSearchIcon />
      </FilterLabel>
    </FilterDiv>
  );
}
