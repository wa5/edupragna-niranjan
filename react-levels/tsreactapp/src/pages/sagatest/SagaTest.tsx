import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import { fetchTodoRequest } from '../../store/todo/actions';
import { getErrorSelector, getPendingSelector, getTodosSelector } from '../../store/todo/selectors';

const SagaTest = () => {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const todos = useSelector(getTodosSelector);
    const error = useSelector(getErrorSelector);

    const getPending = (state: AppState) => state.todo.pending;

    console.log('jhdsjh', getTodosSelector, todos);

    useEffect(() => {
        dispatch(fetchTodoRequest());
    }, []);

    return (
        <div style={{ padding: '15px' }}>
            {pending ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error</div>
            ) : (
                todos.map((todo, index) => (
                    <div style={{ marginBottom: '10px' }} key={todo.id}>
                        {++index}. {todo.title}
                    </div>
                ))
            )}
        </div>
    );
};

export default SagaTest;
