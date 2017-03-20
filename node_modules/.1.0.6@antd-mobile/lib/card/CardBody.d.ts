/// <reference types="react" />
import React from 'react';
export interface CardBodyProps {
    children?: any;
    style?: {};
    styles: any;
}
export default class CardBody extends React.Component<CardBodyProps, any> {
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
