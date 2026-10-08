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
            level: "TK",
            name: "TK St. Yusup Tropodo",
            logo: "https://i.ibb.co.com/F4NvH3Fn/SMP-Tropodo.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Brantas Wisma Tropodo Waru-Sidoarjo",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: ""
        },
        {
            id: 2,
            level: "TK",
            name: "TK St. Theresia Krian",
            logo: "https://i.ibb.co.com/BVdKfkCQ/TK-Theresia-Krian.jpg",
            images: ["https://i.ibb.co.com/bgQ8vqBF/Foto-Sekolah-3-TKKrian.webp","https://i.ibb.co.com/CpdrzyK6/Foto-Sekolah-2-TKKrian.webp","https://i.ibb.co.com/5XkT39ns/Foto-Sekolah-1-TKKrian.webp"],
            description: "TK Katolik Santa Theresia Krian merupakan lembaga pendidikan anak usia dini yang berdiri pada tahun 1982 di Jalan Ki Hajar Dewantara No. 35, Krian. Hadir untuk menjawab kebutuhan masyarakat akan pendidikan anak usia dini yang berkualitas, sekolah berkomitmen memberikan layanan pendidikan yang holistik dengan memperhatikan seluruh aspek perkembangan anak. Pada tahun 2026, sekolah melakukan transformasi melalui penerapan pendekatan Pembelajaran Mendalam sebagai fondasi dalam meningkatkan mutu pembelajaran, dengan menempatkan anak sebagai pembelajar aktif dalam suasana yang berkesadaran, bermakna, dan menggembirakan.<br/><br/>Komitmen terhadap pembelajaran yang berkualitas didukung oleh tenaga pendidik yang memiliki latar belakang pendidikan sesuai bidangnya, terdiri atas kepala sekolah dan guru-guru berpendidikan S1-PAUD serta tenaga administrasi. Pendekatan Pembelajaran Mendalam dikembangkan selaras dengan karakteristik anak usia dini yang memiliki rasa ingin tahu tinggi, mampu menghubungkan pengalaman baru dengan pengalaman sebelumnya, serta memiliki antusiasme alamiah dalam belajar. Melalui lingkungan belajar yang mendukung dan pendampingan yang profesional, TK Katolik Santa Theresia berupaya mengoptimalkan potensi anak agar tumbuh dan berkembang secara utuh.",
            programs: "Sejalan dengan komitmen TK Katolik Santa Theresia dalam memberikan pendidikan yang holistik dan membentuk anak secara utuh, program Katolisitas menjadi bagian penting dalam menanamkan nilai iman dan karakter Katolik sejak dini. Melalui Pembiasaan Pagi, anak diajak berdoa sebelum memulai kegiatan dan mendengarkan Sabda Tuhan sebagai bagian dari pembentukan suasana belajar yang berkesadaran dan bermakna. Setiap hari Jumat, anak mengikuti pendalaman iman melalui cerita Santo dan Santa serta berbagai kegiatan dalam rangkaian kehidupan menggereja, seperti Aksi Puasa Pembangunan (APP), Masa Adven, Bulan Kitab Suci Nasional (BKSN), dan Pendalaman Bulan Maria. Melalui kegiatan tersebut, anak didampingi untuk mengenal, menghayati, dan menerapkan nilai kasih, iman, kepedulian, serta kebiasaan hidup baik dalam kehidupan sehari-hari.",
            address: "Jl. Ki Hajar Dewantara No. 35 Krian-Sidoarjo",
            phone: "085732333134",
            email: "tkktheresiakrian@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/kbtkk_santatheresiakrian",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.485290473588!2d112.57804309999999!3d-7.411417699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7809a6a9fa6e8b%3A0xdb6dc87508d861bd!2sTK%20Katolik%20Santa%20Theresia%22!5e0!3m2!1sid!2sid!4v1789741097920!5m2!1sid!2sid"
        },
        {
            id: 3,
            level: "TK",
            name: "TK St. Maria Sidoarjo",
            logo: "https://i.ibb.co.com/Tqn0v8dc/KB-TK-St-Maria.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Monginsidi No. 31 Sidoarjo",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: ""
        },
        {
            id: 4,
            level: "SD",
            name: "SDSK Yustinus De Yacobis",
            logo: "https://i.ibb.co.com/nsydfJXL/SD-Yudeya-Krian.jpg",
            images: ["https://i.ibb.co.com/gMV6BYf7/Foto-Sekolah-1-SDYudeya.webp","https://i.ibb.co.com/M5JHjK2G/Foto-Sekolah-2-SDYudeya.webp","https://i.ibb.co.com/mFhGn3Hc/Foto-Sekolah-3-SDYudeya.webp"],
            description: "SD Katolik Santo Yustinus de Yacobis Krian merupakan satuan pendidikan dasar swasta yang berlokasi di Jalan Ki Hajar Dewantara No. 35, Krian, Kabupaten Sidoarjo, di bawah naungan St. John Gabriel Foundation. Sekolah ini dirintis pada tahun 1974 atas prakarsa Bapak A.Y. Budiman bersama Romo W.P. Janssen, CM, untuk menjawab kebutuhan masyarakat akan pendidikan dasar yang tidak hanya mengembangkan kemampuan akademik, tetapi juga membentuk karakter dan kepribadian peserta didik. Sebagai sekolah berciri khas Katolik, pendidikan mengintegrasikan pengetahuan, keterampilan, karakter, dan nilai-nilai iman melalui pembelajaran, pembiasaan, serta keteladanan.<br/><br/>Dalam perkembangannya, SD Katolik Santo Yustinus de Yacobis Krian terus berkomitmen memberikan pendidikan yang aktif, bermakna, kontekstual, dan sesuai dengan tahap perkembangan peserta didik. Berbagai kegiatan kokurikuler dan ekstrakurikuler dikembangkan untuk mengoptimalkan bakat dan minat siswa, sekaligus menumbuhkan kemampuan berpikir kritis, kreativitas, komunikasi, kerja sama, kemandirian, dan tanggung jawab. Dengan menciptakan lingkungan yang aman, inklusif, nyaman, dan kondusif, sekolah mendampingi peserta didik agar tumbuh menjadi pribadi yang beriman, berkarakter, kompeten, peduli terhadap sesama dan lingkungan, serta siap menghadapi tantangan kehidupan.",
            programs: "Sejalan dengan komitmen SD Katolik Santo Yustinus de Yacobis Krian dalam mengembangkan peserta didik secara utuh, sekolah menyediakan berbagai program yang memadukan penguatan iman, karakter, kompetensi, serta pengembangan bakat dan minat. Pendidikan Karakter dan Iman Katolik diwujudkan melalui pembiasaan nilai-nilai Kristiani, pendalaman Kitab Suci, ibadat, misa, retret, Adven, APP, dan kegiatan Paskah. Pembelajaran inovatif dikembangkan untuk mendukung potensi akademik, sosial, dan spiritual, dilengkapi dengan program Bahasa Inggris serta berbagai kegiatan seni dan budaya seperti seni lukis, gamelan, teater, dan tari tradisional. Potensi olahraga dikembangkan melalui futsal, bulutangkis, dan karate, sementara musik dan vokal menjadi ruang bagi siswa untuk berekspresi. Pramuka dan Pesta Siaga turut membentuk kemandirian, kedisiplinan, kerja sama, tanggung jawab, dan kepemimpinan. Dengan 11 kegiatan ekstrakurikuler dan dukungan pengembangan prestasi melalui berbagai kompetisi, termasuk FLS3N, sekolah memberikan ruang yang luas bagi setiap peserta didik untuk menemukan, mengembangkan, dan mengoptimalkan potensi dirinya.",
            address: "Jl. Ki Hajar Dewantara No. 35 Krian-Sidoarjo",
            phone: "(031)99890187",
            email: "sdkyudeya@gmail.com",
            website: "https://sdkyudeyakrian.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkyudeyakrian",
            facebook: "https://www.facebook.com/profile.php?id=61557951955499",
            youtube: "https://www.youtube.com/@sdkyudeyakrian7079",
            maps: "https://www.google.com/maps/embed?pb=!4v1789981222002!6m8!1m7!1sOaZkalrDbPh29jl9JAS6cg!2m2!1d-7.412843069048912!2d112.5780352793618!3f95.40995286625792!4f-0.5179445379093863!5f0.6007809733295956"
        },
        {
            id: 5,
            level: "SD",
            name: "SD Katolik Untung Suropati 1",
            logo: "https://i.ibb.co.com/N6CjwwNN/SD-Unsur-1.jpg",
            images: ["https://i.ibb.co.com/VYKvQ5V2/Foto-Sekolah-1-SDUnsur1-Sda.webp","https://i.ibb.co.com/k2KzPrZx/Foto-Sekolah-2-SDUnsur1-Sda.webp","https://i.ibb.co.com/YFN4Y8B5/Foto-Sekolah-3-SDUnsur1-Sda.webp"],
            description: "SD Katolik Untung Suropati 1 Sidoarjo merupakan lembaga pendidikan Katolik di bawah naungan Yayasan Yohannes Gabriel Perwakilan Sidoarjo yang didirikan pada 1 Januari 1973. Berawal dari kebutuhan warga Katolik akan pendidikan berlandaskan iman, sekolah telah berpindah lokasi hingga menetap di Jl. Monginsidi No. 31, Sidoklumpuk, Sidoarjo sejak 2005 dan kini berakreditasi A. Dengan visi membentuk pribadi berkarakter, cerdas, dan berintegritas, sekolah mengembangkan pendidikan berbasis kasih melalui pembelajaran yang kreatif dan inovatif, penguatan iman melalui perayaan Ekaristi, serta pengembangan potensi peserta didik melalui beragam kegiatan ekstrakurikuler. Kemampuan bahasa juga diperkuat melalui Bahasa Mandarin, Inggris, dan Jawa, termasuk pembiasaan penggunaan bahasa dalam kegiatan sekolah dan doa Angelus.<br/><br/>Dalam membentuk generasi yang “HEBAT, CERDAS, dan BERINTEGRITAS”, SD Katolik Untung Suropati 1 menerapkan budaya 5S (Senyum, Salam, Sapa, Sopan, Santun) dan 7 Kebiasaan Anak Indonesia Hebat melalui keteladanan, pembiasaan, pendampingan, dan kolaborasi dengan orang tua. Nilai disiplin, kemandirian, kesehatan, kepedulian, iman, dan integritas ditanamkan dalam kehidupan sehari-hari agar menjadi karakter yang melekat pada peserta didik. Sekolah juga terus berupaya mengembangkan kepedulian terhadap lingkungan dengan mengoptimalkan ruang terbuka hijau yang terbatas, sehingga anak belajar mencintai, menjaga, dan menghargai alam sebagai bagian dari perwujudan kasih terhadap sesama dan seluruh ciptaan.",
            programs: "Sebagai wujud pendidikan yang berlandaskan kasih dan pembentukan karakter, SD Katolik Untung Suropati 1 Sidoarjo menghadirkan berbagai program unggulan yang mengintegrasikan iman, nasionalisme, kesehatan, literasi, dan pengembangan potensi peserta didik. Program tersebut meliputi pembiasaan 5S, Bina Iman Legio Maria, ibadah bulanan, saat teduh, serta doa dalam tiga bahasa, disertai pembiasaan nasionalisme melalui upacara dan lagu Indonesia Raya. Sekolah juga mendukung pola hidup sehat melalui senam dan makanan bergizi, mengembangkan kemampuan bahasa melalui Bahasa Inggris dan Mandarin, serta memperkuat literasi, karakter, dan kepedulian sosial melalui Gerakan Literasi, penyuluhan, bakti sosial, Sinau Wisata, Guru Tamu, dan Kedai Unsur sebagai ruang berbagi pengetahuan. Keseluruhan program dirancang untuk membentuk peserta didik yang beriman, sehat, cerdas, berkarakter, peduli, dan berintegritas.",
            address: "Jl. Monginsidi No. 31 Sidoarjo",
            phone: "031-8961636",
            email: "grade5unsur1@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkunsur1",
            facebook: "https://www.facebook.com/sdkuntung.suropatisatu",
            youtube: "https://www.youtube.com/@sdkatolikuntungsuropati1",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.7927930137553!2d112.7242002!3d-7.449780399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6c82ccfb2d5%3A0xfbb054d136aa39d0!2sJl.%20Monginsidi%20No.31%2C%20Sidoklumpuk%2C%20Sidokumpul%2C%20Kec.%20Sidoarjo%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061218!5e1!3m2!1sid!2sid!4v1788416185157!5m2!1sid!2sid"
        },
        {
            id: 6,
            level: "SD",
            name: "SDK Untung Suropati II",
            logo: "https://i.ibb.co.com/NnS0bCMd/SD-Unsur-II.jpg",
            images: ["https://i.ibb.co.com/PHxyx2f/Foto-Sekolah-1-SDUnsur2-Sda.webp","https://i.ibb.co.com/VfjYDmv/Foto-Sekolah-2-SDUnsur2-Sda.webp","https://i.ibb.co.com/FNR0cNY/Foto-Sekolah-3-SDUnsur2-Sda.webp"],
            description: "SDK Untung Suropati II berdiri pada 29 September 1997 sebagai pemekaran dari SDK Untung Suropati I dan berlokasi di Jl. Tennis III, Gajah Magersari, Sidoarjo. Pada awal berdirinya, sekolah berada dalam satu kompleks dengan TKK Santa Maria dan SMPK Untung Suropati, sehingga menjadi bagian dari pusat pendidikan yang membangun suasana kekeluargaan dan kebersamaan. Sejak perkembangannya, SDK Untung Suropati II terus tumbuh sebagai lembaga pendidikan yang mengedepankan semangat pelayanan dan pengabdian.<br/><br/>Selama lebih dari dua dekade, SDK Untung Suropati II dikenal dengan lingkungan belajar yang inklusif, disiplin, dan penuh kebersamaan, dengan fokus membentuk peserta didik yang berintegritas, kreatif, penuh kasih, cerdas, dan santun. Pembelajaran diperkaya melalui berbagai kegiatan pengembangan minat dan bakat di bidang seni, olahraga, kerohanian, serta pembelajaran renang. Didukung tenaga pendidik yang profesional dan berdedikasi, sekolah terus berkomitmen menjadi ruang tumbuh yang menyeluruh untuk membentuk generasi yang cerdas, beriman, berkarakter, dan rendah hati.",
            programs: "Sebagai bagian dari komitmen membentuk peserta didik yang cerdas, beriman, berkarakter, dan mampu mengembangkan potensi diri, SDK Untung Suropati II menghadirkan berbagai program unggulan melalui Pramuka Garuda, penguatan akademik bidang Matematika, serta pengembangan bakat nonakademik dalam Seni Tari, Karate, dan Futsal. Pembelajaran renang juga menjadi salah satu kekhasan sekolah yang mendukung perkembangan keterampilan, kesehatan, kemandirian, dan kepercayaan diri peserta didik secara menyeluruh.",
            address: "Jl. Tenis III Gajah, Magersari, Sidoarjo",
            phone: "031-8953325",
            email: "sdkuntungsurapati2sda@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkuntungsuropati2",
            facebook: "",
            youtube: "https://www.youtube.com/@sdkuntungsuropatiiisidoarj2825",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12507.401175441255!2d112.7040277!3d-7.4417182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1497de0c127%3A0x349183cbf7cea0c!2sSMP%20Katolik%20Untung%20Suropati%20Sidoarjo!5e1!3m2!1sid!2sid!4v1788417662792!5m2!1sid!2sid"
        },
        {
            id: 7,
            level: "SD",
            name: "SD Katolik Santo Yusup",
            logo: "https://i.ibb.co.com/mV7tgKhF/SD-Tropodo.jpg",
            images: ["https://i.ibb.co.com/NgDJgv9f/Foto-Sekolah-1-SDSt-Yusup-Trp.webp","https://i.ibb.co.com/FLWzhfV3/Foto-Sekolah-2-SDSt-Yusup-Trp.webp","https://i.ibb.co.com/2BjdnbC/Foto-Sekolah-3-SDSt-Yusup-Trp.webp"],
            description: "SDK Santo Yusup Tropodo merupakan lembaga pendidikan dasar Katolik yang berkomitmen memberikan pendidikan berkualitas berlandaskan nilai-nilai Pancasila, ajaran Kristiani, kasih, dan persaudaraan. Pembelajaran berpusat pada peserta didik dengan suasana yang aktif, kreatif, menyenangkan, dan bermakna, sekaligus mengembangkan kemampuan literasi, numerasi, berpikir kritis, kreativitas, kerja sama, dan potensi peserta didik secara optimal.<br/><br/>Sebagai sekolah Katolik, SDK Santo Yusup Tropodo menghidupi nilai kasih, kejujuran, disiplin, tanggung jawab, kepedulian, pelayanan, dan persaudaraan dalam keseharian, serta menanamkan nasionalisme, kepedulian lingkungan, dan penghargaan terhadap keberagaman. Didukung kolaborasi antara sekolah, orang tua, yayasan, gereja, dan masyarakat, sekolah berkomitmen mewujudkan semangat “Mendidik dengan Kasih, Bertumbuh dalam Karakter, dan Berprestasi” untuk membentuk pribadi yang beriman, cerdas, mandiri, bertanggung jawab, dan bermanfaat bagi sesama.",
            programs: "",
            address: "Jl. Brantas Wisma Tropodo Waru-Sidoarjo",
            phone: "031-8661746",
            email: "santoyusuptropodosdk@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdksanyutropodo",
            facebook: "https://www.facebook.com/sanyu.tropodo.3",
            youtube: "https://www.youtube.com/@sdksantoyusuptropodo8008",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.465307826435!2d112.75573120000001!3d-7.354937400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e519a298e593%3A0xb107d5cd074b49ed!2sSDK%20Santo%20Yusup%20Tropodo!5e1!3m2!1sid!2sid!4v1788417035945!5m2!1sid!2sid"
        },
        {
            id: 8,
            level: "SMP",
            name: "SMP Katolik Untung Suropati Sidoarjo",
            logo: "https://i.ibb.co.com/mCycH922/SMP-Untung-Suropati.jpg",
            images: ["https://i.ibb.co.com/d4xVf66K/Foto-Sekolah-1-SMPUnsur-Sda.webp","https://i.ibb.co.com/J0wWS3R/Foto-Sekolah-2-SMPUnsur-Sda.webp","https://i.ibb.co.com/W439tMds/Foto-Sekolah-3-SMPUnsur-Sda.webp"],
            description: "SMP Katolik Untung Suropati Sidoarjo merupakan lembaga pendidikan Katolik yang telah melayani masyarakat Sidoarjo sejak 1960 dan berada di bawah naungan Yayasan Yohannes Gabriel Perwakilan Sidoarjo. Berdasarkan profil resmi, sekolah berdiri pada 1 Agustus 1960, berawal dari gedung yang dibangun pada akhir 1959 dengan fungsi sebagai kapel sekaligus sekolah. Setelah diresmikan oleh Mgr. J. Klooster, CM, Uskup Surabaya, gedung tersebut mulai digunakan sebagai tempat kegiatan Gereja dan Sekolah Menengah Pertama Katolik dengan nama SMPK Untung Suropati.<br/><br/>Dalam perkembangannya, SMPK Untung Suropati terus bertumbuh dan melakukan pembenahan sebagai lembaga pendidikan yang semakin mandiri. Kekhasan sekolah terletak pada perpaduan antara pengembangan kecerdasan, pembentukan karakter, dan penghayatan nilai-nilai Kristiani. Melalui pendidikan yang berlandaskan integritas, kasih, tanggung jawab, dan kesantunan, sekolah mendampingi peserta didik untuk mengembangkan potensi dan bakatnya, berprestasi secara akademik, serta tumbuh menjadi pribadi yang peduli terhadap sesama dan siap menghadapi tantangan kehidupan.",
            programs: "Sebagai bagian dari komitmen membentuk peserta didik yang cerdas, berkarakter, dan berlandaskan nilai-nilai Kristiani, SMP Katolik Untung Suropati Sidoarjo menghadirkan berbagai program pengembangan secara menyeluruh. Program tersebut meliputi penguatan akademik melalui pembelajaran, pendampingan, dan kompetisi; pengembangan bakat dan minat melalui berbagai kegiatan nonakademik; serta pembinaan prestasi untuk membangun pengalaman berkompetisi, kepercayaan diri, dan semangat juang. Pendidikan juga diperkuat melalui program Katolisitas serta kegiatan OSIS yang menjadi wadah pengembangan iman, karakter, kepemimpinan, tanggung jawab, kerja sama, dan kemampuan berorganisasi, didukung beragam kegiatan olahraga, seni, dan kreativitas sesuai potensi peserta didik.",
            address: "Jl. Tenis III Gajah, Magersari, Sidoarjo",
            phone: "031-8966141 ",
            email: "smpkuntungsuropati@gmail.com",
            website: "https://www.smpkunsur.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpk_unsur",
            facebook: "",
            youtube: "https://www.youtube.com/@smpkuntungsuropati8767",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.8123249387013!2d112.70993419999999!3d-7.4470428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1497de0c127%3A0x349183cbf7cea0c!2sSMP%20Katolik%20Untung%20Suropati%20Sidoarjo!5e1!3m2!1sid!2sid!4v1788419540904!5m2!1sid!2sid"
        },
        {
            id: 9,
            level: "SMP",
            name: "SMP Katolik Santo Yusup",
            logo: "https://i.ibb.co.com/F4NvH3Fn/SMP-Tropodo.jpg",
            images: ["https://i.ibb.co.com/jkLTxj9b/Foto-Sekolah-1-SMPYusup-Trp.webp","https://i.ibb.co.com/nqWCph3w/Foto-Sekolah-2-SMPYusup-Trp.webp","https://i.ibb.co.com/0pwg347W/Foto-Sekolah-3-SMPYusup-Trp.webp"],
            description: "SMPK Santo Yusup Tropodo didirikan atas permohonan umat Salib Suci dan para orang tua siswa SDK Santo Yusup Tropodo sebagai tempat melanjutkan pendidikan anak-anak mereka. Pada tahun pelajaran 1996/1997, sekolah memulai kegiatan dengan 82 siswa dalam dua kelas dan menggunakan gedung SDK Santo Yusup Tropodo pada siang hari. Pada awal 1998, SMPK Santo Yusup Tropodo mulai menyelenggarakan pembelajaran pagi di gedung sendiri yang saat itu memiliki enam ruang kelas. Dalam perkembangannya, sekolah menjadi bagian dari St. John Gabriel Foundation Perwakilan I Surabaya dan terus meningkatkan sarana-prasarana serta kualitas pendidikan untuk mendukung prestasi peserta didik.<br/><br/>Kekhasan SMPK Santo Yusup Tropodo terletak pada penguatan karakter melalui nilai kasih, kejujuran, tanggung jawab, disiplin, dan nasionalisme yang diterapkan dalam pembelajaran, doa bersama, ibadat Jumat, dan upacara bendera. Sekolah juga memberikan ruang pengembangan minat dan bakat melalui ekstrakurikuler khas seperti Floorball dan Karawitan. Selain menjadi wadah pengembangan potensi, Floorball telah menghasilkan prestasi, di antaranya Juara II tim putri dan Juara III tim putra pada PORKAB Sidoarjo 2026.",
            programs: "Sebagai bagian dari komitmen membentuk peserta didik yang berkarakter, beriman, mandiri, dan siap menghadapi perkembangan zaman, SMPK Santo Yusup Tropodo mengembangkan berbagai program unggulan yang memadukan teknologi, pengalaman belajar, pembinaan iman, kepemimpinan, serta pengembangan bakat. Pembelajaran diperkuat melalui Smart Classroom & AI-Integrated Learning dan Outdoor Learning, sementara Character Building Retreat dan Faith in Action menumbuhkan spiritualitas serta penghayatan nilai-nilai Katolik melalui tindakan nyata. Pengembangan kepemimpinan dan kompetensi warga sekolah dilakukan melalui Student Leadership & Character Academy serta Educator Coaching & Peer Mentoring, dilengkapi program Cyber-Ethics dan Sharing Career untuk membekali siswa menghadapi tantangan sosial, digital, dan dunia kerja. Dukungan terhadap potensi nonakademik diwujudkan melalui Sports & Art Center, sedangkan kolaborasi dengan orang tua dan mitra diperkuat melalui Parent-Teacher Association (PTA) Grant Program untuk mendukung penyediaan sarana dan beasiswa.",
            address: "Jl. Brantas Wisma Tropodo Waru-Sidoarjo",
            phone: "(031) 99004878",
            email: "santoyusuptropodo.jhs@gmail.com",
            website: "https://www.smpksanyu.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpksantoyusuptropodo",
            facebook: "",
            youtube: "https://www.youtube.com/@smpkst.yusup-tropodo8675",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.4653458729176!2d112.75588239999999!3d-7.354932000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e4d0c53b76ad%3A0x15fe8acb049a6d1b!2sSMP%20Katolik%20Santo%20Yusup%20Tropodo!5e1!3m2!1sid!2sid!4v1788420326711!5m2!1sid!2sid"
        },
        {
            id: 10,
            level: "SMP",
            name: "SMP Katolik St. Yustinus De Yacobis",
            logo: "https://i.ibb.co.com/Z6c8PB3k/SMP-Yudeya.jpg",
            images: ["https://i.ibb.co.com/9zHjDw1/Foto-Sekolah-1-SMPYudeya.webp","https://i.ibb.co.com/j0KsT0g/Foto-Sekolah-2-SMPYudeya.webp","https://i.ibb.co.com/ZRHbK83p/Foto-Sekolah-3-SMPYudeya.webp"],
            description: "SMP Katolik St. Yustinus de Yacobis Krian merupakan lembaga pendidikan menengah swasta yang berlokasi di Jalan Ki Hajar Dewantara No. 35, Krian, Kabupaten Sidoarjo, dan berada di bawah naungan St. John Gabriel Foundation Perwakilan Sidoarjo. Didirikan pada 1 Agustus 1951, sekolah ini telah menjadi bagian dari perjalanan pendidikan masyarakat Krian dengan mengintegrasikan mutu akademik dan pembentukan karakter Kristiani. Mengusung visi “Beriman, Berprestasi, dan Berkepribadian Tangguh”, sekolah berkomitmen menghadirkan pendidikan bermutu melalui penerapan Kurikulum Merdeka dan penguatan budaya belajar yang mendukung perkembangan peserta didik.<br/><br/>Kekhasan sekolah tercermin dalam penguatan Katolisitas dan pendidikan karakter melalui doa bersama, Ibadat Jumat, Doa Angelus, Misa awal tahun ajaran, retret, Doa Rosario, serta berbagai kegiatan kokurikuler dan pembelajaran kontekstual seperti Outing Class/Outdoor Learning. Didukung tenaga pendidik yang kompeten dan tersertifikasi serta fasilitas seperti laboratorium komputer dan perpustakaan, sekolah memberikan ruang bagi peserta didik untuk berkembang dalam bidang akademik maupun nonakademik. Berbagai prestasi, termasuk Juara 1 O2SN tingkat provinsi cabang bulutangkis dan capaian dalam Jumpa Prestasi PMR tingkat Jawa Timur, menjadi bagian dari upaya sekolah membentuk generasi yang unggul secara intelektual, memiliki empati sosial, dan berakar kuat dalam iman.",
            programs: "Sejalan dengan visi SMP Katolik St. Yustinus de Yacobis Krian dalam membentuk peserta didik yang beriman, berprestasi, dan berkepribadian tangguh, sekolah mengembangkan berbagai program yang mendukung pertumbuhan akademik, karakter, dan potensi siswa secara menyeluruh. Program Literasi menjadi fondasi untuk memperkuat kemampuan membaca, menulis, dan berpikir kritis melalui pemanfaatan perpustakaan serta kegiatan literasi yang menarik. Beragam kegiatan ekstrakurikuler di bidang olahraga, seni, dan musik tidak hanya menjadi wadah pengembangan minat dan bakat, tetapi juga diarahkan untuk membangun prestasi. Pengembangan karakter dilakukan melalui penanaman nilai luhur, etika, tanggung jawab, dan kepemimpinan, sementara Digital Learning mengintegrasikan teknologi dalam pembelajaran untuk menciptakan pengalaman belajar yang interaktif, relevan, dan mempersiapkan peserta didik menghadapi tantangan masa depan.",
            address: "Jl. Ki Hajar Dewantara No. 35 Krian-Sidoarjo",
            phone: "031-8971930",
            email: "smpkstydyacobis@gmail.com",
            website: "https://tinyurl.com/Web-SMPK-Yudeya",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpkst.yustinusdeyacobis",
            facebook: "",
            youtube: "https://www.youtube.com/@smpkatolikst.yustinusdeyacobis",
            maps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.472872875632!2d112.57562507500117!3d-7.412799992597493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjQnNDYuMSJTIDExMsKwMzQnNDEuNSJF!5e0!3m2!1sid!2sid!4v1789981021647!5m2!1sid!2sid"
        },
        {
            id: 11,
            level: "SMA",
            name: "SMAS Katholik Untung Surapati Sidoarjo",
            logo: "https://i.ibb.co.com/BHXqWD74/SMA-Untung-Suropati.jpg",
            images: ["https://i.ibb.co.com/qMS3vCfX/Foto-Sekolah-1-SMAUnsur-Sda.webp","https://i.ibb.co.com/67zr2bqp/Foto-Sekolah-2-SMAUnsur-Sda.webp","https://i.ibb.co.com/BVpCFL7k/Foto-Sekolah-3-SMAUnsur-Sda.webp"],
            description: "SMAS Katolik Untung Suropati Sidoarjo merupakan sekolah menengah atas swasta Katolik di bawah naungan St. John Gabriel Foundation yang berlokasi strategis di pusat Kota Sidoarjo, tepatnya di Jl. Untung Suropati No. 33, Sidoklumpuk. Dengan status akreditasi A, sekolah menghadirkan lingkungan belajar yang kondusif dan bernuansa kekeluargaan, serta berkomitmen membentuk lulusan yang unggul dalam bidang akademik maupun nonakademik, berkarakter kuat, dan mampu memberikan dampak positif. Semangat tersebut tercermin dalam slogan “Bright Mind, Strong Character, Lasting Impact” dan visi untuk mewujudkan sekolah yang transformatif, berintegritas, dan kolegial.<br/><br/>Dalam mewujudkan visi tersebut, sekolah menyelenggarakan pendidikan yang dijiwai terang iman Katolik melalui berbagai kegiatan Katolisitas, sekaligus mengembangkan pembelajaran yang responsif dan adaptif terhadap perkembangan zaman. Sekolah juga membangun iklim pendidikan yang inklusif, mengembangkan nilai keutamaan St. John Gabriel—teguh, disiplin, peduli, communio, dan misioner—serta memperkuat kerja sama dengan masyarakat, instansi, dan Gereja. Seluruh upaya tersebut diarahkan untuk membangun warga sekolah yang guyub, berintegritas, dan memiliki semangat pelayanan.",
            programs: "Sejalan dengan semangat “Bright Mind, Strong Character, Lasting Impact”, SMAS Katolik Untung Suropati Sidoarjo mengembangkan program unggulan yang memadukan penguatan akademik, pembentukan karakter, dan kesiapan menghadapi kehidupan. Pilar Bright Mind diwujudkan melalui UTBK/TKA Success & Academic Mastery, penerapan Kurikulum Merdeka dengan pendekatan Deep Learning, serta Campus Expo & Career Insight untuk membantu peserta didik mengenali potensi dan merencanakan masa depan. Pilar Strong Character dikembangkan melalui Perboyrian Character Camp & Rekoleksi serta pembiasaan nilai-nilai Kristiani dan kebangsaan dalam kehidupan sehari-hari. Sementara itu, Lasting Impact diwujudkan melalui Life Skills & Real-World Learning serta Student Leadership & Creative yang mendorong peserta didik menjadi pribadi mandiri, kreatif, bertanggung jawab, dan mampu memberikan dampak positif bagi lingkungan sekitarnya.",
            address: "Jl. Untung Suropati 33 Sidoarjo",
            phone: "(031)8941551",
            email: "smakunsur9@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smakusdaupdate",
            facebook: "",
            youtube: "https://www.youtube.com/@unsurtv",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.160229614935!2d112.7215686!3d-7.447518499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e6b5dac522c3%3A0xb4eba244ebd22be9!2sSMAS%20Katolik%20Untung%20Suropati%20Sidoarjo!5e0!3m2!1sid!2sid!4v1789981756318!5m2!1sid!2sid"
        },
        {
            id: 12,
            level: "SMA",
            name: "SMAS Katolik Untung Suropati Krian",
            logo: "https://i.ibb.co.com/KxyvJhfS/SMA-Unsur-Krian.jpg",
            images: ["https://i.ibb.co.com/wZYh4pbm/Foto-Sekolah-1-SMAUnsur-Krn.webp","https://i.ibb.co.com/gbGYrsdT/Foto-Sekolah-2-SMAUnsur-Krn.webp","https://i.ibb.co.com/Mx3G6vvf/Foto-Sekolah-3-SMAUnsur-Krn.webp"],
            description: "SMAS Katolik Untung Suropati Krian (SMAKUSKA) merupakan sekolah menengah atas swasta di Krian, Kabupaten Sidoarjo, di bawah naungan St. John Gabriel Foundation. Dirintis pada tahun 1978 melalui sinergi masyarakat, Gereja, yayasan, guru, dan orang tua, sekolah terus berkembang hingga menjadi SMAKUSKA yang dikenal saat ini. Kekhasan sekolah terletak pada pendidikan yang memadukan iman, ilmu, karakter, disiplin, keterampilan abad ke-21, dan prestasi, yang diwujudkan melalui budaya “SMAKUSKA BERSINAR – BERiman, berSIkap, beNAR”. Sekolah berkomitmen menciptakan lingkungan belajar yang aman, nyaman, ramah, dan mendukung setiap peserta didik untuk berkembang sesuai potensinya.<br/><br/>Dengan semangat “Generasi SMAKUSKA Cerdas dalam Iman, Ilmu, Berkarakter dan Berprestasi”, sekolah terus mengembangkan pendidikan yang relevan dengan tantangan zaman tanpa meninggalkan nilai-nilai Kristiani, kepedulian terhadap sesama dan lingkungan, serta budaya disiplin dan prestasi. Lulusan SMAKUSKA diharapkan memiliki dasar iman dan spiritualitas yang kuat, pengetahuan dan keterampilan yang memadai untuk melanjutkan pendidikan maupun menghadapi kehidupan, serta karakter jujur, disiplin, bertanggung jawab, peduli, santun, mandiri, dan mampu bekerja sama. Dengan demikian, setiap peserta didik didampingi untuk mengembangkan potensi dan meraih prestasi sesuai bakat serta kemampuannya.",
            programs: "Sejalan dengan semangat SMAKUSKA dalam membentuk generasi yang cerdas dalam iman, ilmu, berkarakter, dan berprestasi, sekolah mengembangkan program unggulan yang mencakup penguatan kompetensi, karakter, kesiapan masa depan, dan pengembangan diri. Pembelajaran STEM Kolaborasi melalui Deep Learning, Problem Based Learning, SIKAP, literasi-numerasi, komunitas belajar, dan pemrograman mendorong peserta didik untuk belajar aktif, berpikir kritis, berkarya, dan berkolaborasi. Pembentukan karakter diperkuat melalui DISKON, Sharing and Caring, JUDIKA, Leadership Training, Live In, Oase Iman, Rekoleksi, dan Retret untuk membangun pribadi yang utuh, berintegritas, dan siap menjadi berkat bagi sesama. Pengenalan dunia kerja dan studi lanjut melalui Career Day, Proposal Life, Ekspo Kampus, Yosinaya, dan Internship membantu siswa merancang masa depan, sementara program Pengembangan Diri melalui kewirausahaan dan 21 kegiatan ekstrakurikuler menjadi ruang untuk menumbuhkan pribadi yang aktif, mandiri, disiplin, dan terus berkembang.",
            address: "Jl. Ki Hajar Dewantara No. 175 Krian-Sidoarjo",
            phone: "031-8987239",
            email: "smakatolikkrian@gmail.com",
            website: "https://smakuskabersinar.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smakuska.bersinar",
            facebook: "https://www.facebook.com/smakuska.bersinar.7",
            youtube: "https://www.youtube.com/@smakuskabersinar",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.438958873765!2d112.577659!3d-7.4165738999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780902cab48173%3A0x79db5d8785b3cd!2sSMA%20Katolik%20Untung%20Suropati%20Krian!5e0!3m2!1sid!2sid!4v1789982168198!5m2!1sid!2sid"
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