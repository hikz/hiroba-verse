import emailjs from "@emailjs/browser";

export async function sendContactForm(formRef) {
  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return true; // success
  } catch (error) {
    console.error("Gagal mengirim email:", error);
    return false; // failed
  }
}

//emailjs.send("service_4443t9f","template_fkf73kr",{
//name: "Jawa",
//message: "hi hiroba kamu ngawi",
//email: "contoh@gmail.com",
//});
