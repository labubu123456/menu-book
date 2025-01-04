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
