import React from "react";
import webShare from 'react-web-share-api';

export interface IType {
  share: any;
  isSupported: any;
}

interface OwnProps {
  Button: ({share, isSupported}: IType) => void;
}
 
const Button = ({ share, isSupported }:IType) => isSupported
    ? <button onClick={share}>Share now!</button>
    : <span>Web Share not supported</span>;
 
export default webShare<OwnProps>()(Button);