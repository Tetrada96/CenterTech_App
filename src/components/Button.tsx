import { Button as ButtonComponent} from 'primereact/button';

export const Button  = ({children, onClick}: {children: string; onClick: () => void}) => {
  return (
    <ButtonComponent style={{padding: '10px'}} onClick={onClick}>{children}</ButtonComponent>
  )
}