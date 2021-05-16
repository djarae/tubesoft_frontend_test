import "./styles/MantRegistros.css"
import React, { useState } from "react";
import Modal from "react-modal";
//compoennts :
import ModalAgrReg from "../components/modalAgrReg"

export default  function MantRegistros() {
    const [showModal, setShowModal] = useState(false);
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          width: "80%",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          color: "#170d61",
          borderRadius: "13px",
          padding: "5%",
          textAlign: "center",
          opacity: "0.5 !important",
        },
      };
    return (
        <div className="MantRegistros">
            <h1>Mantenedor registros</h1>
            <h1>Crear SOLO un insert   y un listar en esta</h1>
            <table >
                <tr> 
                    <th >  
                        <h1> ID </h1> </th>
                    <td > 
                        <h1>  
                            Tecnologia
                        </h1> 
                    </td>
                    <td > 
                        <h1>  
                            Fecha
                        </h1> 
                    </td>
                    <td > 
                        <h1>  
                             URL
                        </h1> 
                    </td>
                </tr>
                <tr> 
                    <th >  
                        <h1> --------------- </h1> </th>
                    <td > 
                        <h1>  
                        ---------------
                        </h1> 
                    </td>
                    <td > 
                        <h1>  
                        ---------------
                        </h1> 
                    </td>
                    <td > 
                        <h1>  
                        ---------------
                        </h1> 
                    </td>
                </tr>
            </table>

            <Modal isOpen={showModal} style={customStyles}>
                <div className="modal" >
                   <ModalAgrReg/>
                </div>
                <div className="cerrarModalIcon">
                    <button  onClick={() => setShowModal(false)}>CERRAR</button>
                </div>
            </Modal>
            <button onClick={() => setShowModal(true)}>AGREGAR</button>
        </div>
    );
  }
  