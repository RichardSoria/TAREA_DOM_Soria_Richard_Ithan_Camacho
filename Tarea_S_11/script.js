document.addEventListener('DOMContentLoaded', function()
{
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const edad = document.getElementById("edad");
    const correo = document.getElementById("correo");

    function validar_campo(valor_campo)
    {
        if(valor_campo.value.trim() === '')
        {
            valor_campo.classList.add('error_vacio');
        }
        else
        {
            valor_campo.classList.remove('error_vacio');
        }
    }

    function validar_edad(valor_campo)
    {
        if(valor_campo.value <= 0 || valor_campo.value > 120)
        {
            valor_campo.classList.add('error_vacio');
        }
        else
        {
            valor_campo.classList.remove('error_vacio');
        }
    }

    function validar_correo(valor_campo)
    {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(valor_campo.value))
        {
            valor_campo.classList.remove('error_vacio');
        } 
        else 
        {
            valor_campo.classList.add('error_vacio');
        }
    }
    
    nombre.addEventListener("input", function(){validar_campo(nombre);});
    apellido.addEventListener("input", function(){validar_campo(apellido);});
    edad.addEventListener("input", function(){validar_campo(edad);});
    correo.addEventListener("input", function(){validar_campo(correo);});
    
    nombre.addEventListener("blur", function(){validar_campo(nombre);});
    apellido.addEventListener("blur", function(){validar_campo(apellido);});
    edad.addEventListener("blur", function(){validar_campo(edad);});
    correo.addEventListener("blur", function(){validar_campo(correo);});

    edad.addEventListener("input", function(){validar_edad(edad);});
    edad.addEventListener("blur", function(){validar_edad(edad);});

    correo.addEventListener("input", function(){validar_correo(correo);});
    correo.addEventListener("blur", function(){validar_correo(correo);});

    const button = document.getElementById("boton_enviar");
    button.addEventListener("click", function()
    {
        event.preventDefault();
        let nombre_valor = nombre.value;
        let apellido_valor = apellido.value;
        let edad_valor = edad.value;
        let correo_valor = correo.value;
        let mayoria_edad = "";

        if(!nombre_valor || !apellido_valor || !edad_valor || !correo_valor)
        {
            alert("Por favor, llene todos los campos.");
            if(!nombre_valor)
            {
                nombre.classList.add('error_vacio');
            }
            if(!apellido_valor)
            {
                apellido.classList.add('error_vacio');
            }
            if(!edad_valor)
            {
                edad.classList.add('error_vacio');
            }
            if(!correo_valor)
            {
                correo.classList.add('error_vacio');
            }
            return;
        }

        if(edad_valor <= 0 || edad_valor > 120)
        {
            alert("Por favor, ingrese una edad válida.");
            return;
        }
        else if (edad_valor >=18)
        {
            mayoria_edad = "Es mayor de edad";
        }
        else
        {
            mayoria_edad = "Es menor de edad";
        }

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(correo_valor))
        {
            alert("Por favor, ingrese un correo válido.");
            return;
        }
        

        document.getElementById("mostrar_nombre").innerHTML = nombre_valor;
        document.getElementById("mostrar_apellido").innerHTML = apellido_valor;
        document.getElementById("mostrar_edad").innerHTML = edad_valor + " años";
        document.getElementById("mostrar_correo").innerHTML = correo_valor;
        document.getElementById("mostrar_mayoria_edad").innerHTML = mayoria_edad;

        document.getElementById('titulo_datos').innerHTML = "Datos Ingresados";
        document.getElementById('parrafo_datos').style.visibility = 'visible';
    
    }, false);

    const boton_1 = document.getElementById("boton_1");
    let estilos_parrafos = false;
    
    boton_1.addEventListener("click", function()
    {
        event.preventDefault();
        let parrafos = document.getElementsByClassName("parrafo");
        
        if (!estilos_parrafos)
            {
            for (parrafos of parrafos)
            {
                parrafos.classList.add('parrafos_cambiar_estilo');
            }
            boton_1.innerHTML = "Cambiar Estilos Originales";
        } 
        else 
        {
            for (parrafos of parrafos)
            {
                parrafos.classList.remove('parrafos_cambiar_estilo');
            }
            boton_1.innerHTML = "Cambiar Estilo de Párrafos";
        }

        estilos_parrafos = !estilos_parrafos;
    }, false);

    const boton_2 = document.getElementById("boton_2");
    let estilos_parrafos_pares = false;

    boton_2.addEventListener("click", function()
    {
        event.preventDefault();
        let parrafo_2 = document.getElementById("parrafo_2");

        if (!estilos_parrafos_pares)
        {
            parrafo_2.classList.add('parrafos_pares');
            boton_2.innerHTML = "Cambiar Estilos Originales";

        }
        else
        {
            parrafo_2.classList.remove('parrafos_pares');
            boton_2.innerHTML = "Cambiar Estilo de Párrafos Pares";
        }

        estilos_parrafos_pares = !estilos_parrafos_pares;
    }, false);

    const boton_3 = document.getElementById("boton_3");
    let estilos_parrafos_impares = false;

    boton_3.addEventListener("click", function()
    {
        event.preventDefault();
        let parrafo_1 = document.getElementById("parrafo_1");
        let parrafo_3 = document.getElementById("parrafo_3");

        if (!estilos_parrafos_impares)
        {
            parrafo_1.classList.add('parrafos_impares');
            parrafo_3.classList.add('parrafos_impares');
            boton_3.innerHTML = "Cambiar Estilos Originales";

        }
        else
        {
            parrafo_1.classList.remove('parrafos_impares');
            parrafo_3.classList.remove('parrafos_impares');
            boton_3.innerHTML = "Cambiar Estilo de Párrafos Impares";
        }

        estilos_parrafos_impares = !estilos_parrafos_impares;
    }, false);

    const boton_4 = document.getElementById("boton_4");
    let mostrar_imagenes = false;

    boton_4.addEventListener("click", function()
    {
        event.preventDefault();
        let titulo_img = document.getElementById("titulo_img");
        let img_1 = document.getElementById("img_1");
        let img_2 = document.getElementById("img_2");
        let img_3 = document.getElementById("img_3");

        let url_1 = "img/img_1.jpg";
        let url_2 = "img/img_2.jpg";
        let url_3 = "img/img_3.webp";

        let imagen_1 = new Image();
        let imagen_2 = new Image();
        let imagen_3 = new Image();

        imagen_1.src = url_1;
        imagen_2.src = url_2;
        imagen_3.src = url_3;

        if (!mostrar_imagenes)
        {
            titulo_img.innerHTML = "Imágenes";

            img_1.appendChild(imagen_1);
            img_2.appendChild(imagen_2);
            img_3.appendChild(imagen_3);
            
            mostrar_imagenes = true;
            ocultar_imagenes = false;
        }
        
    }, false);

    const boton_5 = document.getElementById("boton_5");
    let ocultar_imagenes = false;

    boton_5.addEventListener("click", function()
    {
        event.preventDefault();
        let titulo_img = document.getElementById("titulo_img");
        let img_1 = document.getElementById("img_1");
        let img_2 = document.getElementById("img_2");
        let img_3 = document.getElementById("img_3");

        if (!ocultar_imagenes)
        {
            titulo_img.innerHTML = "";
            img_1.innerHTML = "";
            img_2.innerHTML = "";
            img_3.innerHTML = "";

            ocultar_imagenes = true;
            mostrar_imagenes = false;
        }
        
    }, false);

    boton_6 = document.getElementById("boton_6");
    let cambiar_fondo = false;

    boton_6.addEventListener("click", function()
    {
        event.preventDefault();
        let body = document.querySelector("body");

        if (!cambiar_fondo)
        {
            body.classList.add('cambiar_fondo_pagina');
            boton_6.innerHTML = "Cambiar Fondo de Página Original";
        }
        else
        {
            body.classList.remove('cambiar_fondo_pagina');
            boton_6.innerHTML = "Cambiar Fondo de Página";
        }

        cambiar_fondo = !cambiar_fondo;

    }, false);

    boton_7 = document.getElementById("boton_7");
    let cambiar_color_titulos = false;

    boton_7.addEventListener("click", function()
    {
        event.preventDefault();
        let titulos_1 = document.querySelectorAll("h1");
        let titulos_2 = document.querySelectorAll("h2");

        if (!cambiar_color_titulos)
        {
            for (titulos_1 of titulos_1)
            {
                titulos_1.classList.add('h1_cambiar_color');
            }
            for (titulos_2 of titulos_2)
            {
                titulos_2.classList.add('h2_cambiar_color');
            }
            
            boton_7.innerHTML = "Cambiar Color de Títulos Original";
        }
        else
        {
            for (titulos_1 of titulos_1)
            {
                titulos_1.classList.remove('h1_cambiar_color');
            }
            for (titulos_2 of titulos_2)
            {
                titulos_2.classList.remove('h2_cambiar_color');
            }
            boton_7.innerHTML = "Cambiar Color de Títulos";
        }

        cambiar_color_titulos = !cambiar_color_titulos;

    }, false);
});