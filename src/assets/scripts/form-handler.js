document.getElementById("custom-hubspot-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    // Sanitizar entradas
    function sanitizeInput(input) {
      return String(input)
        .replace(/<script.*?>.*?<\/script>/gi, "") // Elimina scripts
        .replace(/<.*?>/g, "") // Elimina etiquetas HTML
        .trim(); // Elimina espacios innecesarios
    }
  
    // Capturar y sanitizar datos
    const name = sanitizeInput(document.getElementById("name").value);
    const empresa = sanitizeInput(document.getElementById("empresa").value);
    const ciudad = sanitizeInput(document.getElementById("ciudad").value);
    const telefono = sanitizeInput(document.getElementById("telefono").value);
    const email = sanitizeInput(document.getElementById("email").value);
    const role = sanitizeInput(document.getElementById("role").value);
    const message = sanitizeInput(document.getElementById("message").value);
    const recaptchaToken = grecaptcha.getResponse(); // Obtener el token de reCAPTCHA
  
    // Validaciones adicionales
    if (!/^[A-Za-z\s]+$/.test(name)) {
      alert("Nombre inválido. Solo se permiten letras y espacios.");
      return;
    }
    if (!/^\d{10}$/.test(telefono)) {
      alert("Teléfono inválido. Debe ser un número de 10 dígitos.");
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
        hutk: document.cookie.match(/hubspotutk=([\w-]+)/)?.[1] || "", // Cookie de seguimiento de HubSpot
        pageUri: window.location.href,
        pageName: document.title,
      },
      "g-recaptcha-response": recaptchaToken, // Incluye el token de reCAPTCHA
    };
  
    const portalId = "48702052";
    const formId = "34c53d9a-d627-49f1-b36f-bf19c5439c05";
  

    // Enviar datos a HubSpot
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (response.ok) {
        alert("Formulario enviado con éxito");
      } else {
        console.error("Error al enviar formulario:", await response.json());
        alert("Hubo un problema al enviar el formulario.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error de conexión con HubSpot.");
    }
  });