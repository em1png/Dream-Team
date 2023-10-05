import Card from '../UI/Card'
import Badge from '../UI/Badge'
import Stack from '../UI/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../store/filters/filters-actions';
import { selectorAllFilters } from '../store/filters/filters-selectors';


const FiltersPanel = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectorAllFilters);
  const currentRole = filters[0];
  const currentCountry = filters[1];

  const roles = ['Carry', 'Mid', 'Offlane', 'Soft support', 'Hard support'];
  const country = ['Russia', 'Ukraine', 'Belarus', 'Moldova']
  return (
    <div>
      <Card>
        <Stack>
          <Badge clickable={true} onClick={() => dispatch(removeFilter(currentRole))}>Clear</Badge>
          {roles.map(role =>
            <Badge
              current={role === currentRole ? true : false}
              addOrRemove='Add'
              key={role}
              onClick={() => dispatch(addFilter(role))}> {role}
            </Badge>)}
        </Stack>

        <Stack>
          <Badge clickable={true} onClick={() => dispatch(removeFilter(currentCountry))}>Clear</Badge>
          {country.map(country =>
            <Badge
              current={country === currentCountry ? true : false}
              addOrRemove='Add'
              key={country}
              onClick={() => dispatch(addFilter(country))}> {country}
            </Badge>)}
        </Stack>
      </Card>
    </div>
  )
}

export default FiltersPanel