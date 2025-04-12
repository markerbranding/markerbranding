document.getElementById("custom-newsletter-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Formulario de newsletter enviado");
  
    // Sanitizar entradas
    function sanitizeInput(input) {
      return String(input)
        .replace(/<script.*?>.*?<\/script>/gi, "") // Elimina scripts
        .replace(/<.*?>/g, "") // Elimina etiquetas HTML
        .trim(); // Elimina espacios innecesarios
    }
  
    // Validar honeypot
    const honeypot = document.querySelector("input[name='honey-pot']").value;
    if (honeypot) {
      console.warn("Honeypot detectado. Envío bloqueado.");
      return;
    }
  
    // Capturar y sanitizar datos
    const name = sanitizeInput(document.getElementById("name_newsletter").value);
    const email = sanitizeInput(document.getElementById("email_newsletter").value);
    const recaptchaToken = grecaptcha.getResponse();
  
    // Validaciones adicionales
    if (!/^[A-Za-z\s]+$/.test(name)) {
      alert("Nombre inválido. Solo se permiten letras y espacios.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Correo electrónico inválido.");
      return;
    }
    if (!recaptchaToken) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }
  
    // Preparar datos para HubSpot
    const formData = {
      fields: [
        { name: "firstname", value: name },
        { name: "email", value: email },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    };
  
    console.log("Datos enviados:", formData);


    // Verificar reCAPTCHA antes de enviar
    const verifyRes = await fetch('/.netlify/functions/verificar-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: recaptchaToken }),
    });

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      alert("Verificación de reCAPTCHA falló. Intenta de nuevo.");
      return;
    }

  
    // Enviar datos a HubSpot
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/48702052/f4b6e0ea-9a7a-4e3f-bebb-5432445e85c4`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (response.ok) {
        // Redirigir a la página de agradecimiento
        window.location.href = "https://marker.com.mx/es/newsletter/";
        return;
      } else {
        const errorData = await response.json();
        console.error("Error al enviar formulario:", errorData);
        if (errorData.errors && errorData.errors[0]) {
          alert(`Error: ${errorData.errors[0].message}`);
        } else {
          alert("Hubo un problema al enviar el formulario.");
        }
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error de conexión.");
    }
  });