import {ReactNode, createElement, isValidElement} from 'react';
export function HTML(Type:string, Props:object, Children:React.ReactNode[]): ReactNode;
export function HTML(Type:string, Props:object, Children:React.ReactNode): ReactNode;

export function HTML(Type:string, Props:object, Children: unknown): ReactNode 
{
    if (Array.isArray(Children) && isValidElement(Children)) 
    {
        return createElement(Type, Props, Children);
    }
    else if (!Array.isArray(Children) && isValidElement(Children)) 
    {
        return createElement(Type, Props, Children);;
    }
   throw new Error('Cannot return react node from elements');
};