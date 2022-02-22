import filtersSlice from '../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../redux/selectors';
function Filter() {
  const dispatch = useDispatch();
  const filters = useSelector(filterSelector);
  return (
    <div style={{ border: '1px solid black' }}>
      <div>
        <input
          placeholder='Nhập từ khoá'
          value={filters.search}
          onChange={(e) =>
            dispatch(filtersSlice.actions.changeFilterSearch(e.target.value))
          }
        />
      </div>
      <div>
        <div>
          <label>Tất cả</label>
          <input
            type='radio'
            checked={filters.status === 'All'}
            onChange={() =>
              dispatch(filtersSlice.actions.changeFilterCompleted('All'))
            }
          />
        </div>
        <div>
          <label>Đã hoàn thành</label>
          <input
            type='radio'
            checked={filters.status === 'Completed'}
            onChange={() =>
              dispatch(filtersSlice.actions.changeFilterCompleted('Completed'))
            }
          />
        </div>
        <div>
          <label>Chưa hoàn thành</label>
          <input
            type='radio'
            checked={filters.status === 'Uncompleted'}
            onChange={() =>
              dispatch(
                filtersSlice.actions.changeFilterCompleted('Uncompleted')
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
