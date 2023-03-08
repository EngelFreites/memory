import './elementUsuario.css'

export default function ElementUsuario ({isOpen}){

  const user = JSON.parse(window.localStorage.getItem('tokenUser')) 

  return(
    <div className="ElementUsuario">
      <div className="emogi-var">
        <div >🦑</div>
      </div>
      <div className={`info-user ${isOpen ? '' : 'collapse'}`}>
        <div className={`name ${isOpen ? '': 'disguise'}`}>{user.nickName}</div>
      </div>

    </div>
  )
}