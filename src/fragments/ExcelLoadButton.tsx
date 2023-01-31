import React from 'react';
import { read, utils } from 'xlsx';

import { addFromExcel } from '../store/reduxStore';
import { InputFile } from '../components/InputFile';
import { ILoadButtonProps } from '../types/interface';

export const ExcelLoadButton = ({ existDataInRedux, dispatch, setError }:ILoadButtonProps) => {

  const fetchDataExcel = (e: any) => {
    console.log(e)
    const files = e.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
          const wb = read(event.target !== null && event.target.result);
          const sheets = wb.SheetNames;
          if (sheets.length) {
              const rows = utils.sheet_to_json(wb.Sheets[sheets[0]], { raw: false });
              !existDataInRedux && dispatch(addFromExcel(rows))
              if (!rows) {
                setError(true)
              }
          }
      }
      reader.readAsArrayBuffer(file);}
  }

    return <InputFile onChange={fetchDataExcel} />
}