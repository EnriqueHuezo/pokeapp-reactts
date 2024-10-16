import React from "react";
import { LoaderViewProps } from "../../types";

export const LoaderView: React.FC<LoaderViewProps> = ({ styles }) => {
  return (
    <div className={`${styles} flex justify-center items-center`}>
        <div className='pokemon'/>
    </div>
  )
}
