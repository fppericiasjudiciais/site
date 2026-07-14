const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const phone = contactForm.dataset.whatsapp;
    const message = [
      "Ola, FP Pericias Judiciais.",
      "",
      "Gostaria de solicitar uma avaliacao tecnica inicial.",
      "",
      `Nome: ${formData.get("name")}`,
      `E-mail: ${formData.get("email")}`,
      `Telefone: ${formData.get("phone")}`,
      `Tipo de demanda: ${formData.get("subject")}`,
      `Prazo ou fase do processo: ${formData.get("deadline")}`,
      "",
      "Resumo do caso:",
      formData.get("message")
    ].join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}
