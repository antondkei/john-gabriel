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
            name: "KB St. Petrus Tuban",
            logo: "https://asset.imavi.org/cms/1794839115177-vfjowz7spl7.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB TK Katolik Santo Petrus merupakan lembaga pendidikan anak usia dini di bawah naungan St. John Gabriel Foundation Perwakilan Bojonegoro-Tuban yang berlokasi di Jalan Panglima Sudirman No. 159, Tuban, satu kompleks dengan Gereja Katolik Santo Petrus dan SD Katolik Santo Petrus. Berdiri sejak 19 Januari 1967 atas prakarsa Romo P. Heuvelmans, CM bersama dukungan umat Katolik setempat, sekolah hadir sebagai wujud pelayanan pendidikan yang berlandaskan iman Katolik dan kasih. Dengan menerapkan kurikulum nasional yang disesuaikan dengan tahap perkembangan anak, KB TK Katolik Santo Petrus menghadirkan pembelajaran yang menyenangkan, aktif, dan berpusat pada anak untuk mengembangkan potensi serta membentuk karakter sejak dini.<br/><br/>Mengusung keteladanan Santo Petrus yang kokoh, rendah hati, dan setia, sekolah mengintegrasikan nilai-nilai Kristiani dalam setiap kegiatan pembelajaran dan pembiasaan. Penguatan iman diwujudkan melalui program Holy Morning, Katolisitas, Misa, serta perayaan hari besar Gereja dan nasional, didukung kegiatan kreatif dan aktivitas fisik yang seimbang. Dengan suasana sekolah yang hangat seperti keluarga, tenaga pendidik yang berdedikasi, serta kemitraan erat dengan orang tua, KB TK Katolik Santo Petrus berkomitmen membentuk anak-anak yang cerdas, ceria, beriman, berkarakter, dan peduli terhadap sesama maupun lingkungan.",
            programs: "Dalam mendukung tumbuh kembang anak secara optimal, KB TK Katolik Santo Petrus menghadirkan berbagai program unggulan yang memadukan pembentukan karakter, pengembangan keterampilan, dan kemitraan keluarga. Pembiasaan 5S (Senyum, Sapa, Salam, Sopan, Santun) serta 4 kata ajaib (Tolong, Maaf, Terima Kasih, dan Permisi) diterapkan untuk menanamkan nilai kesantunan dan kepedulian sejak dini. Selain itu, sekolah mengenalkan keterampilan masa depan melalui kegiatan Coding, Bahasa Mandarin, dan Bahasa Inggris. Pengalaman belajar juga diperkaya melalui Outing Class yang memberikan kesempatan anak bereksplorasi secara langsung, serta Family Gathering dan Parenting sebagai sarana mempererat kerja sama antara sekolah dan orang tua dalam mendampingi tumbuh kembang anak.",
            address: "Jl. Panglima Sudirman 159 Tuban",
            phone: "0822 4488 9438",
            whatsapp: "6282244889438",
            email: "santopetrustu@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtksantopetrustuban",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.5135767273426!2d112.06037001457697!3d-6.892308470842644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77bd5ea4afce19%3A0xe54a872386b5f53d!2sSD%20Katolik%20Santo%20Petrus!5e1!3m2!1sid!2sid!4v1794832157690!5m2!1sid!2sid"
        },
        {
            id: 2,
            level: "TK",
            name: "TK St. Petrus Tuban",
            logo: "https://asset.imavi.org/cms/1794839131300-jpqer1wi4t.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB TK Katolik Santo Petrus merupakan lembaga pendidikan anak usia dini di bawah naungan St. John Gabriel Foundation Perwakilan Bojonegoro-Tuban yang berlokasi di Jalan Panglima Sudirman No. 159, Tuban, satu kompleks dengan Gereja Katolik Santo Petrus dan SD Katolik Santo Petrus. Berdiri sejak 19 Januari 1967 atas prakarsa Romo P. Heuvelmans, CM bersama dukungan umat Katolik setempat, sekolah hadir sebagai wujud pelayanan pendidikan yang berlandaskan iman Katolik dan kasih. Dengan menerapkan kurikulum nasional yang disesuaikan dengan tahap perkembangan anak, KB TK Katolik Santo Petrus menghadirkan pembelajaran yang menyenangkan, aktif, dan berpusat pada anak untuk mengembangkan potensi serta membentuk karakter sejak dini.<br/><br/>Mengusung keteladanan Santo Petrus yang kokoh, rendah hati, dan setia, sekolah mengintegrasikan nilai-nilai Kristiani dalam setiap kegiatan pembelajaran dan pembiasaan. Penguatan iman diwujudkan melalui program Holy Morning, Katolisitas, Misa, serta perayaan hari besar Gereja dan nasional, didukung kegiatan kreatif dan aktivitas fisik yang seimbang. Dengan suasana sekolah yang hangat seperti keluarga, tenaga pendidik yang berdedikasi, serta kemitraan erat dengan orang tua, KB TK Katolik Santo Petrus berkomitmen membentuk anak-anak yang cerdas, ceria, beriman, berkarakter, dan peduli terhadap sesama maupun lingkungan.",
            programs: "Dalam mendukung tumbuh kembang anak secara optimal, KB TK Katolik Santo Petrus menghadirkan berbagai program unggulan yang memadukan pembentukan karakter, pengembangan keterampilan, dan kemitraan keluarga. Pembiasaan 5S (Senyum, Sapa, Salam, Sopan, Santun) serta 4 kata ajaib (Tolong, Maaf, Terima Kasih, dan Permisi) diterapkan untuk menanamkan nilai kesantunan dan kepedulian sejak dini. Selain itu, sekolah mengenalkan keterampilan masa depan melalui kegiatan Coding, Bahasa Mandarin, dan Bahasa Inggris. Pengalaman belajar juga diperkaya melalui Outing Class yang memberikan kesempatan anak bereksplorasi secara langsung, serta Family Gathering dan Parenting sebagai sarana mempererat kerja sama antara sekolah dan orang tua dalam mendampingi tumbuh kembang anak.",
            address: "Jl. Panglima Sudirman 159 Tuban",
            phone: "0822 4488 9438",
            whatsapp: "6282244889438",
            email: "santopetrustu@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtksantopetrustuban",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.5135767273426!2d112.06037001457697!3d-6.892308470842644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77bd5ea4afce19%3A0xe54a872386b5f53d!2sSD%20Katolik%20Santo%20Petrus!5e1!3m2!1sid!2sid!4v1794832157690!5m2!1sid!2sid"
        },
        {
            id: 3,
            level: "SD",
            name: "SD Katolik Santo Petrus",
            logo: "https://asset.imavi.org/cms/1794839017867-kq6pvzegn6.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Katolik Santo Petrus Tuban merupakan salah satu karya pendidikan Katolik yang tumbuh seiring perkembangan kehidupan umat Katolik di Kabupaten Tuban. Berawal dari kebutuhan akan pendidikan yang berlandaskan nilai-nilai Kristiani, lembaga pendidikan TK dan SD dirintis pada 19 Januari 1967 di kompleks Gereja Katolik Santo Petrus, Jalan Panglima Sudirman No. 159 Tuban. Kehadirannya menjadi wujud nyata pelayanan Gereja dalam mendampingi generasi muda melalui pendidikan yang mengembangkan aspek intelektual, moral, sosial, dan spiritual secara utuh.<br/><br/>Dalam perkembangannya, SD Katolik Santo Petrus Tuban terus berkomitmen meningkatkan mutu pendidikan melalui pengembangan kompetensi akademik, pembentukan karakter, penguatan nilai-nilai Kristiani, serta pengembangan bakat dan potensi peserta didik. Dengan menjunjung tinggi nilai kasih, kedisiplinan, tanggung jawab, kejujuran, dan kepedulian terhadap sesama, sekolah berupaya menciptakan lingkungan belajar yang bermutu dan berkarakter. Didukung oleh St. John Gabriel Foundation, tenaga pendidik, orang tua, dan seluruh warga sekolah, SD Katolik Santo Petrus Tuban berkomitmen membentuk generasi yang berpengetahuan, terampil, beriman, dan peduli terhadap kehidupan bermasyarakat.",
            programs: "Dalam mendukung perkembangan peserta didik secara utuh, SD Katolik Santo Petrus Tuban menyelenggarakan berbagai program unggulan yang memadukan pembentukan karakter, penguatan iman, pengembangan keterampilan, dan kemitraan dengan keluarga. Program tersebut meliputi Character Building, kegiatan retret dan pembinaan iman (Retreat and Faith Formation Activities), serta School Camping untuk menumbuhkan kemandirian, kedisiplinan, dan kebersamaan. Sekolah juga menghadirkan program Parenting dan kegiatan Outbound bersama komite sekolah sebagai upaya mempererat kolaborasi antara sekolah dan orang tua. Selain itu, pembelajaran Coding diperkenalkan untuk mengembangkan kemampuan berpikir logis dan literasi digital, sementara Remedial Teaching disediakan untuk membantu peserta didik mengatasi kesulitan belajar sesuai kebutuhan masing-masing. Melalui program-program tersebut, sekolah berkomitmen membentuk pribadi yang beriman, berkarakter, mandiri, dan kompeten.",
            address: "Jl. Panglima Sudirman 159 Tuban",
            phone: "0823-3385-7445",
            whatsapp: "6282333857445",
            email: "sdksantopetrustuban@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkst.petrustuban",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.5135767273426!2d112.06037001457697!3d-6.892308470842644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77bd5ea4afce19%3A0xe54a872386b5f53d!2sSD%20Katolik%20Santo%20Petrus!5e1!3m2!1sid!2sid!4v1794832157690!5m2!1sid!2sid"
        },
        {
            id: 4,
            level: "SMP",
            name: "SMP Katolik Ronggolawe",
            logo: "https://asset.imavi.org/cms/1794839059800-rb9af5rl47d.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMP Katolik Ronggolawe Tuban merupakan lembaga pendidikan Katolik yang mulai dirintis pada tahun 1959 dan telah menghasilkan lulusan sejak tahun 1961. Perintisan sekolah ini merupakan bagian dari karya pelayanan Gereja Katolik di Tuban, khususnya melalui prakarsa Romo Josephus Antonius Maria Adam van Mensvoort, CM. Sejak awal berdirinya, sekolah tidak hanya menjadi tempat pendidikan, tetapi juga memiliki keterkaitan erat dengan kehidupan menggereja, bahkan gedung sekolah pernah dimanfaatkan sebagai tempat ibadah atau kapel umat Katolik. Saat ini, SMP Katolik Ronggolawe berada di bawah naungan St. John Gabriel Foundation, berlokasi di Jalan K.H. A. Dahlan No. 04, Tuban.<br/><br/>Dalam penyelenggaraan pendidikan, SMP Katolik Ronggolawe mengedepankan pembentukan manusia seutuhnya melalui keseimbangan aspek intelektual, emosional, dan spiritual. Sebagai sekolah yang terbuka terhadap keberagaman, sekolah menanamkan nilai kedisiplinan, toleransi, iman, dan integritas dalam kehidupan sehari-hari. Melalui semangat tersebut, SMP Katolik Ronggolawe berkomitmen membentuk generasi yang unggul dalam pengetahuan, beriman, berkarakter, serta mampu hidup berdampingan secara damai dan menghargai sesama.",
            programs: "Dalam mendukung pembentukan pribadi peserta didik secara utuh, SMP Katolik Ronggolawe Tuban mengembangkan berbagai program unggulan yang memadukan penguatan karakter, spiritualitas, dan pengembangan potensi diri. Program tersebut meliputi Character Building, Retreat, dan Rekoleksi untuk menanamkan nilai-nilai iman serta membentuk karakter positif, disertai Teenager Mentoring sebagai wadah pendampingan peserta didik dalam menghadapi perkembangan dan tantangan masa remaja. Selain itu, sekolah menghadirkan pembelajaran Coding untuk mengembangkan literasi digital dan kemampuan berpikir logis, Outdoor Learning untuk memperkaya pengalaman belajar melalui lingkungan sekitar, serta Pentas Seni Siswa sebagai sarana mengekspresikan kreativitas, bakat, dan kepercayaan diri. Melalui berbagai program ini, sekolah berupaya membentuk generasi yang beriman, berkarakter, kreatif, dan adaptif terhadap perkembangan zaman.",
            address: "Jl. Kh. Ahmad Dahlan No. 04 Tuban",
            phone: "082332773100",
            whatsapp: "6282332773100",
            email: "smpkatolikronggolawe@gmail.com",
            website: "https://smpkronggolawe.sch.id/",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpkatolikronggolawe",
            facebook: "",
            youtube: "https://www.youtube.com/@smpkronggolawetuban4454",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4744.898925178746!2d112.05927129999999!3d-6.8954954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77bd576177e43d%3A0xd0293de27480ef3b!2sSMPK%20Ronggolawe!5e1!3m2!1sid!2sid!4v1794834665250!5m2!1sid!2sid"
        },
        {
            id: 5,
            level: "SMP",
            name: "SMP Katolik Santo Tarsisius Bojonegoro",
            logo: "https://asset.imavi.org/cms/1794839046111-mg333qapr7p.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMP Katolik Santo Tarsisius Bojonegoro merupakan lembaga pendidikan Katolik yang didirikan pada tahun 1952 atas prakarsa Bapak Thipto Soedarjo bersama rekan-rekannya, ketika wilayah Bojonegoro masih berstatus pra-stasi dalam struktur Gereja Katolik. Pada awal berdirinya, kegiatan pembelajaran menggunakan gedung pinjaman dan sempat berpindah lokasi, mulai dari Jalan Kartini, Jalan Teuku Umar, hingga Jalan Imam Bonjol. Atas prakarsa Romo Heuvelmans dari Cepu, pada tahun 1955 dibangun gedung sekolah permanen di Jalan Untung Suropati No. 55, Kelurahan Sumbang, Bojonegoro, yang hingga kini menjadi lokasi sekolah. Berada di bawah naungan St. John Gabriel Foundation dan menjadi bagian dari karya pendidikan Keuskupan Surabaya, SMP Katolik Santo Tarsisius terus berkembang dengan dukungan yayasan, Gereja, alumni, orang tua, dan masyarakat.<br/><br/>Dalam penyelenggaraan pendidikan, SMP Katolik Santo Tarsisius berkomitmen memadukan pencapaian akademik dengan pembentukan karakter berlandaskan nilai-nilai Kristiani dan Pancasila. Hal ini tercermin dalam visinya untuk mewujudkan sekolah yang unggul dalam iman, cerdas, terampil, mandiri, dan berwawasan global. Dengan rekam jejak kelulusan yang konsisten serta prestasi akademik yang baik, sekolah terus berupaya meningkatkan mutu pendidikan dan mengembangkan potensi peserta didik agar menjadi pribadi yang beriman, berintegritas, mandiri, dan siap menghadapi tantangan masa depan.",
            programs: "Dalam mendukung pembentukan karakter dan pengembangan potensi peserta didik, SMP Katolik Santo Tarsisius Bojonegoro menyelenggarakan berbagai program unggulan, meliputi Retreat untuk memperkuat iman dan spiritualitas, Live In untuk menumbuhkan kepedulian sosial serta kemampuan beradaptasi dengan kehidupan masyarakat, dan Outing Class untuk memperkaya pengalaman belajar di luar lingkungan sekolah. Selain itu, program Character Building dihadirkan untuk membentuk pribadi yang disiplin, mandiri, dan bertanggung jawab, sedangkan Education Expo menjadi wadah bagi peserta didik untuk mengenal berbagai pilihan pendidikan lanjutan serta mempersiapkan perencanaan masa depan. Melalui program-program tersebut, sekolah berupaya membentuk generasi yang beriman, berkarakter, berwawasan luas, dan siap menghadapi tantangan zaman.",
            address: "Jl. Untung Suropati 55 Bojonegoro",
            phone: "082229665897",
            whatsapp: "6282229665897",
            email: "smpksantotarsisius@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpksantotarsisius",
            facebook: "",
            youtube: "https://www.youtube.com/@smpkatoliksantotarsisiusbo1717",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.213957563278!2d111.8787777!3d-7.158595799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7781f2b790d133%3A0x8b6ecd1cf4a72282!2sSMPK%20Santo%20Tarsisius!5e1!3m2!1sid!2sid!4v1794834928949!5m2!1sid!2sid"
        },
        {
            id: 6,
            level: "SMA",
            name: "SMAS K Ign Slamet Riyadi",
            logo: "https://asset.imavi.org/cms/1794839030014-k2mwkbwlxu.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMA Katolik Ign. Slamet Riyadi Bojonegoro didirikan pada tahun 1969 untuk memenuhi kebutuhan masyarakat akan pendidikan jenjang menengah atas yang saat itu masih terbatas. Sekolah ini dipelopori oleh Bapak L.M. Tjipto Soedarjo dengan dr. Adi Handoyo sebagai kepala sekolah pertama. Setelah sempat mengalami beberapa kali pergantian kepemimpinan, sekolah ini dibubarkan pada tahun 1974. Namun, melihat tingginya minat masyarakat terhadap pendidikan Katolik, upaya menghidupkan kembali sekolah mulai dirintis pada tahun 1978 dan secara resmi dibuka kembali pada tahun 1979 di bawah naungan Yayasan Sanjaya. Pada tahun 1980, pengelolaan sekolah beralih ke St. John Gabriel Foundation Surabaya, hingga akhirnya pada tahun 1985 berhasil memiliki gedung sendiri yang berlokasi di Jalan Untung Suropati No. 61, Bojonegoro.<br/><br/>Dalam perjalanan panjangnya, SMA Katolik Ign. Slamet Riyadi telah mengalami beberapa kali pergantian kepemimpinan dan terus berupaya mempertahankan eksistensinya sebagai lembaga pendidikan Katolik di Bojonegoro. Meskipun jumlah peserta didik mengalami penurunan dari tahun ke tahun, sekolah tetap menunjukkan komitmen dalam meningkatkan kualitas pendidikan. Berbagai prestasi akademik maupun nonakademik yang diraih peserta didik menjadi bukti semangat sekolah dalam mengembangkan potensi, kemampuan, dan karakter generasi muda.",
            programs: "Dalam mendukung pembentukan karakter dan pengembangan potensi peserta didik, SMA Katolik Ign. Slamet Riyadi Bojonegoro menyelenggarakan berbagai program unggulan, meliputi Retret untuk memperkuat iman dan spiritualitas, CBS (Character Building SMAK) dan Character Camp untuk menanamkan nilai kedisiplinan, kemandirian, tanggung jawab, serta kepedulian sosial, dan LDKS (Latihan Dasar Kepemimpinan Siswa) untuk mengembangkan jiwa kepemimpinan dan kemampuan berorganisasi. Selain itu, sekolah menghadirkan Sandikala Seni dan Panggung Harmoni sebagai wadah bagi peserta didik untuk mengekspresikan kreativitas, mengembangkan bakat seni, serta membangun rasa percaya diri dan apresiasi terhadap keberagaman. Melalui berbagai kegiatan tersebut, sekolah berupaya membentuk generasi yang beriman, berkarakter, kreatif, dan mampu mengembangkan potensi dirinya secara optimal.",
            address: "Jl. Untung Suropati No. 61 Bojonegoro",
            phone: "082229665898",
            whatsapp: "6282229665898",
            email: "smakignsr@gmail.com",
            website: "https://smakatolikbojonegoro.sch.id/",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smak.bojonegoro",
            facebook: "",
            youtube: "https://www.youtube.com/@smakignslametriyadibojoneg6037",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.216063596093!2d111.8783466!3d-7.1583932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7781f2f269e7bf%3A0x81a3c6cf1edc9a50!2sSMA%20Katolik%20Ignatius%20Slamet%20Riyadi!5e1!3m2!1sid!2sid!4v1794835444056!5m2!1sid!2sid"
        },    
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

        currentSlide = 0; 
        const hasSocialMedia = school.instagram || school.facebook || school.youtube;

        // --- SCRIPT BARU UNTUK SLIDER ---
        // (Biarkan script slider sama seperti kode asli Anda)
        let sliderHTML = "";
        if (school.images && school.images.length > 0) {
            const imagesHTML = school.images.map((img, index) => `
                <img 
                    src="${img}" 
                    class="slide-image ${index === 0 ? 'active' : ''}"
                    onload="this.closest('.slider-container').classList.remove('skeleton')"
                >
            `).join('');

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

        // ==========================================
        // TEMPLATE PESAN SPMB & LINK WHATSAPP
        // ==========================================
        const waNumber = school.whatsapp || "6280000000000"; // Fallback jika nomor WA belum diisi
        const waTemplateMessage = encodeURIComponent(`Halo Admin ${school.name}, saya ingin menanyakan informasi mengenai pendaftaran siswa baru (SPMB). Apakah ada brosur atau informasi persyaratannya? Terima kasih.`);
        const waLink = `https://wa.me/${waNumber}?text=${waTemplateMessage}`;

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
                    
                    <!-- TOMBOL HIGHLIGHT SPMB -->
                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-highlight wa-btn" title="Tanya Informasi SPMB">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                        </svg>
                        TANYA INFO SPMB
                    </a>
                </div>

                <!-- MASUKKAN SLIDER DISINI -->
                ${sliderHTML}

                <!-- Sisa kode description, program, map sama seperti sebelumnya... -->
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

            // --- PERBAIKAN SCROLL DENGAN OFFSET ---
            // Hitung jarak elemen dari atas layar, dikurangi jarak navbar (misal 110px)
            const headerOffset = 110; // Sesuaikan angka ini dengan tinggi navbar website Anda
            const elementPosition = content.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            // --------------------------------------

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