import React from 'react';


export interface IHone1Props {
    name: string;
}

const Hone1: React.FC<IHone1Props> = (props) => {
    console.log(props);
    return (
        <>
            <h1>hello</h1>
            <h2>{props.name}</h2>
        </>
    );
};

export default Hone1;
