/// <reference types="react" />
import React from 'react';
import { ListItemProps, BriefProps } from './PropsType';
export declare class Brief extends React.Component<BriefProps, any> {
    render(): JSX.Element;
}
declare class ListItem extends React.Component<ListItemProps, any> {
    static defaultProps: {
        prefixCls: string;
        align: string;
        error: boolean;
        multipleLine: boolean;
        wrap: boolean;
    };
    static Brief: typeof Brief;
    render(): JSX.Element;
}
export default ListItem;
