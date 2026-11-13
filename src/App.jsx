import { useState } from 'react'
import './App.css'

function TarjetaPapa(props) {
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)

  function manejarClick() {
    props.onAgregar(props, cantidad)
    setAgregado(true)
    setTimeout(() => setAgregado(false), 1500)
  }

  return (
    <div className="tarjeta">
      {props.imagen && <img src={props.imagen} className="foto-papa" />}
      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      <p><b>${props.precio.toLocaleString("es-CO")}</b></p>

      <div className="cantidad-controles">
        <button onClick={() => setCantidad(c => Math.max(1, c - 1))}>-</button>
        <span>{cantidad}</span>
        <button onClick={() => setCantidad(c => c + 1)}>+</button>
      </div>

      <button 
        className="boton-carrito" 
        onClick={manejarClick}
      >
        {agregado ? '✅ Agregado!' : '🛒 Al Carrito'}
      </button>
    </div>
  )
}

function App() {
  const [pagina, setPagina] = useState('inicio')
  const [carrito, setCarrito] = useState([])
const [mostrarPago, setMostrarPago] = useState(false)

function agregarAlCarrito(producto, cantidad) {
  const existe = carrito.find(item => item.nombre === producto.nombre)
  if (existe) {
    setCarrito(carrito.map(item =>
      item.nombre === producto.nombre
        ? { ...item, cantidad: item.cantidad + cantidad }
        : item
    ))
  } else {
    setCarrito([...carrito, { ...producto, cantidad }])
  }
}

function eliminarDelCarrito(nombre) {
  setCarrito(carrito.filter(item => item.nombre !== nombre))
}

function vaciarCarrito() {
  setCarrito([])
}

const total = carrito.reduce((suma, item) => suma + (item.precio * item.cantidad), 0)

   if (pagina === 'pago') {
  return (
    <div>
  <div className="seccion-pago">
    <h2 className="titulo-casi">💜 Casi Listo...</h2>
    {carrito.map((item, i) => (
      <p key={i}>{item.nombre} x {item.cantidad} - ${(item.precio * item.cantidad).toLocaleString("es-CO")}</p>
    ))}
    <h3>Total a pagar: ${total.toLocaleString("es-CO")}</h3>
    <input placeholder="Tu nombre" className="input-pago" />
    <input placeholder="Tu dirección" className="input-pago" />
    <select className="input-pago">
      <option>Efectivo</option>
      <option>Nequi</option>
      <option>Tarjeta</option>
    </select>
    <button className="boton-pedir" onClick={() => alert('¡Pedido confirmado! Gracias por pedir en PapasFrink 💜')}>
      Confirmar Pedido ✅
    </button>
    <button className="boton-volver" onClick={() =>setPagina('menu')}>⬅️ Volver</button>
  </div>
  </div>
  )
}


  // SI ESTAMOS EN LA PAGINA DEL MENÚ COMPLETO
  if (pagina === 'menu') {
    return (
      <div>
        <nav className="navbar">
          <div className="logo">🍟 PapasFrink</div>
          <div className="links">
            <button className="link-btn" onClick={() => setPagina('inicio')}>Inicio</button>
            <button className="link-btn" onClick={() => setPagina('menu')}>Menú</button>
          </div>
        </nav>

        <h1>📋 Menú Completo</h1>
        <p>Solo cosas ricas a base de papa</p>
         <div className="menu-grid">
        
        <TarjetaPapa nombre="Papa Clásica" imagen="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500"  descripcion="Pollo, queso y salsas" precio={15000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Papa Especial"  imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT674p5-TNinvw3KBaV2IaMC9oBQZo7OxksNptiJ7f8xoEIsly7w5Tk8ut&s=10" descripcion="Carne, maíz y queso" precio={18000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Papa Frink" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zfZ8tn1cfHUVlFtui5A-nxt0v65OM97lEpwgIv2BQFSqjv_k_t_64Jk&s=10" descripcion="La de la casa, con todo" precio={20000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Papas Rellenas con Carne" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxlbg5zB59M4XFC0i3iXivT81berMHaeKYiLdyjc1Xr0QC6-NgporV7H6&s=10"  descripcion="Papa rellena con carne molida, queso y salsas" precio={8000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Papa con Pollo" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToAAezRTcVG4zRBLUQK5JWWaTarNNi_1V--C6UXhVikA&s=10" descripcion="Pechuga de pollo en salsa de queso y papa" precio={20000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Papa con Carne" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP19d-5K8CcTmfZR4ASLPbnRUraRJr2WNaHzrdJ-Wn9uItab1mh94mab77&s=10" descripcion="Carne desmechada y queso " precio={19000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Papa Gratinada" imagen= "https://i.blogs.es/661317/papas-gratinadas/650_1200.jpg" descripcion="Papa, queso gratinado y tocineta" precio={18000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Arepas de Papa Rellenas de Queso" imagen="https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP190R-s-o.webp" descripcion="Arepa de papa rellena con bastante queso, doradita y deliciosa" precio={4000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Salchipapa" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsefnbRuUkbTKMBbtdoyiTAj4ZmWcL0rG4r9bg9x2Gm2zi-zy08gmkHTla&s=10" descripcion="Papa + salchicha + salsas" precio={12000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Papa con Camarones" imagen="/papa-camarones.jpg" descripcion="Camarones al ajillo y queso" precio={24000} onAgregar={agregarAlCarrito} />
        </div>

        <div className="menu-bebidas">
        <h2>🥤 Bebidas</h2>
        <div className="menu-grid">
        <TarjetaPapa nombre="Gaseosa" imagen="https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500" descripcion="Coca-Cola, Postobón, Colombiana" precio={4000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Jugo Natural" imagen="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500" descripcion="Mango, maracuyá, mora" precio={6000} onAgregar={agregarAlCarrito} />
        <TarjetaPapa nombre="Limonada" imagen="https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500" descripcion="Limonada de coco o cerezada" precio={7000} onAgregar={agregarAlCarrito} />
        </div>
        </div>

        <br /><br/>
       
        <br /><br />
        <div id="pedido" className="seccion-pedido">
  <h2>Tu Pedido 🛒</h2>
  {carrito.length === 0 ? (
    <p>Todavía no has pedido nada. ¡Dale a Al Carrito!</p>
  ) : (
    <>
     {carrito.map((item, i) => (
  <div key={i} className="item-pedido">
    <span>{item.nombre} x {item.cantidad}</span>
    <span>${(item.precio * item.cantidad).toLocaleString("es-CO")}</span>
    <button 
      className="boton-borrar" 
      onClick={() => eliminarDelCarrito(item.nombre)}
    >
      ❌
    </button>
  </div>
))}
<h3>Total: ${total.toLocaleString("es-CO")}</h3>
<button className="boton-vaciar" onClick={vaciarCarrito}>
  🗑️ Vaciar Pedido
</button>
      
      <button className="boton-pedir" onClick={() => setPagina('pago')}>
        Pedir y Pagar ➡️
      </button>
    </>
  )}
</div>


      </div>
    )
  }

  // SI ESTAMOS EN INICIO - LA PAGINA PRINCIPAL
  return (
    <div>
      <nav className="navbar">
        <div className="logo">🍟 PapasFrink</div>
        <div className="links">
          <button className="link-btn" onClick={() => setPagina('menu')}>Menú</button>
          <a href="#direccion" className="link-btn">Dirección</a>
          <a href="#contacto" className="link-btn">Contacto</a>
        </div>
      </nav>

     <div className="hero">
      <h1>PapasFrink</h1>
      <p>Las mejores papas de Cartagena</p>
      </div>

      <div className="seccion-nosotros">
  <h2>¿Quiénes Somos? 🍟</h2>
  <p>
    En <b>PapasFrink</b> somos un emprendimiento cartagenero con un antojo en mente: 
    que comas las mejores papas de Cartagena, sin salir de tu casa.
  </p>
  <p>
    Preparamos cada papa al momento, con ingredientes frescos, mucho queso, 
    salsas de la casa y ese toque que solo nosotros le damos.
  </p>
  <div className="nosotros-3">
    <div>🔥 <b>Hechas al momento</b><br/>Nada recalentado, todo fresquito</div>
    <div>🧀 <b>Con todo el queso</b><br/>Papas bien rellenas, sin miseria</div>
    <div>🛵 <b>Domicilio rápido</b><br/>Calienticas hasta tu puerta</div>
  </div>
</div>

     <h2 className="titulo-pedidas">⭐ Las más pedidas</h2>
      <div className="menu-grid">
        <TarjetaPapa nombre="Papa Clásica" imagen="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500" descripcion="Pollo, queso y salsas" precio={15000} />
        <TarjetaPapa nombre="Papa Especial" imagen= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT674p5-TNinvw3KBaV2IaMC9oBQZo7OxksNptiJ7f8xoEIsly7w5Tk8ut&s=10" descripcion="Carne, maíz y queso" precio={18000} />
        <TarjetaPapa nombre="Papa Frink" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3zfZ8tn1cfHUVlFtui5A-nxt0v65OM97lEpwgIv2BQFSqjv_k_t_64Jk&s=10" descripcion="La de la casa, con todo" precio={20000} />
      </div>

      <br />
      <button className="boton" onClick={() => setPagina('menu')}>
        Ver todo el menú completo 📋
      </button>

      <div id="direccion" className="seccion-direccion">
        <h2>📍 Nuestra Dirección</h2>
        <p>Barrio El Prado, Cartagena - Bolívar</p>
        <p>Calle 123 # 45 - 67, al lado del parque</p>
        <p>Abierto todos los días de 4pm a 10pm</p>
      </div>

      <div id="contacto" className="seccion-contacto">
        <h2>📱 Contáctanos</h2>
        <p>WhatsApp: 312 290 8061</p>
        <p>Instagram: @papasfrink</p>
       <a className="boton" href="https://wa.me/573122908061?text=Hola%20PapasFrink!%20Quiero%20hacer%20un%20pedido" target="_blank" rel="noopener noreferrer">Pedir por WhatsApp</a>
      </div>

            <footer className="pie-pagina">
        <p>© PapasFrink 2026</p>
      </footer>
    </div>
  )
}

export default App