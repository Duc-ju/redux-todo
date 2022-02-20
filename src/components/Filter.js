import { changeFilterSearch, changeFilterCompleted } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '../redux/selectors';
function Filter() {
  const dispatch = useDispatch();
  const filters = useSelector(filterSelector);
  return (
    <div>
      <div>
        <input
          placeholder='Nhập từ khoá'
          value={filters.search}
          onChange={(e) => dispatch(changeFilterSearch(e.target.value))}
        />
      </div>
      <div>
        <div>
          <label>Tất cả</label>
          <input
            type='radio'
            checked={filters.status === 'All'}
            onChange={() => dispatch(changeFilterCompleted('All'))}
          />
        </div>
        <div>
          <label>Đã hoàn thành</label>
          <input
            type='radio'
            checked={filters.status === 'Completed'}
            onChange={() => dispatch(changeFilterCompleted('Completed'))}
          />
        </div>
        <div>
          <label>Chưa hoàn thành</label>
          <input
            type='radio'
            checked={filters.status === 'Uncompleted'}
            onChange={() => dispatch(changeFilterCompleted('Uncompleted'))}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
