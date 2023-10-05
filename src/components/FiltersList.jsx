import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import { selectorFilters } from '../store/filters/filters-selectors';
import Badge from '../UI/Badge';
import Stack from '../UI/Stack';
import {removeFilter } from '../store/filters/filters-actions';

const FiltersList = () => {
  const dispatch = useDispatch();
  const filtersReady = useSelector(selectorFilters);
  return (
    <Card>
      <Stack>
        <Badge>Filters: </Badge>
        {filtersReady.map(filter => <Badge clickable={true} key={filter} onClick={() => dispatch(removeFilter(filter))}>{filter}</Badge>)}
      </Stack>
    </Card>
  )
}

export default FiltersList