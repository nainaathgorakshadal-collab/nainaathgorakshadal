// ===== PREMIUM WEBSITE SCRIPT =====

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if(header){
        header.style.background =
            window.scrollY > 50
            ? "rgba(0,0,0,0.95)"
            : "rgba(0,0,0,0.75)";
    }
});

// Fade Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("fade-up");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.member,.counter-box")
.forEach(el=>observer.observe(el));

// Counter Animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{
    const update=()=>{
        const target=+counter.getAttribute("data-target");
        const count=+counter.innerText;

        const speed=80;
        const inc=Math.ceil(target/speed);

        if(count<target){
            counter.innerText=count+inc;
            setTimeout(update,30);
        }else{
            counter.innerText=target;
        }
    };
    update();
});

// Back To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";
topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.left="20px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="gold";
topBtn.style.color="#000";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }
});

topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

// Console Message
console.log("नई नाथ गौ रक्षा दल वेबसाइट सफलतापूर्वक लोड हो गई।");
document.querySelectorAll(".gallery img").forEach(img => {
  img.style.cursor = "pointer";

  img.addEventListener("click", function () {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.95)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "99999";

    const bigImg = document.createElement("img");
    bigImg.src = this.src;
    bigImg.style.maxWidth = "95%";
    bigImg.style.maxHeight = "95%";
    bigImg.style.border = "4px solid gold";
    bigImg.style.borderRadius = "10px";

    overlay.appendChild(bigImg);

    overlay.onclick = function () {
      overlay.remove();
    };

    document.body.appendChild(overlay);
  });
});


/* ===== RESCUE FOLDER GALLERY ===== */
function openRescueFolder(){
  const folder = document.getElementById("rescueFolder");
  if(folder){
    folder.hidden = false;
    folder.scrollIntoView({behavior:"smooth", block:"start"});
  }
}

function closeRescueFolder(){
  const folder = document.getElementById("rescueFolder");
  if(folder) folder.hidden = true;
}

function openRescuePhoto(src){
  const box = document.getElementById("rescueLightbox");
  const image = document.getElementById("rescueLightboxImage");
  if(box && image){
    image.src = src;
    box.hidden = false;
    document.body.style.overflow = "hidden";
  }
}

function closeRescuePhoto(event){
  if(event && event.target && event.target.id === "rescueLightboxImage") return;
  const box = document.getElementById("rescueLightbox");
  if(box){
    box.hidden = true;
    document.body.style.overflow = "";
  }
}

document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    closeRescuePhoto();
    closeRescueFolder();
  }
});
