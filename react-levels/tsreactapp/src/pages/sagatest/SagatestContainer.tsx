import React from 'react';
import { connect } from 'react-redux';
import SagaTest from './SagaTest';

interface IownProps {}
interface IStateProps {
    name: string;
}
interface IDispatchProps {}
export interface IUserH1tagContainerProps {}
const mapDispatchToprops = () => {};
const mapStateToprops = () => {
    return {
        name: 'waseemw2'
    };
};

export const SagatestContainer: React.ComponentType<IownProps> = connect<IStateProps, IownProps, IDispatchProps>(mapStateToprops, mapDispatchToprops)(SagaTest);
