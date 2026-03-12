// Cargar Header
fetch("../componentes/header/header.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
    });

// Cargar Footer
fetch("../componentes/footer/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

// TEMPLATE PARA PRODUCTO
const template = document.createElement("template");
template.innerHTML = `
<div class="card">
  <h3 class="nombre"></h3>
  <p class="descripcion"></p>
  <span class="precio"></span>
</div>
`;

// WEB COMPONENT
class ProductCard extends HTMLElement {
    connectedCallback() {
        const nombre = this.getAttribute("nombre");
        const precio = this.getAttribute("precio");
        const descripcion = this.getAttribute("descripcion");

        const clone = template.content.cloneNode(true);
        clone.querySelector(".nombre").textContent = nombre;
        clone.querySelector(".descripcion").textContent = descripcion;
        clone.querySelector(".precio").textContent = "$" + precio;

        this.appendChild(clone);
    }
}

customElements.define("product-card", ProductCard);

// ARRAY DE PRODUCTOS
const productos = [
    { nombre: "Laptop", precio: 1200, descripcion: "Laptop potente para trabajo y estudio" },
    { nombre: "Audífonos Bluetooth", precio: 150, descripcion: "Audífonos inalámbricos con cancelación de ruido" },
    { nombre: "Smartphone", precio: 900, descripcion: "Teléfono inteligente con cámara avanzada" }
];

// MOSTRAR PRODUCTOS
const catalogo = document.getElementById("catalogo");
productos.forEach(producto => {
    const card = document.createElement("product-card");
    card.setAttribute("nombre", producto.nombre);
    card.setAttribute("precio", producto.precio);
    card.setAttribute("descripcion", producto.descripcion);
    catalogo.appendChild(card);
});