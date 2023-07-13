var lampada = document.getElementById("lamp");

        lampada.addEventListener("click", function() {
            if (lampada.src.includes("Imagens/ONLampada.png")) {
                lampada.src = "Imagens/OFFLampada.png";
            } else {
                lampada.src = "Imagens/ONLampada.png";
            }
        });