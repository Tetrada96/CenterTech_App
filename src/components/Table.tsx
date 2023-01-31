import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';

import { ExcelLoadButton } from '../fragments/ExcelLoadButton';
import { MockLoadButton } from '../fragments/MockLoadButton';

const dateTemplate = (row: any) => {
  console.log(row)
  return new Date(row["Дата"]).toLocaleDateString();
}

export const Table = () => {
  const [error, setError] = useState<boolean>(false); 

  const dispatch: Dispatch<AnyAction> = useDispatch();
  const data =  useSelector((state: any) => state.data);
  const existDataInRedux = Object.values(data).length !== 0;

    return <div style={{display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px'}}>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <ExcelLoadButton dispatch={dispatch} existDataInRedux={existDataInRedux} setError={setError} />
        <MockLoadButton dispatch={dispatch} existDataInRedux={existDataInRedux} setError={setError} />
      </div>
        {existDataInRedux ? (
        <DataTable showGridlines value={data} responsiveLayout="scroll">
          <Column field="Дата" body={dateTemplate} header="Дата"></Column>
          <Column field="Добыча нефти, т/сут" header="Добыча нефти, т/сут"></Column>
          <Column field="Добыча жидкости, м3/сут" header="Добыча жидкости, м3/сут"></Column>
        </DataTable>)
        : null}
        {error ? (
        <Dialog header="Ошибка загрузки данных" visible={error} style={{ width: '50vw' }} onHide={() => setError(true)}>
          <p className="m-0">
            При загрузке данных произошла ошибка, попробуйте перезагрузить страницу и повторить попытку
          </p>
        </Dialog>)
        : null}
    </div>
}