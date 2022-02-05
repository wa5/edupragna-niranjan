import React from 'react';
import { connect } from 'react-redux';
import Hone1 from '../components/Hone1';

interface IownProps {
    name: string;
}
interface IStateProps {}
interface IDispatchProps {}
export interface IUserH1tagContainerProps {}
///look at this link https://flow.org/en/docs/react/types/https://flow.org/en/docs/react/types/
//for the component type explaination

const mapDispatchToprops = () => {};
const mapStateToprops = () => {
    return {
        name: 'waseemw2'
    };
};

export const UserH1tagContainer: React.ComponentType<IownProps> = connect<IStateProps, IownProps, IDispatchProps>(mapStateToprops, mapDispatchToprops)(Hone1);
