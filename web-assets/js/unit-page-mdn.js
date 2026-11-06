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
            name: "TK Bavo Madiun",
            logo: "https://i.ibb.co.com/rKdmRH8W/TK-St-Bavo.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "TK Katolik Santo Bavo Madiun berdiri melalui prakarsa dan semangat pelayanan para Romo yang mengajukan permohonan izin pendirian pada 25 November 1996. Berawal dari Desa Rejomulyo, Jalan Bumi Jaya No. 3, dengan satu ruang kelas sederhana dan bahasa Jawa sebagai pengantar, sekolah ini terus berkembang hingga kini beralamat di Jalan Bumi Jaya No. 60 Madiun. Memasuki usia 75 tahun, TKK Santo Bavo tetap berkomitmen mendidik anak-anak dengan kasih, iman, dan semangat pelayanan melalui pengembangan kualitas pendidikan serta penyediaan lingkungan belajar yang nyaman dan menyenangkan.<br/><br/>Dalam upaya meningkatkan kualitas pendidikan, sekolah terus mendorong penguatan kemitraan dengan orang tua, sebagaimana tercermin dalam indikator E6 Rapor Pendidikan yang masih berada pada kategori sedang. Selain itu, penerapan pembelajaran yang sesuai dengan karakteristik anak usia dini (indikator D2) perlu terus dikembangkan melalui inovasi pembelajaran berbasis bermain yang menyenangkan, aktif, bermakna, dan berpusat pada anak. Dengan demikian, sinergi antara sekolah dan keluarga diharapkan semakin kuat dalam mendukung tumbuh kembang peserta didik secara optimal.",
            programs: "Sebagai wujud komitmen dalam mendidik anak secara utuh, TK Katolik Santo Bavo mengembangkan dua fokus utama, yaitu Jalan Iman dan Pengembangan Bakat dan Minat. Melalui Jalan Iman, anak-anak dibimbing untuk membangun karakter dan nilai-nilai spiritual sejak dini melalui doa sederhana, lagu rohani, cerita Kitab Suci, serta devosi anak. Sementara itu, pengembangan bakat dan minat diwujudkan melalui berbagai kegiatan ekstrakurikuler yang memberikan kesempatan kepada setiap anak untuk mengenali potensi, mengembangkan kreativitas, serta menumbuhkan rasa percaya diri sesuai dengan keunikan masing-masing.",
            address: "Jl. Bumi Jaya No. 60 Rejo Mulyo Madiun",
            phone: "(0351) 482244",
            whatsapp: "",
            email: "tkksantobavo60@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/tkksantobavo60",
            facebook: "",
            youtube: "https://www.youtube.com/@SantoBavo",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.155791684265!2d111.5390458!3d-7.616276899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bee3d9f1ffa9%3A0x1242719f6cff298e!2sTK%20Santo%20Bavo!5e1!3m2!1sid!2sid!4v1793801899264!5m2!1sid!2sid"
        },
        {
            id: 2,
            level: "TK",
            name: "TK St. Melania Ponorogo",
            logo: "https://i.ibb.co.com/Zp6ZVb2J/TK-St-Melania.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "TK Santa Melania Ponorogo merupakan lembaga pendidikan anak usia dini yang berlokasi di Jalan Raden Saleh No. 58 Ponorogo. Dengan semangat CERIA (Cekatan, Empati, Responsif, Inisiatif, dan Aktif), sekolah berkomitmen menghadirkan lingkungan belajar yang aman, menyenangkan, dan penuh kasih. Pembelajaran dirancang sesuai tahap perkembangan anak melalui pengalaman yang bermakna, mendorong keberanian bereksplorasi, kreativitas, kemandirian, serta perkembangan potensi diri secara utuh.<br/><br/>Sebagai bagian dari identitas sekolah, TK Santa Melania mengembangkan Program Katolisitas yang menanamkan nilai iman, kasih, kepedulian, dan penghargaan terhadap sesama serta ciptaan Tuhan. Melalui kolaborasi antara guru, orang tua, dan komunitas sekolah, TK Santa Melania terus berupaya membentuk pribadi yang berkarakter, bertanggung jawab, dan percaya diri sebagai bekal untuk melangkah menuju masa depan.",
            programs: "Dalam mendukung tumbuh kembang anak secara utuh, TK Santa Melania mengembangkan berbagai program unggulan, meliputi pembiasaan doa dan meditasi untuk menumbuhkan ketenangan serta kedekatan anak dengan Tuhan, dan Program Katolisitas untuk menanamkan nilai iman, kasih, serta kepedulian terhadap sesama. Selain itu, sekolah menyediakan kegiatan ekstrakurikuler seperti Bahasa Inggris, Bahasa Mandarin, Calistung, dan Mewarnai sebagai wadah untuk memperkaya pengalaman belajar, mengembangkan kreativitas, serta menggali potensi dan bakat anak sejak dini.",
            address: "Jl. Raden Saleh No 58 Mangkujayan Ponorogo",
            phone: "085233582907",
            whatsapp: "6285233582907",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/tksantamelaniaponorogo",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4729.351051733162!2d111.4641429!3d-7.866163800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e799f83375f38c7%3A0xbef442c7d787671f!2sYayasan%20Yohannes%20Gabriel%20TKK%20Santa%20Melania!5e1!3m2!1sid!2sid!4v1793884301434!5m2!1sid!2sid"
        },
        {
            id: 3,
            level: "TK",
            name: "TK Pancasila Klepu",
            logo: "https://i.ibb.co.com/fdR2J6c0/TK-Pancasil-Klepu.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Desa Klepu Kec. Sooko Ponorogo",
            phone: "",
            whatsapp: "",
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
            name: "SDK Santa Maria Madiun",
            logo: "",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SDK Santa Maria Madiun merupakan lembaga pendidikan yang berdiri sejak tahun 1933 dan berada di bawah naungan St. John Gabriel Foundation. Dengan identitas sebagai sekolah Katolik, SDK Santa Maria senantiasa mengintegrasikan nilai-nilai iman dan katolisitas dalam kehidupan sekolah melalui berbagai kegiatan yang menanamkan spiritualitas, kasih, kepedulian, dan pembentukan karakter peserta didik.<br/><br/>Selain berfokus pada pendidikan dan pembentukan karakter, SDK Santa Maria Madiun juga mengembangkan hubungan serta kolaborasi sosial dengan masyarakat sekitar, lembaga sosial, dan dunia usaha. Sinergi ini menjadi bagian dari upaya memperluas pengalaman belajar peserta didik sekaligus menumbuhkan kepedulian sosial dan kemampuan berinteraksi dengan lingkungan masyarakat.",
            programs: "Sebagai upaya meningkatkan kemampuan literasi dan numerasi peserta didik, SDK Santa Maria Madiun mengembangkan program SARI SARI MATA (Satu Hari Satu Cerita Matematika) yang diintegrasikan melalui kegiatan Cerita Alkitab pada pagi hari. Program ini mengajak peserta didik belajar memahami cerita, menemukan informasi, serta mengenali konsep dan keterampilan matematika melalui aktivitas yang kontekstual dan menyenangkan. Selain mengembangkan kemampuan akademis, program ini juga menjadi sarana menanamkan nilai-nilai iman dan karakter dalam kehidupan sehari-hari.",
            address: "Jl. Cokroaminoto No. 127 Taman Madiun",
            phone: "(0351)464083",
            whatsapp: "",
            email: "stmaria12ae@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "https://www.youtube.com/@sdksantamariamadiun",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4731.926517263992!2d111.5197975!3d-7.637009000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be60fbe4becb%3A0x8fc1402823a65c43!2sSDK%20SANTA%20MARIA%201!5e1!3m2!1sid!2sid!4v1793884570247!5m2!1sid!2sid"
        },
        {
            id: 5,
            level: "SD",
            name: "SDK Santo Bavo",
            logo: "https://i.ibb.co.com/SwGZYjbk/SD-St-Bavo.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SDK Santo Bavo Madiun merupakan lembaga pendidikan dasar Katolik di bawah naungan St. John Gabriel Foundation yang berlokasi di Jalan Bumijaya No. 60, Rejomulyo, Kecamatan Kartoharjo, Kota Madiun. Sekolah hadir sebagai bagian dari karya pelayanan pendidikan yang berkomitmen mendampingi peserta didik untuk berkembang secara utuh, baik dalam aspek akademik maupun nonakademik. Melalui pembelajaran, pembiasaan, kegiatan keagamaan, serta pengembangan minat dan bakat, sekolah berupaya menciptakan lingkungan belajar yang mendukung potensi dan keunikan setiap anak.<br/><br/>Dengan kekhasan pendidikan karakter berlandaskan nilai-nilai Kristiani, SDK Santo Bavo Madiun menanamkan nilai iman, kasih, kejujuran, tanggung jawab, kedisiplinan, kepedulian, dan kerja sama dalam kehidupan sehari-hari. Sekolah berkomitmen memadukan pengetahuan, keterampilan, iman, dan pembentukan karakter agar peserta didik tumbuh menjadi pribadi yang mandiri, berintegritas, peduli terhadap sesama dan lingkungan, serta siap menghadapi tantangan kehidupan di masa depan.",
            programs: "Dalam mendukung pengembangan potensi peserta didik secara menyeluruh, SDK Santo Bavo Madiun menyelenggarakan berbagai program unggulan, meliputi ekstrakurikuler Drum Band, literasi digital, pembinaan Olimpiade Sains, serta pengembangan karakter dan keagamaan berlandaskan nilai-nilai Kristiani. Selain itu, sekolah juga membekali peserta didik dengan kemampuan berbahasa asing melalui pembelajaran Bahasa Inggris serta keterampilan hidup (life skills) agar tumbuh menjadi pribadi yang kreatif, kompeten, mandiri, dan siap menghadapi tantangan kehidupan.",
            address: "Jl. Bumijaya No. 60 Kertoharjo Madiun",
            phone: "(0351)485149",
            whatsapp: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdksantobavomadiun60",
            facebook: "",
            youtube: "https://www.youtube.com/@sdksantobavomadiun",
            maps: ""
        },
        {
            id: 6,
            level: "SD",
            name: "SD Santa Maria",
            logo: "https://i.ibb.co.com/4ZbjbzpW/SD-St-Maria-Ponorogo.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Santa Maria Ponorogo merupakan lembaga pendidikan dasar swasta di bawah naungan St. John Gabriel Foundation Perwakilan Madiun-Ponorogo yang berlokasi di Jalan Raden Saleh No. 58, Kelurahan Mangkujayan, Kabupaten Ponorogo. Dengan akreditasi B dan lingkungan sekolah yang strategis di pusat kota, SD Santa Maria didukung oleh sarana prasarana pembelajaran yang memadai, tenaga pendidik dan kependidikan yang mendukung, serta potensi lingkungan sekitar di bidang kesehatan, olahraga, seni, budaya, dan sosial. Dengan jumlah peserta didik yang relatif proporsional, sekolah memiliki peluang untuk mengembangkan pembelajaran dan pendampingan secara lebih optimal sesuai kebutuhan dan potensi setiap anak.<br/><br/>Berlandaskan visi membentuk peserta didik yang cerdas, terampil, berkarakter cinta kasih, berbudi pekerti luhur, peduli lingkungan, berwawasan IPTEK, dan nasionalis, SD Santa Maria mengusung motto “Mengasah Hati, Mengolah Budi.” Komitmen tersebut diwujudkan melalui pembelajaran bermutu, pengembangan bakat dan minat, penguatan karakter dan spiritualitas, kepedulian terhadap lingkungan melalui budaya BeRSehATi (Bersih, Rindang, Sehat, Asri, Tertib), serta pembiasaan budaya 5S dan TOMAT (Tolong, Maaf, Terima Kasih). Seluruh upaya ini diarahkan untuk membentuk generasi yang berkarakter, beriman, peduli, dan siap menjadi kader bangsa serta Gereja.",
            programs: "Dalam mendukung pengembangan potensi peserta didik secara menyeluruh, SD Santa Maria menyelenggarakan berbagai kegiatan kokurikuler dan ekstrakurikuler. Kegiatan kokurikuler meliputi retret siswa, membaca Kitab Suci, pembinaan cinta lingkungan melalui program Jumat Bersih, tambahan pelajaran untuk pemantapan Ujian Sekolah, pembelajaran Coding dan AI, serta pembinaan Tes Kemampuan Akademik (TKA). Sementara itu, kegiatan ekstrakurikuler mencakup Pramuka, Komputer (Microsoft Word, Paint, dan Canva), Band/Ansambel, Tari, Renang, Basket, Biola, Drumband, Futsal, dan Bahasa Mandarin. Berbagai program tersebut dirancang untuk memperkuat iman dan karakter, meningkatkan kemampuan akademik dan literasi digital, serta mengembangkan kreativitas, keterampilan, kedisiplinan, kemandirian, jiwa kepemimpinan, dan bakat peserta didik di berbagai bidang.",
            address: "Jl. Raden Saleh No. 58 Mangkujayan, Ponorogo",
            phone: "085113181858",
            whatsapp: "6285113181858",
            email: "sdksantamariaponorogo@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sd_santa_maria_ponorogo",
            facebook: "https://www.facebook.com/sdksantamariaponorogo",
            youtube: "https://www.youtube.com/@sdksantamariaponorogo3704",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4729.352723554681!2d111.46421!3d-7.866017200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e799f833de7d659%3A0xd75dd23b4cf147ea!2sSDK%20Santa%20Maria!5e1!3m2!1sid!2sid!4v1793886379550!5m2!1sid!2sid"
        },
        {
            id: 7,
            level: "SMP",
            name: "SMPK Santo Realino Saradan",
            logo: "https://i.ibb.co.com/FLZq1mzX/SMPK-St-Realino.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMPK Santo Realino berdiri pada 14 April 1964 di bawah naungan Yayasan Wiyata Dharma. Awalnya, sekolah ini didirikan sebagai sekolah persiapan bagi masyarakat di Kecamatan Saradan sebelum akhirnya SMP Negeri 1 Saradan dibangun. Dalam perkembangannya, SMPK Santo Realino kemudian diambil alih oleh Keuskupan Surabaya. Berlokasi di Desa Bandungan, Kecamatan Saradan, Kabupaten Madiun, sekolah ini melayani peserta didik dari berbagai wilayah sekitar, termasuk Desa Bandungan dan Kecamatan Wilangan, Kabupaten Nganjuk. Dengan latar belakang keluarga yang beragam dan mayoritas berasal dari kalangan sederhana, sekolah menjunjung tinggi nilai toleransi dan keberagaman. Hal ini tercermin dari kehidupan sekolah yang terdiri atas peserta didik beragama Katolik, Kristen, dan Islam.<br/><br/>Dalam penyelenggaraan pendidikan, SMPK Santo Realino didukung oleh tenaga pendidik dan kependidikan yang berkomitmen mendampingi perkembangan peserta didik. Sekolah juga menyediakan berbagai kegiatan ekstrakurikuler, seperti Pramuka, Seni Tari, dan English Club, serta pengembangan minat di bidang jurnalistik, teater, dan Smart News. Salah satu program unggulannya adalah jurnalistik yang menjadi wadah bagi peserta didik untuk mengembangkan kreativitas, kemampuan berkomunikasi, berpikir kritis, dan keterampilan literasi.",
            programs: "Program ekstrakurikuler Jurnalistik menjadi salah satu kegiatan unggulan SMPK Santo Realino yang bertujuan mengembangkan kemampuan literasi, kreativitas, dan komunikasi peserta didik. Melalui kegiatan ini, siswa diajak untuk mengenal proses jurnalistik, mulai dari mencari dan mengolah informasi, melakukan wawancara, menulis berita, hingga menyajikan informasi secara menarik dan bertanggung jawab. Program ini juga melatih kemampuan berpikir kritis, keberanian menyampaikan gagasan, kerja sama, serta kepekaan terhadap berbagai peristiwa di lingkungan sekitar. Dengan demikian, peserta didik diharapkan mampu menjadi pribadi yang kreatif, komunikatif, dan bijak dalam menyampaikan informasi.",
            address: "Desa Bandungan Saradan Madiun",
            phone: "081393753542",
            whatsapp: "6281393753542",
            email: "sarirealino@gmail.com",
            website: "https://observersmartchannel.blogspot.com/",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpksantorealino",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.960239632317!2d111.8328525!3d-7.543086799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79ca961d9475ad%3A0xa48c7f208f5d5e6d!2sSMPK%20Santo%20Realino%20Saradan!5e1!3m2!1sid!2sid!4v1793886785556!5m2!1sid!2sid"
        },
        {
            id: 8,
            level: "SMP",
            name: "SMP Katolik Slamet Riyadi",
            logo: "https://i.ibb.co.com/dwHP4C8B/SMPK-Slamet-Riyadi.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMP Katolik Slamet Riyadi Ponorogo, yang dikenal dengan sebutan SMPK Slamet Riyadi atau SLARIPO, berdiri pada 1 Agustus 1956 atas prakarsa Pastor J. Van Steen, CM. Nama sekolah diambil dari tokoh pahlawan nasional Ignatius Slamet Riyadi (1927–1950) sebagai bentuk penghormatan terhadap semangat perjuangan dan nasionalisme. Sebagai sekolah menengah pertama swasta pertama di Kabupaten Ponorogo, SMPK Slamet Riyadi berlokasi di Jalan Gajah Mada Nomor 12, Surodikraman, Kecamatan Ponorogo, Kabupaten Ponorogo, Jawa Timur.<br/><br/>Dalam penyelenggaraan pendidikan, SMPK Slamet Riyadi memiliki visi mewujudkan insan pendidikan yang penuh kasih, unggul dalam prestasi, berbudaya disiplin, kreatif, mandiri, mampu berkolaborasi, berkebinekaan global, serta berjiwa nasionalis. Visi tersebut menjadi landasan sekolah dalam mengembangkan potensi dan karakter peserta didik secara utuh. Dengan motto “Age Quod Agis” (Lakukan yang Terbaik), sekolah mendorong seluruh warga sekolah untuk senantiasa memberikan kemampuan terbaik dalam setiap karya dan tanggung jawab.",
            programs: "Dalam mendukung pengembangan peserta didik secara utuh, SMPK Slamet Riyadi mengembangkan tiga fokus program utama, yaitu Character Building, Pengembangan Akademik, dan Life Skill. Pembentukan karakter diwujudkan melalui Latihan Dasar Kepemimpinan Siswa (LDKS), pembiasaan pagi, serta kegiatan rohani. Dalam bidang akademik, sekolah menyediakan pembelajaran Bahasa Mandarin secara rutin bagi seluruh siswa, English Club, pembinaan intensif Sains untuk persiapan olimpiade, serta pendampingan potensi akademik bekerja sama dengan Biro Psikologi Universitas Widya Mandala Surabaya Kampus Kota Madiun. Sementara itu, pengembangan keterampilan hidup dilakukan melalui pembelajaran teknologi, informasi, dan komunikasi (TIK), program kewirausahaan berbasis proyek seperti Fun Cooking dan Bazaar, serta pendampingan perencanaan karier melalui kerja sama dengan Universitas Widya Mandala Surabaya Kampus Kota Madiun. Berbagai program tersebut dirancang untuk membentuk peserta didik yang berkarakter, berprestasi, mandiri, kreatif, dan siap menghadapi tantangan masa depan.",
            address: "Jl. Gajah Mada 12 Ponorogo",
            phone: "0352-481348",
            whatsapp: "6285648921525",
            email: "smpkatolikpo@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpkslametriyadi.png",
            facebook: "",
            youtube: "https://www.youtube.com/@smpkslametriyadiponorogo8716",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4729.288127236185!2d111.47166910000001!3d-7.871679599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e799f862fcb1c09%3A0x14c9e212c83bb7d7!2sSMP%20Katolik%20Slamet%20Riyadi!5e1!3m2!1sid!2sid!4v1793887069049!5m2!1sid!2sid"
        },
        {
            id: 9,
            level: "SMA",
            name: "SMAS Santo Bonaventura",
            logo: "https://i.ibb.co.com/NgHT7fMZ/SMAK-Bona.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Diponegoro No. 45 Mangunharjo Madiun",
            phone: "",
            whatsapp: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: ""
        },
        {
            id: 10,
            level: "SMK",
            name: "SMKS St Bonaventura 1 Madiun",
            logo: "",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMK St. Bonaventura 1 Madiun merupakan sekolah terakreditasi A yang berkomitmen membentuk generasi berkarakter, kompeten, dan siap bersaing di dunia kerja. Dengan tiga program keahlian unggulan, yaitu Manajemen Perkantoran dan Layanan Bisnis, Marketing, serta Akuntansi dan Keuangan, sekolah menghadirkan pendidikan yang relevan dengan kebutuhan dunia usaha dan dunia industri. Lulusan dipersiapkan untuk memasuki dunia kerja, baik di dalam maupun luar negeri, termasuk melalui kesempatan magang internasional di Jepang, Turki, dan Jerman. Untuk mendukung akses pendidikan, sekolah menyediakan fasilitas bebas uang gedung, SPP gratis selama tiga tahun, asrama putra dan putri gratis, serta pilihan kelas online bagi siswa yang memiliki keterbatasan jarak maupun waktu.<br/><br/>Selain mengembangkan kompetensi akademik dan keterampilan kerja, SMK St. Bonaventura 1 Madiun juga menanamkan nilai toleransi, kedisiplinan, kemandirian, tanggung jawab, dan akhlak mulia melalui berbagai kegiatan pembentukan karakter. Pembelajaran agama diberikan sesuai keyakinan masing-masing peserta didik dalam semangat saling menghormati. Keberagaman siswa yang berasal dari berbagai provinsi di Indonesia hingga Malaysia turut menciptakan lingkungan belajar yang inklusif dan penuh persaudaraan. Dengan semangat “Belajar Berkualitas, Berkarakter, Siap Kerja, Siap Mendunia,” sekolah hadir bukan sekadar sebagai tempat belajar, melainkan sebagai ruang untuk membangun karakter, mengembangkan kompetensi, dan mempersiapkan masa depan.",
            programs: "Sebagai bentuk komitmen dalam mempersiapkan peserta didik menghadapi masa depan, SMK St. Bonaventura 1 Madiun menghadirkan berbagai program unggulan, mulai dari pendidikan berbudaya nasional yang terbuka bagi semua agama dan budaya, beragam kelas kewirausahaan, hingga kemitraan dengan berbagai perusahaan dan perguruan tinggi. Sekolah juga membuka peluang penempatan tenaga kerja di dalam maupun luar negeri, khususnya kawasan Asia, serta program Kuliah Kerja di Jerman. Untuk memperluas akses pendidikan yang berkualitas, tersedia pula beasiswa afirmasi bagi peserta didik dari keluarga kurang mampu. Berbagai program ini menjadi wujud upaya sekolah dalam memberikan kesempatan berkembang, berkarier, dan meraih masa depan yang lebih baik bagi setiap peserta didik.",
            address: "Jl. P. Sudirman 83B Taman Madiun",
            phone: "(0351) 454237",
            whatsapp: "",
            email: "smkbonaventura1@gmail.com",
            website: "https://bovensa.sch.id/",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smk_bona_1",
            facebook: "https://www.facebook.com/bovensa.madiun.9",
            youtube: "https://www.youtube.com/@smkst.bonaventura1madiun177",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4731.983003099826!2d111.5207985757814!3d-7.631906475478168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bef58e974a57%3A0xb178d511a0bc586!2sSMK%20St.%20Bonaventura%201%20Madiun!5e1!3m2!1sid!2sid!4v1793887558629!5m2!1sid!2sid"
        },
        {
            id: 11,
            level: "SMK",
            name: "SMKS St Bonaventura 2 Madiun",
            logo: "https://i.ibb.co.com/PzMKM7by/SMK-St-Bona.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMK St. Bonaventura 2 Madiun merupakan lembaga pendidikan kejuruan yang berkomitmen membekali peserta didik dengan kompetensi sesuai kebutuhan dunia kerja melalui dua program keahlian, yaitu Teknik Kendaraan Ringan dan Teknik Pemesinan. Kedua program tersebut dirancang untuk mengembangkan keterampilan teknis, mulai dari perawatan dan perbaikan kendaraan hingga pengoperasian mesin dan pembuatan komponen industri. Melalui pembelajaran teori dan praktik, sekolah berupaya menghasilkan lulusan yang kompeten, terampil, disiplin, mandiri, serta siap bekerja maupun melanjutkan pendidikan.<br/><br/>Untuk memperluas akses pendidikan bagi peserta didik dari luar Kota Madiun, SMK St. Bonaventura 2 menyediakan fasilitas asrama yang berada dalam satu lokasi dengan sekolah di Jalan Borobudur No. 70, Kota Madiun. Asrama ini menjadi solusi bagi siswa yang menghadapi kendala jarak, tempat tinggal, maupun kondisi sosial ekonomi keluarga. Selain sebagai tempat tinggal, asrama juga menjadi bagian dari lingkungan pembinaan yang menanamkan kedisiplinan, kemandirian, tanggung jawab, dan karakter positif. Melalui dukungan fasilitas dan program pendidikan tersebut, sekolah berkomitmen menjangkau lebih banyak peserta didik serta mempersiapkan lulusan yang terampil, berkarakter, dan siap menghadapi dunia kerja.",
            programs: "Sebagai upaya memperluas kompetensi dan kesiapan kerja peserta didik, SMK St. Bonaventura 2 Madiun mengembangkan berbagai kelas keterampilan tambahan, meliputi Japanese Class untuk membekali siswa dengan kemampuan berbahasa Jepang, Welding Class untuk mengembangkan keterampilan pengelasan, Driver Class untuk memberikan pengetahuan dan keterampilan dasar mengemudi, serta Coding & AI Class untuk mengenalkan teknologi pemrograman dan kecerdasan buatan. Berbagai program ini dirancang untuk memperkaya keterampilan praktis, meningkatkan daya saing, serta membuka peluang karier peserta didik di dunia kerja yang semakin berkembang.",
            address: "Jl. Borobudur No. 70 Madiun",
            phone: "(0351)462072",
            whatsapp: "",
            email: "smksbonaventura2madiun@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smksbonaventura2madiun",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4732.194676284669!2d111.5238532!3d-7.6127552000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79bf006dc7924d%3A0xdbf87b413ed0b06a!2sSMK%20St.%20Bonaventura%202%20Madiun!5e1!3m2!1sid!2sid!4v1793887789958!5m2!1sid!2sid"
        },
        {
            id: 12,
            level: "SMK",
            name: "SMKS Farmasi Katolik Bina Farma Madiun",
            logo: "https://i.ibb.co.com/bMm1Ywjd/SMK-Farmasi-Madiun.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMK Farmasi Katolik Bina Farma Madiun merupakan lembaga pendidikan kejuruan swasta di bawah naungan St. John Gabriel Foundation yang berlokasi di Kota Madiun, Jawa Timur. Sekolah ini memiliki sejarah panjang dalam pendidikan kesehatan yang dimulai pada 11 Juli 1969 dengan nama Sekolah Asisten Apoteker (SAA), kemudian berkembang menjadi Sekolah Menengah Farmasi (SMF), hingga bertransformasi menjadi SMK pada tahun 2006. Dengan kekhasan di bidang Teknologi Farmasi, khususnya Farmasi Klinis dan Komunitas, sekolah mengembangkan pendidikan vokasi yang memadukan penguasaan ilmu pengetahuan, teknologi, serta keterampilan praktik untuk mempersiapkan peserta didik menghadapi dunia kerja di bidang kefarmasian dan kesehatan.<br/><br/>Sebagai lembaga pendidikan Katolik, SMK Farmasi Bina Farma Madiun juga mengintegrasikan nilai-nilai kasih, kepedulian, kejujuran, tanggung jawab, pelayanan, dan penghargaan terhadap keberagaman dalam kehidupan sekolah. Pembentukan karakter diperkuat melalui pembiasaan sikap positif, nasionalisme, gotong royong, kepedulian sosial, pengembangan kreativitas, literasi, dan kemampuan bernalar kritis. Dengan demikian, sekolah berkomitmen menghasilkan lulusan yang tidak hanya kompeten secara profesional, tetapi juga berintegritas, santun, peduli terhadap sesama, dan memiliki semangat melayani.",
            programs: "Dalam mendukung pendidikan vokasi yang unggul dan relevan dengan perkembangan dunia kesehatan, SMK Farmasi Bina Farma Madiun mengembangkan berbagai program unggulan yang mencakup penguatan kompetensi, karakter, inovasi, dan kesiapan karier peserta didik. Program tersebut meliputi BINA FARMA CARE untuk pembinaan karakter dan pelayanan sosial, BINA LAB untuk penguatan keterampilan laboratorium farmasi, PHARMA GOES TO COMMUNITY untuk edukasi kesehatan masyarakat, PHARMA ENGLISH CLUB untuk pengembangan komunikasi bahasa Inggris, serta FARMA-PRENEUR untuk menumbuhkan jiwa kewirausahaan. Sekolah juga menghadirkan program BINA FARMA AWARD, sertifikasi kompetensi melalui LSP BINA FARMA, kemitraan industri dan rumah sakit, pembelajaran mendalam (Deep Learning for Pharmacy), penguatan kompetensi 6C, serta pengembangan sekolah ramah lingkungan melalui GREEN PHARMACY SCHOOL. Selain itu, terdapat DIGITAL PHARMACY CLASS, PHARMA RESEARCH & INNOVATION, BINA FARMA CHARACTER HABIT, serta ALUMNI & CAREER CENTER yang mendukung penguasaan teknologi, budaya riset, pembentukan karakter, dan pendampingan karier. Keseluruhan program ini dirancang untuk menghasilkan lulusan yang kompeten di bidang kefarmasian, berkarakter, inovatif, adaptif terhadap perkembangan teknologi, serta siap memasuki dunia kerja dan memberikan pelayanan kesehatan yang berhati nurani.",
            address: "Jl. Tulus Bakti No.5A Taman Madiun",
            phone: "(0351)452261",
            whatsapp: "",
            email: "binafarma@gmail.com",
            website: "https://smkfbinafarma.blogspot.com/",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smkfbinafarmamadiun/",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4731.893904329441!2d111.52914597578194!3d-7.639953475570595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79be8e63256f65%3A0xa9fbbf2940952cfc!2sSMK%20Farmasi%20Bina%20Farma!5e1!3m2!1sid!2sid!4v1793888045652!5m2!1sid!2sid"
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