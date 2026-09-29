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
            name: "TK St. Maria Pare",
            logo: "https://i.ibb.co.com/2Y64RCQR/TK-St-Maria-Pare.jpg",
            images: ["https://i.ibb.co.com/R4j2rwWR/Foto-Sekolah-2-TKPare.webp","https://i.ibb.co.com/FjYcLx2/Foto-Sekolah-1-TKPare.webp","https://i.ibb.co.com/Qjrt96sH/Foto-Sekolah-1-TKPare.webp"],
            description: "TK Katolik Santa Maria Pare telah berdiri sejak tahun 1950 sebagai salah satu sekolah Katolik awal di Kota Pare, yang pada awalnya hadir untuk memberikan pendidikan dasar bagi anak-anak Katolik sekaligus menjadi sarana pewartaan Gereja Katolik. Dalam perjalanannya, sekolah berkembang melalui berbagai keterbatasan dan tantangan, termasuk persaingan dengan bertambahnya sekolah di Pare pada tahun 1980-an. Dukungan para donatur dan alumni melalui Hopes turut membantu pengembangan sekolah. Sejak tahun 2000, sekolah memperluas layanan dengan membuka Kelompok Bermain, kemudian layanan anak usia 2 tahun dan kelompok toddler pada tahun 2015. Hingga kini, TK Santa Maria Pare terus berkembang dan mampu memenuhi target peserta didik serta mempersiapkan lulusan untuk melanjutkan pendidikan ke jenjang berikutnya.<br/><br/>TK Katolik Santa Maria Pare berada di kawasan pinggiran Kota Pare, Kabupaten Kediri, dengan lingkungan masyarakat yang plural, baik dari segi agama maupun kondisi sosial ekonomi. Peserta didik berasal dari berbagai latar belakang, dengan mayoritas beragama Kristen, disusul Katolik dan agama lainnya. Dalam penyelenggaraan pendidikan, sekolah menerapkan Kurikulum Merdeka dengan mengintegrasikan nilai-nilai Katolisitas dalam setiap pembelajaran serta mengembangkan keterampilan hidup sesuai tahap perkembangan anak. Dengan lingkungan belajar yang inklusif dan beragam, sekolah berkomitmen mendampingi anak agar berkembang secara utuh, memiliki karakter positif, keterampilan hidup, serta kesiapan untuk melanjutkan pendidikan ke jenjang berikutnya.",
            programs: "Program unggulan TK Katolik Santa Maria Pare dirancang untuk mendukung tumbuh kembang anak secara utuh melalui penguatan kemandirian, karakter, kreativitas, iman, dan kesiapan belajar. <b>Program Pisah Asuh</b> menjadi sarana melatih kemandirian, kemampuan bersosialisasi, kepercayaan diri, serta tanggung jawab anak, sementara <b>Program Seni dan Musik</b> melalui angklung, tari, melukis, fashion show, dan paduan suara memberikan ruang bagi anak untuk mengembangkan bakat dan minatnya. Nilai-nilai Katolisitas diwujudkan melalui <b>Program Peduli Kasih</b> yang menanamkan bela rasa, kepedulian, dan semangat saling menolong. Untuk mempersiapkan anak menuju jenjang sekolah dasar, <b>Calistung Asyik</b> dikembangkan khusus bagi kelompok TK B, dilengkapi dengan pembelajaran komputer dan English Day sebagai bekal keterampilan serta wawasan anak dalam menghadapi perkembangan zaman.",
            address: "Jl. Letjend. Sutoyo 78 Pare-Kediri",
            phone: "(0354)397189",
            email: "tkksantamariapare@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/paudsantamaria_pare",
            facebook: "http://facebook.com/paudsantamaria.pare",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d554.6555808574988!2d112.19871149802815!3d-7.7754348943447615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sid!2sid!4v1789198262799!5m2!1sid!2sid"
        },
        {
            id: 2,
            level: "TK",
            name: "TK Yohannes Gabriel Puhsarang",
            logo: "https://i.ibb.co.com/mVhNvn0T/TKK-Yoga-Puhsarang.jpg",
            images: ["https://i.ibb.co.com/VYtSfKz6/Foto-Sekolah-1-TKPuhsarang.webp","https://i.ibb.co.com/bMzwmmdH/Foto-Sekolah-2-TKPuhsarang.webp","https://i.ibb.co.com/5xvfn6CV/Foto-Sekolah-3-TKPuhsarang.webp"],
            description: "TK Katolik Yohanes Gabriel Puhsarang merupakan lembaga pendidikan anak usia dini swasta yang berlokasi di Jl. Raya Puhsarang No. 157, Desa Puhsarang, Kecamatan Semen, Kabupaten Kediri, dan berada di bawah naungan St. John Gabriel Foundation Perwakilan Kediri Kota–Kabupaten. Sekolah ini resmi didirikan pada 1 Agustus 1985 dan memiliki akreditasi B. Kehadirannya ditujukan untuk memenuhi kebutuhan pendidikan anak usia dini yang bermutu di wilayah Puhsarang. Dalam perkembangannya, sekolah terus bertahan dan bertransformasi di tengah keterbatasan fasilitas dengan berkomitmen memberikan layanan pendidikan yang berpihak pada tumbuh kembang anak secara utuh.<br/><br/>Kekhasan TK Katolik Yohanes Gabriel Puhsarang terletak pada lokasinya yang dekat dengan kawasan Gereja dan Goa Maria Lourdes Puhsarang, sehingga lingkungan rohani dan kehidupan masyarakat sekitar menjadi bagian dari pengalaman belajar anak. Sekolah juga memiliki karakter yang inklusif dengan peserta didik dari beragam latar belakang agama, suku, dan kondisi sosial ekonomi. Pembelajaran menerapkan pendekatan deep learning berbasis bermain yang menstimulasi aspek kognitif, motorik, bahasa, serta sosial-emosional anak, sekaligus mengangkat kearifan lokal Jawa melalui budaya, cerita rakyat Kediri, lagu daerah, dan permainan tradisional. Dengan demikian, sekolah menjadi ruang belajar yang kontekstual, humanis, toleran, dan mendukung setiap anak untuk berkembang sesuai potensinya.",
            programs: "Program pengembangan bakat non-akademik menjadi bagian dari upaya TK Katolik Yohanes Gabriel Puhsarang dalam mendampingi anak bertumbuh secara utuh. Melalui kegiatan <b>ekstrakurikuler Menari dan Melukis</b> yang dilaksanakan setiap hari Sabtu, anak diberikan ruang untuk mengeksplorasi kreativitas, mengembangkan keterampilan motorik, membangun rasa percaya diri, serta mengekspresikan diri secara positif. Kegiatan ini juga menjadi sarana untuk menumbuhkan apresiasi dan kecintaan terhadap seni serta budaya Nusantara sejak usia dini, sejalan dengan pembelajaran yang kontekstual dan berakar pada kearifan lokal.",
            address: "Jl. Raya Pohsarang No. 157 Semen-Kediri",
            phone: "",
            email: "tkkgabrielpuhsarang@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5918190397056!2d111.9505813!3d-7.8329515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7855e91cb4d1c9%3A0x1a7a32b407719005!2sTKK%20YOHANES%20GABRIEL!5e0!3m2!1sid!2sid!4v1789210664947!5m2!1sid!2sid"
        },
        {
            id: 3,
            level: "TK",
            name: "TK St. Katarina Manyaran",
            logo: "https://i.ibb.co.com/ksgrjs7H/TKK-St-Katarina.jpg",
            images: ["https://i.ibb.co.com/WWCYyPWp/Foto-Sekolah-1-TKKatarina-Kdr.webp","https://i.ibb.co.com/Q3HM278g/Foto-Sekolah-2-TKKatarina-Kdr.webp","https://i.ibb.co.com/Q3TWyt9j/Foto-Sekolah-3-TKKatarina-Kdr.webp"],
            description: "TK Katolik Yohanes Gabriel Puhsarang didirikan pada 1 Agustus 1985 sebagai bagian dari karya pendidikan Katolik di wilayah Puhsarang. Berada di bawah naungan St. John Gabriel Foundation, sekolah ini hadir untuk memenuhi kebutuhan pendidikan anak usia dini yang bermutu dan berpihak pada tumbuh kembang anak. Letaknya yang berdekatan dengan Gereja dan Goa Maria Lourdes Puhsarang memberikan kekhasan tersendiri, karena lingkungan sekolah menjadi ruang belajar yang kaya akan pengalaman sosial dan spiritual. Meskipun memiliki keterbatasan lahan dan fasilitas, sekolah terus bertransformasi dengan mengoptimalkan lingkungan sekitar sebagai bagian dari pengalaman belajar anak.<br/><br/>TK Katolik Yohanes Gabriel Puhsarang memiliki karakteristik lingkungan yang inklusif dan heterogen, dengan peserta didik berasal dari berbagai latar belakang agama, sosial, dan ekonomi. Pembelajaran dikembangkan melalui pendekatan deep learning berbasis bermain yang berpusat pada anak, dengan menstimulasi aspek kognitif, motorik, bahasa, serta sosial-emosional secara menyeluruh. Kekhasan lainnya adalah pengintegrasian kearifan lokal Jawa dan budaya Kediri melalui cerita rakyat, lagu daerah, permainan tradisional, serta berbagai pengalaman kontekstual. Dengan demikian, sekolah berkomitmen mendampingi setiap anak untuk tumbuh secara utuh dalam suasana belajar yang menyenangkan, toleran, dan kaya nilai.",
            programs: "Sebagai bagian dari komitmen mendampingi anak bertumbuh secara utuh, TK Katolik Yohanes Gabriel Puhsarang mengembangkan berbagai program yang memadukan kesiapan belajar, kemandirian, karakter, iman, serta keterampilan motorik. <b>Gerakan Magang Antar Lingkungan (Gemilang)</b> memberikan pengalaman langsung kepada anak untuk mengenal lingkungan Sekolah Dasar sekaligus membangun mental dan kesiapan menghadapi jenjang pendidikan berikutnya. Pembiasaan kemandirian terintegrasi dilakukan dalam aktivitas sehari-hari untuk menumbuhkan disiplin dan tanggung jawab secara alami tanpa paksaan, sementara pendidikan karakter dan iman diwujudkan melalui perayaan hari besar serta kegiatan sosial yang interaktif. Proses pembelajaran juga diperkaya dengan <b>kegiatan berbasis motorik dan kreativitas</b>, seperti finger painting dan permainan roda berputar, sehingga anak dapat belajar melalui pengalaman yang menyenangkan, aktif, dan sesuai dengan tahap perkembangannya.",
            address: "Dusun Sumberbentis - Desa Manyaran-Banyakan Kediri",
            phone: "0813 6323 0271",
            email: "Tk.santakatarina@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1562.1409055926997!2d111.95695184049931!3d-7.793761524548514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7851835bbe10f1%3A0xf516c7fd25f8ad4e!2sTK%20SANTA%20KATARINA%20SUMBERBENTIS!5e1!3m2!1sid!2sid!4v1789359799839!5m2!1sid!2sid"
        },
        {
            id: 4,
            level: "SD",
            name: "SD Katolik Yohanes Gabriel",
            logo: "https://i.ibb.co.com/8LvYZ8hc/SDK-Yoga-Puhsarang.jpg",
            images: ["https://i.ibb.co.com/b5dthkjH/Foto-Sekolah-1-SDKYoga-Puhsrg.webp","https://i.ibb.co.com/MyMvs2kK/Foto-Sekolah-2-SDKYoga-Puhsrg.webp","https://i.ibb.co.com/5XZxQFFt/Foto-Sekolah-3-SDKYoga-Puhsrg.webp"],
            description: "SD Katolik Yohanes Gabriel Puhsarang merupakan sekolah dasar swasta di Desa Puhsarang, Kecamatan Semen, Kabupaten Kediri, yang berada di bawah naungan St. John Gabriel Foundation. Berdiri sejak tahun 1931, sekolah ini menjadi bagian dari karya pendidikan Katolik yang menghidupi nilai iman, kasih, pelayanan, dan pembentukan karakter. Dengan jumlah peserta didik yang relatif sedikit, sekolah memiliki suasana yang dekat, sederhana, dan kekeluargaan. Keterbatasan sarana-prasarana terus dikembangkan secara bertahap, sementara bangunan yang didominasi batu alam atau batu ekspos menjadi salah satu identitas unik yang mencerminkan kekokohan dan perjalanan panjang sekolah.<br/><br/>Dalam penyelenggaraan pendidikan, SD Katolik Yohanes Gabriel Puhsarang memadukan pengembangan akademik dengan pembentukan iman dan karakter melalui pembelajaran, pembiasaan, kegiatan kerohanian, dan kegiatan sosial. Nilai kasih, kejujuran, tanggung jawab, disiplin, kepedulian, kerja sama, dan kesopanan menjadi bagian dari kehidupan sehari-hari, disertai ruang pengembangan bakat dan minat seperti menyanyi, tari, dan kegiatan kreatif. Dengan dukungan guru, peserta didik, orang tua, St. John Gabriel Foundation, Gereja, dan masyarakat, sekolah terus berupaya menjadi lingkungan pendidikan yang aman, ramah, dan penuh kasih untuk membentuk pribadi yang beriman, cerdas, mandiri, berkarakter, peduli, dan berintegritas.",
            programs: "Sejalan dengan komitmen sekolah dalam mengembangkan peserta didik secara utuh, program pengembangan bakat dan akademik dilaksanakan melalui kegiatan <b>ekstrakurikuler Menari, Menggambar, dan Taekwondo serta Pembinaan MIPA</b>. Kegiatan tersebut memberikan ruang bagi peserta didik untuk mengeksplorasi dan mengembangkan potensi seni, kreativitas, olahraga, serta kemampuan berpikir logis dan ilmiah. Melalui pendampingan yang terarah, peserta didik dibentuk menjadi pribadi yang percaya diri, disiplin, kreatif, tekun, dan mampu mengembangkan bakat maupun kemampuan akademiknya secara optimal.",
            address: "Jl. Raya Puhsarang Desa Puhsarang-Semen-Kediri",
            phone: "",
            email: "sdkyohanesgabriel10@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/tkksdkyogapuhsarang",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.9885435539677!2d111.94769067380618!3d-7.8329571778107585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785681d2c671c5%3A0xf0070aca8f0f851e!2s5X82%2BR46%2C%20Ngawal%2C%20Puhsarang%2C%20Kec.%20Semen%2C%20Kabupaten%20Kediri%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1789438858651!5m2!1sid!2sid"
        },
        {
            id: 5,
            level: "SD",
            name: "SD Katolik Santa Maria",
            logo: "https://i.ibb.co.com/k2D1mRCC/SDK-St-Maria-Pare.jpg",
            images: ["https://i.ibb.co.com/Qj19DcKw/Foto-Sekolah-1-SDKPare.webp","https://i.ibb.co.com/5X7xkgr2/Foto-Sekolah-2-SDKPare.webp","https://i.ibb.co.com/Pzwjm579/Foto-Sekolah-3-SDKPare.webp"],
            description: "SDK Santa Maria Pare yang berlokasi di Jl. Letjen Sutoyo No. 78, Pare–Kediri, didirikan pada 1 Agustus 1952 oleh Keuskupan Surabaya dengan dukungan keluarga-keluarga Katolik dan guru agama Katolik di wilayah Pare. Sekolah ini hadir untuk menampung lulusan TKK Santa Maria dan berkembang di atas lahan seluas 3.875 m² milik Yayasan Gereja dan Amal St. Vincentius A Paulo. Dengan latar belakang peserta didik yang beragam, baik dari sisi agama maupun suku, SDK Santa Maria Pare menjadi sekolah yang terbuka dan inklusif. Kepercayaan masyarakat terhadap sekolah juga terlihat dari jumlah peserta didik yang dalam lima tahun terakhir konsisten berada pada kisaran 290–323 siswa, didukung oleh tenaga pendidik dan kependidikan yang berkomitmen.<br/><br/>Dalam perkembangannya, SDK Santa Maria Pare terus berupaya mengembangkan potensi peserta didik secara utuh melalui pembelajaran, pengembangan bakat dan minat, serta berbagai kegiatan ekstrakurikuler bagi kelas bawah maupun kelas atas. Komitmen tersebut telah menghasilkan berbagai prestasi di tingkat kecamatan, provinsi, nasional, hingga internasional, baik dalam bidang nonakademik maupun olimpiade. Selain berprestasi, peserta didik juga diberi ruang untuk menghidupi nilai iman melalui keterlibatan dalam pelayanan Ekaristi di gereja serta membangun kepedulian dan kebersamaan melalui kerja sama dengan Gereja, orang tua, dan masyarakat sekitar.",
            programs: "Sejalan dengan komitmen SDK Santa Maria Pare dalam mengembangkan potensi peserta didik secara utuh, sekolah menyediakan berbagai program akademik dan nonakademik yang mendukung pengembangan kemampuan, karakter, dan bakat siswa. Di bidang akademik, <b>Kelas Olimpiade</b> menjadi wadah untuk mengembangkan kemampuan berpikir kritis, logis, dan berprestasi. Sementara itu, <b>kegiatan Basket, Drumband, dan Dance</b> memberikan ruang bagi peserta didik untuk mengembangkan bakat dan kreativitas, sedangkan <b>Outing Class</b>, Puncak Semester melalui proyek kreatif, <b>LDK–Brigif</b>, dan <b>Kemah</b> menjadi sarana pembelajaran kontekstual yang menumbuhkan kemandirian, disiplin, kepemimpinan, kerja sama, serta kepedulian sosial. Melalui rangkaian kegiatan tersebut, sekolah berupaya membentuk peserta didik yang berprestasi, percaya diri, kreatif, tangguh, dan mampu berkembang dalam keberagaman.",
            address: "Jl. Letjen Sutoyo No. 78 Pare Kediri",
            phone: "081217810161",
            email: "santamariapare@gmail.com",
            website: "https://www.sdksantamariapare.com",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdksantamariapare",
            facebook: "https://www.facebook.com/sdksantamariapare.sdksantamariapare",
            youtube: "https://www.youtube.com/@officialsdkatoliksantamari7389",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.415984478002!2d112.19882559999999!3d-7.775763599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785dd11643bc19%3A0xe487456b0012c956!2sSD%20Katolik%20Santa%20Maria!5e1!3m2!1sid!2sid!4v1789441638753!5m2!1sid!2sid"
        },
        {
            id: 6,
            level: "SD",
            name: "SD Katolik Frateran II",
            logo: "https://i.ibb.co.com/0pZ25FHK/SDK-Frateran-II.jpg",
            images: ["https://i.ibb.co.com/fKTQ9Gj/Foto-Sekolah-1-SDKFrada.webp","https://i.ibb.co.com/VF7xZmT/Foto-Sekolah-2-SDKFrada.webp","https://i.ibb.co.com/chcxKv2C/Foto-Sekolah-3-SDKFrada.webp"],
            description: "SD Katolik Frateran II Kota Kediri berdiri pada tahun 1948 sebagai pecahan dari Frateran I atas prakarsa Romo Hadi Sudarso bersama para Frater BHK, dengan semangat menghadirkan nilai kekatolikan, kebangsaan, dan kepedulian sosial. Berlokasi strategis di pinggir jalan raya, sekolah ini berdiri di atas lahan seluas 1.275 m² dengan luas bangunan 775 m². Meskipun menghadapi keterbatasan lahan, fasilitas, jumlah peserta didik, dan tantangan persaingan dengan sekolah di sekitarnya, SDK Frateran II terus bertahan dan berkembang melalui dukungan St. John Gabriel Foundation, Keuskupan Surabaya, pemerintah, donatur, orang tua, serta alumni. Peserta didik berasal dari latar belakang agama yang beragam, dengan budaya belajar yang baik, kemauan untuk maju, dan dukungan orang tua yang kuat.<br/><br/>Dalam pendidikannya, SDK Frateran II menekankan pembentukan karakter, kedisiplinan, kecakapan, dan pengembangan potensi peserta didik. Salah satu ciri khasnya adalah Paguyuban Karawitan Frada Laras yang berawal dari ketertarikan siswa terhadap budaya Jawa dan kini menjadi bagian penting dalam kegiatan seni serta pelayanan di Gereja dan masyarakat. Sekolah juga mengembangkan bakat melalui ekstrakurikuler Drumband, Seni Tari, dan Renang, sekaligus menanamkan pembiasaan sikap sopan dan santun dalam kehidupan sehari-hari, seperti menyapa dengan ramah, menghormati orang yang lebih tua, serta membangun kebiasaan berkomunikasi dengan baik. Melalui nilai kekatolikan, budaya, karakter, dan kepedulian sosial, sekolah berupaya membentuk pribadi yang cerdas, terampil, berbudaya, dan berkarakter.",
            programs: "Sejalan dengan semangat SDK Frateran II dalam menghadirkan pendidikan yang berakar pada nilai kekatolikan, kebangsaan, dan kepedulian sosial, sekolah mengembangkan <b>Pendidikan Karakter Anak dan Seni</b> Karawitan sebagai program unggulan. Pendidikan karakter diwujudkan melalui pembiasaan sikap sopan, santun, disiplin, menghargai orang lain, serta membangun kebiasaan menyapa dengan ramah dan berkomunikasi dengan baik. Sementara itu, <b>Seni Karawitan</b> melalui Paguyuban Frada Laras menjadi wadah untuk mengenalkan dan melestarikan budaya Jawa sekaligus menumbuhkan kreativitas, kerja sama, tanggung jawab, dan rasa percaya diri peserta didik. Kedua program ini menjadi bagian dari upaya sekolah membentuk pribadi yang cerdas, terampil, berbudaya, dan memiliki kepedulian terhadap sesama.",
            address: "Jl. Jaksa Agung Suprapto No. 10 Mojoroto Kediri",
            phone: "08213639707",
            email: "sdkfrateran2@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/_sdkfrateranii",
            facebook: "",
            youtube: "https://www.youtube.com/@fradakreanovchanel5456",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.165888720397!2d112.0047235!3d-7.8092781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7857216a1322a9%3A0x4d2292c5114c11dd!2sSD%20Katolik%20Frateran%202!5e1!3m2!1sid!2sid!4v1789442937147!5m2!1sid!2sid"
        },
        {
            id: 7,
            level: "SMP",
            name: "SMP Katolik Yohannes Gabriel Pare",
            logo: "https://i.ibb.co.com/8LpYM64X/SMP-Yoga-Pare.jpg",
            images: ["https://i.ibb.co.com/FLC5yH86/Foto-Sekolah-1-SMPKYoga-Pare.webp","https://i.ibb.co.com/VptwxVfP/Foto-Sekolah-2-SMPKYoga-Pare.webp","https://i.ibb.co.com/fY173pCh/Foto-Sekolah-3-SMPKYoga-Par.jpg"],
            description: "SMP Katolik Yohannes Gabriel Pare didirikan oleh Imam Kongregasi Misi pada 1 Agustus 1956 dan selama 70 tahun terus bertumbuh menjadi salah satu sekolah unggulan di Kabupaten Kediri. Dengan visi membentuk peserta didik yang beriman, berkarakter, dan berprestasi, sekolah mengembangkan pendidikan melalui berbagai program intrakurikuler, kokurikuler, dan ekstrakurikuler yang selaras dengan kebutuhan perkembangan peserta didik.<br/><br/>Penguatan iman dan karakter diwujudkan melalui literasi Kitab Suci dan doa pagi, retret, rekoleksi, aksi Natal, kegiatan Peduli Kasih, serta berbagai kegiatan Katolisitas. Dalam pengembangan kompetensi, sekolah memberikan penguatan Bahasa Inggris melalui kerja sama dengan tim Jago Bahasa dari Kampung Inggris, sementara bidang olahraga dikembangkan melalui kerja sama dengan Klub Basket Perbaspa Pare. Komitmen tersebut turut mengantarkan SMP Katolik Yohannes Gabriel Pare menjadi salah satu sekolah dengan tim bola basket SMP yang berprestasi di Kabupaten Kediri, sekaligus membentuk peserta didik yang beriman, berkarakter, kompeten, dan berprestasi.",
            programs: "Sejalan dengan visi SMP Katolik Yohannes Gabriel Pare dalam membentuk peserta didik yang beriman, berkarakter, dan berprestasi, sekolah menyediakan berbagai program unggulan untuk mengembangkan potensi akademik, keterampilan, dan kepemimpinan siswa. Pengembangan akademik diperkuat melalui <b>Ekstrakurikuler OSN dan English Club</b>, sementara keterampilan digital dikembangkan melalui <b>Digital Creator</b> yang mencakup <b>Coding</b> dan <b>Canva</b>. Di bidang olahraga, <b>Ekstrakurikuler Bola Basket</b> menjadi wadah pengembangan bakat, disiplin, kerja sama, dan sportivitas yang mendukung kekhasan sekolah sebagai salah satu sekolah dengan tim basket berprestasi di Kabupaten Kediri. Selain itu, <b>Latihan Dasar Kepemimpinan OSIS</b> membentuk siswa agar mampu bertanggung jawab, percaya diri, bekerja sama, dan memiliki jiwa kepemimpinan.",
            address: "Jl. Letjen Sutoyo No. 78 Pare Kediri",
            phone: "(0354) 393701",
            email: "smpkyoh.gab78@gmail.com",
            website: "https://smpkyogapare.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpkyoga.pare",
            facebook: "https://www.facebook.com/osisyogapare",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.4164692344593!2d112.19879189999999!3d-7.775698499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785dd13d405373%3A0x60c94f40b11cdf6b!2sSMP%20Katholik%20Yohanes%20Gabriel%20Pare!5e1!3m2!1sid!2sid!4v1789443315567!5m2!1sid!2sid"
        },
        {
            id: 8,
            level: "SMA",
            name: "SMA Katolik Santo Augustinus",
            logo: "https://i.ibb.co.com/zhxnwgdG/SMAK-St-Agustinus.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Veteran No. 3 Kediri",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: ""
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