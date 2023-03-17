import './buttonInit.css'

export default function ButtonInit ({children, onClick, type}) {
   return (
    <button type={type} className='button-init' onClick={onClick}>{children}</button>
   )
}