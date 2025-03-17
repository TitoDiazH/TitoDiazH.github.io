function cambiarNota() {
    const nuevaNota = document.getElementById("notaInput").value;

    if (!isNaN(nuevaNota) && nuevaNota.trim() !== "" && nuevaNota >= 1.0 && nuevaNota <= 7.0) {
        document.getElementById("nota").innerText = nuevaNota;
    } else {
        alert("Por favor ingrese una nota válida.");
    }
}