import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import "./Home.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { Modal} from '@material-ui/core';
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


const Home = () => {

  const Styles=useStyles();

  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
      setModal(!modal);
  }

  const [total, setTotal] = useState(0);
  const [productos, setProductos] = useState("");
  const [precios, setPrecios] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [venta, setVenta] = useState([]);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [contado, setContado] = useState(false);
  const [ctacte, setCtacte] = useState(false);
  const [consuFinal, setConsuFinal] = useState(false);
  const [exentoIva, setExentoIva] = useState(false);
  const [monotributo, setMonotributo] = useState(false);
  const [noResponsable, setNoResponsable] = useState(false);

  const onChangeProducto = (e) => {
    setProductos(e.target.value);
  };
  const onChangePrecio = (e) => {
    setPrecios(e.target.value);
  };
  const onChangeCantidad = (e) => {
    setCantidad(e.target.value);
  };

  function verificar() {
    if (productos === "" || precios <= 0 || cantidad <= 0) {
      alert("Faltan datos");
    } else {
      agregar(productos, precios, cantidad);
    }
  }

  function agregar() {
    var nuevo = [];
    nuevo.productos = productos;
    nuevo.precios = precios;
    nuevo.cantidad = cantidad;
    nuevo.total = precios * cantidad;
    var totalFinal = total + nuevo.total;
    setTotal(totalFinal);
    setVenta([...venta, nuevo]);
    setProductos("");
    setPrecios(0);
    setCantidad(0);
    setProductos(nuevo);
  }


  const body =(
    <div className={Styles.modal}>
        <div align="center">
            <div className='info-empresa'>
                <h1 className='titulo'>Lo de Luisito</h1>
                <p>MAXIKIOSCO</p>
                <p>San Juan 2150</p>
                <p>Tel.: 3816657951</p>
                <p>IVA Responsable Inscripto</p>
            </div>
            <div className='img-factura'>
                <h2 className='factura'>B</h2>
            </div>
            <div className='info-factura'>
                <h2 className='cabeza-factura'>FACTURA</h2>
                <h5 className='num-factura'>Nº 0001-0000-0001</h5>
                <h5>FECHA: 21/06/2022</h5>
                <h6><b>C.U.I.T.: 30-71464172-3</b></h6>
                <p className='num-factura'>INGR. BRUTO: RG 30-71464172-3</p>
                <p className='num-factura'>Inicio de actividad: 06/2022</p>
            </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <hr></hr>
            <br/><br/>
            <h5 className='left'>SEÑOR(ES): {nombre} {apellido}</h5><br/><br/><br/>
            <h5 className='left'>DIRECCIÓN: {direccion}</h5><br/><br/><br/>
            <hr></hr>
            <br/><br/>
            <div className='info'>
                <h6 className='iva'>IVA: consuidor final</h6>
                <h6 className='cuit'>D.N.I. / C.U.I.T.: {dni}</h6>
            </div>
            <div className='info-2'>
                <h6 className='cond-venta'>CONDICIONES DE VENTA: contado </h6>
            </div>
            <br/><br/><br/><br/>
            <table>
                <tr>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Importe</th>
                </tr>
                {venta.map((item) => (
                    <tr>
                      <td align="center">{item.cantidad}</td>
                      <td align="center">{item.productos}</td>
                      <td align="center">{item.precios}</td>
                      <td align="right">{item.total}</td>
                    </tr>
                  ))}

                <tr>
                    <th></th>
                    <th className="barra">307146554324</th>
                    <th align="right" scope="row" cla>TOTAL </th>
                    <td align="right" colspan="1"><strong>$ {total}</strong></td>
                </tr>
                </table>
            <hr/>
            <div className='info-3'>
            <br/><br/>
            <p><b>IMPRENTA GENERAL SILVA CUIT 00-00000000-0</b></p>
            <p><b>FECHA DE IMPRESION:</b> JUNIO DE 2022 (00-0000240010002-000000300000)<br/>
                <b>NRO. DE HABILITACION DEL ESTACIONAMIENTO: </b>0991201 HABILITACION MUNICIPAL<b> NRO. 21343</b>
            </p>
            </div>
        </div>
    </div>
)


  return (
    <>
      <div className="header"></div>
      <div className="conteiner">
        <div className="datos-personales">
          <Typography variant="h5" color="primary">
            Datos Personales
          </Typography>
          <br></br>
          <div className="datos-personales-contenido">
            <TextField
              className="barra"
              onChange={(e) => setNombre(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              label="Nombre"
            />
            <TextField
              className="barra"
              onChange={(e) => setApellido(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              label="Apellido"
            />
            <TextField
              className="barra"
              onChange={(e) => setDni(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              label="DNI o CUIT"
              type="number"
            />
            <TextField
              className="barra"
              onChange={(e) => setDireccion(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              label="Dirección"
            />
            <br />
            <br />
            <br />
            <br />
            <RadioGroup name="use-radio-group" defaultValue="first">
              <FormLabel
                id="custom-css-outlined"
                component="legend"
                sx={{ color: "#05a1a7" }}
              >
                Condiciones de venta:
              </FormLabel>
              <FormControlLabel
                value="contado"
                label="Contado"
                control={<Radio color="primary" />}
                onChange={(e) => setContado(!contado)}
              />
              <FormControlLabel
                value="ctacte"
                label="Cta. Cte."
                control={<Radio color="primary" />}
                onChange={(e) => setCtacte(!ctacte)}
              />
            </RadioGroup>
            <br />
            <RadioGroup name="use-radio-group" defaultValue="first">
              <FormLabel
                id="custom-css-outlined"
                component="legend"
                sx={{ color: "#05a1a7" }}
              >
                IVA:
              </FormLabel>
              <FormControlLabel
                value="consFinal"
                label="Cons. Final"
                control={<Radio color="primary" />}
                onChange={(e) => setConsuFinal(!consuFinal)}
              />
              <FormControlLabel
                value="exento"
                label="Exento"
                control={<Radio color="primary" />}
                onChange={(e) => setExentoIva(!exentoIva)}
              />
              <FormControlLabel
                value="monot"
                label="Monotributo"
                control={<Radio color="primary" />}
                onChange={(e) => setMonotributo(!monotributo)}
              />
              <FormControlLabel
                value="noResp"
                label="No Resp."
                control={<Radio color="primary" />}
                onChange={(e) => setNoResponsable(!noResponsable)}
              />
            </RadioGroup>
          </div>
        </div>
        <div className="productos">
          <Typography className="titulo" variant="h5" color="primary">
            Lista Productos
          </Typography>
          <br />
          <TextField
            className="barra"
            onChange={onChangeProducto}
            value={productos}
            id="outlined-basic producto"
            variant="outlined"
            label="Nombre Producto"
          />
          <TextField
            className="barra"
            id="outlined-basic cantidad"
            variant="outlined"
            label="Cantidad"
            type="number"
            onChange={onChangeCantidad}
            value={cantidad}
          />
          <TextField
            className="barra"
            id="outlined-basic precio"
            variant="outlined"
            label="Precio"
            type="number"
            onChange={onChangePrecio}
            value={precios}
          />
          <Button
            className="boton"
            variant="outlined"
            color="primary"
            onClick={() => verificar()}
            startIcon={<AddIcon />}
          >
            AGREGAR
          </Button>
          <div className="productos-contenido">
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Producto</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Precio Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {venta.map((item) => (
                    <TableRow>
                      <TableCell>{item.cantidad}</TableCell>
                      <TableCell>{item.productos}</TableCell>
                      <TableCell>{item.precios}</TableCell>
                      <TableCell>{item.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Typography className="titulo-2" variant="h5" color="primary">
            Total= ${total}
          </Typography>
          <Button className="boton-factura" variant="outlined" color="primary" onClick={()=>abrirCerrarModal()} startIcon={<LocalMallIcon/>}>FACTURA</Button>
          <Modal
          open={modal}
          onClose={abrirCerrarModal}
          >
            {body}
        </Modal>
        </div>
      </div>
    </>
  );
};

export default Home;
