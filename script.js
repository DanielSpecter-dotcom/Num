const si = document.getElementById('si');
const no = document.getElementById('no');
const pregunta = document.getElementById('pregunta');
const form = document.getElementById('form');
const estado = document.getElementById('estado');
let toques = 0;

emailjs.init({ publicKey: 'D7ztxiH4ikG2K98kf' });

no.onclick = () => {
  toques++;
  if (toques >= 5) return no.remove();
  no.style.transform = `scale(${1 - toques * 0.18})`;
  si.style.transform = `scale(${1 + toques * 0.4})`;
};

si.onclick = () => {
  pregunta.hidden = true;
  form.hidden = false;
};

form.onsubmit = async (e) => {
  e.preventDefault();
  const numero = form.numero.value.trim();
  estado.textContent = 'Enviando...';
  try {
    await emailjs.send('service_gu746ys', 'template_iiyknrt', { numero });
    estado.textContent = '¡Enviado! 👻';
    form.querySelector('button').disabled = true;
  } catch {
    estado.textContent = 'Error al enviar, intenta de nuevo.';
  }
};
