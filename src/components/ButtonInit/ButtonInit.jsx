import './buttonInit.css'

export default function ButtonInit ({children, onClick}) {
   return (
    <button className='button-init' onClick={onClick}>{children}</button>
   )
}