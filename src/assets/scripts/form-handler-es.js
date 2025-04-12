document.getElementById("custom-hubspot-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Formulario enviado");

  // Sanitizar entradas
  function sanitizeInput(input) {
    return String(input)
      .replace(/<script.*?>.*?<\/script>/gi, "") // Elimina scripts
      .replace(/<.*?>/g, "") // Elimina etiquetas HTML
      .trim(); // Elimina espacios innecesarios
  }

  // Validar honeypot
  const honeypot = document.querySelector("input[name='honeypot']").value;
  if (honeypot) {
    console.warn("Honeypot detectado. Envío bloqueado.");
    return;
  }

  // Capturar y sanitizar datos
  const name = sanitizeInput(document.getElementById("name").value);
  const empresa = sanitizeInput(document.getElementById("empresa").value);
  const ciudad = sanitizeInput(document.getElementById("ciudad").value);
  const telefono = sanitizeInput(document.getElementById("telefono").value);
  const email = sanitizeInput(document.getElementById("email").value);
  const role = sanitizeInput(document.getElementById("role").value);
  const message = sanitizeInput(document.getElementById("message").value);
  const recaptchaToken = grecaptcha.getResponse();

  // Validaciones adicionales
  if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(name)) {
    alert("Nombre inválido. Solo se permiten letras y espacios.");
    return;
  }
  if (!/^\+?[0-9\s-]+$/.test(telefono)) {
    alert("Teléfono inválido. Por favor ingresa un número válido.");
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
      { name: "company", value: empresa },
      { name: "city", value: ciudad },
      { name: "phone", value: telefono },
      { name: "email", value: email },
      { name: "servicios", value: role },
      { name: "message", value: message },
    ],
    context: {
      pageUri: window.location.href,
      pageName: document.title,
    },
  };

  console.log("Datos enviados:", formData);


  // Verificar reCAPTCHA antes de enviar
  const verifyRes = await fetch('../../../netlify/functions/verificar-recaptcha', {
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
      `https://api.hsforms.com/submissions/v3/integration/submit/48702052/34c53d9a-d627-49f1-b36f-bf19c5439c05`,
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
      window.location.href = "https://marker.com.mx/es/thank-you/";
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