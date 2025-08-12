import React, { useRef, useState } from "react";
import { sendEmail } from "../services/sendMessage.js";

export default function Contact (){
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Mengirim...");

    // ambil data dari form
    const fm = new FormData(formRef.current);
    const data = Object.fromEntries(fm.entries()); // { name, email, message }

    const result = await sendEmail(data);

    if (result.success) {
      setStatus("Berhasil terkirim ✅");
      formRef.current.reset();
      return;
    }

    // Gagal: periksa reason. Kalau rate_limit atau http_error, arahkan ke mailto
    if (result.reason === "rate_limit" || result.reason === "http_error" || result.reason === "fetch_error") {
      setStatus("Gagal via StaticForms — membuka email untuk kirim manual...");
      const subject = encodeURIComponent("Kontak dari website");
      const body = encodeURIComponent(
        `Nama: ${data.name || "-"}\nEmail: ${data.email || "-"}\n\nPesan:\n${data.message || "-"}`
      );
      // Ganti alamat tujuan berikut dengan email
      const yourEmail = "hiroba.contact@gmail.com";
      // tunggu 1 secon biar user sempat baca status, lalu redirect
      setTimeout(() => {
        window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
      }, 1000);
      return;
    }

    // Lainnya: tampilkan pesan error generik
    setStatus("Terjadi kesalahan. Silakan coba lagi atau hubungi via Email atau Telegram");
    console.error("sendEmail result:", result);
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
              <input type="text" name="name" placeholder="John Doe" required className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="email" className="text-base font-bold text-primary">Email</label>
              <input type="email" name="email" placeholder="example@gmail.com" required className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
            </div>
            <div className="w-full px-4 mb-8">
              <label for="message" className="text-base font-bold text-primary">Pesan</label>
            <textarea type="text" name="message" required className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32" ></textarea>
            </div>
            <div className="w-full md:w-1/2 mx-auto px-5">
              <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow:lg transition duration-500" type="submit">Kirim</button>
            </div>
          </div>
        </form>
        <p className="mt-4 text-sm text-center">{status}</p>
      </div>
    </section>
  </>
  )
}
