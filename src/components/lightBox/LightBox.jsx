import './lightBox.css'

export const LightBox = ({children}) =>{
  return (  
    <div className='lightbox'>
      <div className='content-lightbox'>
        {children}
      </div>
    </div>
  )
}