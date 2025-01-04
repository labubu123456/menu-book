# menu-book
buku-menu
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Family Steak</title>
    <!-- favicon-->
     <link rel="icon" type="image/png" href="sate.jpg">
     <meta name="robots" content="noindex, nofollow">
     <meta name="googlebot" content="noindex, nofollow">
     <meta name="googlebot-news" content="noindex">
</head>

<body>

    <!-- Header -->
   <!-- Header -->
<header>
    <div class="logo">
        <i class="fas fa-utensils"></i> Family Steak
    </div>
    <nav class="navbar">
        <a href="#home" class="active">Home</a>
        <a href="#inter">Inter</a>
        <a href="#indrapura">Family Steak</a>
        <a href="#menu">Menu</a>
        <a href="#komentar">Komentar</a>
        <a href="#Orderan" id="cart-icon">
            <i class="fas fa-shopping-cart"></i> Orderan (<span id="cart-count">0</span>)
        </a>
    </nav>
    <div class="icons">
        <i id="search-icon" class="fas fa-search"></i>
        <i id="menu-bars" class="fas fa-bars"></i>
    </div>
</header>


    <!-- Search Form -->
    <div id="search-form">
        <input type="search" id="search-box" placeholder="Search...">
        <label id="close" class="fas fa-times"></label>
    </div>

    <!-- Section: Home -->
    <section id="home">
        <div class="home-slider swiper-container">
            <div class="swiper-wrapper">
                <div class="slide swiper-slide">
                    <div class="content">
                        <span>Recomended Order</span>
                        <h3>Steak</h3>
                        <p></p>
                        <button class="btn">Selamat menikmati</button>
                    <div class="image">
                        <img src="steak1.jpeg" alt="">
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <!-- Section: Menu -->
    <section id="menu" class="dishes">
        <h2 class="heading">Menu</h2>
        <div class="box-container">
            <div class="box">
                <h3>Sate Madura</h3>
                <div class="image">
                    <img src="sate.jpg" alt="">
                </div>
                <div class="content">
                    <span>Rp15.000</span>
                    <p></p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <a href="#" class="btn">masukan Orderan</a>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="box">
                <h3>Bakso</h3>
                <div class="image">
                    <img src="baso.jpg" alt="">
                </div>
                <div class="content">
                    <span>Rp10.000</span>
                    <p></p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <a href="#" class="btn">masukan Orderan</a>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="box">
                <h3>Ayam Penyet</h3>
                <div class="image">
                    <img src="ayam.jpg" alt="">
                </div>
                <div class="content">
                    <span>Rp15.000</span>
                    <p></p>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <a href="#" class="btn">masukan Orderan</a>
                    <i class="fas fa-heart"></i>
                    </div>
                </div>
                <div class="box">
                    <h3>Ayam Utuh</h3>
                    <div class="image">
                        <img src="ayam1.jpg" alt="">
                    </div>
                    <div class="content">
                        <span>Rp15.000</span>
                        <p></p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <a href="#" class="btn">masukan Orderan</a>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </section>
        
    
        <!-- Mulai Inter -->
        <section class="dishes" id="dishes">
            <h3 class="sub-heading">Menu Best Seller</h3>
            <h1 class="heading">Makanan Populer</h1>
            <div class="box-container">
                <div class="box">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                    <img src="1.jpg" alt="">
                    <h3>Shashimi jepang</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>

                    </div>
                    <span>IDR. 100.000</span>
                    <a href="#" class="btn">masukan Keranjang</a>
                </div>
                <div class="box">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                    <img src="4.jpg" alt="">
                    <h3>Seafood Korea</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>

                    </div>
                    <span>IDR. 50.000</span>
                    <a href="#" class="btn">masukan Keranjang</a>
                </div>
                <div class="box">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                    <img src="3.jpg" alt="">
                    <h3>Soup Korea</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>

                    </div>
                    <span>IDR. 50.000</span>
                    <a href="#" class="btn">masukan Keranjang</a>
            </div>
            <!-- Tambahkan konten best seller di sini -->
        </section>
    
        <!-- mulai jawa -->
         <section class="about" id="about">
            <h3 class="sub-heading">Masakan Jawa</h3>
            <h1 class="heading">Ayam Ingkung Spesial</h1>
            <h3>Masakan Terkenal Indonesia</h3>
            <div class="image">
                <img src="Ayam1.jpg" alt="">
                <div class="content">
                    
                    <p></p>
                    <p></p>
                </div>

         </section>
         <!--Mulai Spesial-->
        <!-- Perbaikan pada bagian menu spesial -->
        <section class="menu" id="special-menu">
    <h3 class="sub-heading">Menu Spesial</h3>
    <h1 class="heading">Menu Spesial Tiap Hari</h1>
    <div class="box-container">
        <div class="box">
            <div class="image">
                <img src="8.jpg" alt="">
                <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h3>Seafood Korea</h3>
                <p></p>
                <a href="#" class="btn">Beli</a>
                <span class="price">IDR. 45.000</span>
            </div>
        </div>
    </div>

         <!-- Section Orderan -->
<section class="order" id="orderan">
    <h3 class="sub-heading">Pesan Di tempat</h3>
    <h1 class="heading">Silahkan Di Isi Orderannya</h1>
    <form id="order-form">
        <div class="inputBox">
            <div class="input">
                <span>Orderan</span>
                <input type="text" id="food-name" placeholder="Masukkan Nama Makanan" required>
            </div>
        </div>
        <div class="inputBox">
            <div class="input">
                <span>Jumlah</span>
                <input type="number" id="quantity" placeholder="Jumlah Orderan" required>
            </div>
        </div>
        <div class="inputBox">
            <div class="input">
                <span>Harga Makanan</span>
                <input type="number" id="price" placeholder="Harga" required>
            </div>
        </div>
        <button type="button" class="btn" id="add-to-cart">Tambah ke Orderan</button>
    </form>
</section>

         <section class="order" id="order">
            <h3 class="sub-heading">Delivery Order</h3>
            <h1 class="heading">Masukan Data Anda</h1>
            <form action="">
                <div class="inputBox">
                    <div class="input">
                        <span>Orderan</span>
                        <input type="text" placeholder="Masukan Nama Makanan">
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>Nomor Telepon</span>
                        <input type="number" placeholder="Masukan Nomor Anda">
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>Jenis Makanan</span>
                        <input type="text" placeholder="Makanan Extra">
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>Jumlah</span>
                        <input type="number" placeholder="Jumlah Orderan">
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>Tanggal Pesan</span>
                        <input type="datetime-local">
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>Alamat</span>
                        <textarea name="alamat" cols="30" rows="10" placeholder="Tulis Alamat tujuan"></textarea>
                    </div>
                </div>
                <div class="inputBox">
                    <div class="input">
                        <span>Pesanan Anda</span>
                        <textarea name="pesanan" cols="30" rows="10" placeholder="Tulis Pesanan Anda"></textarea>
                    </div>
                </div>
                <input type="submit" value="Order Now" class="btn">
            </form>
                
            </form>
         </section>

         <!-- Cart Modal -->
    <div id="cart-modal" class="cart-modal" style="display: none;">
        <div class="cart-content">
            <span id="close-cart" class="fas fa-times">
        </span>
        <h2>Pesanan Anda</h2>
        <div id="cart-items"></div>
        <button id="checkout" class="btn">Checkout</button>
    </div>
</div>
<!-- Cart Icon -->
<div id="cart-icon" class="cart-icon">
    <i class="fas fa-shopping-cart"></i>
    <span id="cart-count" class="cart-count">0</span>
</div>
<!-- Scroll to Top Button -->
<a href="#" id="scroll-to-top" class="scroll-to-top" style="display: none;">
    <i class="fas fa-chevron-up"></i>
</a>

</section>
<!--Mulai Komentar-->
<section class="rewiew" id="rewiew">
   <h3 class="sub-heading">Komentar Pelanggan</h3>
   <h1 class="heading">Silahkan Komentar</h1>
     <div class="swiper-container rewiew-slider">
       <div class="swiper-slide slide">
           <i class="fas fa-quote-right"></i>
           <img src="1.jpg" alt="">
           <div class="user-info">
               <h3>Diana</h3>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
           </div>
       </div>
     </div>
     <p>Wah Mantap makanan nya best seller sih, pelayanan nya juga ramah baik dan sopan</p>

</section>
    
        <!-- Section: About -->
        <section id="about" class="about">
            <div class="row">
                <div class="image">
                    <img src="family.jpg" alt="About Image">
                </div>
                <div class="content">
                    <h3>Tentang Kami</h3>
                    <p>Family steak sudah berdiri sejak tahun 2025 hingga sekarang dan akan selalu menjaga kualaitas rasa.</p>
                    <div class="icons-container">
                        <div class="icons">
                            <i class="fas fa-phone"></i>
                            <span>Contact:+62 812-8888-8888</span>
                        </div>
                        <div class="icons">
                            <i class="fas fa-location-arrow"></i>
                            <span>Lokasi: SAMPING RUMAH SAKIT BIDADARI GELEMBIS</span>
                        </div>
                        <div class="icons">
                            <i class="fas fa-clock"></i>
                            <span>Open at 13:00 pm WIB</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
<script>
    // Fungsi untuk menampilkan isi keranjang
    function displayCart() {
        const cartItemsDiv = document.getElementById("cart-items");
        cartItemsDiv.innerHTML = ''; // Bersihkan isi sebelumnya

        if (cart.length > 0) {
            cart.forEach(item => {
                const itemDiv = document.createElement("div");
                itemDiv.classList.add("cart-item");
                itemDiv.innerHTML = `
                    <p>${item.name} - ${item.quantity} x Rp ${item.price}</p>
                    <p>Total: Rp ${item.total}</p>
                `;
                cartItemsDiv.appendChild(itemDiv);
            });
        } else {
            cartItemsDiv.innerHTML = "<p>Belum Ada Pesanan!</p>";
        }
    }

    // Tampilkan keranjang saat halaman dimuat
    document.getElementById("cart-icon").addEventListener("click", function() {
        displayCart();
    });

    let cart = [];

document.getElementById("add-to-cart").addEventListener("click", function () {
    let foodName = document.getElementById("food-name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    if (foodName && quantity > 0 && price > 0) {
        let total = quantity * price;

        // Add the item to the cart
        cart.push({
            name: foodName,
            quantity: quantity,
            price: price,
            total: total,
        });

        // Update the cart count
        document.getElementById("cart-count").innerText = cart.length;

        // Clear the input fields
        document.getElementById("order-form").reset();
    } else {
        alert("Mohon isi semua kolom dengan benar.");
    }
});

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ''; // Clear previous content

    if (cart.length > 0) {
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <p>${item.name} - ${item.quantity} x Rp ${item.price}</p>
                <p>Total: Rp ${item.total}</p>
            `;
            cartItemsDiv.appendChild(itemDiv);
        });
    } else {
        cartItemsDiv.innerHTML = "<p>Belum Ada Pesanan!</p>";
    }
}

// Show cart items when cart icon is clicked
document.getElementById("cart-icon").addEventListener("click", function () {
    displayCart();
    document.getElementById("cart-modal").style.display = "block";
});

// Close cart modal
document.getElementById("close-cart").addEventListener("click", function () {
    document.getElementById("cart-modal").style.display = "none";
});

// Checkout button functionality
document.getElementById("checkout").addEventListener("click", function () {
    if (cart.length > 0) {
        alert("Checkout Berhasil!");
        cart = []; // Clear cart after checkout
        document.getElementById("cart-count").innerText = cart.length;
        document.getElementById("cart-modal").style.display = "none"; // Close cart modal
    } else {
        alert("Keranjang kosong! Tambahkan item ke keranjang.");
    }
});

        // Scroll to Top Button functionality
        document.getElementById("scroll-to-top").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Show/Hide Scroll to Top Button based on scroll position
    window.addEventListener("scroll", function() {
        const scrollToTopButton = document.getElementById("scroll-to-top");
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
    
</script>

        <!-- Footer -->
        <footer class="footer">
            <div class="box-container">
                <div class="box">
                    <h3>Contact</h3>
                    <a href="#">Email</a><p>Familysteak58@gmail.com</p>
                    <a href="#">Phone</a> <p>+62 813-6666-6666</p>
                    <a href="#">Location</a> <p>Lokasi: SAMPING RUMAH SAKIT BIDADARI GELEMBIS</p>
                </div>
                <div class="box">
                    <h3>Quick link</h3>
                    <a href="#">Home</a>
                    <a href="#">Inter</a>
                    <a href="#">Family steak</a>
                    <a href="#">Spesial</a>
                    <a href="#">Komentar</a>
                    <a href="#">Orderan</a>
                </div>
                <div class="box">
                    <div class="box">
                        <h3>Follow Us</h3>
                        <a href="">Telegram</a>
                        <a href="">Facebook</a>
                        <a href="">Instagram</a>
                        <a href="">Whatsapp</a>
                    </div>
                     <div class="icons-container">
                    <div class="icons">
                        <i class="fas fa-shipping-fast"></i>
                        <span>Gratis Ongkir</span>
                    </div>
                    <div class="icons">
                        <i class="fas fa-dollar-sign"></i>
                        <span>Uang Digital</span>
                    </div>

                    <div class="icons">
                        <i class="fas fa-headset"></i>
                        <span>Customer Service</span>
                    </div>
                </div>
                <a href="#" class="btn">Hubungi Kami</a>

            </div>
                </div>
            </div>
            <div class="akhir">Copyright @ 2025 by
                <span>Family Steak</span>
            </div>
        </footer>
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
    
        <!-- Script -->
        <script>

            let menu = document.querySelector('#menu-bars');
            let navbar = document.querySelector('.navbar');
    
            menu.onclick = () => {
                menu.classList.toggle('fa-times');
                navbar.classList.toggle('active');
            }
    
            let section = document.querySelectorAll('section');
            let navLinks = document.querySelectorAll('header .navbar a');
    
            window.onscroll = () => {
                menu.classList.remove('fa-times');
                navbar.classList.remove('active');
    
                section.forEach(sec => {
                    let top = window.scrollY;
                    let height = sec.offsetHeight;
                    let offset = sec.offsetTop - 150;
                    let id = sec.getAttribute('id');
    
                    if (top >= offset && top < offset + height) {
                        navLinks.forEach(links => {
                            links.classList.remove('active');
                            document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
                        });
                    }
                });
            }
            
            document.querySelector('#search-icon').onclick = () => {
                document.querySelector('#search-form').classList.toggle('active');
            }
    
            document.querySelector('#close').onclick = () => {
                document.querySelector('#search-form').classList.remove('active');
            }
    
            var swiper = new Swiper(".home-slider", {
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
            
    
            var swiper = new Swiper(".review-slider", {
                spaceBetween: 20,
                centeredSlides: true,
                autoplay: {
                    delay: 7500,
                    disableOnInteraction: false,
                },
                loop: true,
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    </script>
    
    
</body>

</html>

:root {
    --red: #ff0000;
    --black: #192a56;
    --light-color: #666;
    --green: #28a745; /* Menambahkan warna hijau */
    --box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, 0.5); /* Menambahkan transparansi pada bayangan */
}

* {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border: none;
    text-transform: capitalize;
    transition: all .2s linear;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 5.5rem;
    scroll-behavior: smooth;
}

section {
    padding: 2rem 9%;
}

section:nth-child(even) {
    background: #eee;
}

.sub-heading {
    text-align: center;
    color: var(--red);
    font-size: 2rem;
    padding-top: 1rem;
}

.heading {
    text-align: center;
    color: var(--black);
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
}

.btn {
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.7rem;
    color: #fff;
    background: var(--black);
    border-radius: .5rem;
    cursor: pointer;
    padding: .8rem 3rem;
}

.btn:hover {
    background: var(--red);
    letter-spacing: .1rem;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: var(--box-shadow);
}

header .logo {
    color: var(--black);
    font-size: 2.5rem;
    font-weight: bolder;
}

header .logo i {
    color: var(--red);
}

header .navbar a {
    font-size: 1.7rem;
    border-radius: .5rem;
    padding: .5rem 1.5rem;
    color: var(--light-color);
}

header .navbar a.active,
header .navbar a:hover {
    color: #fff;
    background: var(--red);
}

header .icons i,
header .icons a {
    cursor: pointer;
    margin-left: .5rem;
    height: 4.5rem;
    line-height: 4.5rem;
    width: 4.5rem;
    text-align: center;
    font-size: 1.7rem;
    color: var(--red);
    border-radius: 50%;
    background: #eee;
}

header .icons i:hover,
header .icons a:hover {
    color: #fff;
    background: var(--red);
    transform: rotate(360deg);
}

header .icons #menu-bars {
    display: none;
}

#search-form {
    position: fixed;
    top: -110%;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1004;
    background: rgba(0, 0, 0, .8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
}

#search-form.active {
    top: 0;
}

#search-form #search-box {
    width: 50rem;
    border-bottom: .1rem solid #fff;
    padding: 1rem 0;
    color: #fff;
    font-size: 3rem;
    text-transform: none;
    background: none;
}

#search-form #search-box::placeholder {
    color: #eee;
}

#search-form #search-box::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

#search-form label {
    color: #fff;
    cursor: pointer;
    font-size: 3rem;
}

#search-form label:hover {
    color: var(--green);
}

#search-form #close {
    position: absolute;
    color: #fff;
    cursor: pointer;
    top: 2rem;
    right: 3rem;
    font-size: 5rem;
    .home .home-slider .slide {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
        padding-top: 9rem;
    }
}
    
    .home .home-slider .slide .content {
        flex: 1 1 45rem;
    }
    
    .home .home-slider .slide .image {
        flex: 1 1 45rem;
    }
    
    .home .home-slider .slide .image img {
        width: 80%;
    }
    
    .home .home-slider .slide .content span {
        color: var(--red);
        font-size: 2.5rem;
    }
    
    .home .home-slider .slide .content h3 {
        color: var(--black);
        font-size: 7rem;
    }
    
    .home .home-slider .slide .content p {
        color: var(--light-color);
        font-size: 2.2rem;
        padding: .5rem 0;
        line-height: 1.5;
    }
    
    
    .swiper-pagination-bullet-active {
        background: var(--red);
    }
    
    .dishes .box-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
        gap: 1.5rem;
    }
    
    .dishes .box-container .box {
        padding: 2.5rem;
        background: #fff;
        border-radius: .5rem;
        border: .1rem solid rgba(0, 0, 0, .2);
        box-shadow: var(--box-shadow);
        position: relative;
        overflow: hidden;
        text-align: center;
    }
    
    .dishes .box-container .box .fa-heart,
    .dishes .box-container .box .fa-eye {
        position: absolute;
        top: 1.5rem;
        background: #eee;
        border-radius: 50%;
        height: 5rem;
        width: 5rem;
        line-height: 5rem;
        font-size: 2rem;
        color: var(--black);
    }
    
    .dishes .box-container .box .fa-heart:hover,
    .dishes .box-container .box .fa-eye:hover {
        background: var(--red);
        color: #fff;
    }
    
    .dishes .box-container .box .fa-heart {
        right: -15rem;
    }
    
    .dishes .box-container .box .fa-eye {
        left: -15rem;
    }
    
    .dishes .box-container .box:hover .fa-heart {
        right: 1.5rem;
    }
    
    .dishes .box-container .box:hover .fa-eye {
        left: 1.5rem;
    }
    
    .dishes .box-container .box img {
        height: 17rem;
        margin: 1rem 0;
    }
    
    .dishes .box-container .box h3 {
        color: var(--black);
        font-size: 2.5rem;
    }
    
    .dishes .box-container .box .stars {
        padding: 1rem 0;
    }
    
    .dishes .box-container .box .stars i {
        font-size: 1.7rem;
        color: var(--red);
    }
    
    .dishes .box-container .box span {
        color: var(--black);
        font-weight: bolder;
        margin-right: 1rem;
        font-size: 2.5rem;
    }
    
    .about .row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        align-items: center;
    }
    
    .about .row .image {
        flex: 1 1 45rem;
    }
    
    .about .row .image img {
        width: 100%;
    }
    
    .about .row .content {
        flex: 1 1 45rem;
    }
    
    .about .row .content h3 {
        color: var(--black);
        font-size: 4rem;
        padding: .5rem 0;
    }
    
    .about .row .content p {
        color: var(--light-color);
        font-size: 1.5rem;
        padding: .5rem 0;
        line-height: 2;
    }
    
    .about .row .content .icons-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 1rem 0;
        margin-top: .5rem;
    }
    
    .about .row .content .icons-container .icons {
        background: #eee;
        border-radius: .5rem;
        border: .1rem solid rgba(0, 0, 0, .2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex: 1 1 17rem;
        padding: 1.5rem 1rem;
    }
    
    .about .row .content .icons-container .icons i {
        font-size: 2.5rem;
        .about .row .content .icons-container .icons span {
            font-size: 1.5rem;
            color: var(--black);
        }
    }
        
        .menu .box-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 1.5rem;
        }
        
        .menu .box-container .box {
            background: #fff;
            border: .1rem solid rgba(0, 0, 0, .2);
            border-radius: .5rem;
            box-shadow: var(--box-shadow);
        }
        
        .menu .box-container .box .image {
            height: 25rem;
            width: 100%;
            padding: 1.5rem;
            overflow: hidden;
            position: relative;
        }
        
        .menu .box-container .box .image img {
            height: 100%;
            width: 100%;
            border-radius: .5rem;
            object-fit: cover;
        }
        
        .menu .box-container .box .image .fa-heart {
            position: absolute;
            top: 2.5rem;
            right: 2.5rem;
            height: 5rem;
            width: 5rem;
            line-height: 5rem;
            text-align: center;
            font-size: 2rem;
            background: #fff;
            border-radius: 50%;
            color: var(--black);
        }
        
        .menu .box-container .box .image .fa-heart:hover {
            background-color: var(--green);
            color: #fff;
        }
        
        .menu .box-container .box .content {
            padding: 2rem;
            padding-top: 0;
        }
        
        .menu .box-container .box .content .stars {
            padding-bottom: 1rem;
        }
        
        .menu .box-container .box .content .stars i {
            font-size: 1.7rem;
            color: var(--green);
        }
        
        .menu .box-container .box .content h3 {
            color: var(--black);
            font-size: 2.5rem;
        }
        
        .menu .box-container .box .content p {
            color: var(--light-color);
            font-size: 1.6rem;
            padding: .5rem 0;
            line-height: 1.5;
        }
        
        .menu .box-container .box .content .price {
            color: var(--green);
            margin-left: 1rem;
            font-size: 2.5rem;
        }
        
        .review .slide {
            padding: 2rem;
            box-shadow: var(--box-shadow);
            border: .1rem solid rgba(0, 0, 0, .2);
            border-radius: .5rem;
            position: relative;
        }
        
        .review .slide .fa-quote-right {
            position: absolute;
            top: 2rem;
            right: 2rem;
            font-size: 6rem;
            color: #ccc;
        }
        
        .review .slide .user {
            display: flex;
            gap: 1.5rem;
            align-items: center;
            padding-bottom: 1.5rem;
        }
        
        .review .slide .user img {
            height: 7rem;
            width: 7rem;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .review .slide .user h3 {
            color: var(--black);
            font-size: 2rem;
            padding-bottom: .5rem;
        }
        
        .review .slide .user i {
            font-size: 1.3rem;
            color: var(--green);
        }
        
        .review .slide p {
            font-size: 1.5rem;
            line-height: 1.8;
            color: var(--light-color);
        }
        
        .order form {
            max-width: 90rem;
            border-radius: .5rem;
            box-shadow: var(--box-shadow);
            border: .1rem solid rgba(0, 0, 0, .2);
            background: #fff;
            padding: 1.5rem;
            margin: 0 auto;
        }
        
        .order form .inputBox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        
        .order form .inputBox .input {
            width: 49%;
        }
        
        .order form .inputBox .input span {
            display: block;
            padding: .5rem 0;
            font-size: 1.5rem;
            color: var(--light-color);
        }
        
        .order form .inputBox .input input,
        .order form .inputBox .input textarea {
            background: #eee;
            border-radius: .5rem;
            padding: 1rem;
            font-size: 1.6rem;
            color: var(--black);
            text-transform: none;
            margin-bottom: 1rem;
            width: 100%;
        }
        
        .order form .inputBox .input input:focus,
.order form .inputBox .input textarea:focus {
    border: .1rem solid var(--green);
}

.order form .inputBox .input textarea {
    height: 20rem;
    resize: none;
}

.order form .btn {
    margin-top: 0;
}

.footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
}

.footer .box-container .box h3 {
    padding: .5rem 0;
    font-size: 2.5rem;
    color: var(--black);
}

.footer .box-container .box a {
    display: block;
    padding: .5rem 0;
    font-size: 1.5rem;
    color: var(--light-color);
}

.footer .box-container .box a:hover {
    color: var(--red);
    text-decoration: underline;
}

.footer .akhir {
    text-align: center;
    border-top: .1rem solid rgba(0, 0, 0, .1);
    border-bottom: .1rem solid rgba(0, 0, 0, .1);
    font-size: 2rem;
    color: var(--black);
    padding: .5rem;
    padding-top: 1.5rem;
    margin-top: 1.5rem;
    background-color: whitesmoke;
}

.footer .credit span {
    color: var(--green);
}

/* Responsive/Media query */
@media (max-width: 991px) {
    html {
        font-size: 55%;
    }

    header {
        padding: 1rem 2rem;
    }

    section {
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    header .icons #menu-bars {
        display: inline-block;
    }

    header .navbar {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        border-top: .1rem solid rgba(0, 0, 0, .2);
        border-bottom: .1rem solid rgba(0, 0, 0, .2);
        padding: 1rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }

    header .navbar.active {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    header .navbar a {
        display: block;
        padding: 1.5rem;
        margin: 1rem;
        font-size: 2rem;
        background: #eee;
    }

    #search-form #search-box {
        width: 90%;
        margin: 0 1rem;
    }

    .home .home-slider .slide .content h3 {
        font-size: 5rem;
    }
}

@media (max-width: 450px) {
    html {
        font-size: 50%;
    }
}

    .dishes .box-container .box img {
        height: auto;
        width: 100%;
    }

    .order form .inputBox .input {
        width: 100%;
    }
