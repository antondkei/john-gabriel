document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. DEFINISI IKON (Tambahan Ikon Sosmed)
    // ==========================================
    const icons = {
        location: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>`,
        phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>`,
        mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16"><path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/><path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/></svg>`,
        globe: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/></svg>`,
        // Ikon Baru:
        instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>`,
        facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>`,
        youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/></svg>`
    };

    // ==========================================
    // 2. DATA SEKOLAH (Ditambahkan Sosmed)
    // ==========================================
    const schools = [
        {
            id: 1,
            level: "KB",
            name: "KB Kristus Raja",
            logo: "https://i.ibb.co.com/XZsqSCTQ/KB-TK-Kristus-Raja.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "TKK Kristus Raja merupakan lembaga pendidikan anak usia dini yang berdiri sejak 24 November 1938 dan beralamat di Jalan Teratai 2 A, Tambaksari, Surabaya, di bawah naungan St. John Gabriel Foundation. Dengan pengalaman panjang dalam pelayanan pendidikan, sekolah terus berkomitmen memberikan layanan yang berkualitas dan sesuai dengan kebutuhan perkembangan anak. Sebagai sekolah Katolik dengan akreditasi A, TKK Kristus Raja mengintegrasikan nilai-nilai Kristiani dalam proses pendidikan melalui suasana belajar yang aman, nyaman, menyenangkan, dan penuh kasih, sehingga anak dapat berkembang secara utuh melalui kegiatan bermain, bereksplorasi, dan berkarya.<br/><br/>Kekhasan TKK Kristus Raja terletak pada penguatan nilai kasih, kepedulian, tanggung jawab, kejujuran, kemandirian, dan semangat berbagi yang ditanamkan melalui pembiasaan sehari-hari. Sekolah juga memberikan perhatian pada perkembangan sosial-emosional, karakter, kemandirian, dan spiritual anak serta membangun kerja sama yang erat dengan orang tua, komite, yayasan, dan gereja/paroki. Melalui lingkungan pendidikan yang inklusif dan penuh kasih, TKK Kristus Raja mendampingi anak untuk tumbuh menjadi pribadi yang mandiri, percaya diri, peduli terhadap sesama dan lingkungan, serta berkarakter Kristiani.",
            programs: "Sejalan dengan kekhasan TKK Kristus Raja dalam mendampingi anak bertumbuh secara utuh melalui nilai kasih, karakter, dan pembelajaran yang menyenangkan, sekolah mengembangkan tiga program unggulan yang dekat dengan dunia anak. Pohon Kasih melalui Daily Caption “Tumbuh dengan Kasih, Memimpin dengan Teladan” menanamkan nilai kasih, kepedulian, dan keteladanan dalam kehidupan sehari-hari. Rumah Literasi dengan semangat “Aku Cinta Huruf, Aku Cinta Buku” menjadi ruang untuk menumbuhkan minat baca, kemampuan berbahasa, dan rasa ingin tahu anak melalui pengalaman yang menyenangkan. Sementara itu, program Aku Bisa melalui semangat “Aku Kreatif, Aku Hebat karena Tuhan” memberikan ruang bagi anak untuk bereksplorasi, berkarya, dan mengembangkan kepercayaan diri sebagai pribadi yang memiliki potensi dan talenta yang dianugerahkan Tuhan.",
            address: "Jl. Teratai No. 2 A Surabaya",
            phone: "031-5035006",
            email: "kbtkkristusraja1@gmail.com",
            website: "http://kb-tkk-kristusrajasby.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtkkkristusraja",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.1626302559007!2d112.75487779999999!3d-7.255293999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9709068304b%3A0x970efc5b41625e31!2sTK%20Katolik%20Kristus%20Raja!5e1!3m2!1sid!2sid!4v1790731853030!5m2!1sid!2sid"
        },
        {
            id: 2,
            level: "KB",
            name: "KB Kristus Raja II",
            logo: "https://i.ibb.co.com/tTC8mqys/KB-TK-Kristus-Raja-II.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB-TKS Kristus Raja II beralamat di Jalan Wisma Permai Tengah I No. 1 dan mulai beroperasi pada 17 Juli 1986. Dengan berlandaskan semangat Kristus Raja Semesta Alam, sekolah berkomitmen menghadirkan pendidikan anak usia dini yang berkualitas melalui pengembangan potensi, prestasi, serta penanaman nilai-nilai Kristiani dan budi pekerti. Melalui lingkungan belajar yang penuh kasih dan pendampingan yang sesuai dengan tahap perkembangan anak, KB-TKS Kristus Raja II berupaya membentuk pribadi yang beriman, berkarakter, mandiri, dan siap berkembang secara optimal.",
            programs: "Untuk mendukung perkembangan anak secara menyeluruh, KB-TKS Kristus Raja II menghadirkan berbagai kegiatan yang menyenangkan dan edukatif. Kegiatan ekstrakurikuler drumband menjadi sarana untuk mengembangkan kreativitas, musikalitas, kedisiplinan, dan kerja sama anak. Melalui Cooking Class, anak diajak mengenal bahan makanan, belajar melakukan kegiatan sederhana secara mandiri, serta melatih motorik dan kreativitas. Ekstrakurikuler Bahasa Inggris memperkenalkan kosakata dan ungkapan sederhana sejak dini, sedangkan kegiatan Outing Class yang dilaksanakan dua kali dalam setahun, pada semester pertama dan kedua, memberikan pengalaman belajar langsung di luar kelas. Seluruh kegiatan ini dirancang untuk mendukung potensi anak, menumbuhkan kemandirian, serta membangun karakter dan budi pekerti yang selaras dengan nilai-nilai Kristiani.",
            address: "Jl. Wisma Permai Tengah I Surabaya",
            phone: "031-5932474",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtkkristusraja2",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.0265638976125!2d112.78954279999999!3d-7.274843699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa17815c3fe7%3A0x20dd02cb7dd92328!2sTKK%20KRISTUS%20RAJA%20II!5e1!3m2!1sid!2sid!4v1790906144462!5m2!1sid!2sid"
        },
        {
            id: 3,
            level: "KB",
            name: "KB St. Theresia",
            logo: "https://i.ibb.co.com/5XQ3yQhw/KB-TK-St-Theresia.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB–TKK Santa Theresia Surabaya berdiri pada tahun 1983 dan berlokasi di Jl. Kalijudan No. 25–33 Surabaya, dalam satu kompleks pendidikan bersama SDK Santa Theresia II, SMPK Santo Stanislaus II, dan SMAK Santo Stanislaus. Selama lebih dari empat dekade, sekolah terus bertumbuh dalam penyertaan Tuhan, perlindungan Santa Theresia, serta keteladanan Santo Yohannes Gabriel Perboyre sebagai pelindung St. John Gabriel Foundation. Nilai Keteguhan, Kedisiplinan, Kepedulian, Communio, dan Misioner menjadi landasan dalam mendampingi peserta didik, sekaligus mengantarkan mereka meraih berbagai prestasi di tingkat kecamatan maupun kota.<br/><br/>Di tengah perkembangan masyarakat dan dinamika dunia pendidikan, KB–TKK Santa Theresia berkomitmen memberikan layanan pendidikan anak usia dini yang berkualitas melalui pendampingan penuh kasih. Dengan semangat pelayanan dan kebersamaan, sekolah berupaya membentuk anak yang beriman, berkarakter, mandiri, dan berprestasi sebagai bekal untuk melanjutkan pendidikan ke jenjang berikutnya serta menjadi pribadi yang unggul dan berakhlak mulia.",
            programs: "Untuk mewujudkan pendidikan anak usia dini yang berkualitas dan berlandaskan nilai-nilai Kristiani, KB–TKK Santa Theresia Surabaya mengembangkan berbagai program unggulan yang mendukung pertumbuhan anak dan kemajuan sekolah. Melalui Santa Theresia Meaningful Learning, pembelajaran dirancang agar bermakna dan menyenangkan, sedangkan Santa Theresia Kids: Growing in Faith and Love menanamkan iman dan kasih dalam keseharian anak. Program Guru Santa Theresia Bertumbuh dan Berkembang mendorong peningkatan kompetensi pendidik secara berkelanjutan, didukung oleh Santa Theresia Partnership & Networking yang memperkuat kolaborasi dengan orang tua dan masyarakat. Sekolah juga berkomitmen menciptakan lingkungan aman dan ramah anak melalui Santa Theresia Child-Friendly School, menumbuhkan kemandirian melalui Santa Theresia Mandiri dan Berdaya, serta memperkuat identitas dan kepercayaan masyarakat melalui Santa Theresia School Branding & SPMB. Seluruh program ini menjadi wujud semangat pelayanan dan kebersamaan dalam mendampingi anak agar bertumbuh menjadi pribadi yang beriman, berkarakter, dan mandiri.",
            address: "Jl. Kalijudan No. 25 - 33 Surabaya",
            phone: "081233520262",
            email: "tkksantatheresia@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtksttheresia",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8218270615102!2d112.77364159999999!3d-7.261108500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f90eb1a22315%3A0x88fbee8c9d5a1dd5!2sKB%20-%20TKK%20Santa%20Theresia!5e0!3m2!1sid!2sid!4v1790949566203!5m2!1sid!2sid"
        },
        {
            id: 4,
            level: "TK",
            name: "TKK Kristus Raja",
            logo: "https://i.ibb.co.com/XZsqSCTQ/KB-TK-Kristus-Raja.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "TKK Kristus Raja merupakan lembaga pendidikan anak usia dini yang berdiri sejak 24 November 1938 dan beralamat di Jalan Teratai 2 A, Tambaksari, Surabaya, di bawah naungan St. John Gabriel Foundation. Dengan pengalaman panjang dalam pelayanan pendidikan, sekolah terus berkomitmen memberikan layanan yang berkualitas dan sesuai dengan kebutuhan perkembangan anak. Sebagai sekolah Katolik dengan akreditasi A, TKK Kristus Raja mengintegrasikan nilai-nilai Kristiani dalam proses pendidikan melalui suasana belajar yang aman, nyaman, menyenangkan, dan penuh kasih, sehingga anak dapat berkembang secara utuh melalui kegiatan bermain, bereksplorasi, dan berkarya.<br/><br/>Kekhasan TKK Kristus Raja terletak pada penguatan nilai kasih, kepedulian, tanggung jawab, kejujuran, kemandirian, dan semangat berbagi yang ditanamkan melalui pembiasaan sehari-hari. Sekolah juga memberikan perhatian pada perkembangan sosial-emosional, karakter, kemandirian, dan spiritual anak serta membangun kerja sama yang erat dengan orang tua, komite, yayasan, dan gereja/paroki. Melalui lingkungan pendidikan yang inklusif dan penuh kasih, TKK Kristus Raja mendampingi anak untuk tumbuh menjadi pribadi yang mandiri, percaya diri, peduli terhadap sesama dan lingkungan, serta berkarakter Kristiani.",
            programs: "Sejalan dengan kekhasan TKK Kristus Raja dalam mendampingi anak bertumbuh secara utuh melalui nilai kasih, karakter, dan pembelajaran yang menyenangkan, sekolah mengembangkan tiga program unggulan yang dekat dengan dunia anak. Pohon Kasih melalui Daily Caption “Tumbuh dengan Kasih, Memimpin dengan Teladan” menanamkan nilai kasih, kepedulian, dan keteladanan dalam kehidupan sehari-hari. Rumah Literasi dengan semangat “Aku Cinta Huruf, Aku Cinta Buku” menjadi ruang untuk menumbuhkan minat baca, kemampuan berbahasa, dan rasa ingin tahu anak melalui pengalaman yang menyenangkan. Sementara itu, program Aku Bisa melalui semangat “Aku Kreatif, Aku Hebat karena Tuhan” memberikan ruang bagi anak untuk bereksplorasi, berkarya, dan mengembangkan kepercayaan diri sebagai pribadi yang memiliki potensi dan talenta yang dianugerahkan Tuhan.",
            address: "Jl. Teratai No. 2 A Surabaya",
            phone: "031-5035006",
            email: "kbtkkristusraja1@gmail.com",
            website: "http://kb-tkk-kristusrajasby.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtkkkristusraja",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.1626302559007!2d112.75487779999999!3d-7.255293999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9709068304b%3A0x970efc5b41625e31!2sTK%20Katolik%20Kristus%20Raja!5e1!3m2!1sid!2sid!4v1790731853030!5m2!1sid!2sid"
        },
        {
            id: 5,
            level: "TK",
            name: "TKS Kristus Raja II",
            logo: "https://i.ibb.co.com/tTC8mqys/KB-TK-Kristus-Raja-II.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB-TKS Kristus Raja II beralamat di Jalan Wisma Permai Tengah I No. 1 dan mulai beroperasi pada 17 Juli 1986. Dengan berlandaskan semangat Kristus Raja Semesta Alam, sekolah berkomitmen menghadirkan pendidikan anak usia dini yang berkualitas melalui pengembangan potensi, prestasi, serta penanaman nilai-nilai Kristiani dan budi pekerti. Melalui lingkungan belajar yang penuh kasih dan pendampingan yang sesuai dengan tahap perkembangan anak, KB-TKS Kristus Raja II berupaya membentuk pribadi yang beriman, berkarakter, mandiri, dan siap berkembang secara optimal.",
            programs: "Untuk mendukung perkembangan anak secara menyeluruh, KB-TKS Kristus Raja II menghadirkan berbagai kegiatan yang menyenangkan dan edukatif. Kegiatan ekstrakurikuler drumband menjadi sarana untuk mengembangkan kreativitas, musikalitas, kedisiplinan, dan kerja sama anak. Melalui Cooking Class, anak diajak mengenal bahan makanan, belajar melakukan kegiatan sederhana secara mandiri, serta melatih motorik dan kreativitas. Ekstrakurikuler Bahasa Inggris memperkenalkan kosakata dan ungkapan sederhana sejak dini, sedangkan kegiatan Outing Class yang dilaksanakan dua kali dalam setahun, pada semester pertama dan kedua, memberikan pengalaman belajar langsung di luar kelas. Seluruh kegiatan ini dirancang untuk mendukung potensi anak, menumbuhkan kemandirian, serta membangun karakter dan budi pekerti yang selaras dengan nilai-nilai Kristiani.",
            address: "Jl. Wisma Permai Tengah I Surabaya",
            phone: "031-5932474",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtkkristusraja2",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.0265638976125!2d112.78954279999999!3d-7.274843699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa17815c3fe7%3A0x20dd02cb7dd92328!2sTKK%20KRISTUS%20RAJA%20II!5e1!3m2!1sid!2sid!4v1790906144462!5m2!1sid!2sid"
        },
        {
            id: 6,
            level: "TK",
            name: "TKK St. Theresia",
            logo: "https://i.ibb.co.com/5XQ3yQhw/KB-TK-St-Theresia.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB–TKK Santa Theresia Surabaya berdiri pada tahun 1983 dan berlokasi di Jl. Kalijudan No. 25–33 Surabaya, dalam satu kompleks pendidikan bersama SDK Santa Theresia II, SMPK Santo Stanislaus II, dan SMAK Santo Stanislaus. Selama lebih dari empat dekade, sekolah terus bertumbuh dalam penyertaan Tuhan, perlindungan Santa Theresia, serta keteladanan Santo Yohannes Gabriel Perboyre sebagai pelindung St. John Gabriel Foundation. Nilai Keteguhan, Kedisiplinan, Kepedulian, Communio, dan Misioner menjadi landasan dalam mendampingi peserta didik, sekaligus mengantarkan mereka meraih berbagai prestasi di tingkat kecamatan maupun kota.<br/><br/>Di tengah perkembangan masyarakat dan dinamika dunia pendidikan, KB–TKK Santa Theresia berkomitmen memberikan layanan pendidikan anak usia dini yang berkualitas melalui pendampingan penuh kasih. Dengan semangat pelayanan dan kebersamaan, sekolah berupaya membentuk anak yang beriman, berkarakter, mandiri, dan berprestasi sebagai bekal untuk melanjutkan pendidikan ke jenjang berikutnya serta menjadi pribadi yang unggul dan berakhlak mulia.",
            programs: "Untuk mewujudkan pendidikan anak usia dini yang berkualitas dan berlandaskan nilai-nilai Kristiani, KB–TKK Santa Theresia Surabaya mengembangkan berbagai program unggulan yang mendukung pertumbuhan anak dan kemajuan sekolah. Melalui Santa Theresia Meaningful Learning, pembelajaran dirancang agar bermakna dan menyenangkan, sedangkan Santa Theresia Kids: Growing in Faith and Love menanamkan iman dan kasih dalam keseharian anak. Program Guru Santa Theresia Bertumbuh dan Berkembang mendorong peningkatan kompetensi pendidik secara berkelanjutan, didukung oleh Santa Theresia Partnership & Networking yang memperkuat kolaborasi dengan orang tua dan masyarakat. Sekolah juga berkomitmen menciptakan lingkungan aman dan ramah anak melalui Santa Theresia Child-Friendly School, menumbuhkan kemandirian melalui Santa Theresia Mandiri dan Berdaya, serta memperkuat identitas dan kepercayaan masyarakat melalui Santa Theresia School Branding & SPMB. Seluruh program ini menjadi wujud semangat pelayanan dan kebersamaan dalam mendampingi anak agar bertumbuh menjadi pribadi yang beriman, berkarakter, dan mandiri.",
            address: "Jl. Kalijudan No. 25 - 33 Surabaya",
            phone: "081233520262",
            email: "tkksantatheresia@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtksttheresia",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8218270615102!2d112.77364159999999!3d-7.261108500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f90eb1a22315%3A0x88fbee8c9d5a1dd5!2sKB%20-%20TKK%20Santa%20Theresia!5e0!3m2!1sid!2sid!4v1790949566203!5m2!1sid!2sid"
        },
        {
            id: 7,
            level: "TK",
            name: "TK Pecinta Damai",
            logo: "https://i.ibb.co.com/0jR4pyP8/TK-Pencinta-Damai.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "TK Pencinta Damai berlokasi di Jalan Randu No. 03 RT 08/RW 02, Kelurahan Sidotopo Wetan, Kecamatan Kenjeran, Kota Surabaya, di kawasan Surabaya Utara. Sekolah berdiri di atas lahan seluas 4.837 m² dengan bangunan seluas 4.817 m² yang dilengkapi ruang kelas, ruang kepala sekolah, dan perpustakaan. Saat ini, TK Pencinta Damai melayani peserta didik usia 4–6 tahun yang terbagi dalam kelompok A dan kelompok B, dengan lingkungan belajar yang mendukung proses tumbuh kembang anak secara optimal.<br/><br/>Dalam menyelenggarakan pendidikan, TK Pencinta Damai didukung oleh tenaga pendidik dan kependidikan yang memiliki latar belakang pendidikan yang relevan. Sekolah memiliki tiga tenaga pendidik, satu tenaga kependidikan, serta dua guru ekstrakurikuler, dengan tiga tenaga pendidik telah bersertifikasi dan linier. Didukung oleh tenaga profesional dengan kualifikasi pendidikan S1, TK Pencinta Damai berkomitmen memberikan pendampingan dan layanan pendidikan yang sesuai dengan kebutuhan anak, sehingga tercipta lingkungan belajar yang nyaman, mendukung, dan mampu mengembangkan potensi setiap peserta didik.",
            programs: "Sejalan dengan komitmen TK Pencinta Damai dalam mendampingi tumbuh kembang anak secara optimal, sekolah mengembangkan kegiatan yang mendukung pembentukan karakter, literasi, dan kreativitas peserta didik. Penguatan karakteristik Katolik dilakukan melalui pembiasaan doa pagi dan mendengarkan REHAN (Renungan Harian Anak), sehingga anak semakin mengenal nilai-nilai iman dan belajar menerapkannya dalam kehidupan sehari-hari. Dalam bidang digital dan literasi, anak diajak memanfaatkan teknologi serta fasilitas perpustakaan untuk menikmati cerita melalui buku digital, guna menumbuhkan minat baca, imajinasi, dan rasa ingin tahu. Sementara itu, kegiatan eksplorasi seni melalui menggambar dan mewarnai menjadi sarana bagi anak untuk mengekspresikan diri, mengembangkan kreativitas, serta melatih koordinasi motorik halus. Berbagai kegiatan ini diharapkan dapat membentuk anak yang beriman, kreatif, dan memiliki semangat belajar sejak dini.",
            address: "Jl. Randu No.3 Surabaya",
            phone: "(031)3767326",
            email: "tkk.pencintadamai@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kb_tkk_pencintadamai",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.084426722478!2d112.7616790757763!3d-7.231210871016575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f997cb867af9%3A0x2d8406faf1e5a67b!2sSMP%20Katolik%20Pencinta%20Damai!5e0!3m2!1sid!2sid!4v1790949885164!5m2!1sid!2sid"
        },
        {
            id: 8,
            level: "SD",
            name: "SDK Yohannes Gabriel",
            logo: "https://i.ibb.co.com/xqGPYVnK/SD-Yoga.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SDK Yohannes Gabriel merupakan lembaga pendidikan dasar yang berlokasi di Jl. Residen Sudirman No. 1, RT 02/RW 07, Kelurahan Tambaksari, Kecamatan Tambaksari, Kota Surabaya. Dengan lokasi yang strategis di wilayah Surabaya, SDK Yohannes Gabriel hadir untuk memberikan layanan pendidikan bagi peserta didik pada jenjang sekolah dasar. Melalui proses pembelajaran dan pendampingan yang berkelanjutan, sekolah berkomitmen mendukung perkembangan potensi peserta didik, baik dalam aspek pengetahuan, keterampilan, maupun pembentukan karakter, sehingga mereka dapat tumbuh menjadi pribadi yang beriman, berkarakter, dan siap menghadapi tantangan di masa depan. Informasi lebih lanjut dapat diperoleh melalui telepon (031) 5034325.",
            programs: "Untuk mendukung pengembangan potensi peserta didik secara menyeluruh, SDK Yohannes Gabriel menghadirkan program unggulan yang mencakup bidang teknologi, olahraga, dan seni. Melalui fasilitas laboratorium komputer, peserta didik memperoleh kesempatan untuk mengenal dan memanfaatkan teknologi digital sebagai sarana belajar. Kegiatan karate membantu membentuk kedisiplinan, keberanian, konsentrasi, serta sikap sportif, sedangkan modern dance menjadi wadah bagi peserta didik untuk mengekspresikan kreativitas, mengembangkan bakat seni, dan meningkatkan kepercayaan diri. Ketiga program ini diharapkan dapat mendukung pembentukan peserta didik yang terampil, kreatif, disiplin, dan berkarakter.",
            address: "Jl. Residen Sudirman No. 1 Surabaya",
            phone: "(031) 5034325",
            email: "yohanesgabriel74@yahoo.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkyohannesgabriel",
            facebook: "",
            youtube: "https://youtube.com/@sdkyohannesgabrielsby",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8708468976415!2d112.75189267577649!3d-7.255536771279938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f97afe884b55%3A0xcb02b2c875c6a917!2sSekolah%20Dasar%20(SD)%20Katolik%20St.%20Yohannes%20Gabriel!5e0!3m2!1sid!2sid!4v1790950193773!5m2!1sid!2sid"
        },
        {
            id: 9,
            level: "SD",
            name: "SDK Santo Mikael",
            logo: "https://i.ibb.co.com/VWn4xqtb/SD-St-Mikael.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Katolik Santo Mikael Surabaya didirikan pada 1 September 1957 dan pada tahun 2026 genap berusia 69 tahun. Berada di bawah naungan St. John Gabriel Foundation dalam lingkup pelayanan Keuskupan Surabaya, sekolah ini berdampingan dengan Paroki Santo Mikael dan hadir untuk memenuhi kebutuhan pendidikan masyarakat di kawasan Surabaya Utara. SDK Santo Mikael berkomitmen menyelenggarakan pendidikan yang mengembangkan iman, karakter, dan kemampuan akademik peserta didik berdasarkan nilai-nilai Kristiani.<br/><br/>Sebagai wujud semangat pelayanan, SDK Santo Mikael Surabaya menjalin kerja sama dengan para suster TMM dalam mendukung pendidikan anak-anak Panti Asuhan Santo Stefanus, serta dengan para suster PRR dalam pembinaan iman anak-anak. Sekolah hadir sebagai wadah pendidikan Katolik yang terbuka bagi semua golongan, terutama mereka yang miskin dan menderita serta membutuhkan bantuan. Melalui semangat kasih, kepedulian, dan pelayanan, SDK Santo Mikael berupaya memberikan kesempatan pendidikan yang bermakna bagi setiap anak agar dapat bertumbuh menjadi pribadi yang beriman, berkarakter, dan mampu memberikan kontribusi positif bagi sesama.",
            programs: "SDK Santo Mikael Surabaya mengembangkan berbagai program unggulan untuk mendukung pertumbuhan peserta didik dalam iman, karakter, dan akademik. Pembinaan Katolisitas serta iman dan karakter dilakukan secara berkesinambungan untuk menanamkan nilai-nilai Kristiani dan kepedulian terhadap sesama. Pembiasaan literasi dan numerasi memperkuat kemampuan dasar siswa, sementara perayaan ulang tahun setiap bulan menumbuhkan kebersamaan. Sekolah juga memberikan pembinaan bagi siswa berprestasi agar bakat dan potensi mereka berkembang secara optimal, sehingga terbentuk pribadi yang beriman, berkarakter, dan berprestasi.",
            address: "Jl. Tanjung Sadari No.49 Surabaya",
            phone: "(031) 3541422",
            email: "sdksantomikael1@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdksantomikael",
            facebook: "",
            youtube: "https://www.youtube.com/@sdksantomikaelsurabaya2742",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1463098782715!2d112.72754990000001!3d-7.224147399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f8d9d0ca9515%3A0xe387bb05aa01f36e!2sGereja%20Katolik%20Paroki%20Santo%20Mikael%20-%20Perak!5e0!3m2!1sid!2sid!4v1790950400615!5m2!1sid!2sid"
        },
        {
            id: 10,
            level: "SD",
            name: "SDK Santa Theresia",
            logo: "https://i.ibb.co.com/1GWxnRMK/SD-St-Theresia.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Katolik Santa Theresia 1 Surabaya, atau yang dikenal sebagai SDK Santa Theresia 1, merupakan sekolah dasar swasta Katolik yang berlokasi di Jl. Residen Sudirman No. 5, Kecamatan Tambaksari, Surabaya. Sekolah ini memiliki sejarah panjang sejak 1 April 1929, ketika Mgr. dr. Th. de Backere meresmikan gedung sekolah yang saat itu bernama St. Theresia. Nama Santa Theresia dari Lisieux dipilih sebagai pelindung sekolah, dengan keteladanan hidup yang sederhana sebagai inspirasi dalam pendidikan. Sekolah ini kemudian diakui dengan nama SDK Santa Theresia 1 pada 24 November 2008 dan berada di bawah naungan St. John Gabriel Foundation.<br/><br/>Sepanjang perjalanannya, SDK Santa Theresia mengalami berbagai perkembangan, mulai dari Europese School, perubahan fungsi gedung pada masa pendudukan Jepang, hingga menjadi Sekolah Dasar Katolik pada 1 Juli 1946 dengan tujuh kelas, tujuh guru, dan 172 murid. Seiring bertambahnya jumlah peserta didik, sekolah membuka kelas siang pada 1 Agustus 1961 untuk memperluas layanan pendidikan. Berbekal sejarah panjang dan semangat pendidikan Katolik, SDK Santa Theresia 1 terus berupaya memberikan pendidikan yang berlandaskan nilai-nilai Kristiani serta keteladanan Santa Theresia, guna membentuk peserta didik yang beriman, berkarakter, dan berkembang secara optimal.",
            programs: "Untuk mendukung pengembangan potensi dan keterampilan peserta didik, SDK Santa Theresia 1 Surabaya menghadirkan berbagai program unggulan di bidang bahasa dan seni. Melalui English Club, pembelajaran Bahasa Mandarin, serta pendampingan native speaker, siswa memperoleh kesempatan untuk meningkatkan kemampuan berbahasa dan memperluas wawasan lintas budaya. Sementara itu, kegiatan karawitan dan paduan suara menjadi wadah untuk mengembangkan bakat seni, kreativitas, kedisiplinan, dan kerja sama. Berbagai program ini diharapkan dapat membentuk peserta didik yang percaya diri, berprestasi, serta mampu menghargai keberagaman budaya.",
            address: "Jl. Residen Sudirman 5 Surabaya",
            phone: "(031)5032903",
            email: "sdksantatheresia3@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdksantatheresia",
            facebook: "",
            youtube: "https://www.youtube.com/@sdkatoliksantatheresia5344",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7915.733401473832!2d112.7543692!3d-7.2560082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9f7e8446f4b%3A0x20d0cb1bb76228a!2sSDK%20SANTA%20THERESIA!5e0!3m2!1sid!2sid!4v1790950715610!5m2!1sid!2sid"
        },
        {
            id: 11,
            level: "SD",
            name: "SD Katolik Santa Theresia II Surabaya",
            logo: "https://i.ibb.co.com/zVrSC7C0/SD-St-Theresia-2.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Katolik Santa Theresia II Surabaya berlokasi di Jl. Kalijudan No. 25–33, Kelurahan Pacarkembang, Kecamatan Tambaksari, Surabaya, dan berdiri pada tahun 1980. Sejarah pendiriannya berawal dari upaya Romo Everard Van Mensvoort, CM, yang pada akhir tahun 1970 membeli lahan persawahan di kawasan Kalijudan saat menjabat sebagai kepala Paroki Kristus Raja. Pengembangan kawasan tersebut kemudian dilanjutkan oleh Romo P. Boonekamp, CM, dengan mendirikan beberapa lembaga pendidikan, yaitu TK Santa Theresia, SDK Santa Theresia II, SMPK Santo Stanislaus II, dan SMAK Santo Stanislaus. Pembukaan SDK Santa Theresia II merupakan bagian dari pengembangan layanan pendidikan yang diprakarsai oleh Sr. Seraphie, S.Sp.S., dan Sr. Yustina, S.Sp.S.<br/><br/>SDK Santa Theresia II memiliki visi menjadi sekolah yang berprestasi, terampil, dan berwawasan lingkungan hidup dengan berlandaskan iman Kristiani. Untuk mewujudkan visi tersebut, sekolah berkomitmen menciptakan lingkungan yang harmonis dan nyaman, mengembangkan kemampuan peserta didik dalam bidang ilmu pengetahuan dan teknologi, serta membangun budaya disiplin, kejujuran, keadilan, dan penghargaan terhadap perbedaan. Proses pembelajaran juga diarahkan pada pembentukan karakter dan kepedulian terhadap lingkungan melalui pendidikan lingkungan hidup yang terintegrasi secara berkelanjutan. Dengan demikian, sekolah berupaya membentuk peserta didik yang beriman, berprestasi, terampil, dan bertanggung jawab dalam menjaga kelestarian alam.",
            programs: "Sejalan dengan visi SDK Santa Theresia II Surabaya untuk membentuk peserta didik yang berprestasi, terampil, dan berwawasan lingkungan berdasarkan iman Kristiani, sekolah mengembangkan berbagai program unggulan secara terpadu. Dalam bidang pendidikan, Communication Skills dan Gerakan Literasi Sekolah mendorong kemampuan berbahasa Inggris serta kebiasaan membaca. Pembinaan Katolisitas diwujudkan melalui kegiatan liturgi dan kepedulian terhadap sesama, sedangkan Learning Together dan Mentoring mendukung peningkatan kompetensi guru serta pendampingan peserta didik. Sekolah juga memperhatikan kesehatan dan perlindungan anak melalui edukasi siswa dan kerja sama dengan Puskesmas. Kepedulian lingkungan dikembangkan melalui program Green School, sementara Digital Learning mengoptimalkan pemanfaatan teknologi dalam pembelajaran. Didukung pengelolaan keuangan yang tertib dan evaluasi berkala, seluruh program ini menjadi upaya sekolah untuk menghadirkan pendidikan yang berkualitas, berkarakter, sehat, dan peduli lingkungan.",
            address: "Jl. Kalijudan 25 - 33 Surabaya",
            phone: "(031)3892572",
            email: "sdktheresia2@gmail.com",
            website: "https://sdksantatheresia2.wordpress.com/",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdksttheresia2",
            facebook: "",
            youtube: "https://www.youtube.com/@sdksttheresia2",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3957.821393155123!2d112.7714572!3d-7.2611578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f98616a741d9%3A0xd7c7b9f13a70ae57!2sSD%20Katolik%20Santa%20Theresia%202%20Surabaya!5e0!3m2!1sid!2sid!4v1790951043067!5m2!1sid!2sid"
        },
        {
            id: 12,
            level: "SD",
            name: "SDK Pencinta Damai",
            logo: "https://i.ibb.co.com/GQGF7FW8/SD-Pencinta-Damai.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SDK Pencinta Damai Surabaya merupakan sekolah dasar swasta Katolik yang berlokasi di Jalan Randu No. 3, Kelurahan Sidotopo Wetan, Kecamatan Kenjeran, Surabaya, di bawah naungan St. John Gabriel Foundation. Berdiri sejak 14 November 1982, sekolah ini mengawali kegiatan belajar mengajar di bangsal Gereja Ratu Pencinta Damai, Jalan Pogot Baru No. 77–79, sebelum akhirnya menempati gedung sendiri. Dengan status akreditasi A, SDK Pencinta Damai berkomitmen menyediakan pendidikan yang inklusif dan berkualitas serta lingkungan belajar yang aman dan kondusif bagi perkembangan peserta didik.<br/><br/>Kekhasan SDK Pencinta Damai terletak pada penguatan karakter, budi pekerti luhur, kedisiplinan, dan toleransi dalam kehidupan masyarakat yang beragam. Pendidikan tidak hanya berfokus pada pencapaian akademik, tetapi juga pada pembentukan iman, moralitas, dan semangat cinta damai melalui pembiasaan doa bersama, kegiatan sosial, serta berbagai kegiatan ekstrakurikuler. Didukung oleh kerja sama antara guru, orang tua, dan yayasan, sekolah terus berupaya mengembangkan potensi peserta didik secara optimal agar tumbuh menjadi pribadi yang cerdas, berkarakter, dan siap melanjutkan pendidikan ke jenjang berikutnya.",
            programs: "Sejalan dengan komitmen SDK Pencinta Damai Surabaya dalam membentuk generasi yang cerdas, berkarakter, dan cinta damai, sekolah mengembangkan berbagai program yang mencakup penguatan budaya ramah, toleransi, dan anti-perundungan, pembiasaan hidup rohani melalui misa, rekoleksi, serta aksi sosial berlandaskan semangat kasih. Kualitas pendidik ditingkatkan melalui berbagi praktik baik dan mentoring antarguru untuk menerapkan disiplin positif tanpa kekerasan. Sekolah juga memperkuat kemitraan dengan paroki, Puskesmas, dan lembaga lain, serta menyediakan lingkungan belajar yang inklusif, aman, bersih, dan nyaman dengan dukungan pojok literasi di kelas. Didukung pengelolaan dana yang optimal, publikasi kegiatan dan prestasi melalui media sosial, serta pembiasaan menyambut siswa, apel pagi bersama, dan pelayanan di gereja, seluruh program ini menjadi wujud upaya sekolah dalam menumbuhkan kepedulian, mempererat persaudaraan, dan membangun kepercayaan masyarakat.",
            address: "Jl. Randu No.3, Pogot, Surabaya",
            phone: "(031)3769728",
            email: "sd.pede3@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdk_pencintadamai",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.084426722478!2d112.7616790757763!3d-7.231210871016575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f997cb867af9%3A0x2d8406faf1e5a67b!2sSMP%20Katolik%20Pencinta%20Damai!5e0!3m2!1sid!2sid!4v1790949885164!5m2!1sid!2sid"
        },
        {
            id: 13,
            level: "SD",
            name: "SDK Kristus Raja",
            logo: "https://i.ibb.co.com/qY57MGWk/SD-Kristus-Raja.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SDK Kristus Raja Surabaya merupakan satuan pendidikan dasar di bawah naungan St. John Gabriel Foundation yang berlokasi di Jl. Wisma Permai Tengah I, Kelurahan Mulyorejo, Kecamatan Mulyorejo, Surabaya. Didirikan pada 3 Mei 1986, sekolah ini hadir sebagai wujud pelayanan pendidikan Katolik yang mengembangkan potensi peserta didik secara utuh, baik dalam bidang akademik maupun pembentukan iman dan karakter. Melalui pembelajaran, keteladanan, dan pembiasaan, sekolah menanamkan nilai-nilai kedisiplinan, kejujuran, kepedulian, kemandirian, tanggung jawab, serta semangat melayani sesama. Pembinaan rohani setiap hari Jumat, pembelajaran Bahasa Mandarin dan Speaking, serta program English Day setiap Selasa dan Jumat menjadi bagian dari upaya membangun karakter Kristiani sekaligus meningkatkan kemampuan komunikasi peserta didik.<br/><br/>Kekhasan SDK Kristus Raja terletak pada pembelajaran berbasis ekologi yang memanfaatkan kebun sekolah, kolam ikan, peternakan ayam, dan tanaman hidroponik sebagai sumber belajar kontekstual untuk menumbuhkan kepedulian lingkungan, tanggung jawab, dan kemandirian. Sekolah juga menyediakan wadah pengembangan bakat melalui Modern Dance serta pembinaan siswa berprestasi di bidang akademik dan nonakademik. Didukung pembiasaan literasi dan pembelajaran yang mendorong kemampuan berpikir kritis, kreativitas, komunikasi, dan kolaborasi, SDK Kristus Raja berkomitmen menghadirkan pengalaman belajar yang aktif, menyenangkan, dan bermakna. Seluruh upaya ini diarahkan untuk membentuk peserta didik yang beriman, berkarakter, berprestasi, peduli terhadap sesama dan lingkungan, serta siap menghadapi tantangan masa depan.",
            programs: "SDK Kristus Raja Surabaya mengembangkan berbagai program unggulan untuk mendukung pertumbuhan peserta didik secara menyeluruh. Melalui Modern Dance, siswa mengembangkan kreativitas, kepercayaan diri, dan kerja sama. Pembelajaran Berbasis Ekologi menumbuhkan kepedulian dan tanggung jawab terhadap kelestarian lingkungan, sedangkan English Day setiap Selasa dan Jumat membiasakan siswa berkomunikasi dalam Bahasa Inggris. Sekolah juga menyelenggarakan Pembinaan Siswa Berprestasi melalui pendampingan dan pengayaan sesuai bakat serta minat, baik di bidang akademik maupun nonakademik. Melalui program-program ini, SDK Kristus Raja berkomitmen membentuk generasi yang bertumbuh dalam karakter, kreatif dalam berkarya, peduli terhadap lingkungan, dan berprestasi.",
            address: "Jl. Wisma Permai Tengah I Surabaya",
            phone: "(031)5932469",
            email: "sdk.kristusraja@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkkristusraja",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7915.398063821225!2d112.7895652!3d-7.2750471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa1778863ca5%3A0x11280ca3cb3f104!2sSekolah%20Dasar%20Katolik%20Kristus%20Raja!5e0!3m2!1sid!2sid!4v1790953629828!5m2!1sid!2sid"
        },
        {
            id: 14,
            level: "SMP",
            name: "SMP Katolik Santo Stanislaus",
            logo: "https://i.ibb.co.com/bhjVBqB/SMP-Stanislaus-I.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMPK Santo Stanislaus 1 Surabaya merupakan lembaga pendidikan Katolik di Surabaya yang berada di bawah naungan St. John Gabriel Foundation. Dengan komitmen kuat dalam pelayanan pendidikan, sekolah berupaya membentuk generasi muda yang cerdas, berintegritas, dan berlandaskan nilai-nilai Kristiani. Tidak hanya berfokus pada pencapaian akademik, SMPK Santo Stanislaus 1 juga mengembangkan potensi peserta didik secara menyeluruh melalui lingkungan belajar yang aman, kondusif, dan penuh kekeluargaan, dengan menanamkan spiritualitas, kedisiplinan, serta kepedulian sosial dalam kehidupan sehari-hari.<br/><br/>Sejalan dengan upaya meningkatkan mutu pendidikan dan menjawab tantangan zaman, SMPK Santo Stanislaus 1 mulai menerapkan pembiasaan penggunaan Bahasa Inggris dalam percakapan sederhana di antara seluruh warga sekolah, mulai dari guru, siswa, hingga tenaga kependidikan. Program ini bertujuan membangun keberanian dan kepercayaan diri siswa dalam berkomunikasi serta memperluas wawasan global sejak dini. Melalui perpaduan pendidikan karakter yang kuat dan inovasi pembelajaran bahasa, sekolah terus berkomitmen menghadirkan pendidikan yang relevan dan berkualitas guna mempersiapkan peserta didik menghadapi masa depan.",
            programs: "SMPK Santo Stanislaus 1 Surabaya mengembangkan berbagai program unggulan yang terintegrasi untuk membentuk peserta didik yang berkarakter, berprestasi, dan siap menghadapi tantangan global. Melalui English Habituation & Simple Daily Conversation, siswa, guru, dan tenaga kependidikan dibiasakan menggunakan Bahasa Inggris dalam komunikasi sederhana untuk membangun keberanian dan kepercayaan diri. Stanislaus Character Building menjadi landasan pembentukan karakter melalui ibadat, doa harian, retret atau rekoleksi, serta penanaman nilai kepemimpinan dan kejujuran. Kepedulian terhadap sesama dan lingkungan diwujudkan melalui Aksi Kasih dan Eco-School, termasuk kegiatan sosial, penggalangan dana kemanusiaan, LAUDATOSI, dan pemilahan sampah. Di sisi lain, pengembangan minat dan bakat melalui kegiatan seni, olahraga, sains, dan pramuka memberikan ruang bagi siswa untuk menemukan serta mengembangkan potensinya. Seluruh program tersebut diperkuat dengan Pendampingan Akademik Terpadu melalui penguatan materi, bimbingan intensif, persiapan ujian akhir kelas IX, serta pemanfaatan teknologi digital yang dipadukan dengan pembelajaran berbasis kertas, sehingga setiap siswa memperoleh pendampingan yang seimbang untuk mencapai hasil belajar optimal dan mempersiapkan diri melanjutkan pendidikan ke jenjang berikutnya.",
            address: "Jl. Tanjung Sadari No.49 Surabaya",
            phone: "(031) 5032259",
            email: "ppdbstansa01@gmail.com@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpkstanislaus",
            facebook: "https://www.facebook.com/smpk.stanislaus",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.863493938601!2d112.7548679!3d-7.256372800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f97a7701da4f%3A0x9dc0837330b05fb!2sSMP%20Katolik%20Santo%20Stanislaus!5e0!3m2!1sid!2sid!4v1790955015777!5m2!1sid!2sid"
        },
        {
            id: 15,
            level: "SMP",
            name: "SMP Katolik Santo Stanislaus 2",
            logo: "https://i.ibb.co.com/21mGVdb0/SMP-Stanislaus-II.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMP Katolik Santo Stanislaus II Surabaya atau dikenal sebagai STANDU berdiri sejak tahun 1986 sebagai wujud pelayanan pendidikan yang berlandaskan iman Katolik, nilai kebangsaan, dan kemanusiaan. Berlokasi di kawasan pendidikan Kalijudan, Surabaya Timur, STANDU tumbuh bersama lembaga pendidikan lainnya, mulai dari KB-TK Katolik Santa Theresia, SD Katolik Santa Theresia II, SMA Katolik Santo Stanislaus, hingga Universitas Katolik Widya Mandala. Berlandaskan visi untuk mewujudkan komunitas pendidikan yang mendukung pertumbuhan pribadi secara utuh dalam dinamika masyarakat global, STANDU menerapkan nilai STANDU-GO (Smart, Tolerance, Authentic, Nationality, Determined, Uniques, Growth Mindset, dan Optimism) sebagai pedoman budaya sekolah. Melalui pembelajaran yang berpusat pada siswa, sekolah membangun lingkungan belajar yang menyenangkan, inklusif, saling menghargai, dan memberdayakan.<br/><br/>STANDU berkomitmen mengembangkan potensi peserta didik secara menyeluruh melalui pendampingan guru yang profesional, program lingkar belajar, serta berbagai kegiatan ekstrakurikuler di bidang sains, seni, bahasa, olahraga, dan kepemimpinan. Berbagai prestasi siswa dalam olimpiade, bahasa Inggris dan Mandarin, paduan suara, modern dance, futsal, basket, wushu, serta penelitian ilmiah menjadi bagian dari perjalanan pengembangan bakat dan kemampuan mereka. Dengan mengedepankan toleransi, karakter, kemandirian, resiliensi, dan pola pikir bertumbuh, STANDU terus berupaya meningkatkan mutu pendidikan dan memperkuat kerja sama dengan berbagai pihak untuk membentuk generasi yang beriman, berkarakter kuat, adaptif, dan siap menghadapi tantangan masyarakat global.",
            programs: "SMP Katolik Santo Stanislaus II Surabaya (STANDU) mengembangkan berbagai program unggulan untuk mendukung pertumbuhan siswa secara utuh. Melalui program literasi dan numerasi yang terencana dan berkelanjutan, sekolah mendorong peningkatan kemampuan akademik dalam suasana belajar yang menyenangkan. Pembinaan Katolisitas menumbuhkan iman dan semangat pelayanan, sedangkan literasi digital membekali siswa dengan keterampilan teknologi melalui pengenalan coding, desain grafis, dan kecerdasan buatan (AI). Program English for Future dan pembelajaran Bahasa Mandarin memperkuat kemampuan komunikasi internasional serta wawasan global. Seluruh program tersebut dipadukan dengan pembinaan karakter, pengembangan kreativitas, dan apresiasi budaya untuk membentuk generasi STANDU yang beriman, kompeten, adaptif, dan siap menghadapi tantangan masa depan.",
            address: "Jl. Kalijudan 25 - 33 Surabaya",
            phone: "(031)3813313",
            email: "stanislaus2.smpk@gmail.com",
            website: "https://www.smpk-stanislaus2.sch.id/",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/standujayahoya_reborn",
            facebook: "https://www.facebook.com/standu.newborn",
            youtube: "https://www.youtube.com/@StanduTV",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.821440054641!2d112.77145717577653!3d-7.261152471340845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f923c8275627%3A0xc2782f7d714d12d7!2sSMPK%20Santo%20Stanislaus%202%20Surabaya!5e0!3m2!1sid!2sid!4v1790954778371!5m2!1sid!2sid"
        },
        {
            id: 16,
            level: "SMP",
            name: "SMP Katolik Santo Mikael",
            logo: "https://i.ibb.co.com/Y7BN7rKf/SMP-St-Mikael.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMP Katolik Santo Mikael Surabaya merupakan lembaga pendidikan yang berada di bawah naungan St. John Gabriel Foundation dan berlokasi di kompleks Gereja Katolik Paroki Santo Mikael, Jl. Tanjung Sadari No. 49, Krembangan–Perak, Surabaya. Sekolah ini didirikan secara legal pada 1 Juli 1981 dan telah terakreditasi A. Dengan visi “Bertakwa kepada Tuhan Yang Maha Esa, unggul dalam prestasi dan berbudi pekerti luhur”, SMP Katolik Santo Mikael berkomitmen membentuk pribadi yang taat beribadah, rajin belajar, dan berakhlak mulia. Nilai tersebut diwujudkan melalui motto “Brave, Discipline, & Graceful” sebagai landasan dalam membangun karakter peserta didik.<br/><br/>Dalam mendukung pendidikan dan pembinaan siswa, SMP Katolik Santo Mikael bekerja sama dengan para Romo Kongregasi SDB yang berkarya di Paroki Santo Mikael dalam pengelolaan dan pembinaan Asrama Putra “Auxilium”, yang diperuntukkan bagi siswa dari dalam maupun luar Kota Surabaya. Dalam pembelajaran, sekolah menerapkan Kurikulum Merdeka dengan dukungan lingkungan yang strategis, aman, nyaman, serta fasilitas lapangan olahraga yang luas. Suasana belajar yang menyenangkan, komunikasi yang baik, dan hubungan yang penuh kekeluargaan ant warga sekolah menjadi bagian dari kehidupan sekolah. Melalui lingkungan tersebut, SMP Katolik Santo Mikael terus berupaya mendampingi peserta didik untuk bertumbuh menjadi generasi yang berkarakter, berprestasi, dan siap menghadapi masa depan.",
            programs: "SMP Katolik Santo Mikael Surabaya mengembangkan berbagai program unggulan yang terintegrasi untuk mendukung pertumbuhan siswa dalam aspek spiritualitas, karakter, literasi, teknologi, kewirausahaan, kepedulian lingkungan, serta pengembangan bakat dan minat. Melalui Morning Spirit & Character Building, yang diwujudkan dalam Katolisitas dan Sapa Pagi, siswa dibiasakan membangun kehidupan iman, kasih, kedisiplinan, dan sopan santun. Di bidang literasi, GELIS (Gerakan Literasi Sekolah Menyenangkan) hadir melalui Pojok Baca dan pembiasaan membaca selama 15 menit untuk meningkatkan kemampuan membaca, menulis, dan berpikir kritis. Sementara itu, Smart Digital Student (SDS) membekali siswa dengan keterampilan literasi digital, pembuatan Digital Portfolio, desain grafis, serta pemanfaatan perangkat lunak produktif. Kepedulian terhadap lingkungan dan jiwa kewirausahaan dikembangkan melalui program Laudatosi, antara lain melalui bank sampah dan Market Day yang mendorong siswa mengelola sampah sekaligus menghasilkan produk kreatif. Pengalaman belajar juga diperluas melalui Outing Class atau Field Trip, serta berbagai kegiatan pengembangan bakat seperti Futsal, Modern Dance, Pramuka, dan Sanmik Friday Talents Show yang menjadi ruang bagi siswa untuk berlatih, berkreasi, membangun kepercayaan diri, dan mengembangkan potensi mereka secara optimal.",
            address: "Jl. Tanjung Sadari No.49 Surabaya",
            phone: "(031) 3553540",
            email: "smpksantomikael@gmail.com",
            website: "http://smpksantomikaelsurabaya.blogspot.com",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpksantomikaelsby",
            facebook: "https://www.facebook.com/share/14syki1WqwT",
            youtube: "https://www.youtube.com/@smpksantomikaelsurabaya3259",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.144264267653!2d112.72765600000001!3d-7.224380999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f8d7b079c46d%3A0xe9af22e33104ccd8!2sSekolah%20Menengah%20Pertama%20Katolik%20Santo%20Mikael%20Surabaya!5e0!3m2!1sid!2sid!4v1790955650844!5m2!1sid!2sid"
        },
        {
            id: 17,
            level: "SMP",
            name: "SMP Katolik Pencinta Damai",
            logo: "https://i.ibb.co.com/Kc2HFB0W/SMP-Pencinta-Damai.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMP Katolik Pencinta Damai Surabaya yang berlokasi di Jalan Randu No. 3, Sidotopo Wetan, Kecamatan Kenjeran, Surabaya, didirikan atas prakarsa Romo Boonikamp Petrus Antonius, Kepala Paroki Kristus Raja pada saat itu, sebagai bentuk kepedulian terhadap pendidikan masyarakat di wilayah Stasi Ratu Pencinta Damai, Pogot. Peletakan batu pertama dilaksanakan pada 8 April 1986, sementara sekolah mulai beroperasi pada 19 Juni 1986 dan memperoleh Nomor Data Statistik Sekolah pada 15 November 1986. Pendirian sekolah juga didukung oleh berbagai pihak, antara lain Ibu Dra. Ratna Wahyuni, Bapak Florianus Adji Soegondo, BA yang menjadi kepala sekolah pertama, serta Bapak Drs. H. J. Soedomo yang membantu proses perizinan pendirian sekolah.<br/><br/>Seiring perkembangannya, SMP Katolik Pencinta Damai terus melakukan pembenahan dan peningkatan mutu pendidikan. Sekolah yang pada awalnya berstatus “Terdaftar” kemudian meningkat menjadi “Diakui” pada tahun 1989 dan memperoleh status “Terakreditasi A” pada tahun 2005 dengan nilai 96 dalam sistem akreditasi baru oleh Badan Akreditasi Sekolah (BAS). Status Terakreditasi A tersebut kembali dipertahankan pada tahun 2009. Berbekal semangat “Berbenah Diri, Meniti Prestasi”, SMP Katolik Pencinta Damai terus berkomitmen meningkatkan kualitas pendidikan, membentuk karakter peserta didik, serta memberikan pelayanan pendidikan yang terbaik bagi masyarakat.",
            programs: "SMP Katolik Pencinta Damai mengembangkan berbagai program unggulan yang mendukung pertumbuhan peserta didik secara utuh dalam aspek karakter, literasi, spiritualitas, dan pengembangan potensi diri. Melalui Speak and Shine, siswa memperoleh ruang untuk mengembangkan keberanian dan kepercayaan diri melalui orasi, pidato, vokal, stand-up comedy, dan dance. Program Literasi Damai membangun budaya membaca, menulis, dan berpikir kritis, sementara Mindfulness membantu siswa mengembangkan kesadaran diri, ketenangan, serta kemampuan mengelola diri dalam kehidupan sehari-hari. Penguatan kehidupan iman diwujudkan melalui Ibadat Jumat Pertama dan ibadat pada akhir bulan sebagai sarana pembinaan spiritualitas dan kebersamaan seluruh warga sekolah.",
            address: "Jl. Randu No.3, Pogot, Surabaya",
            phone: "(031) 3761309",
            email: "smpkpencintadamai86@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpkpencintadamai",
            facebook: "",
            youtube: "https://www.youtube.com/@smpkpencintadamai6556",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.084426722478!2d112.7616790757763!3d-7.231210871016575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f997cb867af9%3A0x2d8406faf1e5a67b!2sSMP%20Katolik%20Pencinta%20Damai!5e0!3m2!1sid!2sid!4v1790949885164!5m2!1sid!2sid"
        },
        {
            id: 18,
            level: "SMA",
            name: "SMAS Katolik Santo Stanislaus",
            logo: "https://i.ibb.co.com/99YyCt6S/SMA-Stanislaus.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMA Katolik Santo Stanislaus Surabaya yang berlokasi di Jl. Kalijudan No. 25–33 merupakan institusi pendidikan menengah bercorak Katolik yang memiliki komitmen dalam membentuk generasi muda melalui perpaduan pendidikan akademis dan pembinaan karakter. Dengan semangat Santo Stanislaus Kostka sebagai pelindung kaum muda, sekolah menanamkan nilai-nilai Kristiani dan humanisme universal melalui lingkungan belajar yang berlandaskan kasih, kedisiplinan, persaudaraan, dan kepedulian sosial. Didukung fasilitas pembelajaran seperti ruang kelas berbasis multimedia, laboratorium sains dan komputer, perpustakaan, serta sarana olahraga dan seni, sekolah memberikan ruang bagi peserta didik untuk mengembangkan potensi intelektual, kreativitas, dan karakter secara seimbang.<br/><br/>Pengembangan potensi siswa diperkuat melalui beragam kegiatan ekstrakurikuler, seperti ansambel, paduan suara, badminton, basket, futsal, voli, bola tangan, Pramuka, ARC (AI, Robotic and Coding), Math Club, Cooking Entrepreneurship, Aikido, Modern Dance, serta kegiatan sosial melalui Serikat Santo Vincentius (SSV). Melalui pendampingan personal dari pendidik dan tenaga kependidikan, siswa diarahkan untuk mengembangkan nalar kritis, kepemimpinan, etos kerja, integritas, dan kepekaan sosial. Sejalan dengan perkembangan teknologi dan tuntutan zaman, SMA Katolik Santo Stanislaus terus berinovasi dan menjalin kerja sama dengan perguruan tinggi untuk mempersiapkan lulusan yang tidak hanya unggul secara akademis dan siap melanjutkan pendidikan, tetapi juga memiliki karakter kuat, berbelas kasih, dan mampu memberikan dampak positif bagi masyarakat.",
            programs: "SMA Katolik Santo Stanislaus Surabaya menghadirkan ekosistem pendidikan yang holistik melalui berbagai program yang dirancang untuk membentuk siswa yang cerdas, berkarakter, berbelas kasih, kreatif, dan siap menghadapi masa depan. Pembentukan karakter dan kebersamaan dibangun melalui Smaksta Communio bagi siswa kelas 10, dilanjutkan dengan pengalaman hidup bermakna melalui Caritas Peregrina bagi kelas 11, serta Mission Journey bagi kelas 12 sebagai ruang refleksi diri dan persiapan menapaki masa depan. Semangat kompetisi dan kebersamaan dikembangkan melalui SWOS, Liga Bola, e-Sport, dan Class Meeting, sementara kepedulian sosial diwujudkan melalui SSV Smaksta. Budaya belajar kolaboratif juga diperkuat melalui Komunitas Tutor Sebaya, yang mendorong siswa untuk saling berbagi pengetahuan sekaligus mengembangkan kepemimpinan dan empati. Di bidang minat dan bakat, tersedia beragam ekstrakurikuler seperti basket, modern dance, futsal, voli dan bola tangan, bulu tangkis, Cooking Entrepreneurship, Aikido, Math Club, paduan suara, seni ansambel, serta ARC (AI, Robotic, & Coding). Melengkapi pengalaman belajar tersebut, SMA Katolik Santo Stanislaus menjalin kemitraan dengan perguruan tinggi dan institusi profesional melalui berbagai short course di bidang Bahasa Inggris, informatika, kewirausahaan, serta literasi dan edukasi keuangan bersama UKWMS, UBAYA, BEI, dan PT Sucor Sekuritas Indonesia, sehingga peserta didik memperoleh pengalaman belajar yang relevan, aplikatif, dan berorientasi pada kesiapan studi, karier, serta kehidupan di masa depan.",
            address: "Jl. Arief Rachman Hakim No. 40-44 Surabaya ",
            phone: "(031) 3892472",
            email: "smastanislaus_sby@yahoo.co.id",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smak_santo_stanislaus",
            facebook: "https://www.facebook.com/smaksantostanislaus",
            youtube: "https://www.youtube.com/@smaksantostanislaus8237",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9471.954688713911!2d112.7748732!3d-7.2620553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f98623aba303%3A0xce38735009a7ebd1!2sSekolah%20Menengah%20Atas%20Katolik%20Santo%20Stanislaus!5e1!3m2!1sid!2sid!4v1790956172771!5m2!1sid!2sid"
        },
        {
            id: 19,
            level: "SMA",
            name: "SMAS Katolik Santo Hendrikus",
            logo: "https://i.ibb.co.com/Q7ZXZSsj/SMA-Hendrikus.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMA Katolik Santo Hendrikus Surabaya merupakan sekolah Katolik yang telah hadir sejak 1983 dan berawal dari kepedulian terhadap pendidikan kaum muda, khususnya agar mereka memperoleh kesempatan melanjutkan pendidikan sekaligus bertumbuh dalam iman. Berlokasi di Jl. Arief Rahman Hakim No. 40–44, Klampis Ngasem, sekolah ini membawa semangat pendidikan yang memadukan kualitas akademik dengan pembentukan iman, karakter, dan kepedulian sosial. Berlandaskan nilai-nilai Kekatolikan serta teladan Santo Yohannes Gabriel dan Santo Henricus, SMA Katolik Santo Hendrikus hadir sebagai komunitas pembelajar yang ingin menjadi “rumah kedua” bagi siswa—tempat mereka mengenal, menerima, dan mengembangkan diri sebagai pribadi yang berharga.<br/><br/>Dengan visi sebagai sekolah Katolik yang berkualitas, dinamis, dan responsif, SMA Katolik Santo Hendrikus terus menghadirkan pendidikan yang relevan dengan perkembangan zaman tanpa kehilangan fondasi nilai dan spiritualitas. Semangat tersebut dirangkum dalam motto CARES: Compassionate, Assertive, Responsible, Efficacious, dan Sincere, yang menjadi landasan pembentukan pribadi beriman, berintegritas, percaya diri, efektif, serta tulus dalam berelasi dengan sesama. Melalui pembelajaran dan berbagai pengalaman pengembangan diri, sekolah membekali peserta didik dengan kompetensi unggul sekaligus kepekaan terhadap lingkungan, sehingga mereka tidak hanya siap menghadapi tuntutan masa depan, tetapi juga mampu hadir sebagai pribadi yang peduli dan memberikan kontribusi positif bagi masyarakat.",
            programs: "SMA Katolik Santo Hendrikus Surabaya menghadirkan berbagai program yang dirancang untuk mengembangkan peserta didik secara utuh, baik dalam iman, karakter, akademik, kreativitas, maupun kesiapan menghadapi masa depan. Pembinaan spiritualitas dan karakter diwujudkan melalui Misa Jumat Pertama, BKSN, Character Camp, dan Latihan Dasar Kepemimpinan Siswa (LDKS) yang menumbuhkan kedewasaan iman, kemandirian, kepemimpinan, serta kepedulian terhadap sesama. Pengalaman belajar diperluas melalui kegiatan Live In dan Field Trip yang mengajak siswa belajar langsung dari masyarakat dan lingkungan nyata. Sementara itu, Cultural Days, Art Day, Class Meeting, dan STUFEST menjadi ruang bagi siswa untuk mengembangkan kreativitas, kebersamaan, sportivitas, dan apresiasi terhadap keberagaman. Sekolah juga memperluas wawasan masa depan melalui kolaborasi dan kunjungan ke perguruan tinggi, serta menyediakan berbagai kegiatan ekstrakurikuler dan ruang pengembangan bakat yang mendukung siswa untuk berprestasi. Melalui rangkaian pengalaman tersebut, SMA Katolik Santo Hendrikus terus membangun pribadi yang berkarakter CARES, kompeten, kreatif, peduli, dan siap melangkah menuju masa depan.",
            address: "Jl. Arief Rachman Hakim No. 40-44 Surabaya ",
            phone: "085856813618",
            email: "mailbox@hendrikus.sch.id",
            website: "https://hendrikus.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sthendrikus_sch",
            facebook: "https://www.facebook.com/hendrikus.sch.id",
            youtube: "https://www.youtube.com/@HendrikusTV21",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4735.680258552427!2d112.77527997577701!3d-7.2902058716569655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbda8254130d%3A0x97e967740bcd217c!2sSMAK%20St.%20Hendrikus%20Surabaya!5e1!3m2!1sid!2sid!4v1790956786936!5m2!1sid!2sid"
        }
    ];

// ==========================================
    // 3. ELEMEN DOM & FUNGSI RENDER
    // ==========================================
    const navigation = document.getElementById("school-navigation");
    const content = document.getElementById("school-content-unit");

    // Fungsi Render Sidebar Menu (Otomatis Dikelompokkan)
    function renderSidebar() {
        let sidebarHTML = "";
        
        // Urutan baku jenjang yang ingin ditampilkan
        const levelOrder = ["KB", "TK", "SD", "SMP", "SMA", "SMK"];

        // Looping berdasarkan urutan jenjang
        levelOrder.forEach(level => {
            // Cari semua sekolah yang jenjangnya (level) cocok dengan urutan saat ini
            const schoolsInLevel = schools.filter(school => school.level === level);

            // JIKA ada sekolah di jenjang tersebut, maka render ke HTML
            if (schoolsInLevel.length > 0) {
                // 1. Cetak Judul Jenjang
                sidebarHTML += `<div class="nav-group-title">Jenjang ${level}</div>`;

                // 2. Cetak Tombol-tombol sekolah di bawah jenjang tersebut
                schoolsInLevel.forEach(school => {
                    sidebarHTML += `
                        <button data-id="${school.id}" title="${school.name}">
                            <img 
                                src="${school.logo}" 
                                alt="Logo ${school.name}" 
                                class="sidebar-logo skeleton img-lazy"
                                onload="this.classList.remove('skeleton'); this.classList.add('loaded')">
                            <span class="school-name">${school.name}</span>
                        </button>
                    `;
                });
            }
        });

        // Masukkan seluruh hasil render ke dalam DOM sidebar
        navigation.innerHTML = sidebarHTML;
    }

    // Fungsi Bantuan untuk Render Item List
    function createContactItem(icon, label, value, isLink = false) {
        if (!value || value === "") return ""; 
        
        let displayValue = value;
        if (isLink) {
            displayValue = value.replace(/^https?:\/\//, '').replace(/^www\./, '');
        }

        const contentVal = isLink 
            ? `<a href="${value}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">${displayValue}</a>` 
            : value;
            
        return `
            <div class="contact-item">
                <div class="contact-icon">${icon}</div>
                <div class="contact-text">
                    <div class="contact-label">${label}</div>
                    <div class="contact-value">${contentVal}</div>
                </div>
            </div>
        `;
    }

    let currentSlide = 0;
    
    // Fungsi Render Konten Sekolah
    function renderSchool(id) {
        const school = schools.find(item => item.id == id);
        if (!school) return;

        currentSlide = 0; // Reset slide ke gambar pertama setiap ganti sekolah

        const hasSocialMedia = school.instagram || school.facebook || school.youtube;

        // --- SCRIPT BARU UNTUK SLIDER ---
        let sliderHTML = "";
        if (school.images && school.images.length > 0) {
            // Tambahkan atribut onload pada tag img
            const imagesHTML = school.images.map((img, index) => `
                <img 
                    src="${img}" 
                    class="slide-image ${index === 0 ? 'active' : ''}"
                    onload="this.closest('.slider-container').classList.remove('skeleton')"
                >
            `).join('');

            // Tambahkan class 'skeleton' pada div slider-container
            sliderHTML = `
                <div class="slider-container skeleton">
                    <div class="slides-wrapper">
                        ${imagesHTML}
                    </div>
                    ${school.images.length > 1 ? `
                        <button class="slider-btn prev-slide">&#10094;</button>
                        <button class="slider-btn next-slide">&#10095;</button>
                    ` : ''}
                </div>
            `;
        }
        // --------------------------------

        content.innerHTML = `
            <article class="school-card">
                <div class="school-header">
                    <div class="school-identity">
                        <img 
                            src="${school.logo}" 
                            alt="Logo ${school.name}" 
                            class="header-school-logo skeleton img-lazy"
                            onload="this.classList.remove('skeleton'); this.classList.add('loaded')">
                        <div>
                            <span class="school-type">${school.level}</span>
                            <h2>${school.name}</h2>
                        </div>
                    </div>
                </div>

                <!-- MASUKKAN SLIDER DISINI MENGGANTIKAN <figure> -->
                ${sliderHTML}

                <div class="school-description">
                    <p>${school.description}</p>
                </div>
                <section class="school-programs">
                    <h3>Program Unggulan</h3>
                    <p>${school.programs}</p>  
                </section>                
                <section class="school-contact">
                    <h3>Kontak & Lokasi</h3>
                    <div class="contact-list">
                        ${createContactItem(icons.location, "Alamat", school.address)}
                        ${createContactItem(icons.phone, "Telepon", school.phone)}
                        ${createContactItem(icons.mail, "Email", school.email)}
                        ${createContactItem(icons.globe, "Website", school.website, true)}
                    </div>
                </section>

                ${hasSocialMedia ? `
                <section class="school-contact" style="margin-top: 40px;">
                    <h3>Sosial Media</h3>
                    <div class="contact-list">
                        ${createContactItem(icons.instagram, "Instagram", school.instagram, true)}
                        ${createContactItem(icons.facebook, "Facebook", school.facebook, true)}
                        ${createContactItem(icons.youtube, "YouTube", school.youtube, true)}
                    </div>
                </section>
                ` : ''}

                ${school.maps ? `
                    <section class="school-map skeleton" style="margin-top: 40px;">
                        <iframe 
                            loading="lazy" 
                            src="${school.maps}" 
                            allowfullscreen
                            onload="this.parentElement.classList.remove('skeleton'); this.classList.add('loaded');">
                        </iframe>
                    </section>` : ''}
            </article>
        `;
    }

    // ==========================================
    // 4. INTERAKSI & ANIMASI
    // ==========================================
    function activateButton(id) {
        document.querySelectorAll(".school-nav button").forEach(button => {
            button.classList.remove("active");
            if (Number(button.dataset.id) === id) {
                button.classList.add("active");
                if (window.innerWidth <= 992) {
                    button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }
        });
    }

    function changeSchool(id) {
        const currentActive = navigation.querySelector("button.active");
        if (currentActive && Number(currentActive.dataset.id) === id) return;

        activateButton(id);

        // Tambahkan baris ini untuk autoscroll ke bagian atas dari konten
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });

        content.animate([
            { opacity: 1, transform: "translateY(0)" },
            { opacity: 0, transform: "translateY(15px)" }
        ], {
            duration: 200,
            fill: "forwards",
            easing: "ease-in"
        }).onfinish = () => {
            renderSchool(id);
            content.animate([
                { opacity: 0, transform: "translateY(15px)" },
                { opacity: 1, transform: "translateY(0)" }
            ], {
                duration: 400,
                fill: "forwards",
                easing: "cubic-bezier(.22, 1, .36, 1)"
            });
        };
    }

    navigation.addEventListener("click", (e) => {
        const button = e.target.closest("button");
        if (!button) return;
        const id = Number(button.dataset.id);
        changeSchool(id);
    });

// Logika Navigasi Slider Foto
    content.addEventListener("click", (e) => {
        if (e.target.classList.contains("prev-slide") || e.target.classList.contains("next-slide")) {
            const slides = content.querySelectorAll(".slide-image");
            if (!slides.length) return;

            // 1. Hapus class 'active' dari gambar saat ini (memicu animasi pudar menghilang)
            slides[currentSlide].classList.remove("active");

            // 2. Hitung indeks gambar berikutnya
            if (e.target.classList.contains("prev-slide")) {
                currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
            } else {
                currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
            }

            // 3. Tambahkan class 'active' ke gambar baru (memicu animasi muncul & zoom)
            slides[currentSlide].classList.add("active");
        }
    });

    // ==========================================
    // 5. INISIALISASI PERTAMA
    // ==========================================
    if (schools.length > 0) {
        // Ambil ID dari sekolah urutan pertama yang ada di database JavaScript Anda
        const firstSchoolId = schools[0].id; 
        
        renderSidebar();
        
        // Panggil fungsi untuk memberikan class "active" dan merender konten
        activateButton(firstSchoolId); 
        renderSchool(firstSchoolId);
    }
});