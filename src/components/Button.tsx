import React from "react";

export const Button = 
(
    { uid , attributes, content}: 
    {uid:string, attributes:object, content: React.ReactNode}
) => 
    <button key={uid} {...attributes}>{content}</button>;