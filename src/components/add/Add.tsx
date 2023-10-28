import { GridColDef } from "@mui/x-data-grid"
import "./add.scss"

type Props = {
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props:Props) => {
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // esto lo hacemos para no refrescar la pagina una vez que utilizamos el handle y el onclick

        // a;adimos si queres un api como axion y demases 
    }

  return (
    <div className="add">
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>x</span>
            <h1>Add new {props.slug}</h1> {/* le pasamos el props */}
            <form onSubmit={handleSubmit}>
                {/* usamos el filter para que no sea necesario usarlos*/}
                {props.columns.filter(item=>item.field !== "id" && item.field !== "img")
                .map(column=>(
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))
                }
                <button>Send</button>
            </form>
            {/* le pasamos los props nuevamente para el map */}
        </div>
    </div>
  )
}

export default Add