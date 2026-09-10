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
            name: "KB St. Marry",
            logo: "https://i.ibb.co.com/pjw5SsTF/TK-Santa-Maria.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB & TKK Santa Maria Wiyung Surabaya berdiri pada 1 Juli 2001 di Jl. Griya Babatan Mukti C 33, Wiyung, Surabaya, oleh Dr. Yustinus Budi Hermanto, Pr., MM selaku Ketua Yayasan Yohannes Gabriel Perwakilan I Surabaya. Yayasan Yohannes Gabriel Perwakilan I Surabaya merupakan salah satu dari lima perwakilan yayasan pendidikan Katolik di bawah naungan Keuskupan Surabaya yang membawahi 26 unit sekolah. Pada awal berdiri, sekolah memiliki 93 peserta didik. Kehadiran KB & TKK Santa Maria dilatarbelakangi oleh kebutuhan umat Katolik/Kristiani akan pendidikan yang berlandaskan nilai-nilai iman, sekaligus terbuka bagi masyarakat umum yang ingin memberikan pendidikan terbaik bagi putra-putrinya. <br/><br/>KB & TKK Santa Maria bergerak di bidang Pendidikan Anak Usia Dini (PAUD) dengan memberikan layanan pendidikan bagi anak usia 3-6 tahun melalui kelompok usia 3-4, 4-5, dan 5-6 tahun. Sebagai lembaga pendidikan Katolik, sekolah berkomitmen turut mencerdaskan bangsa dengan memberikan pendidikan yang mengembangkan pengetahuan, keterampilan, serta pertumbuhan jasmani dan rohani anak. Seluruh proses pendidikan diarahkan untuk membentuk peserta didik yang siap melanjutkan pendidikan, mampu menerapkan ilmu pengetahuan dan teknologi dalam kehidupan, serta memiliki landasan nilai keimanan dan kemanusiaan.",
            programs: "Untuk mendukung perkembangan anak secara menyeluruh, KB & TKK Santa Maria Wiyung Surabaya menghadirkan berbagai program pengembangan karakter, potensi, kreativitas, dan iman, melalui <b>Character Class, Mandarin Class, Vocal Class, Computer Class, Art & Drawing Class, Dancing Class, serta Bible Camp & Katolisitas.</b> Berbagai kegiatan ini dirancang untuk membantu anak tumbuh menjadi pribadi yang kreatif, percaya diri, berkarakter, dan berlandaskan nilai-nilai keimanan serta kemanusiaan.",
            address: "Jl. Griya Babatan Mukti C-33, Wiyung, Surabaya ",
            phone: "31.7526132",
            email: "tkksantamariawiyung1@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/tk_sanmar_wiyung/",
            facebook: "https://www.facebook.com/tkksantamaria.wiyung",
            youtube: "https://www.youtube.com/@santamaria2164",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.7683116952176!2d112.6776325!3d-7.311805799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fcf841aec0e1%3A0x8e3d29119f1ae50!2sTK%20SANTA%20MARIA!5e1!3m2!1sid!2sid!4v1788155441659!5m2!1sid!2sid"
        },
        {
            id: 2,
            level: "TK",
            name: "TK St. Marry",
            logo: "https://i.ibb.co.com/pjw5SsTF/TK-Santa-Maria.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "KB & TKK Santa Maria Wiyung Surabaya berdiri pada 1 Juli 2001 di Jl. Griya Babatan Mukti C 33, Wiyung, Surabaya, oleh Dr. Yustinus Budi Hermanto, Pr., MM selaku Ketua Yayasan Yohannes Gabriel Perwakilan I Surabaya. Yayasan Yohannes Gabriel Perwakilan I Surabaya merupakan salah satu dari lima perwakilan yayasan pendidikan Katolik di bawah naungan Keuskupan Surabaya yang membawahi 26 unit sekolah. Pada awal berdiri, sekolah memiliki 93 peserta didik. Kehadiran KB & TKK Santa Maria dilatarbelakangi oleh kebutuhan umat Katolik/Kristiani akan pendidikan yang berlandaskan nilai-nilai iman, sekaligus terbuka bagi masyarakat umum yang ingin memberikan pendidikan terbaik bagi putra-putrinya. <br/><br/>KB & TKK Santa Maria bergerak di bidang Pendidikan Anak Usia Dini (PAUD) dengan memberikan layanan pendidikan bagi anak usia 3-6 tahun melalui kelompok usia 3-4, 4-5, dan 5-6 tahun. Sebagai lembaga pendidikan Katolik, sekolah berkomitmen turut mencerdaskan bangsa dengan memberikan pendidikan yang mengembangkan pengetahuan, keterampilan, serta pertumbuhan jasmani dan rohani anak. Seluruh proses pendidikan diarahkan untuk membentuk peserta didik yang siap melanjutkan pendidikan, mampu menerapkan ilmu pengetahuan dan teknologi dalam kehidupan, serta memiliki landasan nilai keimanan dan kemanusiaan.",
            programs: "Untuk mendukung perkembangan anak secara menyeluruh, KB & TKK Santa Maria Wiyung Surabaya menghadirkan berbagai program pengembangan karakter, potensi, kreativitas, dan iman, melalui <b>Character Class, Mandarin Class, Vocal Class, Computer Class, Art & Drawing Class, Dancing Class, serta Bible Camp & Katolisitas.</b> Berbagai kegiatan ini dirancang untuk membantu anak tumbuh menjadi pribadi yang kreatif, percaya diri, berkarakter, dan berlandaskan nilai-nilai keimanan serta kemanusiaan.",
            address: "Jl. Griya Babatan Mukti C-33, Wiyung, Surabaya ",
            phone: "31.7526132",
            email: "tkksantamariawiyung1@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/tk_sanmar_wiyung/",
            facebook: "https://www.facebook.com/tkksantamaria.wiyung",
            youtube: "https://www.youtube.com/@santamaria2164",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.7683116952176!2d112.6776325!3d-7.311805799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fcf841aec0e1%3A0x8e3d29119f1ae50!2sTK%20SANTA%20MARIA!5e1!3m2!1sid!2sid!4v1788155441659!5m2!1sid!2sid"
        },
        {
            id: 3,
            level: "TK",
            name: "TK Karitas 2",
            logo: "https://i.ibb.co.com/Xx0j25zW/TK-Karitas-II.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "TKK Karitas II merupakan lembaga pendidikan anak usia dini yang berkomitmen memberikan pendidikan menyeluruh berlandaskan nilai-nilai Katolik dalam lingkungan yang aman, nyaman, penuh kasih, dan menyenangkan. Melalui kegiatan bermain, bereksplorasi, berkreasi, dan belajar dari pengalaman, anak didampingi untuk mengembangkan rasa percaya diri, kemandirian, kreativitas, kemampuan berkomunikasi, serta keterampilan sosial dan emosional sesuai tahap perkembangannya. <br/><br/>Sebagai sekolah berciri khas Katolik, TKK Karitas II menanamkan nilai kasih, kepedulian, kejujuran, tanggung jawab, dan integritas melalui pembiasaan dalam kehidupan sehari-hari. Dengan dukungan pendidik, tenaga kependidikan, dan orang tua, sekolah berupaya membentuk anak yang beriman, berkarakter, mandiri, kreatif, percaya diri, dan peduli terhadap sesama, serta siap berkembang dan menghadapi jenjang pendidikan berikutnya.",
            programs: "TKK Karitas II memiliki berbagai program unggulan yang dirancang untuk mendukung perkembangan anak secara menyeluruh. <b>Fun Learning & Character Building</b> menghadirkan pembelajaran yang menyenangkan sekaligus menanamkan nilai-nilai karakter, sedangkan <b>Project bersama orangtua dan guru</b> mendorong keterlibatan aktif dalam proses belajar anak. Selain itu, program <b>Sekolah Ramah Lingkungan</b> membangun kepedulian dan kebiasaan positif anak terhadap kebersihan, kelestarian, dan lingkungan sekitar.",
            address: "Jl. Jelidro No.17, Sambikerep, Surabaya",
            phone: "0317440860",
            email: "tkkaritas2@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/tkkaritas2",
            facebook: "https://www.facebook.com/tkkatolikkaritas2",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100098.88960510107!2d112.5464065608746!3d-7.265692735058394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fe7a085bcb5b%3A0xa9758fbd3ea0582b!2sTaman%20Kanak%20-%20Kanak%20Karitas%20II%20Surabaya!5e1!3m2!1sid!2sid!4v1788241069878!5m2!1sid!2sid"
        },
        {
            id: 4,
            level: "TK",
            name: "TK Karitas 3",
            logo: "https://i.ibb.co.com/FkbQSSMv/TK-Karitas-III.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "TKS Karitas III Surabaya merupakan lembaga pendidikan Katolik yang berlokasi di kawasan strategis Surabaya Barat dan menjadi bagian dari kompleks pendidikan Karitas III. Sekolah hadir untuk memberikan pendidikan yang berlandaskan nilai-nilai Kristiani dan terbuka bagi masyarakat luas. Proses pendidikan didukung oleh tenaga pendidik yang kompeten, sarana-prasarana yang lengkap seperti playground, kolam renang, aula, dan ruang multimedia, serta kemitraan dengan berbagai pihak dalam layanan pendidikan, kesehatan, gizi, kerohanian, dan kegiatan outing class. Dukungan orang tua, masyarakat, pemerintah, dan berbagai stakeholder turut menjadi bagian penting dalam keberlangsungan dan pengembangan pendidikan di TKS Karitas III.<br/><br/>TKS Karitas III Surabaya berdiri pada 26 Juni 1983 di Jl. Darmo Permai Selatan XII/12, yang kemudian berkembang menjadi sekolah Katolik atas prakarsa R.D. FX. Urotosastro (Alm.). Seiring bertambahnya peserta didik, sekolah membangun gedung baru di Jl. Simpang Darmo Permai Utara VII/11 yang menjadi lokasi sekolah hingga saat ini. Dalam perjalanan panjangnya, TKS Karitas III terus beradaptasi mengikuti perkembangan zaman tanpa meninggalkan nilai-nilai Kristiani, serta berkomitmen meningkatkan mutu pendidikan dan prestasi peserta didik. Kepercayaan dan dukungan orang tua menjadi kekuatan utama bagi sekolah untuk terus bertumbuh dan memberikan layanan pendidikan terbaik.",
            programs: "Dalam mendukung perkembangan anak secara menyeluruh, TKS Karitas III mengembangkan berbagai program yang mencakup kemampuan Bahasa Inggris dan Mandarin, pembinaan katolisitas melalui BIAK, APP, Rosario, Adven, rekoleksi, pendalaman Kitab Suci, dan Misa bersama, serta penguatan karakter Kristiani seperti kerendahan hati, keberanian, dan kepedulian terhadap sesama. Program pendidikan didukung oleh tenaga pendidik yang kompeten, sarana-prasarana yang memadai dan bersih, pengelolaan keuangan yang sesuai RAPBS dan ketetapan yayasan, serta kerja sama dengan gereja, puskesmas, dan lembaga terkait. Sekolah juga memberikan ruang bagi anak untuk mengembangkan bakat dan minat melalui kegiatan vokal, menari, menggambar, berbagai lomba, serta aksi sosial seperti kegiatan Natal, APP, bakti sosial, dan bantuan bencana alam, sehingga anak tumbuh menjadi pribadi yang beriman, kreatif, percaya diri, dan peduli terhadap sesama.",
            address: "Jl. Simpang Darmo Permai Utara VII / 11 Surabaya",
            phone: "031-7310969",
            email: "tkkaritas3sby@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/tkkkaritas3_sby",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.9969635037323!2d112.68556!3d-7.279089699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fd007a5f0523%3A0xb3949276c2637317!2sPG%20TK%20KARITAS%20III%20SURABAYA!5e1!3m2!1sid!2sid!4v1788241764179!5m2!1sid!2sid"
        },
        {
            id: 5,
            level: "TK",
            name: "TK Karitas V",
            logo: "https://i.ibb.co.com/vvKgVrgH/TK-Karitas-V.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Taman Darmo Indah Barat I / C-6 Surabaya ",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0402438478272!2d112.34070647380156!3d-7.5705916747741115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786c8785b64461%3A0xb61bec8215d0e45e!2sWijana%20Mojoagung!5e0!3m2!1sid!2sid!4v1784784577209!5m2!1sid!2sid"
        },
        {
            id: 6,
            level: "TK",
            name: "TK Katarina",
            logo: "https://i.ibb.co.com/wrc3QwvD/TKK-Katarina.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Mojopahit 38 Surabaya",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.978759729383!2d112.7419089!3d-7.2816997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbe3124c3cc7%3A0xb42f35cd8f7fa611!2sTK.SDK.SMPK-KATARINA!5e1!3m2!1sid!2sid!4v1788243231688!5m2!1sid!2sid"
        },
        {
            id: 7,
            level: "TK",
            name: "TK St. Yusup Karangpilang",
            logo: "https://i.ibb.co.com/B51G4wxK/TK-Santo-Yusup.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Kebraon Barat I / No.4 Surabaya",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0402438478272!2d112.34070647380156!3d-7.5705916747741115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786c8785b64461%3A0xb61bec8215d0e45e!2sWijana%20Mojoagung!5e0!3m2!1sid!2sid!4v1784784577209!5m2!1sid!2sid"
        },
        {
            id: 8,
            level: "SD",
            name: "SD Katarina Surabaya",
            logo: "https://i.ibb.co.com/WNH0kVDk/SDK-Katarina.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Katolik Katarina merupakan lembaga pendidikan dasar Katolik di bawah naungan Yayasan Yohannes Gabriel yang berlokasi di Jalan Mojopahit No. 38, Tegalsari, Surabaya. Sekolah berkomitmen mendampingi peserta didik mengembangkan potensi akademik dan nonakademik secara optimal dengan berlandaskan kasih, iman, dan nilai-nilai Kristiani. Sebagai komunitas pembelajar yang berpusat pada siswa, SD Katolik Katarina menciptakan lingkungan belajar yang aman, kondusif, dan inklusif.<br/><br/>Pendidikan dikembangkan secara holistik dengan menyeimbangkan pembentukan karakter moral-spiritual dan keterampilan abad ke-21. Melalui dukungan pendidik yang profesional, tersertifikasi, dan terus meningkatkan kompetensi, sekolah membentuk peserta didik yang berintegritas, mandiri, peduli terhadap sesama, mencintai tanah air dan budaya lokal, serta siap menghadapi perkembangan zaman dengan kemampuan akademik dan karakter yang kuat.",
            programs: "Sebagai bagian dari komitmen membentuk peserta didik secara utuh, SD Katolik Katarina menghadirkan berbagai program unggulan yang mengintegrasikan iman, karakter, literasi, kepedulian lingkungan, dan pengembangan bakat. Pembiasaan doa multilingual dalam Bahasa Indonesia, Jawa, Inggris, dan Jerman, serta penguatan spiritualitas Katolik melalui ibadat dan Misa menjadi bagian dari pembentukan karakter sehari-hari. Sekolah juga menyelenggarakan Festival Literasi, program Adiwiyata, serta beragam kegiatan ekstrakurikuler untuk mengembangkan kreativitas, minat, dan potensi peserta didik. Seluruh program didukung oleh tenaga pendidik yang kompeten dan berdedikasi, sehingga menciptakan pengalaman belajar yang bermakna dan membentuk siswa yang beriman, berkarakter, kreatif, mandiri, serta peduli terhadap lingkungan dan sesama.",
            address: "Jl. Mojopahit 38 Surabaya",
            phone: "0315678477",
            email: "sdkkatarina@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdk_katarina",
            facebook: "",
            youtube: "https://www.youtube.com/@sdkkatarina7261",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.978759729383!2d112.7419089!3d-7.2816997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbe3124c3cc7%3A0xb42f35cd8f7fa611!2sTK.SDK.SMPK-KATARINA!5e1!3m2!1sid!2sid!4v1788243231688!5m2!1sid!2sid"
        },
        {
            id: 9,
            level: "SD",
            name: "SD Karitas II",
            logo: "https://i.ibb.co.com/RpfzkX9k/SD-Karitas-II.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "Pada penghujung tahun 1981, tepatnya 19 Desember 1981, Paroki HKY meresmikan gedung serba guna Sekolah Karitas sekaligus gedung untuk perayaan misa. Pendirian SDK Karitas II dilatarbelakangi oleh kebutuhan umat Katolik di wilayah Tandes yang pada tahun 1982 belum memiliki sekolah Katolik. Atas dorongan Romo A.Y. Dibyokaryono, PR selaku kepala paroki, beberapa umat mulai merintis pendirian sekolah sebagai bentuk kepedulian terhadap kebutuhan pendidikan umat.<br/><br/>Dalam perkembangannya, SDK Karitas II terus berkomitmen menghadirkan pendidikan yang berlandaskan nilai-nilai Katolik dan kebutuhan zaman. Karakter sekolah diwujudkan melalui semangat integritas, kolegialitas, dan transformasi, sehingga menjadi komunitas pendidikan yang mampu mendampingi peserta didik untuk bertumbuh secara utuh serta memberikan kontribusi positif bagi Gereja, masyarakat, dan bangsa.",
            programs: "Sebagai bagian dari upaya mewujudkan pendidikan yang berintegritas, kolegial, dan transformatif, SDK Karitas II mengembangkan berbagai program unggulan yang meliputi penguatan numerasi, literasi, dan karakter melalui pembiasaan One Day One Good Deed. Pembelajaran juga diperkaya melalui Activity Collaboration yang mendorong kerja sama dan kreativitas peserta didik, serta kegiatan bersama Gereja St. Stefanus dan St. Yakobus untuk memperkuat kehidupan iman. Selain itu, HSG (Hari Studi Guru) menjadi sarana pengembangan kompetensi pendidik agar senantiasa mampu menghadirkan pembelajaran yang relevan dan berkualitas.",
            address: "Jl. Jelidro No. 17, Sambikerep, Surabaya",
            phone: "031-7405553",
            email: "sdk.karitas2.surabaya@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdk.karitas2",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385979.7221011499!2d112.23050242301164!3d-7.39680509910883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff6c0b8ca1c1%3A0xb4bc0c48bd6354e9!2sTK%20SD%20SMP%20Katolik%20Karitas%202!5e1!3m2!1sid!2sid!4v1788244618907!5m2!1sid!2sid"
        },
        {
            id: 10,
            level: "SD",
            name: "SD Karitas III",
            logo: "https://i.ibb.co.com/BV1pvK3f/SD-Karitas-III.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SDK Katolik Karitas III Surabaya merupakan lembaga pendidikan di kawasan Surabaya Barat yang memadukan kualitas akademik dengan pembentukan iman dan karakter peserta didik. Berlokasi di Jl. Simpang Darmo Permai Utara VII/11, sekolah ini lahir dari prakarsa RD. FX. Uroto Sastro (alm.) bersama umat Katolik Paroki St. Aloysius Gonzaga untuk memenuhi kebutuhan pendidikan masyarakat setempat. Seiring perkembangan jumlah peserta didik, sekolah tumbuh menjadi kompleks pendidikan terpadu yang mencakup jenjang TK, SD, SMP, hingga SMA.<br/><br/>Dalam perkembangannya, SDK Karitas III yang tercatat dengan NPSN 20533006 kini berada di bawah naungan Yayasan Yohannes Gabriel sebagai bagian dari karya pendidikan Katolik Keuskupan Surabaya. Secara historis, berdasarkan Profil Sekolah Dispendik Surabaya, sekolah mulai berdiri pada 14 Februari 1982, sedangkan legalisasi administrasi pemerintah tercatat melalui SK Pendirian No. 508 tertanggal 13 Februari 1984.",
            programs: "Sebagai bagian dari komitmen memadukan kualitas akademik dengan pengembangan iman, karakter, dan potensi peserta didik, SD Katolik Karitas III menerapkan pembelajaran terdiferensiasi yang menyesuaikan kebutuhan dan kemampuan setiap siswa. Pembelajaran reguler juga diperkuat melalui Bahasa Inggris dan Mandarin, serta berbagai kegiatan ekstrakurikuler seperti Fashion Show, Pencak Silat, Basket, Renang, dan Musik yang menjadi wadah bagi peserta didik untuk mengembangkan bakat, kreativitas, kepercayaan diri, dan keterampilan secara optimal.",
            address: "Jl. Simpang Darmo Permai Utara VII / 11 Surabaya",
            phone: "031-7315051",
            email: "sdkkaritas3sby@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkkaritas3surabaya",
            facebook: "",
            youtube: "https://www.youtube.com/@sdkatolikkaritasiii560",
            maps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d782.0003333838935!2d112.6836425!3d-7.278463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc24a1522b47%3A0x98a8a515d6c2d003!2sSekolah%20Dasar%20Katolik%20Karitas%20III%20III!5e1!3m2!1sid!2sid!4v1788245428205!5m2!1sid!2sid"
        },
        {
            id: 11,
            level: "SD",
            name: "SD Karitas V",
            logo: "https://i.ibb.co.com/BV1pvK3f/SD-Karitas-III.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Karitas V Surabaya merupakan lembaga pendidikan yang berkomitmen memberikan pendidikan berkualitas dalam lingkungan yang aman, nyaman, dan menyenangkan. Sebagai sekolah Katolik, pendidikan tidak hanya berfokus pada pencapaian akademik, tetapi juga pada pembentukan pribadi yang cakap, beriman, cerdas, dan berbudi luhur. Nilai kasih, kedisiplinan, tanggung jawab, kejujuran, kepedulian, dan kerja sama ditanamkan melalui budaya 5S (Senyum, Salam, Sapa, Sopan, Santun) serta pembiasaan 5 Kata Ampuh (Salam, Maaf, Permisi, Tolong, Terima Kasih).<br/><br/>Dalam mendukung perkembangan peserta didik secara utuh, SD Karitas V mengembangkan budaya prestasi, literasi, serta pembelajaran yang efektif, kreatif, dan menyenangkan. Sekolah memberikan ruang bagi setiap anak untuk mengembangkan bakat, minat, kreativitas, dan potensi akademik maupun nonakademik, sekaligus menumbuhkan budaya disiplin, tanggung jawab, solidaritas sosial, dan kepedulian terhadap lingkungan. Dengan dukungan seluruh warga sekolah dan orang tua, SD Karitas V terus berupaya membentuk peserta didik yang percaya diri, mandiri, berkarakter, peduli terhadap sesama, serta siap menghadapi masa depan.",
            programs: "Sebagai bagian dari komitmen memberikan pendidikan yang utuh, SD Karitas V Surabaya menghadirkan berbagai program unggulan yang mengintegrasikan pembelajaran berbasis Deep Learning dengan penguatan karakter dan Dimensi Profil Lulusan, serta pendalaman nilai-nilai Katolisitas. Kemampuan literasi dan numerasi diperkuat melalui pembelajaran yang kontekstual, sementara bakat dan potensi peserta didik dikembangkan melalui kegiatan ekstrakurikuler seni, olahraga, dan akademik, project atau gelar karya, serta pendampingan prestasi akademik dan nonakademik. Seluruh program diperkuat melalui kolaborasi antara sekolah dan orang tua untuk menciptakan pengalaman belajar yang bermakna dan mendukung perkembangan peserta didik secara optimal.",
            address: "Jl. Simpang Darmo Permai Utara VII / 11 Surabaya",
            phone: "031-7312934",
            email: "sdkaritas5sby@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdkkaritasv",
            facebook: "https://www.facebook.com/sdk.karitaslima",
            youtube: "https://www.youtube.com/@sdkkaritasvsurabaya6156",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.81788131001!2d112.6830871!3d-7.261556799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fe9a47f9a8a7%3A0x7e52141a65a7871c!2sSekolah%20Dasar%20Katolik%20Karitas%20Vg!5e0!3m2!1sid!2sid!4v1788272975833!5m2!1sid!2sid"
        },
        {
            id: 12,
            level: "SD",
            name: "SD St. Yusup Karangpilang",
            logo: "https://i.ibb.co.com/BV1pvK3f/SD-Karitas-III.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SD Katolik Santo Yusup Surabaya berlokasi di Jl. Kebaron Widya I, Surabaya, didirikan pada tahun 1990 di bawah naungan Yayasan Yohannes Gabriel dan saat ini berakreditasi A. Mengambil nama Santo Yosef sebagai teladan ketulusan, kerja keras, kasih, dan perlindungan keluarga, sekolah menanamkan nilai-nilai tersebut melalui pembiasaan hidup beriman seperti doa bersama, doa Angelus, ibadat sabda, serta perayaan Misa Natal dan Paskah. Dengan lingkungan sekolah yang tenang dan strategis, sekolah didukung 12 ruang kelas, laboratorium komputer, perpustakaan, dan lapangan yang menunjang proses pembelajaran serta pengembangan diri peserta didik.<br/><br/>Untuk mengembangkan potensi akademik dan nonakademik, SD Katolik Santo Yusup menyediakan beragam kegiatan ekstrakurikuler, seperti Pramuka, paduan suara, Bahasa Mandarin dan Inggris, bulu tangkis, futsal, pencak silat, tari, serta mewarnai dan menggambar. Berbagai program tersebut telah menghasilkan prestasi di tingkat kota hingga nasional dan provinsi, antara lain Juara I Paduan Suara tingkat kota tahun 2025, Bronze Award HSK tingkat nasional, Juara II Saintech National Competition 2.0, Juara III O2SN Bulu Tangkis tingkat Provinsi, serta peserta OSN Matematika yang berhasil lolos hingga tahap Provinsi pada tahun 2026.",
            programs: "Sebagai bagian dari pengembangan pendidikan yang adaptif dan holistik, SD Katolik Santo Yusup terus mengembangkan inovasi teknologi melalui pemanfaatan berbagai platform digital untuk menunjang pembelajaran. Nilai-nilai iman Katolik juga diwujudkan melalui berbagai kegiatan pelayanan, seperti paduan suara dan PSA, serta diperkuat melalui kerja sama dengan berbagai pihak, antara lain RT, paroki, puskesmas, dan instansi terkait pendidikan serta kesejahteraan peserta didik dan tenaga pendidik.",
            address: "Jl. Kebraon Widya I, Karang Pilang, Surabaya",
            phone: "031-7663026",
            email: "sdk.st.yusup@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/sdksantoyusup.sby",
            facebook: "",
            youtube: "https://www.youtube.com/@sdksantoyusupsurabaya2071",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25021.2254037678!2d112.65936613082889!3d-7.328224801900443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc95bbdfd641%3A0x89e0b97716e044dd!2sSD%20Katolik%20Santo%20Yusup%20Surabaya!5e1!3m2!1sid!2sid!4v1788244285303!5m2!1sid!2sid"
        },
        {
            id: 13,
            level: "SD",
            name: "SDS St. Marry",
            logo: "https://i.ibb.co.com/gMkSVYdX/SD-St-Marry.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "ST. MARY ELEMENTARY SCHOOL merupakan salah satu sekolah dasar Katolik yang dikenal di Surabaya. Berdiri sebagai bagian dari Yayasan Yohannes Gabriel sejak tahun 2005, sekolah ini berkomitmen memberikan pendidikan berkualitas yang memadukan keunggulan akademik, pembentukan karakter, dan pengembangan diri peserta didik. Sejak berdiri, ST. MARY ELEMENTARY SCHOOL menjadi satu-satunya sekolah di bawah Yayasan Yohannes Gabriel yang menerapkan Kurikulum Nasional Plus, dengan pembelajaran seperti Matematika, Sains, dan Bahasa Mandarin untuk memperkaya wawasan serta membekali siswa menghadapi tantangan kehidupan nyata. Sekolah juga meraih akreditasi A (Unggul) sebagai wujud komitmen terhadap standar mutu pendidikan dan pengelolaan sekolah.<br/><br/>Selain prestasi akademik, ST. MARY ELEMENTARY SCHOOL menekankan pendidikan karakter melalui nilai kasih, kejujuran, disiplin, tanggung jawab, dan nasionalisme yang diterapkan dalam kehidupan sehari-hari. Lingkungan belajar yang suportif memberikan kesempatan kepada peserta didik untuk mengeksplorasi potensi, mengembangkan kreativitas, membangun kemandirian, dan menerapkan nilai-nilai positif secara nyata. Melalui pendidikan yang holistik, sekolah berupaya membentuk pribadi yang percaya diri, mandiri, bertanggung jawab, peduli terhadap sesama, serta siap menghadapi perkembangan dan tantangan di masa depan.",
            programs: "Sebagai bagian dari komitmen menghadirkan pendidikan yang luas dan relevan dengan perkembangan zaman, ST. MARY ELEMENTARY SCHOOL mengembangkan berbagai program unggulan melalui National Plus Curriculum yang memperkuat pembelajaran Mandarin, Science, dan Math. Kemampuan berbahasa Inggris juga diasah melalui program English Day yang mendorong penggunaan Bahasa Inggris dalam komunikasi sehari-hari, sementara Gerakan Literasi Sekolah membangun budaya membaca dan memperluas wawasan peserta didik. Berbagai program tersebut dirancang untuk mendukung prestasi akademik sekaligus membentuk siswa yang komunikatif, mandiri, kreatif, dan siap menghadapi tantangan global.",
            address: "Jl. Raya Lidah Kulon 29-A Surabaya",
            phone: "(031) 7530653",
            email: "stmaryelemens@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/st.marysd",
            facebook: "https://www.youtube.com/@st.marysd",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4255301120556!2d112.6575316!3d-7.305997499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdaeb19d685b%3A0x4967ffd2fa25b11!2sSt.%20Mary%20Elementary%20School!5e0!3m2!1sen!2sid!4v1788273301160!5m2!1sen!2sid"
        },
        {
            id: 14,
            level: "SMP",
            name: "SMP Santa Katarina",
            logo: "https://i.ibb.co.com/4R0fYcbJ/SMP-Katarina.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMP Santa Katarina Surabaya merupakan lembaga pendidikan Katolik tingkat menengah pertama yang berlokasi di Jl. Mojopahit No. 38, Keputran, Kecamatan Tegalsari, Surabaya, di sekitar kompleks Gereja Katedral Hati Kudus Yesus. Didirikan pada 28 November 1968, sekolah ini berada di bawah naungan Yayasan Yohannes Gabriel dan berkomitmen memberikan pendidikan yang memadukan pengembangan akademik, karakter, dan kepedulian terhadap lingkungan.<br/><br/>Sebagai Sekolah Adiwiyata Tingkat Provinsi, SMP Santa Katarina mengembangkan Pendidikan Lingkungan Hidup melalui Gerakan Peduli dan Berbudaya Lingkungan Hidup di Sekolah (PBLHS). Predikat School of Character juga menjadi fondasi dalam membentuk lulusan yang tidak hanya unggul secara akademis, tetapi memiliki karakter kuat melalui pembiasaan disiplin, kejujuran, toleransi, kasih, tanggung jawab, dan kepemimpinan dalam kehidupan sehari-hari.",
            programs: "Sebagai bagian dari komitmen membentuk lulusan yang berkarakter dan berwawasan lingkungan, SMP Santa Katarina mengintegrasikan nilai-nilai religius, disiplin, kejujuran, tanggung jawab, kasih, dan kepemimpinan dalam pembelajaran serta kehidupan sehari-hari. Kepedulian terhadap lingkungan diperkuat melalui Gerakan PBLHS yang diterapkan dalam mata pelajaran dan berbagai aktivitas siswa. Sementara itu, pengembangan minat dan bakat difasilitasi melalui beragam ekstrakurikuler, seperti Pramuka, Futsal, Band, Modern Dance, Bahasa Mandarin, E-Sport, Paduan Suara, serta Jurnalistik/Literasi.",
            address: "Jl. Mojopahit 38 Surabaya",
            phone: "031-5670961",
            email: "smpkkatarina4@gmail.com",
            website: "",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smpkstkatarina",
            facebook: "",
            youtube: "https://www.youtube.com/@smpsantakatarinasurabaya8331",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.978759729383!2d112.7419089!3d-7.2816997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbe3124c3cc7%3A0xb42f35cd8f7fa611!2sTK.SDK.SMPK-KATARINA!5e1!3m2!1sid!2sid!4v1788243231688!5m2!1sid!2sid"
        },
        {
            id: 15,
            level: "SMP",
            name: "SMP Katolik Karitas II",
            logo: "https://i.ibb.co.com/1J29ysqY/SMP-Karitas-II.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Jelidro No. 17, Sambikerep, Surabaya",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0402438478272!2d112.34070647380156!3d-7.5705916747741115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786c8785b64461%3A0xb61bec8215d0e45e!2sWijana%20Mojoagung!5e0!3m2!1sid!2sid!4v1784784577209!5m2!1sid!2sid"
        },
        {
            id: 16,
            level: "SMP",
            name: "SMP Katolik Karitas III",
            logo: "https://i.ibb.co.com/PZH9shCZ/SMP-Karitas-III.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "",
            programs: "",
            address: "Jl. Simpang Darmo Permai Utara VII / 11 Surabaya",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0402438478272!2d112.34070647380156!3d-7.5705916747741115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786c8785b64461%3A0xb61bec8215d0e45e!2sWijana%20Mojoagung!5e0!3m2!1sid!2sid!4v1784784577209!5m2!1sid!2sid"
        },
        {
            id: 17,
            level: "SMA",
            name: "SMAS Katolik Karitas III",
            logo: "https://i.ibb.co.com/DDt4QQBg/SMA-Karitas-III.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMAS Katolik Karitas III Surabaya merupakan lembaga pendidikan Katolik di bawah naungan Yayasan Yohannes Gabriel Perwakilan I Surabaya yang berlokasi di Jl. Simpang Darmo Permai Utara VII/11, Surabaya. Berawal dari kegiatan pendidikan di rumah umat Gereja Katolik Paroki St. Aloysius Gonzaga pada 18 Juli 1983, sekolah kemudian berkembang dan membangun gedung yang menjadi lokasi hingga saat ini atas prakarsa RD. FX. Uroto Sastro (Alm.). Dalam perkembangannya, sekolah yang semula berada di bawah Yayasan Wijana Sejati kemudian bernaung di bawah Yayasan Yohannes Gabriel Perwakilan I Surabaya.<br/><br/>SMAS Katolik Karitas III memadukan pendidikan akademik, pembentukan karakter, dan penghayatan nilai-nilai Kristiani untuk membentuk peserta didik yang cerdas, mandiri, berintegritas, bertanggung jawab, dan peduli terhadap sesama. Sejalan dengan visi pendidikan Katolik yang transformatif, berintegritas, dan kolegial, sekolah menciptakan lingkungan belajar yang mendorong kemandirian, inovasi, serta semangat kebersamaan. Komitmen tersebut terangkum dalam motto “Non Scholae, Sed Vitae Discimus” yang bermakna belajar bukan hanya untuk sekolah, melainkan untuk kehidupan.",
            programs: "Sebagai bagian dari komitmen mempersiapkan peserta didik untuk kehidupan dan masa depan, SMAS Katolik Karitas III mengembangkan berbagai program unggulan, mulai dari pendampingan pemilihan karier, penguatan Bahasa Inggris sebagai bahasa kedua, hingga pelatihan kemandirian, kepemimpinan, dan hospitality. Semangat kepedulian diwujudkan melalui kegiatan Dana Kasih, sementara peningkatan kompetensi guru dan karyawan didukung melalui kursus Bahasa Inggris dan pelatihan profesional. Sekolah juga memperluas peluang pendidikan melalui kerja sama dengan perguruan tinggi swasta dalam jalur PMB, didukung media pembelajaran interaktif, pembaruan fasilitas, serta beragam ekstrakurikuler akademik dan nonakademik seperti basket, futsal, karate, dan kegiatan lainnya untuk mengembangkan potensi peserta didik secara optimal.",
            address: "Jl. Simpang Darmo Permai Utara VII / 11 Surabaya",
            phone: "031-7314795",
            email: "humas.smaskatolikkaritas3sby@gmail.com",
            website: "https://www.smakkaritas3sby.sch.id",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/smakkaritas3sby",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6674683545207!2d112.68244307577683!3d-7.278625621530829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc2501e17c3b%3A0x206242366f82c393!2sSekolah%20Menengah%20Atas%20Katolik%20Karitas%20III!5e0!3m2!1sid!2sid!4v1788360924273!5m2!1sid!2sid"
        },
        {
            id: 18,
            level: "SMA",
            name: "SMAS Katolik Santo Yusup",
            logo: "https://i.ibb.co.com/cGbfbJ1/SMA-Santo-Yusup.jpg",
            images: ["https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg","https://i.imgur.com/DTdWWV8.jpeg"],
            description: "SMAS Katolik Santo Yusup Surabaya didirikan pada 1 Juli 1984 sebagai pengembangan dari SMPK Santa Katarina Surabaya, dengan kepala sekolah pertama A.A. Winarto dan dua kelas awal. Pendirian sekolah berkaitan erat dengan Gereja Santo Yusup dan diprakarsai oleh Romo YH. Purwoputranto, Pr. dengan persetujuan Mgr. Aloysius Joseph Dibjokarjono. Pada awalnya sekolah berada di bawah Yayasan Wijana Sejati, kemudian bersama Yayasan Wiyata Dharma dan Yayasan Yohannes Gabriel melebur menjadi Yayasan Yohannes Gabriel. Saat ini SMAS Katolik Santo Yusup dikelola di bawah Yayasan Yohannes Gabriel Perwakilan Surabaya I dan Sidoarjo sebagai lembaga pendidikan menengah yang berkomitmen memberikan pendidikan bermutu berlandaskan iman Katolik bagi masyarakat Surabaya, khususnya wilayah Karangpilang dan sekitarnya.<br/><br/>Selama lebih dari empat dekade, SMAS Katolik Santo Yusup terus berkembang dengan mengedepankan pendidikan akademik, pembentukan karakter, dan penghayatan nilai-nilai Katolik. Program penguatan katolisitas menjadi kekhasan sekolah dalam membentuk karakter peserta didik melalui nilai keteguhan, kedisiplinan, kepedulian, communio, dan semangat misioner. Sekolah juga memberikan ruang bagi peserta didik untuk mengembangkan bakat dan minat melalui berbagai kompetisi tingkat kota, provinsi, hingga internasional, serta didukung ekstrakurikuler unggulan seperti Paskibra, Kick Boxing, dan Pramuka.",
            programs: "Sebagai bagian dari komitmen membentuk peserta didik yang tangguh, mandiri, berkarakter, dan berlandaskan iman Katolik, SMAS Katolik Santo Yusup Surabaya menghadirkan berbagai program unggulan yang mencakup Praktik Kerja Lapangan, Young Catholic Entrepreneur Mentorship, serta Alumni Network Career Hub untuk mempersiapkan siswa menghadapi dunia kerja dan masa depan. Pembinaan iman diperkuat melalui Sint Joseph Youth Fellowship, Compassion Live-in & Diakonia, serta Annual Educational Retreat, sementara jejaring dengan paroki dan sekolah Katolik mendukung pengembangan kerja sama. Sekolah juga menghadirkan Sint Joseph Green Space, kantin sehat dan estetik, serta program literasi keuangan bagi siswa dan staf sebagai bagian dari upaya menciptakan lingkungan pendidikan yang sehat, berkelanjutan, dan membekali seluruh warga sekolah dengan keterampilan hidup yang relevan.",
            address: "Jl. Kebraon 1 Barat No. 6 Surabaya",
            phone: "031-7661552",
            email: "smakstyusup.karpilsby@gmail.com",
            website: "https://www.smakstyusupsby.blogspot.com",
            // Data Sosmed Baru:
            instagram: "https://www.instagram.com/officialsmaksy",
            facebook: "",
            youtube: "https://www.youtube.com/@smaksayukasby4185",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1471162400967!2d112.6991649!3d-7.3373704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fcecc7948301%3A0x2cc938375b96acf5!2sSMA%20KATOLIK%20SANTO%20YUSUP!5e0!3m2!1sid!2sid!4v1788361194633!5m2!1sid!2sid"
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
            // Hapus gaya inline style, gantikan dengan class active untuk gambar pertama
            const imagesHTML = school.images.map((img, index) => `
                <img src="${img}" class="slide-image ${index === 0 ? 'active' : ''}">
            `).join('');

            // Hapus gaya inline style pada tombol, gunakan class slider-btn
            sliderHTML = `
                <div class="slider-container">
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