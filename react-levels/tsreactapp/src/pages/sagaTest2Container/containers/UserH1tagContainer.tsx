import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getPendingSelector } from '../../../store/todo/selectors';

import Hone1 from '../components/Hone1';
import { TodoState } from '../../../store/todo/types';
import { fetchTodoRequest } from '../../../store/todo/actions';

interface IownProps {}
interface IStateProps {
    name: string;
}
interface IDispatchProps {}
const mapDispatchToprops = (dispatch: Dispatch) => {
    dispatch(fetchTodoRequest());
};
const mapStateToProps = (state: any) => {
    console.log('KIOP', state.todo.todos);
    return {
        name: 'waseemw2'
    };
};

export const UserH1tagContainer: React.ComponentType<IownProps> = connect<IStateProps, IownProps, IDispatchProps>(mapStateToProps, mapDispatchToprops)(Hone1);
///look at this link https://flow.org/en/docs/react/types/https://flow.org/en/docs/react/types/
//for the component type explaination
