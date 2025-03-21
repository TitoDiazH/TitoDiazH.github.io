
function cambiarNota() {
    const nuevaNota = document.getElementById("notaInput").value;

    if (!isNaN(nuevaNota) && nuevaNota.trim() !== "" && nuevaNota >= 1.0 && nuevaNota <= 7.0) {
        document.getElementById("nota").innerText = nuevaNota;
    } else {
        alert("Por favor ingrese una nota válida.");
    }
}

function NewsDisplay() {
    const apiKey = "838525147e63436ea9a842cec4fccaf9";
    const today = new Date().toISOString().split("T")[0];
    const url = `https://newsapi.org/v2/everything?q=apple&from=2025-03-2&to=${today}&sortBy=popularity&apiKey=${apiKey}`;

    fetch(url)
        .then(a => a.json())
        .then(response => {
            
            for(var i=0; i<10; i++){
                document.getElementById("News").innerHTML += "<div style='padding-top: 20px; margin-bottom: 20px; overflow: hidden;'><img style='float:left; width:200px;' src='"+response.articles[i].urlToImage+"'><p><a class=link_naranjo href="+response.articles[i].url+">"+response.articles[i].title+"</a></p><p>"+response.articles[i].description+"</p></div>"
            }
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            document.getElementById("News").innerHTML = "<p>Error Loading News</p>";
        });
};


