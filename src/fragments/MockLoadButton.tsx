import React from 'react';

import { addFromMock } from '../store/reduxStore';
import { Button } from '../components/Button';
import { ILoadButtonProps } from '../types/interface';

export const MockLoadButton = ({ existDataInRedux, dispatch, setError }:ILoadButtonProps) => {

  const fetchDataMock = () => {
    !existDataInRedux && fetch('/oilProduction').then((res) => res.text()).then(data => dispatch(addFromMock(data))).catch(() => setError(true));
  }

  return <Button onClick={fetchDataMock}>Загрузить с мока</Button>
}