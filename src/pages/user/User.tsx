import Single from "../../components/single/Single"
import "./user.scss"

const User = () => {

    // fetcheamos la data para luego hacer la redireccion al Single component
    // agarramos los datos basicamente
  return (
    <div className="user">
        <Single />
    </div>
  )
}

export default User