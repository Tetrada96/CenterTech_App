import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch, SetStateAction } from 'react';

export interface ILoadButtonProps {
  existDataInRedux: boolean;
  dispatch: Dispatch<AnyAction>;
  setError: Dispatch<SetStateAction<boolean>>;
}

export interface IData {
  "Дата": string,
  "Добыча нефти, т/сут": number,
  "Добыча жидкости, м3/сут": number
}