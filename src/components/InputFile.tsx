import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';

export const InputFile = ({onChange}: {onChange: (e:FileUploadSelectEvent) => void}) => {
  return (
    <div>
      <FileUpload mode="basic" accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'  onSelect={onChange}  ></FileUpload>
    </div>
  )
}