import Header from '../header/Header'
import './contentGame.css'

export const ContentGame = ({children}) => {
  return (
    <div className="content-app">
            
      <main>
        {children}
      </main>
      <div className="burbujas">
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div>
    </div>

  )
}