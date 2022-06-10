// const { response } = require("express");

$("#boton").click(() => {
  let lista = $("#lista"); // llamamos a los elementos con ese id y le decimos que cuando se clickeen
  lista.empty();
  $.get(`http://localhost:5000/amigos`, (response) => {
    //se ejecute esta funcion
    for (let i = 0; i < response.length; i++) {
      //para cada elemento del arr
      let li = `<li>${response[i].name}</li>`; // crear un li con el contenido del parametro
      lista.append(li);
    }
  });
});

$("#search").click(() => {
  let inpputValue = $("#input").val();
  $.get(`http://localhost:5000/amigos/${inpputValue}`, (response) => {
    $("#amigo").text(resoponse.name);
  });
});

$("#delete").click(() => {
  let inputValue = $("#inputDelete").val();
  $.ajax({
    url: `http://localhost:5000/amigos/${inpputValue}`,
    type: "DELETE",
    success: (response) => {
      $("#success").text("El amigo fue borrado");
    },
  });
});
