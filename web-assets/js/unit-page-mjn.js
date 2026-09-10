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
            name: "TK Wijana Mojoagung",
            logo: "https://i.ibb.co.com/SH942zv/TK-Mojoagung.jpg",
            images: ["https://i.ibb.co.com/1Y8VfBBt/Foto-Sekolah-1-TKWijana-Mjg.jpg","https://i.ibb.co.com/FL8HmS3W/Foto-Sekolah-2-TKWijana-Mjg.jpg","https://i.ibb.co.com/JXSgbcb/Foto-Sekolah-3-TKWijana-Mjg.jpg"],
            description: "TK Wijana Mojoagung merupakan salah satu sekolah Katolik di bawah naungan St. John Gabriel Foundation Keuskupan Surabaya yang telah berdiri sejak tahun 1973 dan melayani jenjang Preschool dan TK. Pendidikan di TK Wijana Mojoagung berfokus pada pembentukan mental, spiritual, karakter, dan intelektual anak secara utuh. Berlandaskan spiritualitas “Engkau Berharga di Mata-Ku” (Yes. 43:4), sekolah memandang setiap anak sebagai pribadi yang berharga, unik, dan memiliki potensi. Keyakinan tersebut menjadi dasar bagi pendidik dan orang tua untuk menghadirkan lingkungan belajar yang aman, penuh penghargaan, dan mendukung setiap anak untuk berkembang secara optimal.<br/><br/>Semangat tersebut diwujudkan melalui motto “Grow with Love and Care”, yang menempatkan kasih dan kepedulian sebagai fondasi dalam mendampingi anak selama masa pertumbuhan. Melalui suasana pendidikan yang penuh kasih, perhatian, dan penerimaan, TK Wijana Mojoagung berkomitmen membantu setiap anak membangun rasa percaya diri, karakter, dan kesadaran akan nilai dirinya. Dengan demikian, pendidikan tidak hanya berorientasi pada kemampuan akademik, tetapi juga membentuk pribadi yang cerdas, berkarakter, dan siap menjalani kehidupan dengan penuh makna.",
            programs: "Untuk mendukung pertumbuhan anak secara utuh melalui semangat Grow with Love and Care, TK Wijana Mojoagung menghadirkan berbagai program unggulan yang mengembangkan kemandirian, kreativitas, kepedulian, dan pengalaman belajar nyata. Melalui WiTRANS, Outing Class, Self Service, dan Kelas Inspirasi, anak diajak belajar dari pengalaman dan lingkungan sekitar, sementara WiCARE, Family Day, serta kegiatan berbagi lainnya memperkuat kepedulian dan kebersamaan. Pembiasaan hidup sehat dan keterampilan praktis juga dikembangkan melalui Juice Day, Cooking Day, dan Vege Day, sehingga anak tumbuh menjadi pribadi yang mandiri, aktif, sehat, peduli, dan percaya diri.",
            address: "Jl. Raya 226 Mojoagung, Jombang",
            phone: "(0321) 495330",
            email: "tkwijanamojoagung@gmail.com",
            website: "https://www.wijanamojoagung.sch.id",
            // Data Sosmed Baru:
            instagram: "https://instagram.com/wijanamojoagung",
            facebook: "https://facebook.com/wijanamojoagung",
            youtube: "https://youtube.com/@wijanamojoagung",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0402438478272!2d112.34070647380156!3d-7.5705916747741115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786c8785b64461%3A0xb61bec8215d0e45e!2sWijana%20Mojoagung!5e0!3m2!1sid!2sid!4v1784784577209!5m2!1sid!2sid"
        },
                {
            id: 2,
            level: "SD",
            name: "SD Katolik Wijana Mojoagung",
            logo: "https://i.ibb.co.com/C3YsD4XM/SDK-Mojoagung.jpg",
            images: ["https://i.ibb.co.com/hx86RnxM/Foto-Sekolah-1-SDKWijana-Mg.jpg","https://i.ibb.co.com/PGn8NgZP/Foto-Sekolah-2-SDKWijana-Mg.jpg","https://i.ibb.co.com/4RPSCCPN/Foto-Sekolah-3-SDKWijana-Mg.jpg"],
            description: "SDK Wijana Mojoagung merupakan lembaga pendidikan yang sejak berdiri pada tahun 1973 berkomitmen mendampingi anak-anak bertumbuh menjadi pribadi yang utuh. Pendidikan tidak hanya diarahkan pada pencapaian akademik, tetapi juga pada pembentukan iman, karakter, kepedulian, kreativitas, dan kecakapan hidup. Semangat tersebut berakar pada spiritualitas “Engkau Berharga di Mata-Ku” (Yesaya 43:4) dan motto “Grow with Love and Care”, yang menjadi dasar dalam mendampingi setiap anak dengan kasih, kepedulian, serta penghargaan terhadap keunikan dan potensi dirinya.<br/><br/>Dalam prosesnya, SDK Wijana mengembangkan berbagai aspek kehidupan anak secara seimbang, meliputi iman, karakter, intelektual, sosial, emosional, kreativitas, fisik, persaudaraan, dan life skill. Pendidikan dipandang sebagai proses mempersiapkan anak bukan hanya untuk belajar, tetapi juga untuk mampu berpikir, berelasi, berkarya, bertanggung jawab, dan memberikan kontribusi positif. Dengan demikian, SDK Wijana berkomitmen membentuk generasi yang cerdas, berkarakter, beriman, memiliki kecakapan hidup, serta siap menghadapi kehidupan dan menjadi pribadi yang bermanfaat bagi sesama.",
            programs: "Sejalan dengan semangat “Grow with Love and Care”, SDK Wijana menghadirkan berbagai program unggulan yang memberikan pengalaman belajar nyata dan mendukung pertumbuhan anak secara utuh. Life Study Camp, Cooking Day, dan berbagai kegiatan Life Skill melatih kemandirian dan kecakapan hidup, sementara Character Building memperkuat pembentukan karakter dan nilai-nilai kehidupan. Kolaborasi dengan keluarga diwujudkan melalui Family Day, sedangkan Market Day dan Kelas Inspirasi membuka ruang bagi anak untuk belajar berwirausaha, mengenal beragam profesi, dan membangun kepercayaan diri. Seluruh pengalaman tersebut diperkaya melalui GrowFest sebagai ruang untuk merayakan kreativitas, potensi, dan proses tumbuh setiap anak.",
            address: "Jl. Raya 226 Mojoagung, Jombang",
            phone: "(0321) 495330",
            email: "sdkwijanamojoagung@gmail.com",
            website: "https://www.wijanamojoagung.sch.id",
            // Data Sosmed Baru:
            instagram: "https://instagram.com/wijanamojoagung",
            facebook: "https://facebook.com/wijanamojoagung",
            youtube: "https://youtube.com/@wijanamojoagung",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0402438478272!2d112.34070647380156!3d-7.5705916747741115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786c8785b64461%3A0xb61bec8215d0e45e!2sWijana%20Mojoagung!5e0!3m2!1sid!2sid!4v1784784577209!5m2!1sid!2sid"
        },
        {
            id: 3,
            level: "SMP",
            name: "SMP Katolik St. Yusup ",
            logo: "https://i.ibb.co.com/CsW6NS05/SMPK-Mojokerto.jpg",
            images: ["https://i.ibb.co.com/WWpwdkB0/Foto-Sekolah-1-SMPKMjk.jpg","https://i.ibb.co.com/1Ywk7P5t/Foto-Sekolah-2-SMPKMjk.jpg","https://i.ibb.co.com/84R5PvLm/Foto-Sekolah-3-SMPKMjk.jpg"],
            description: "SMP Katolik Santo Yusup Mojokerto didirikan pada 1 Agustus 1956 dan berlokasi di Jl. Niaga No. 15, Kota Mojokerto, di bawah naungan St. John Gabriel Foundation. Dengan akreditasi A, sekolah berkomitmen menghadirkan pendidikan yang menjunjung keberagaman dan toleransi, sekaligus mendampingi peserta didik untuk bertumbuh menjadi pribadi yang beriman, berkarakter, kreatif, dan mampu membawa kebaikan bagi sesama. Sejalan dengan visi “Terwujudnya pribadi yang menjadi garam dan terang dunia, cerdas, kreatif, inovatif, dan berbudaya lingkungan”, proses pendidikan diarahkan pada perkembangan peserta didik secara utuh.<br/><br/>Komitmen tersebut diwujudkan melalui pengalaman pembelajaran, pelayanan, pengembangan kepemimpinan, dan pembinaan spiritual yang berkelanjutan. Berlandaskan motto Compassion, Competence, dan Conviction, SMPK St. Yusup Mojokerto menanamkan kepedulian dan empati, mengembangkan kompetensi akademik serta keterampilan hidup, dan membentuk pribadi yang berintegritas, bertanggung jawab, serta teguh dalam memperjuangkan nilai-nilai kebaikan. Dengan demikian, sekolah menjadi ruang bagi siswa untuk menemukan potensi terbaiknya dan mempersiapkan masa depan yang penuh makna.",
            programs: "Sejalan dengan komitmen SMP Katolik Santo Yusup Mojokerto untuk membentuk pribadi yang beriman, berkarakter, kompeten, dan peduli terhadap sesama, sekolah menghadirkan program unggulan yang mendampingi siswa sesuai tahap perkembangannya. Stronger Together bagi siswa kelas VII memperkuat relasi dan komunikasi antara anak dan orang tua, Live In bagi kelas VIII menumbuhkan kemandirian, empati, kepedulian, dan rasa syukur melalui pengalaman hidup bersama masyarakat, sedangkan Catholic Breakthrough Camp bagi kelas IX memperkuat spiritualitas, karakter, dan kesiapan mental dalam menghadapi masa depan. Ketiga program ini menjadi pengalaman pembelajaran yang menghidupkan nilai Compassion, Competence, dan Conviction secara nyata dalam kehidupan siswa.",
            address: "Jln. Niaga 15 RT. 01 RW I Kelurahan Sentanan, Kota Mojokerto 61312",
            phone: "(0321) 321064",
            email: "smpk.santoyusupmoker24@gmail.com",
            website: "https://www.smpksantoyusupmr.sch.id", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://instagram.com/smpkstyusupofficial",
            facebook: "", 
            youtube: "https://www.youtube.com/@SMPKSantoYusup",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.6712684059457!2d112.434376!3d-7.4667908999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780d8bc55db745%3A0x9358912e6afa82c8!2sSMP%20Katolik%20Santo%20Yusuf!5e1!3m2!1sid!2sid!4v1789004612011!5m2!1sid!2sid"
        },
        {
            id: 4,
            level: "SMA",
            name: "SMAS Thomas Aquino",
            logo: "https://i.ibb.co.com/k23jwLg9/SMAK-Mojokerto.jpg",
            images: ["https://i.ibb.co.com/sdkpF0xS/Foto-Sekolah-1-SMAKMjk.jpg","https://i.ibb.co.com/TDVqQVLF/Foto-Sekolah-2-SMAKMjk.jpg","https://i.ibb.co.com/LDLw00jp/Foto-Sekolah-3-SMAKMjk.jpg"],
            description: "SMAK St. Thomas Aquino Mojokerto merupakan lembaga pendidikan Katolik yang berkomitmen membentuk generasi unggul, berintegritas, dan tangguh melalui visi “Berakar dalam Iman, Cerdas dalam Pikir, Peduli dalam Aksi.” Meneladani semangat analitis Santo Thomas Aquino dan kasih pengabdian Santo Yohannes Gabriel, sekolah menghidupi motto Veritas, Caritas, Innovatio serta spiritualitas Omnia Ad Maiorem Dei Gloriam. Pendidikan rohani, karakter, dan akademik dipadukan melalui berbagai pembiasaan seperti Daily Core dan Refleksi Harian untuk membentuk peserta didik yang beriman, kritis, reflektif, peduli, dan mampu menghadapi tantangan zaman.<br/><br/>Dalam pengembangan potensi dan kesiapan menghadapi dunia global, SMAK St. Thomas Aquino menghadirkan berbagai program berbasis pengalaman nyata dan Deep Learning, seperti Core Clarity Retreat, The Learning Crucible, Career Immersion Program, sertifikasi TOEFL dan kompetensi IT, serta Santhom’s Festival dan September’s Festival. Sekolah juga memperkuat pembelajaran dan pengembangan karier melalui jejaring kemitraan nasional dan internasional, termasuk dengan lembaga pendidikan, dunia profesional, serta berbagai perguruan tinggi. Dengan ekosistem pendidikan yang mengintegrasikan iman, karakter, kompetensi, pengalaman, dan jejaring global, SMAK St. Thomas Aquino mendampingi peserta didik untuk tumbuh menjadi pribadi yang cerdas, peduli, berdaya saing, dan siap menjadi pemimpin masa depan.",
            programs: "Program unggulan SMAK St. Thomas Aquino Mojokerto dirancang untuk memperkuat pembentukan iman, karakter, kompetensi, dan kesiapan peserta didik menghadapi dunia nyata serta tantangan global. Melalui Core Clarity Retreat (CCR), Daily Core, dan Point Value, siswa didampingi untuk mengenali diri, membangun karakter, serta menghidupi nilai-nilai positif dalam keseharian. Pengalaman belajar autentik dikembangkan melalui Hunt For Hire (HFH), The Learning Crucible (TLC) atau Magang Sekolah, dan Career Immersion Program (CIP) atau Magang Kerja yang memberikan kesempatan kepada siswa untuk mengenal dunia pendidikan, pekerjaan, dan karier secara langsung. Sebagai penguatan daya saing, sekolah juga membekali siswa dengan Sertifikat TOEFL dan IT berstandar nasional, serta menyediakan ruang ekspresi melalui September Festival dan memperluas wawasan melalui kerja sama dengan berbagai lembaga pembelajaran nasional maupun internasional.",
            address: "Jl. Niaga No. 15 Mojokerto ",
            phone: "0321-390382",
            email: "smasstthomasaquino@gmail.com",
            website: "", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/smaksanthomofficial",
            facebook: "", 
            youtube: "https://www.youtube.com/@smakthomasaquinomojokerto",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.986151578542!2d112.43433999999999!3d-7.46678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780d8b70018227%3A0x8134106f5d25ac7!2sSMA%20Katolik%20Santo%20Thomas%20Aquino!5e0!3m2!1sid!2sid!4v1789006454242!5m2!1sid!2sid"
        },
        {
            id: 5,
            level: "SMK",
            name: "SMKS Farmasi Katolik Wiyata Farma Kertosono",
            logo: "https://i.ibb.co.com/XrKs5J5h/SMK-Kertosono.jpg",
            images: ["https://i.ibb.co.com/Jjv2cyMQ/Foto-Sekolah-1-SMKKertsn.jpg","https://i.ibb.co.com/gMztnPsk/Foto-Sekolah-2-SMKKertsn.jpg","https://i.ibb.co.com/DHxRrqZh/Foto-Sekolah-3-SMKKertsn.jpg"],
            description: "SMKS Farmasi Katolik Wiyata Farma Kertosono merupakan lembaga pendidikan menengah kejuruan swasta yang berlokasi di Jalan Puntodewo No. 12, Kepuh, Kertosono, Nganjuk, dan berada di bawah naungan St. John Gabriel Foundation. Sekolah ini memiliki NPSN 20570615 dan akreditasi B. Dengan fokus pada bidang kesehatan, khususnya kefarmasian, sekolah menyelenggarakan pendidikan pada bidang keahlian Teknologi Farmasi serta Farmasi Klinis dan Komunitas. Secara administratif, sekolah memiliki izin operasional sejak 24 Januari 2020 dan SK pendirian bertanggal 18 Oktober 2021.<br/><br/>Sebagai sekolah Katolik berbasis kejuruan, SMKS Farmasi Katolik Wiyata Farma Kertosono memadukan penguasaan pengetahuan dan keterampilan kefarmasian dengan pembentukan karakter dan etika pelayanan. Peserta didik dibentuk menjadi pribadi yang disiplin, bertanggung jawab, berintegritas, peduli, serta mampu memberikan pelayanan yang baik kepada sesama. Pembelajaran juga menekankan pengalaman praktik dan kesiapan memasuki dunia kerja melalui pengembangan kompetensi kefarmasian klinis dan komunitas. Dengan demikian, sekolah berkomitmen menghasilkan lulusan yang kompeten secara profesional sekaligus memiliki karakter, nilai kemanusiaan, dan semangat pelayanan yang kuat.",
            programs: "Program unggulan bidang Farmasi menjadi kekhasan utama SMKS Farmasi Katolik Wiyata Farma Kertosono dalam mempersiapkan peserta didik memiliki kompetensi profesional sekaligus karakter pelayanan. Melalui pembelajaran teori dan praktik kefarmasian yang terarah, siswa dibekali pengetahuan, keterampilan, ketelitian, kedisiplinan, tanggung jawab, serta etika dalam memberikan pelayanan di bidang kesehatan. Program ini diharapkan mampu menghasilkan lulusan yang kompeten, siap memasuki dunia kerja, serta mampu menghayati nilai kepedulian dan pelayanan kepada sesama sebagai bagian dari identitas pendidikan Katolik.",
            address: "Jl. Puntodewo No.12 Kertosono-Nganjuk",
            phone: "(0358) 5501184",
            email: "smkwiyatafarma@gmail.com",
            website: "", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/wiyatafarma.id",
            facebook: "", 
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.68362534006!2d112.0957999!3d-7.6036337000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7846f55b98c06f%3A0xa2a149eef2a14d89!2sSMK%20Farmasi%20Katolik%20%22wiyata%20Farma%22%20Kertosono!5e1!3m2!1sid!2sid!4v1789007005641!5m2!1sid!2sid"
        },
        {
            id: 6,
            level: "TK",
            name: "TK Katolik Wijana Jombang",
            logo: "https://i.ibb.co.com/DHbLLnTM/TK-Jombang.jpg",
            images: ["https://i.ibb.co.com/BHwBWsFG/Foto-Sekolah-1-TKWijana-Jbg.jpg","https://i.ibb.co.com/r2gBPzrr/Foto-Sekolah-2-TKWijana-Jbg.jpg","https://i.ibb.co.com/fdQ5k4nf/Foto-Sekolah-3-TKWijana-Jbg.jpg"],
            description: "TK Katolik Wijana Jombang didirikan pada 8 Januari 1968 atas prakarsa sekelompok ibu-ibu WKRI (Wanita Katolik Republik Indonesia) GOW Jombang, dengan dukungan Suster Lidwina dari Mojokerto dan Romo J. Mensvoort. Untuk mewujudkan pendirian sekolah, mereka menggalang dana melalui bazar dan donasi dari berbagai pihak. TK Katolik Wijana kemudian didirikan di Jl. KH. Wahid Hasyim 38–40, lokasi strategis di pusat Kota Jombang yang berdekatan dengan kantor pemerintahan Kabupaten Jombang.<br/><br/>Dalam perkembangannya, atas saran Bapak Uskup Sutikno, sekolah dipindahkan ke lokasi pasturan lama dan dibangun gedung baru di Jl. Cak Durasim No. 01, Jombang. Gedung tersebut diberkati pada 6 Desember 2019 oleh RD. Albertus Widya Rahmadi Putra selaku Romo Paroki Gereja Katolik Santa Maria Jombang. Hingga kini, TK Katolik Wijana terus menjadi bagian dari karya pendidikan Katolik yang melayani dan mendampingi pertumbuhan anak-anak di Jombang.",
            programs: "Sebagai bagian dari karya pendidikan Katolik yang mendampingi pertumbuhan anak secara utuh, TK Katolik Wijana Jombang mengembangkan berbagai program unggulan yang memadukan pembiasaan iman dan Katolisitas dengan penguatan literasi, STEAM, dan eksperimen sains. Anak juga diajak menumbuhkan kepedulian terhadap lingkungan serta kemandirian melalui berbagai kegiatan yang sesuai dengan tahap perkembangannya. Program-program tersebut dirancang dalam suasana belajar yang aktif, menyenangkan, dan bermakna agar anak tumbuh menjadi pribadi yang beriman, kreatif, mandiri, peduli, dan siap menghadapi perkembangan zaman.",
            address: "Jln. Cak Durasim, No. 1 Kepanjen, Jombang",
            phone: "(0321) 871132",
            email: "tkkatolikwijanajombang@gmail.com",
            website: "", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/tkkwijanajombang19",
            facebook: "https://www.facebook.com/tkk.wijana", 
            youtube: "https://www.youtube.com/@tkkatolikwijana-jombang-ja6086",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d195.377885887551!2d112.2360657!3d-7.5536871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7841e7a9387895%3A0x1dbecde30e6664e1!2sTK%20Katolik%20Wijana!5e1!3m2!1sid!2sid!4v1788487738301!5m2!1sid!2sid"
        },
        {
            id: 7,
            level: "TK",
            name: "TK Budi Luhur Nganjuk",
            logo: "https://i.ibb.co.com/whQHFWrK/TK-Nganjuk.jpg",
            images: ["https://i.ibb.co.com/MD3wjJF9/Foto-Sekolah-1-TKBudi.jpg","https://i.ibb.co.com/RpZVy3cg/Foto-Sekolah-2-TKBudi.jpg","https://i.ibb.co.com/m1t30d1/Foto-Sekolah-3-TKBudi.jpg"],
            description: "TK Katolik Budi Luhur Nganjuk merupakan lembaga pendidikan anak usia dini swasta yang berlokasi di Jl. Diponegoro No. 63–65, Ganung Kidul, Nganjuk, di bawah naungan St. John Gabriel Foundation (Pusat Surabaya/Cabang Madiun). Sekolah resmi berdiri pada 18 Juli 1988, berawal dari dorongan wali murid SD Katolik Budi Luhur dan pembubaran TK Pantakosta, dengan jumlah awal 12 peserta didik. Hingga kini, sekolah terus berkembang dengan komitmen memberikan pendidikan yang berkualitas, aman, nyaman, dan berkarakter bagi anak-anak di wilayah Nganjuk.<br/><br/>Dengan semangat nilai-nilai keutamaan Santo Yohanes Gabriel Perboyre, TK Katolik Budi Luhur berkomitmen membentuk anak yang beriman, cerdas, mandiri, berkarakter Kristiani, serta mencintai Tuhan dan sesama. Nilai keteguhan, kedisiplinan, kepedulian, jiwa misioner, dan semangat communio ditanamkan sejak dini melalui pembelajaran yang mendukung perkembangan akademik, sosial, emosional, dan spiritual. Didukung tenaga pendidik yang berdedikasi, sarana-prasarana yang memadai, serta media pembelajaran interaktif, sekolah mendampingi anak agar tumbuh menjadi pribadi yang adaptif, kreatif, dan siap melanjutkan pendidikan ke jenjang berikutnya.",
            programs: "Sebagai bagian dari upaya mendampingi anak tumbuh secara utuh, TK Katolik Budi Luhur menghadirkan berbagai program unggulan yang melibatkan anak, orang tua, dan lingkungan sekolah. Parenting Class memperkuat kolaborasi orang tua dalam mendampingi tumbuh kembang anak, sementara kegiatan renang dan cooking class mengembangkan kemandirian serta keterampilan praktis. Gelar Karya dan program literasi menjadi ruang bagi anak untuk mengekspresikan kreativitas dan potensi, sedangkan kegiatan Katolisitas menanamkan iman serta nilai-nilai Kristiani sejak dini.", 
            address: "Jl. Diponegoro No. 63-65 Nganjuk",
            phone: "",
            email: "tkkbudiluhurnganjuk@gmail.com",
            website: "", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/tkkbudiluhurnganjuk",
            facebook: "https://www.facebook.com/tkkbudi.luhur.7", 
            youtube: "https://www.youtube.com/@pg-tkkatolikbudiluhurnganj3686",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d781.4208990525046!2d111.9047214!3d-7.6036377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784ba821154147%3A0x8bea91e94e262e23!2sGereja%20Katolik%20Paroki%20Santo%20Paulus%2C%20Nganjuk!5e1!3m2!1sid!2sid!4v1788487044587!5m2!1sid!2sid"
        },
        {
            id: 8,
            level: "TK",
            name: "TK Katolik Yos Sudarso Pelem",
            logo: "https://i.ibb.co.com/7BDSdnj/TK-Yos-Kertosono.jpg",
            images: ["https://i.ibb.co.com/whqW9jhv/Foto-Sekolah-1-TKKertosono.jpg","https://i.ibb.co.com/tPTL27Bp/Foto-Sekolah-2-TKKertosono.jpg","https://i.ibb.co.com/MkwKXFgB/Foto-Sekolah-3-TKKertosono.jpg"],
            description: "TK Katolik Yos Sudarso didirikan pada 1 Januari 1975 dan berada di bawah naungan St. John Gabriel Foundation. Awalnya berlokasi di Jl. Jambu No. 1, Pelem, Kertosono, sekolah kemudian berpindah ke Jl. Panglima Sudirman No. 139 karena keterbatasan ruang serta sarana prasarana. Menempati bekas gedung SMPK Xaverius, TK Katolik Yos Sudarso kini memiliki tiga kelas, yaitu A1, A2, dan B, dengan jumlah 31 peserta didik. Didukung ruang bermain indoor dan outdoor yang memadai, lahan parkir, aula, serta berbagai ekstrakurikuler seperti seni tari, menggambar, pantomim, dan musik pianika, sekolah berkomitmen menciptakan lingkungan belajar yang nyaman dan menyenangkan bagi anak usia dini.<br/><br/>Sebagai satu-satunya TK di wilayah sekitar yang bernafaskan pendidikan Kristiani, TK Katolik Yos Sudarso menjadi pilihan bagi keluarga dari Kertosono maupun wilayah sekitarnya. Pembelajaran diperkaya melalui kegiatan outing class yang rutin dilaksanakan sesuai tema, seperti mengunjungi pasar, stasiun, kantor pos, serta berbagai tempat ibadah untuk mengenalkan anak pada lingkungan dan keberagaman. Melalui pengalaman belajar yang nyata, sekolah mendampingi anak untuk berkembang secara utuh, mengenal dunia di sekitarnya, serta bertumbuh dalam nilai-nilai Kristiani.",
            programs: "Sebagai bagian dari upaya mengembangkan potensi anak secara utuh, TK Katolik Yos Sudarso menghadirkan program unggulan melalui ekstrakurikuler pantomim dan pianika untuk menumbuhkan kreativitas, ekspresi, serta keberanian anak. Nilai kepedulian dan kasih diwujudkan melalui aksi sosial Natal, sementara kegiatan outing class memberikan pengalaman belajar langsung di lingkungan sekitar. Berbagai program tersebut dirancang untuk mendukung tumbuh kembang anak dalam suasana yang menyenangkan sekaligus menanamkan nilai-nilai Kristiani, kemandirian, dan kepedulian terhadap sesama.",
            address: "Jl. Panglima Sudirman No. 139 Kertosono-Nganjuk ",
            phone: "(0358) 5501363",
            email: "tkkyossudarsokertosono@gmail.com",
            website: "https://website-sekolah.my.canva.site/#tentang-kami", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/tkk.yossudarso139",
            facebook: "https://www.facebook.com/tkkyossudarso.kertosono", 
            youtube: "https://www.youtube.com/@tkkyossudarsopelemkertoson5630",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15819.037768565146!2d112.09224420580968!3d-7.601137815896016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7847650a38b069%3A0xc07327c4a1cc0c3d!2sTK%20Katolik%20Yos%20Sudarso%20Kertosono!5e0!3m2!1sid!2sid!4v1788792664274!5m2!1sid!2sid"
        },
        {
            id: 9,
            level: "TK",
            name: "TK Santa Maria Macanan",
            logo: "https://i.ibb.co.com/C3CncQ6C/TK-Macanan.jpg",
            images: ["https://i.ibb.co.com/DPVnk9kV/Foto-Sekolah-1-TKMacanan.jpg","https://i.ibb.co.com/4gnc739k/Foto-Sekolah-2-TKMacanan.jpg","https://i.ibb.co.com/4nL9dD86/Foto-Sekolah-3-TKMacanan.jpg"],
            description: "TK Santa Maria merupakan satu-satunya sekolah Katolik di Kecamatan Loceret, Kabupaten Nganjuk, yang berdiri sejak tahun 1987 dalam lingkup Gereja Stasi St. Robertus Macanan. Sekolah berada di kawasan padat penduduk dan jalur utama menuju wisata Roro Kuning dan Jolotundo, serta dekat dengan sentra pembuatan jamu. Masyarakat sekitar sebagian besar bekerja sebagai petani dengan latar belakang pendidikan orang tua mayoritas SMA/sederajat dan sebagian sarjana. Dalam kehidupan sehari-hari, masyarakat menggunakan Bahasa Jawa dan Bahasa Indonesia serta menjunjung nilai religius dan semangat gotong royong.<br/><br/>Lingkungan TK Santa Maria juga memiliki kekayaan budaya lokal yang tercermin dalam tradisi nyadranan dan wiwitan yang masih dikenal masyarakat. Kehidupan sosial masyarakat turut diwarnai oleh tradisi keagamaan dan warisan leluhur, seperti peringatan hari besar keagamaan, tumpengan, selamatan, dan tedhak siten. Keberagaman tersebut menjadi bagian dari konteks lingkungan pendidikan TK Santa Maria dalam mendampingi anak untuk mengenal budaya, menghargai keberagaman, serta bertumbuh dalam nilai kebersamaan dan kehidupan sosial yang harmonis.",
            programs: "Sebagai bagian dari upaya mendampingi anak dalam lingkungan masyarakat yang religius, menjunjung gotong royong, dan kaya akan budaya lokal, TK Santa Maria mengembangkan program unggulan berupa pembiasaan Katolisitas dan budi pekerti untuk menanamkan nilai kasih, kepedulian, dan sikap menghargai sesama. Pembelajaran juga diperkaya melalui outing class dan cooking class yang memberikan pengalaman nyata, melatih kemandirian, kreativitas, serta kemampuan bekerja sama dalam suasana belajar yang menyenangkan.",
            address: "Jl. Panglima Sudirman RT 02 RW 03 Macanan Loceret-Nganjuk ",
            phone: "",
            email: "tksantamariamacanan@gmail.com",
            website: "", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "",
            facebook: "", 
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.7876184122315!2d111.8777124!3d-7.7256953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78532b05250d3f%3A0x6bb0fe5c89eb54cc!2sTK%20Santa%20Maria%20Macanan!5e1!3m2!1sid!2sid!4v1788502272557!5m2!1sid!2sid"
        },
        {
            id: 10,
            level: "SD",
            name: "SD Katolik Wijana",
            logo: "https://i.ibb.co.com/gFVv6nBy/SDK-Jombang.jpg",
            images: ["https://i.ibb.co.com/Z6N1y0YB/Foto-Sekolah-1-SDKWijana-Jb.jpg","https://i.ibb.co.com/jvqJJQPL/Foto-Sekolah-2-SDKWijana-Jb.jpg","https://i.ibb.co.com/hFXwmRW4/Foto-Sekolah-3-SDKWijana-Jb.jpg"],
            description: "SD Katolik Wijana Jombang yang berlokasi di Jl. KH. Wahid Hasyim 38 didirikan pada 8 Januari 1968 atas prakarsa para aktivis Gereja dengan dukungan Romo J. Mensvoort. Berawal dari lahan rawa yang dibangun melalui swadaya umat, donatur, dan bantuan hibah, sekolah memulai pelayanan dengan 40 peserta didik. Pada 6 Januari 1970, gedung sekolah bersama TKK Wijana dan Balai Pengobatan Santa Maria diberkati oleh Uskup Surabaya Mgr. Yohannes Klooster, C.M. Dalam perkembangannya, kelembagaan sekolah semakin kokoh hingga pada tahun 2002 resmi bernaung di bawah Yayasan Pendidikan Yohanes Gabriel.<br/><br/>Sejak awal, SD Katolik Wijana Jombang memiliki kekhasan dalam semangat keterbukaan, gotong royong, serta penerimaan peserta didik dari beragam latar belakang. Nilai-nilai Kristiani dan pembentukan karakter terus menjadi bagian penting dalam kehidupan sekolah melalui pendampingan paroki dan yayasan. Sejalan dengan perkembangan zaman, sekolah juga secara berkelanjutan meningkatkan kualitas SDM serta mengembangkan dan memperbarui sarana-prasarana untuk menciptakan layanan pendidikan yang relevan, berkualitas, dan tetap berakar pada nilai-nilai luhur yang telah diwariskan sejak awal berdirinya.",
            programs: "Sejalan dengan semangat keterbukaan, gotong royong, pembentukan karakter, dan nilai-nilai Kristiani yang menjadi kekhasan SD Katolik Wijana Jombang, sekolah menghadirkan beragam program unggulan yang mengembangkan peserta didik secara utuh. Dies Familiaritas, Faith Camp, dan Sharing and Caring Day memperkuat iman, persaudaraan, serta kepedulian terhadap sesama; Market Day dan Math Fun mengembangkan kemandirian, kreativitas, serta kemampuan akademik; sementara Basket Talent dan Wijana Scout Camp menumbuhkan sportivitas, kedisiplinan, dan semangat berprestasi. Kepedulian terhadap budaya dan lingkungan diwujudkan melalui Wijana Dolanan, Veggie Fun Day, dan Jumat Resik, sehingga setiap kegiatan menjadi ruang bagi siswa untuk belajar, bertumbuh, berkarya, dan menghidupi nilai kasih dalam kehidupan sehari-hari.",
            address: "Jl. KH. Wahid Hasyim No. 38 Kepanjen-Jombang ",
            phone: "(0321) 8490558",
            email: "sdkatolikwijanajombang@gmail.com",
            website: "https://s.id/sdkwijana", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/wijanajombang",
            facebook: "https://www.facebook.com/sdkwijanajombang", 
            youtube: "https://www.youtube.com/@SDKWijana",
            maps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3126.054407680334!2d112.23629899999999!3d-7.552549000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzMnMDkuMiJTIDExMsKwMTQnMTAuNyJF!5e1!3m2!1sid!2sid!4v1788848248183!5m2!1sid!2sid"
        },
        {
            id: 11,
            level: "SD",
            name: "SD Katolik Budi Luhur",
            logo: "https://i.ibb.co.com/0Rj6MKqZ/SDK-Nganjuk.jpg",
            images: ["https://i.ibb.co.com/6zxW5sP/Foto-Sekolah-1-SDKBudi-Ngjk.jpg","https://i.ibb.co.com/Pzfq33BH/Foto-Sekolah-2-SDKBudi-Ngjk.jpg","https://i.ibb.co.com/HDj2PbhJ/Foto-Sekolah-3-SDKBudi-Ngjk.jpg"],
            description: "SD Katolik Budi Luhur Nganjuk yang berlokasi di Jl. RA Kartini No. 58, Mangundikaran, Nganjuk, berdiri sejak 2 Januari 1974 dan berada di bawah naungan St. John Gabriel Foundation. Sebagai sekolah Katolik yang terbuka bagi peserta didik dari berbagai latar belakang agama, sekolah memiliki lokasi strategis di pusat kota dan dekat dengan berbagai fasilitas umum yang mendukung kegiatan pembelajaran. Berlandaskan visi “Terwujudnya Insan Beriman, Berkarakter, dan Berdaya Saing Global Melalui Pembelajaran Mendalam dan Inovatif”, sekolah mengembangkan pendidikan yang berpusat pada siswa melalui penguatan pembelajaran, karakter, profesionalitas SDM, dan kemitraan.<br/><br/>Pada tahun ajaran 2026–2027, SD Katolik Budi Luhur mengembangkan pembelajaran intrakurikuler berbasis Kurikulum Merdeka dengan pendekatan deep learning serta berbagai metode dan media inovatif. Pembelajaran diperkaya melalui kegiatan kokurikuler seperti outing class, outbond, kunjungan ke perpustakaan daerah, pemadam kebakaran, dan kegiatan renang, serta ekstrakurikuler akademik seperti Sains, Math Club, English Club, dan Bahasa Mandarin untuk mengembangkan bakat, minat, dan prestasi siswa. Didukung oleh tenaga pendidik dan kependidikan yang terus meningkatkan kompetensinya melalui berbagai pelatihan, sekolah berkomitmen memberikan layanan pendidikan yang relevan, berkualitas, dan mempersiapkan peserta didik menghadapi tantangan masa depan.",
            programs: "Sejalan dengan komitmen membentuk insan yang beriman, berkarakter, dan berdaya saing global, SD Katolik Budi Luhur Nganjuk menghadirkan berbagai program yang mengembangkan peserta didik secara utuh. Pembinaan iman diwujudkan melalui rangkaian Misa, ibadat, dan rekoleksi sepanjang tahun liturgi, mulai dari Misa Awal Tahun Ajaran, BKSN, Bulan Rosario, Adven, Natal, Prapaskah, Paskah, Bulan Maria, hingga ibadat syukur akhir tahun ajaran. Pengembangan akademik dan bakat difasilitasi melalui Math Club, Sains, English Club, Bahasa Mandarin, serta kegiatan seni dan kreativitas seperti vokal, musik, tari, lukis, multimedia, dan Pramuka. Pembelajaran juga diperkaya dengan berbagai outing class, seperti nobar film pendidikan, belajar di alam dan outbond, renang, serta kunjungan edukatif bersama Pemadam Kebakaran, sehingga siswa memperoleh pengalaman belajar yang nyata, menyenangkan, dan bermakna.",
            address: "Jl. R. A. Kartini 58 Nganjuk ",
            phone: "0358-322085",
            email: "sdkbudi@gmail.com",
            website: "", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/sdkbudiluhur.nganjuk",
            facebook: "", 
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.694623754806!2d111.90589329999999!3d-7.602123300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784ba84c4eda33%3A0xa191c3245eaabde1!2sTK%20-%20SD%20Katolik%20%22Budi%20Luhur%22!5e1!3m2!1sid!2sid!4v1788848726391!5m2!1sid!2sid"
        },
        {
            id: 12,
            level: "SD",
            name: "SDK Yos Sudarso",
            logo: "https://i.ibb.co.com/bgYK9ZwZ/SD-Yos-Kertosono.jpg",
            images: ["https://i.ibb.co.com/cccHr3Wm/Foto-Sekolah-1-SDKYos-Krtsn.jpg","https://i.ibb.co.com/s9n47gBZ/Foto-Sekolah-2-SDKYos-Krtsn.jpg","https://i.ibb.co.com/70yxXBn/Foto-Sekolah-3-SDKYos-Krtsn.jpg"],
            description: "SDK Yos Sudarso Kertosono merupakan lembaga pendidikan dasar Katolik di Jl. Rambutan No. 20, Pelem, Kertosono, Nganjuk, yang berada di bawah naungan St. John Gabriel Foundation. Sekolah ini resmi berdiri pada 1 Januari 1967, dipelopori Pemuda Katolik bersama tokoh masyarakat dan umat Katolik setempat sebagai bentuk kepedulian terhadap pendidikan anak setelah peristiwa G30S. Berawal dari 19 peserta didik, sekolah terus berkembang dan pada tahun 1978 berpindah ke lokasi Jalan Rambutan yang ditempati hingga kini. Secara kelembagaan, SDK Yos Sudarso tercatat dengan NPSN 20514039, SK Pendirian Nomor 0/6249/IV/79, serta memiliki akreditasi B.<br/><br/>Dalam perjalanannya, SDK Yos Sudarso Kertosono berkomitmen memberikan pendidikan yang menyeluruh dengan mengembangkan kemampuan akademik sekaligus karakter, kedisiplinan, tanggung jawab, kepedulian, dan nilai-nilai iman serta kemanusiaan. Sebagai bagian dari karya pendidikan Katolik, sekolah terus berupaya meningkatkan mutu pembelajaran sesuai perkembangan zaman tanpa meninggalkan nilai-nilai luhur yang menjadi dasar penyelenggaraan pendidikan. Dengan semangat tersebut, SDK Yos Sudarso mendampingi peserta didik agar tumbuh menjadi pribadi yang beriman, berkarakter, berpengetahuan, mandiri, dan mampu memberikan kontribusi positif bagi masyarakat.",
            programs: "Sejalan dengan komitmennya memberikan pendidikan yang utuh dan adaptif terhadap perkembangan zaman, SDK Yos Sudarso Kertosono mengembangkan berbagai program unggulan yang mendukung kemampuan akademik, karakter, dan spiritualitas peserta didik. Program Digital Learning memperkaya pengalaman belajar dengan pemanfaatan teknologi, sementara kelas tambahan membantu peserta didik yang masih membutuhkan pendampingan dalam kemampuan membaca dan menulis. Pembiasaan pagi dan meditasi pagi menjadi sarana membangun kedisiplinan, ketenangan, serta kesiapan belajar, yang diperkuat melalui kegiatan bina iman setiap minggu untuk menumbuhkan nilai-nilai Kristiani dalam kehidupan sehari-hari.",
            address: "Jl. Rambutan No. 20 Kertosono-Nganjuk",
            phone: "0358-552089",
            email: "sdkyossudarso1122@gmail.com",
            website: "", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/sdkyossudarsokertosono",
            facebook: "https://www.facebook.com/yos.sudarso.712161", 
            youtube: "https://www.youtube.com/@sdkyossudarsokertosono4399",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.8123834714074!2d112.1038384!3d-7.595388099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7846f0f3a745f7%3A0x2e3c284a370b9e0f!2sSDK%20Yos%20Sudarso%20Kertosono!5e0!3m2!1sid!2sid!4v1788793352686!5m2!1sid!2sid"
        },
        {
            id: 13,
            level: "SMP",
            name: "SMP Katolik Wijana",
            logo: "https://i.ibb.co.com/B5YcCJQz/SMPK-Jombang.jpg",
            images: ["https://i.ibb.co.com/cpTmDxQ/Foto-Sekolah-1-SMPKWijana.jpg","https://i.ibb.co.com/SwTbGY1g/Foto-Sekolah-2-SMPKWijana.jpg","https://i.ibb.co.com/6JJwX6Vv/Foto-Sekolah-3-SMPKWijana.jpg"],
            description: "SMP Katolik Wijana Jombang merupakan sekolah menengah pertama swasta yang berlokasi di Jl. KH. Wachid Hasyim No. 40, Kepanjen, Jombang, dan berada di bawah naungan St. John Gabriel Foundation Keuskupan Surabaya. Didirikan pada 7 Juli 1958, sekolah ini telah lebih dari enam dekade melayani pendidikan masyarakat Jombang. Sebagai sekolah Katolik, SMP Katolik Wijana memadukan pendidikan akademik, pembentukan iman, dan penguatan karakter untuk membentuk peserta didik yang beriman, berkarakter luhur, bertanggung jawab, peduli terhadap sesama, serta mampu hidup dalam keberagaman. Sekolah juga mengembangkan semangat pelayanan dan kepedulian lingkungan dengan menciptakan suasana belajar yang aman, humanis, dan inklusif.<br/><br/>Dalam menghadapi perkembangan zaman, SMP Katolik Wijana Jombang terus mengembangkan pembelajaran yang adaptif, kreatif, dan berbasis teknologi melalui penguatan literasi, bahasa, sains, matematika, serta bimbingan olimpiade. Pengembangan potensi peserta didik didukung melalui berbagai kegiatan olahraga, pramuka, seni, fotografi dan video, robotika, coding, hingga pengembangan konten digital. Dengan mengintegrasikan iman, karakter, akademik, teknologi, kreativitas, keterampilan abad ke-21, dan kepedulian lingkungan, sekolah berkomitmen mendampingi peserta didik agar tumbuh menjadi pribadi yang cerdas, terampil, mandiri, berintegritas, dan siap menghadapi masa depan.",
            programs: "Program unggulan SMP Katolik Wijana Jombang dirancang untuk memperkuat pendidikan yang mengintegrasikan iman, karakter, akademik, kepemimpinan, kesehatan, dan kepedulian lingkungan. Melalui Gerakan Literasi Wijana (GLW), siswa dibiasakan membaca, menulis, dan berpikir kritis; sementara Ibadah Pagi menjadi sarana pembentukan karakter dan penghayatan nilai Katolisitas dalam kehidupan sehari-hari. Penguatan prestasi akademik diwujudkan melalui Pendampingan TKA serta Pendampingan OSN bidang Matematika, IPA, dan IPS. Sejalan dengan komitmen terhadap wawasan lingkungan, program Healthy and Green School membangun budaya hidup bersih, sehat, dan bertanggung jawab. Sementara itu, Student Leadership Academy mengembangkan kepemimpinan, komunikasi, manajemen kegiatan, dan kewirausahaan siswa, yang diperkuat melalui Parent Partnership Program sebagai wadah kolaborasi antara sekolah, orang tua, dan St. John Gabriel Foundation dalam mendampingi perkembangan peserta didik secara utuh.",
            address: "Jl. KH. Wachid Hasyim No. 40 Jombang ",
            phone: "(0321) 495331",
            email: "smpkwijana@gmail.com",
            website: "https://smpkatolikwijana.sch.id/", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/smpk.wijanajombang",
            facebook: "https://www.facebook.com/smpk.w.jombang", 
            youtube: "https://www.youtube.com/@officialsmpkatolikwijanajo3911",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d390.7575384130826!2d112.2365216!3d-7.5517334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78401e7afa7c23%3A0xd4502ecb5eac073a!2sSMPK%20WIJANA%20JOMBANG!5e1!3m2!1sid!2sid!4v1789005347803!5m2!1sid!2sid"
        },
        {
            id: 14,
            level: "SMP",
            name: "SMP Katolik Budi Luhur Nganjuk",
            logo: "https://i.ibb.co.com/d0DMxBBX/SMPK-Nganjuk.jpg",
            images: ["https://i.ibb.co.com/7xzWX3ZK/Foto-Sekolah-1-SMPKBudi.jpg","https://i.ibb.co.com/zV0Jmrc9/Foto-Sekolah-2-SMPKBudi.jpg","https://i.ibb.co.com/v4LMfk9Q/Foto-Sekolah-3-SMPKBudi.jpg"],
            description: "SMP Katolik Budi Luhur Nganjuk didirikan pada 20 Agustus 1957 oleh Yayasan Yohanes Gabriel sebagai bagian dari karya pendidikan Katolik di Nganjuk. Pada awalnya, sekolah menempati kompleks Gereja Katolik di kawasan alun-alun Nganjuk dan menjadi salah satu sekolah swasta yang turut melayani peserta didik dari berbagai latar belakang, termasuk anak-anak Tionghoa dan keluarga Kristen. Dalam perkembangannya, sekolah menjadi bagian penting dari kehidupan umat Katolik Nganjuk dan turut melahirkan lulusan yang melanjutkan pendidikan ke berbagai sekolah menengah di Nganjuk maupun kota-kota sekitar. SMPK Budi Luhur dikenal memiliki kekhasan dalam kedisiplinan serta prestasi akademik dan nonakademik, khususnya olahraga basket.<br/><br/>Memasuki tahun 1991–1992, SMPK Budi Luhur sempat menghadapi krisis jumlah peserta didik akibat berkembangnya sekolah negeri dan sekolah kejuruan. Kondisi tersebut direspons melalui gerakan pelayanan dan kepedulian umat, antara lain Gerakan Anak Asuh, pembangunan asrama, pelibatan guru Katolik dari sekolah negeri, penugasan tenaga pendidik, pemberian beasiswa, serta penggalangan dukungan bagi keberlangsungan sekolah. Upaya tersebut menjadi bagian dari perjalanan sekolah dalam mempertahankan karya pendidikan Katolik di Nganjuk. Hingga kini, SMPK Budi Luhur terus berkembang dan berdasarkan penilaian Badan Akreditasi Nasional tahun 2023 memperoleh akreditasi A.",
            programs: "Program unggulan Solo Vocal menjadi salah satu wadah pengembangan bakat dan kreativitas peserta didik di bidang seni sekaligus sarana membangun kepercayaan diri, kedisiplinan, keberanian tampil, dan kemampuan mengekspresikan diri secara positif. Melalui latihan yang terarah dan kesempatan mengikuti berbagai kegiatan maupun kompetisi, siswa didampingi untuk mengembangkan potensi vokalnya secara optimal sekaligus menumbuhkan sikap tanggung jawab, ketekunan, sportivitas, dan semangat berprestasi yang sejalan dengan komitmen sekolah dalam membentuk pribadi yang berkarakter dan mampu mengembangkan talenta yang dimiliki.",
            address: "Jl. Jendral Basuki Rahmad No. 2 Nganjuk ",
            phone: "(0358) 321669",
            email: "smpknganjuk@gmail.com",
            website: "http://smpkbudiluhurnganjuk.sch.id/", 
            // Contoh jika ada sosmed yang kosong:
            instagram: "https://www.instagram.com/smpknganjuk/",
            facebook: "", 
            youtube: "https://www.youtube.com/@smpkatolikbudiluhurnganjuk5373",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.69841196684!2d111.9015552!3d-7.601603000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784b0652542d03%3A0xd389a99f52568131!2sSMP%20Katolik%20Budi%20Luhur!5e1!3m2!1sid!2sid!4v1789006012695!5m2!1sid!2sid"
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