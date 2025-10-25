const modal_btn1 = document.getElementById("modal_btn1")
const modal_btn2 = document.getElementById("modal_btn2")
const modal_container = document.getElementById("modal_container")

window.addEventListener("load", () => {
        createModal(`
        <h3 class="modal-title">¡Nueva Colaboración!</h3>
        <img class="modal-img" src="estilos/home.png" alt="">
        <p class="modal-description">HOME - Eddie Benjamin ft Shawn Mendes</p>
        <button class="modal-btn"><a href="https://youtube.com/@shawnmendes?si=zH79S7X9uVtU_4pz" target="_blank">Suscribirse</button>
        <a href="https://www.youtube.com/watch?v=TEI6qkXPd2Q" target="_blank" rel="noopener noreferrer" class="modal-link">Link</a>
    `, "modal-aparecer")
        
    })


modal_btn1.addEventListener("click", ()=>{
    createModal(`
        <h3>Ya disponible </h3>
        <h2>Shawn</h2>
        <img src="estilos/shawn.jpg" alt="">
        `, "modal-desdeArriba")
})

    modal_btn2.addEventListener("click", () => {
        createModal(`
        <h3>Escucha el álbum</h3>
        <a href="https://youtube.com/playlist?list=OLAK5uy_lpAomIwc1tLVO30T6bydEceWDn5ovQnIs&si=mT93nKi4Ni3hmquw" target="_blank" rel="noopener noreferrer">Wonder - Youtube</a>
        <p> Datos <br>Ielletzin Citlaly Cruz Barrita <br>440284220 </p>
    `,"modal-desdeAbajo" )
    })

    const createModal = (content = "sin contenido", style = "") => {
    modal_container.innerHTML = `
        <div class="modal" id="modal">
            <div class="modal-content ${style}">
            ${content}
            <button class="modal-btn-closed" id="modal_btn_closed">x</button>
        </div>
        </div>
    `
    document.getElementById("modal").addEventListener("click", (e) => {
        console.log(e.target.id)
        if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
        modal_container.innerHTML = ""
        }
    })
    }