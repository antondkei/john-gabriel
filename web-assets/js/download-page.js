/* DOWNLOAD CENTER */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENT
    ===================================================== */

    const searchInput = document.querySelector(".download-search input");
    const cards = document.querySelectorAll(".download-card");
    const filters = document.querySelectorAll(".download-filter button");



    /* =====================================================
       LIVE SEARCH
    ===================================================== */

    searchInput.addEventListener("keyup", function(){

        const keyword = this.value.toLowerCase();

        cards.forEach(card=>{

            const title = card.querySelector("h3").textContent.toLowerCase();

            const desc = card.querySelector("p").textContent.toLowerCase();

            if(
                title.includes(keyword) ||
                desc.includes(keyword)
            ){

                card.style.display="flex";

            }else{

                card.style.display="none";

            }

        });

    });



    /* =====================================================
       CATEGORY FILTER
    ===================================================== */

    filters.forEach(button=>{

        button.addEventListener("click",()=>{

            filters.forEach(btn=>btn.classList.remove("active"));

            button.classList.add("active");

            const category = button.textContent.trim().toLowerCase();

            document.querySelectorAll(".download-section").forEach(section=>{

                const title = section.querySelector("h2")
                    .textContent
                    .trim()
                    .toLowerCase();

                if(category==="semua"){

                    section.style.display="block";

                }else{

                    section.style.display =
                        title===category ? "block":"none";

                }

            });

        });

    });



    /* =====================================================
       CARD REVEAL
    ===================================================== */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>observer.observe(card));



    /* =====================================================
       RIPPLE BUTTON
    ===================================================== */

    document.querySelectorAll(".btn").forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=this.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";

            ripple.style.top=(e.clientY-rect.top)+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });



});