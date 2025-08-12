export async function sendEmail(data) {
  const STATICFORM_URL = "https://api.staticforms.xyz/submit";
  const ACCESS_KEY = "sf_1g836hife5kdijl9igclidig"; 

  try {
    const res = await fetch(STATICFORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accessKey: ACCESS_KEY, ...data }),
    });

    // Rate limit (contoh) — tangani khusus
    if (res.status === 429) {
      return { success: false, reason: "rate_limit", status: res.status };
    }

    // Kalau HTTP status bukan ok, kembalikan info tanpa lempar exception
    if (!res.ok) {
      const text = await safeText(res);
      console.error("StaticForms HTTP error:", res.status, text);
      return { success: false, reason: "http_error", status: res.status, body: text };
    }

    // Jika status OK — coba parsing body hanya kalau JSON
    const ct = (res.headers.get("content-type") || "").toLowerCase();
    if (ct.includes("application/json")) {
      const json = await safeJson(res);
      // Banyak API mengembalikan { success: true } tapi bila struktur berbeda,
      // kita anggap berhasil kalau HTTP OK.
      return { success: true, response: json };
    } else {
      // body bukan json (mungkin kosong atau text) — anggap berhasil karena status OK
      const text = await safeText(res);
      return { success: true, responseText: text };
    }
  } catch (error) {
    console.error("Fetch failed:", error);
    return { success: false, reason: "fetch_error", error: String(error) };
  }
}

/* helper: aman parse json */
async function safeJson(res) {
  try {
    return await res.json();
  } catch (e) {
    // parsing gagal — kembalikan null
    return null;
  }
}

/* helper: aman baca text */
async function safeText(res) {
  try {
    return await res.text();
  } catch (e) {
    return null;
  }
}
