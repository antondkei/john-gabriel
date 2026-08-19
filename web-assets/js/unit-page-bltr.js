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
            name: "KB Kasih Ngantru Trenggalek",
            logo: "https://i.ibb.co.com/tPwrpH9s/PAUD-Kasih.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Yos Sudarso No. 2 Ngantru Trenggalek",
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
            id: 2,
            level: "KB",
            name: "KB St. Paulus Sidodadi",
            logo: "https://i.ibb.co.com/vCk4Xbrm/KB-St-Paulus.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Gereja RT.04/RW.01 Sidodadi Garum Blitar",
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
            id: 3,
            level: "KB",
            name: "KB K Yos Sudarso",
            logo: "",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Cepaka No. 08 Sukorejo-Blitar",
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
            id: 4,
            level: "TK",   
            name: "TK K Yos Sudarso",
            logo: "",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Cepaka No. 08 Sukorejo-Blitar",
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
            id: 5,
            level: "TK",
            name: "TK Kasih Ngantru Trenggalek",
            logo: "",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Yos Sudarso No. 2 Ngantru Trenggalek",
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
            name: "TK St. Paulus Sidodadi",
            logo: "",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Gereja RT.04/RW.01 Sidodadi Garum Blitar",
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
            id: 7,
            level: "TK",
            name: "TK Santa Maria Wlingi",
            logo: "",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Mastrip No. 09 Wlingi Blitar",
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
            level: "TK",
            name: "TK Pancasila Blitar",
            logo: "https://i.ibb.co.com/C34nv6VW/TK-Pancasila.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Karya Barat No. 03 Sananwetan-Blitar",
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
            id: 9,
            level: "SD",
            name: "SD Katolik Yohanes Gabriel",
            logo: "https://i.ibb.co.com/TDrTZDMm/SDK-Yoga-Slorok.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Gereja No. 05 Slorok-Garum Blitar",
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
            id: 10,
            level: "SD",
            name: "SD Katolik Yos Sudarso",
            logo: "https://i.ibb.co.com/WWzxJDS4/SDK-Yos-Blitar.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Cempaka No. 8 Sukorejo Blitar",
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
            id: 11,
            level: "SMP",
            name: "SMP Katolik Yohanes Gabriel Kesamben",
            logo: "https://i.ibb.co.com/TM2Mhtt6/SMPK-Kesamben.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Raya No. 182 A Kesamben-Blitar",
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
            id: 12,
            level: "SMP",
            name: "SMPK Pancasila Wates",
            logo: "https://i.ibb.co.com/bjvWXbyf/SMPK-Pancasila.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Raya No.150 Mojorejo-Wates-Blitar",
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
            id: 13,
            level: "SMP",
            name: "SMP Katolik Yos Soedarso 3 Blitar",
            logo: "https://i.ibb.co.com/jvn8FMJv/SMPK-3-Yos.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Cempaka No. 6 Sukorejo Blitar",
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
            id: 14,
            level: "SMP",
            name: "SMP Katolik Yohanes Gabriel",
            logo: "https://i.ibb.co.com/mVKrxgTk/SMPK-Yoga-Blitar.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Diponegoro No.38 Sananwetan Kota Blitar",
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
            id: 15,
            level: "SMA",
            name: "SMAS Katolik Diponegoro",
            logo: "https://i.ibb.co.com/SwCzHHrD/SMAK-Dipo.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Diponegoro No. 32 Sananwetan Blitar",
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
            level: "SMA",
            name: "SMAS Katolik St Thomas Aquino",
            logo: "https://i.ibb.co.com/4ZQ6sCvd/SMAK-Thomas-TA.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Dr. Wahidin Sudiro Husodo No. 83 Kedungwaru Tulungagung",
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
            name: "SMAS Katolik Seminari Garum",
            logo: "https://i.ibb.co.com/PsYRxP9n/SMAK-Seminari.jpg",
            image: "https://i.imgur.com/DTdWWV8.jpeg",
            description: "",
            programs: "",
            address: "Jl. Merdeka Timur No. 4 - 6 Garum Blitar",
            phone: "",
            email: "",
            website: "",
            // Data Sosmed Baru:
            instagram: "",
            facebook: "",
            youtube: "",
            maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0402438478272!2d112.34070647380156!3d-7.5705916747741115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786c8785b64461%3A0xb61bec8215d0e45e!2sWijana%20Mojoagung!5e0!3m2!1sid!2sid!4v1784784577209!5m2!1sid!2sid"
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

    // Fungsi Render Konten Sekolah
    function renderSchool(id) {
        const school = schools.find(item => item.id == id);
        if (!school) return;

        const hasSocialMedia = school.instagram || school.facebook || school.youtube;

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

                <figure class="school-cover skeleton" id="cover-wrapper">
                    <img 
                        src="${school.image}" 
                        alt="${school.name}"
                        class="img-lazy"
                        onload="document.getElementById('cover-wrapper').classList.remove('skeleton'); this.classList.add('loaded')">
                </figure>

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
        const currentActive = document.querySelector(".school-nav button.active");
        if (currentActive && Number(currentActive.dataset.id) === id) return;

        activateButton(id);

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