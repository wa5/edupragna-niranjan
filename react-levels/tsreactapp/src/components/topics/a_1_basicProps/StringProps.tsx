import React from 'react';

export interface IStringPropsProps {
    name: string;
}

const StringProps: React.FC<IStringPropsProps> = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
        </>
    );
};

export default StringProps;
