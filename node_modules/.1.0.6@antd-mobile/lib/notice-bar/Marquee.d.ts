/// <reference types="react" />
import React from 'react';
export interface MarqueeProp {
    prefixCls?: string;
    text: React.ReactNode;
    loop?: boolean;
    leading?: number;
    trailing?: number;
    className?: string;
    fps?: number;
}
declare const Marquee: React.ClassicComponentClass<MarqueeProp>;
export default Marquee;
