// ===== PRODUCTOS =====
const productos = [
  // COLORACIÓN
  { id: 1, nombre: "Corrector de Raíces Bifull", desc: "Corrector en polvo para raíces, 4 tonos disponibles. Cobertura inmediata.", cat: "coloracion", img: "Imagenes/catalogo/bifull-profesional-cover-fibers-corrector-de-raíces-en-polvo-4-tonos.jpg" },
  { id: 2, nombre: "Combo Protector del Color Lakme", desc: "Combo grande Color Stay Lakme. Protege y prolonga la intensidad del color.", cat: "coloracion", img: "Imagenes/catalogo/Combo-Grande-Protector-del-Color-Color-Stay-Lakme.webp" },
  { id: 3, nombre: "Nutri-Color Conditioner Illumyna", desc: "Acondicionador con pigmentos nutritivos para cabello teñido.", cat: "coloracion", img: "Imagenes/catalogo/nutri-color-conditioner-illumyna.jpg" },
  { id: 4, nombre: "Producto de Coloración Profesional", desc: "Línea profesional para coloración. Consultar tonos disponibles.", cat: "coloracion", img: "Imagenes/catalogo/0274311bd8be8277d876e07f3c44.jpg" },

  // SHAMPOO & ACONDICIONADOR
  { id: 5, nombre: "Shampoo Liso Perfecto KolorSho", desc: "Shampoo profesional para cabello liso. Fórmula libre de parabenos.", cat: "shampoo", img: "Imagenes/catalogo/KolorShotProfesional_BannersHome_Limpieza_y_Cuidado_ShampooLisoPerfecto_4.jpg" },
  { id: 6, nombre: "Sebastian Potion 9 Conditioner", desc: "Acondicionador Sebastian 200ml. Hidratación profunda y suavidad extrema.", cat: "shampoo", img: "Imagenes/catalogo/Sebastian_Restage_2025_Potion9_Conditioner_200ml_greybg_RGB.avif" },
  { id: 7, nombre: "Sebastian Potion 9 Leave-In", desc: "Acondicionador sin enjuague 145ml. Protege y nutre sin pesar el cabello.", cat: "shampoo", img: "Imagenes/catalogo/Sebastian_Restage_2025_Potion9_Leave_In_Conditioner_145ml_greybg_RGB.avif" },
  { id: 8, nombre: "Shampoo Profesional", desc: "Shampoo para uso profesional. Limpieza profunda y cuidado capilar.", cat: "shampoo", img: "Imagenes/catalogo/61KZswEuUNL.jpg" },

  // TRATAMIENTOS
  { id: 9, nombre: "Tratamiento Caviar KolorSho", desc: "Tratamiento intensivo con extracto de caviar. Nutrición y brillo extremo.", cat: "tratamiento", img: "Imagenes/catalogo/KolorShoProfesional_Limpieza_y_Cuidado_TratamientoCaviar-400x400.jpg" },
  { id: 10, nombre: "Tratamiento Hidratante Dos Fases", desc: "Tratamiento hidratante bifásico para cabello seco y dañado.", cat: "tratamiento", img: "Imagenes/catalogo/KolorShoProfesional_Limpieza_y_Cuidado_TratamientoHidratanteDosFases.jpg" },
  { id: 11, nombre: "Tratamiento Liso Perfecto", desc: "Tratamiento alisante profesional de larga duración con fórmula avanzada.", cat: "tratamiento", img: "Imagenes/catalogo/KolorShoProfesional_Limpieza_y_Cuidado_TratamientoLisoPerfecto.jpg" },
  { id: 12, nombre: "Crema de Tratamiento", desc: "Crema reparadora para cabello con daño químico o térmico.", cat: "tratamiento", img: "Imagenes/catalogo/6126N76YLsL._AC_UF1000,1000_QL80_.jpg" },

  // STYLING
  { id: 13, nombre: "Laca Extrema Ayalatin", desc: "Laca de fijación extrema de larga duración. Ideal para cualquier peinado.", cat: "styling", img: "Imagenes/catalogo/Laca Extrema - Ayalatin.png" },
  { id: 14, nombre: "Polvo Voluminizador Ártico Men", desc: "Polvo texturizante para dar volumen y definición al cabello masculino.", cat: "styling", img: "Imagenes/catalogo/polvo-volumen-artico-men-preview.jpg" },
  { id: 15, nombre: "Producto Styling Profesional", desc: "Producto de acabado profesional para definir y fijar el peinado.", cat: "styling", img: "Imagenes/catalogo/y6T9ZyH2KT6W6e9qiOTz.webp" },
  { id: 16, nombre: "Crema de Peinar", desc: "Crema activadora de rizos y definidora. Sin alcohol.", cat: "styling", img: "Imagenes/catalogo/2653914.avif" },

  // HERRAMIENTAS
  { id: 17, nombre: "Planchas Profesionales", desc: "Planchas de cerámica profesional para alisado y ondulado. Alta tecnología.", cat: "herramientas", img: "Imagenes/catalogo/Banners-Planchas-MOBILE-1.png" },
  { id: 18, nombre: "Set Peluquería Infantil", desc: "Set completo de peluquería infantil con luz y sonido. Ideal para los más chicos.", cat: "herramientas", img: "Imagenes/catalogo/peluqueria-infantil-set-completo-16p-luz-sonido-aire-peluqueria-infantil-set-completo-16p-luz-sonido-aire.jpg" },
  { id: 19, nombre: "Accesorios Profesionales", desc: "Herramientas y accesorios para uso profesional en salón.", cat: "herramientas", img: "Imagenes/catalogo/71lNd5KhmOL._AC_UF894,1000_QL80_.jpg" },
  { id: 20, nombre: "Kit de Belleza Profesional", desc: "Kit completo con las herramientas esenciales para el estilista profesional.", cat: "herramientas", img: "Imagenes/catalogo/01978.webp" },
];

const categoriaLabels = {
  coloracion: "🎨 Coloración",
  shampoo: "🧴 Shampoo",
  tratamiento: "💆 Tratamiento",
  styling: "✨ Styling",
  herramientas: "🔧 Herramienta",
};

// ===== CART STATE =====
let cart = [];

// ===== RENDER PRODUCTS =====
function renderProductos(filter = "todos") {
  const grid = document.getElementById("productosGrid");
  const filtered = filter === "todos" ? productos : productos.filter(p => p.cat === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="producto-card reveal" data-id="${p.id}">
      <div class="producto-img">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy" onerror="this.src='Imagenes/catalogo/belleza-peluqueria.webp'" />
      </div>
      <div class="producto-info">
        <span class="producto-cat">${categoriaLabels[p.cat] || p.cat}</span>
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-desc">${p.desc}</p>
        <button class="btn-agregar" id="btn-${p.id}" onclick="addToCart(${p.id})">
          + Agregar al carrito
        </button>
      </div>
    </div>
  `).join("");
  observeReveal();
}

// ===== CART LOGIC =====
function addToCart(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  if (!cart.find(i => i.id === id)) {
    cart.push({ ...producto });
  }
  updateCart();
  showToast(`✓ ${producto.nombre} agregado al pedido`);
  const btn = document.getElementById(`btn-${id}`);
  if (btn) { btn.classList.add("added"); btn.textContent = "✓ Agregado"; }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
  const btn = document.getElementById(`btn-${id}`);
  if (btn) { btn.classList.remove("added"); btn.textContent = "+ Agregar al carrito"; }
}

function clearCart() {
  cart = [];
  updateCart();
  productos.forEach(p => {
    const btn = document.getElementById(`btn-${p.id}`);
    if (btn) { btn.classList.remove("added"); btn.textContent = "+ Agregar al carrito"; }
  });
}

function updateCart() {
  const count = cart.length;
  document.getElementById("cartCount").textContent = count;
  const body = document.getElementById("cartBody");
  const footer = document.getElementById("cartFooter");

  if (count === 0) {
    body.innerHTML = `<p class="cart-empty">Tu carrito está vacío.<br/>Explorá nuestros productos.</p>`;
    footer.style.display = "none";
  } else {
    body.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img class="cart-item-img" src="${item.img}" alt="${item.nombre}" onerror="this.src='Imagenes/catalogo/belleza-peluqueria.webp'" />
        <div class="cart-item-info">
          <p class="cart-item-name">${item.nombre}</p>
          <span class="cart-item-cat">${categoriaLabels[item.cat] || item.cat}</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Eliminar">✕</button>
      </div>
    `).join("");
    footer.style.display = "block";
  }
}

// ===== SEND ORDER WHATSAPP =====
document.getElementById("sendOrderBtn").addEventListener("click", () => {
  const nombre = document.getElementById("cartNombre").value.trim();
  const tel = document.getElementById("cartTel").value.trim();
  if (cart.length === 0) return;

  const lista = cart.map((item, i) => `${i + 1}. ${item.nombre} (${categoriaLabels[item.cat] || item.cat})`).join("\n");
  const msg = `Hola GUIDOSANZ'N! 👋\n\nQuiero solicitar una cotización para los siguientes productos:\n\n${lista}\n\n${nombre ? "Nombre: " + nombre : ""}${tel ? "\nTeléfono: " + tel : ""}\n\n¡Gracias!`;
  const url = `https://wa.me/543795039742?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});

document.getElementById("clearCartBtn").addEventListener("click", clearCart);

// ===== CART SIDEBAR TOGGLE =====
const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartClose = document.getElementById("cartClose");

function openCart() { cartSidebar.classList.add("open"); cartBackdrop.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeCart() { cartSidebar.classList.remove("open"); cartBackdrop.classList.remove("open"); document.body.style.overflow = ""; }

cartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

// ===== FILTERS =====
document.querySelectorAll(".filtro-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProductos(btn.dataset.filter);
  });
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});
navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

// ===== SCROLL REVEAL =====
function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
}

// ===== CONTACT FORM -> WHATSAPP =====
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const msg = `Hola GUIDOSANZ'N! 👋\n\nMe contacto desde su sitio web.\n\nNombre: ${nombre}\n${telefono ? "Teléfono: " + telefono + "\n" : ""}Mensaje: ${mensaje}`;
  window.open(`https://wa.me/543795039742?text=${encodeURIComponent(msg)}`, "_blank");
});

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// ===== INIT =====
renderProductos();
observeReveal();
