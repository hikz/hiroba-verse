import React, { useRef, useState } from "react";
import { sendContactForm } from "../services/emailService";

export default function Contact (){
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    const success = await sendContactForm(formRef);
    if (success) {
      setStatus("Pesan berhasil dikirim ✅");
      formRef.current.reset();
    } else {
      setStatus("Gagal mengirim pesan ❌");
    }
  };

  return (
  <>
    <section id="contact" className="pt-20 pb-32">
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-lg text-primary mb-3">Contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
            <p className="font-medium text-md text-secondary md:text-lg">Tertarik untuk bekerja sama? Jangan ragu menghubungi saya melalui form di bawah atau melalui <a href="https://t.me/hirobaa" className="text-semibold text-primary">Telegram</a>. Saya terbuka untuk peluang kerja sama, kolaborasi, maupun diskusi profesional.</p>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} >
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label for="name" className="text-base font-bold text-primary">Nama</label>
              <input type="text" name="name" id="name" required className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="email" className="text-base font-bold text-primary">Email</label>
              <input type="email" name="email" id="email" required className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="message" className="text-base font-bold text-primary">Pesan</label>
            <textarea type="text" name="message" id="message" required className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32" ></textarea>
            </div>
            <div className="w-full md:w-1/2 mx-auto px-5">
              <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow:lg transition duration-500" type="submit">Kirim</button>
            </div>
          </div>
        </form>
        {status && <p className="mt-4 text-sm text-center">{status}</p>}
      </div>
    </section>
  </>
  )
}
