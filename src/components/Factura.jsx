import React, { useState } from 'react'
import { Modal,  Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/Styles'
import LocalMallIcon from '@material-ui/icons/LocalMall';




const useStyles = makeStyles((theme)=>({
    modal:{
        position: "absolute",
        width: 900,
        height: 700,
        background: "white",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: "16px 32px 24px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflow: "scroll",
    }
}))

const Factura = () => {
    const Styles=useStyles();

    const [modal, setModal] = useState(false);

    const abrirCerrarModal = () => {
        setModal(!modal);
    }

    const body =(
        <div className={Styles.modal}>
            <div align="center">
                <div className='info-empresa'>
                    <h1 className='titulo'>Lo de Luisito</h1>
                    <p>San Juan y Lucio V. Mansilla</p>
                </div>
                <div className='img-factura'>
                    <h2 className='factura'>B</h2>
                </div>
                <div className='info-factura'>
                    <h2 className='cabeza-factura'>FACTURA</h2>
                    <h3 className='num-factura'>Nº</h3>
                </div><br/><br/><br/><br/><br/><br/>
                <hr></hr>
                <h5 className='left'>SEÑOR(ES): </h5><br/><br/><br/>
                <h5 className='left'>DIRECCIÓN:</h5><br/><br/><br/>
                <hr></hr>
                <div className='info'>
                    <h6 className='iva'>IVA:</h6>
                    <h6 className='cuit'>C.U.I.T.:</h6>
                </div>
                <div className='info-2'>
                    <h6 className='dni'>D.N.I.:</h6>
                    <h6 className='cond-venta'>CONDICIONES DE VENTA:</h6>
                </div>
                <br/><br/><br/><br/><br/><br/>
                <table>
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Importe</th>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Chocolates Aguilas</td>
                        <td>100</td>
                        <td>400</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th scope="row" cla>TOTAL</th>
                        <td colspan="3"><strong></strong></td>
                    </tr>
                    </table>
                <hr/>
                <div className='info-3'>
                <p><b>IMPRENTA GENERAL SILVA CUIT 00-00000000-0</b></p>
                <p><b>FECHA DE IMPRESION:</b> JUNIO DE 2022 (00-0000240010002-000000300000)<br/>
                    <b>NRO. DE HABILITACION DEL ESTACIONAMIENTO: </b>0991201 HABILITACION MUNICIPAL<b> NRO. 21343</b>
                </p>
                </div>
            </div>
        </div>
    )

  return (
    <div>
        <Button className="boton-factura" variant="outlined" color="primary" onClick={()=>abrirCerrarModal()} startIcon={<LocalMallIcon/>}>FACTURA</Button>
        <Modal
        open={modal}
        onClose={abrirCerrarModal}
        >
            {body}
        </Modal>
    </div>
  )
}

export default Factura