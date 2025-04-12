// netlify/functions/verificar-recaptcha.js

const axios = require("axios");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { token } = JSON.parse(event.body);

  const secret = process.env.RECAPTCHA_SECRET_KEY; // 🔒 pon aquí tu clave secreta (nunca la clave pública)

  try {
    const response = await axios.post("https://www.google.com/recaptcha/api/siteverify", null, {
      params: {
        secret,
        response: token,
      },
    });

    const data = response.data;

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error verificando reCAPTCHA", details: err.message }),
    };
  }
};