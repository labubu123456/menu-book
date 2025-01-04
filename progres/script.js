// Mengambil elemen menu dan navbar
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('navbar');

// Menambahkan event listener ketika menu di-klik
menu.onclick = () => {
    menu.classList.toggle('fa-times');  // Menambahkan/menghapus kelas fa-times
    navbar.classList.toggle('active');  // Menambahkan/menghapus kelas active pada navbar
}

// Mengambil semua elemen section dan navLinks
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

// Event listener ketika window di-scroll
window.scroll = () => {
    // Menghapus kelas fa-times dan active pada menu dan navbar ketika di-scroll
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Looping untuk setiap section
    sections.forEach(section => {
        let top = window.scrollY;  // Posisi scroll saat ini
        let height = section.offsetHeight;  // Tinggi dari section
        let offset = section.offsetTop - 150;  // Offset untuk menentukan batas scroll
        let id = section.getAttribute('id');  // ID section

        // Mengecek apakah scroll berada dalam jangkauan section
        if (top >= offset && top < offset + height) {
            // Menghapus kelas active dari semua link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Menambahkan kelas active pada link yang sesuai dengan section yang sedang aktif
            document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        }
    });
}

// Menampilkan atau menyembunyikan form pencarian ketika search icon di-klik
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

// Menutup form pencarian ketika close button di-klik
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// Inisialisasi Swiper untuk home-slider
const homeSwiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

// Inisialisasi Swiper untuk review-slider
const reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,  // Menampilkan 1 slide pada layar kecil
        },
        640: {
            slidesPerView: 2,  // Menampilkan 2 slide pada layar dengan lebar 640px
        },
        768: {
            slidesPerView: 2,  // Menampilkan 2 slide pada layar dengan lebar 768px
        },
        1024: {
            slidesPerView: 3,  // Menampilkan 3 slide pada layar dengan lebar 1024px
        },
    },
});
// Mendapatkan elemen tombol dan keranjang
const addToCartButton = document.getElementById("add-to-cart");
const cartItemsDiv = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
let cart = [];

// Menambahkan event listener untuk tombol "Tambah ke Orderan"
addToCartButton.addEventListener("click", function () {
    const foodName = document.getElementById("food-name").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    if (foodName && quantity > 0 && price > 0) {
        const total = quantity * price;

        // Menambahkan item ke keranjang
        cart.push({
            name: foodName,
            quantity: quantity,
            price: price,
            total: total,
        });

        // Memperbarui tampilan keranjang
        updateCartDisplay();
        alert(`${foodName} telah ditambahkan ke keranjang!`);

        // Mengosongkan input setelah menambah
        document.getElementById("order-form").reset();
    } else {
        alert("Mohon isi semua kolom dengan benar.");
    }
});

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
    cartItemsDiv.innerHTML = ''; // Mengosongkan tampilan keranjang
    let totalPrice = 0;

    if (cart.length > 0) {
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <p>${item.name} - ${item.quantity} x Rp ${item.price.toFixed(2)}</p>
                <p>Total: Rp ${item.total.toFixed(2)}</p>
                <button class="remove-item" data-name="${item.name}">Hapus</button>
            `;
            cartItemsDiv.appendChild(itemDiv);
            totalPrice += item.total;
        });

        // Menampilkan total harga
        const totalDiv = document.createElement("div");
        totalDiv.innerHTML = `<strong>Total Harga: Rp ${totalPrice.toFixed(2)}</strong>`;
        cartItemsDiv.appendChild(totalDiv);

        // Memperbarui jumlah item di ikon keranjang
        cartCount.innerText = cart.length;

        // Menambahkan event listener untuk tombol hapus
        const removeButtons = document.querySelectorAll(".remove-item");
        removeButtons.forEach(button => {
            button.addEventListener("click", function () {
                const itemName = this.dataset.name;
                removeFromCart(itemName);
            });
        });
    } else {
        cartItemsDiv.innerHTML = "<p>Keranjang kosong!</p>";
        cartCount.innerText = 0; // Reset jumlah keranjang
    }
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        alert(`${itemName} telah dihapus dari keranjang!`);
        updateCartDisplay();
    }
}

// Menangani checkout
document.getElementById("checkout").addEventListener("click", function () {
    if (cart.length > 0) {
        alert("Checkout Berhasil!");
        cart = []; // Mengosongkan keranjang setelah checkout
        updateCartDisplay(); // Memperbarui tampilan keranjang
    } else {
        alert("Keranjang kosong! Tambahkan item ke keranjang.");
    }
});

// Menangani tampilan modal keranjang
document.getElementById("cart-icon").addEventListener("click", function () {
    displayCart();
    document.getElementById("cart-modal").style.display = "block";
});

// Menutup modal keranjang
document.getElementById("close-cart").addEventListener("click", function () {
    document.getElementById("cart-modal").style.display = "none";
});