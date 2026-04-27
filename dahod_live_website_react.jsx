import React, { useState } from "react";

const categories = ["Home", "Dahod News", "Gujarat", "Politics", "Business", "Education", "Health", "Videos", "Live TV", "Contact"];

const defaultNews = [
  { title: "દાહોદ શહેરમાં વિકાસ કાર્યોને લઈને સ્થાનિક ચર્ચા તેજ", category: "Dahod News", time: "10 min ago", desc: "દાહોદ શહેરની મહત્વની સ્થાનિક અપડેટ." },
  { title: "નગરપાલિકા ચૂંટણીને લઈને વોર્ડ વિસ્તારમાં જનસંપર્ક અભિયાન", category: "Politics", time: "25 min ago", desc: "ચૂંટણી અને જનસંપર્ક સાથે જોડાયેલી ખાસ ખબર." },
  { title: "દાહોદમાં શિક્ષણ, રોજગાર અને યુવા વિકાસ પર ખાસ રિપોર્ટ", category: "Education", time: "1 hour ago", desc: "યુવાનો અને શિક્ષણ વિષયક માહિતી." },
  { title: "સ્થાનિક બજારમાં વેપાર અને તહેવારની ખરીદીમાં વધારો", category: "Business", time: "2 hours ago", desc: "બજાર અને લોકલ બિઝનેસ અપડેટ." }
];

const videos = ["Election Ground Report", "Dahod City Update", "Public Opinion"];

const instagramLink = "https://www.instagram.com/dahod_live?igsh=MWtudWxpa3YxN2N2Yw==";
const whatsappLink = "https://wa.me/919327317004?text=Hello%20Dahod%20Live%2C%20I%20want%20to%20promote%20my%20business";
const youtubeLink = "#";

export default function DahodLiveWebsite() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [news, setNews] = useState(defaultNews);
  const [form, setForm] = useState({ title: "", category: "Dahod News", desc: "" });

  const addNews = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setNews([{ title: form.title, category: form.category, desc: form.desc, time: "Just now" }, ...news]);
    setForm({ title: "", category: "Dahod News", desc: "" });
  };

  const deleteNews = (index) => {
    setNews(news.filter((_, i) => i !== index));
  };

  if (showAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-950">
        <header className="bg-gray-950 text-white shadow-lg">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <div>
              <h1 className="text-2xl font-black text-red-500">DAHOD LIVE ADMIN</h1>
              <p className="text-sm text-gray-400">News, Ads & Website Management</p>
            </div>
            <button onClick={() => setShowAdmin(false)} className="rounded-xl bg-white px-4 py-2 font-bold text-gray-950">View Website</button>
          </div>
        </header>

        {!loggedIn ? (
          <main className="mx-auto max-w-md px-4 py-16">
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-3xl font-black">Admin Login</h2>
              <p className="mt-2 text-sm text-gray-500">Demo login for Dahod Live admin panel.</p>
              <div className="mt-6 space-y-4">
                <input className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Username: admin" />
                <input className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Password: admin123" type="password" />
                <button onClick={() => setLoggedIn(true)} className="w-full rounded-2xl bg-red-700 px-5 py-4 font-black text-white">Login</button>
              </div>
              <p className="mt-4 text-xs text-gray-500">Demo only: Username admin / Password admin123</p>
            </div>
          </main>
        ) : (
          <main className="mx-auto max-w-7xl px-4 py-8">
            <section className="grid gap-6 md:grid-cols-4">
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-sm font-bold text-gray-500">Total News</p>
                <h2 className="mt-2 text-4xl font-black text-red-700">{news.length}</h2>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-sm font-bold text-gray-500">Categories</p>
                <h2 className="mt-2 text-4xl font-black text-red-700">9</h2>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-sm font-bold text-gray-500">Ads Space</p>
                <h2 className="mt-2 text-4xl font-black text-red-700">4</h2>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-sm font-bold text-gray-500">Leads</p>
                <h2 className="mt-2 text-4xl font-black text-red-700">WhatsApp</h2>
              </div>
            </section>

            <section className="mt-8 grid gap-6 lg:grid-cols-3">
              <form onSubmit={addNews} className="rounded-3xl bg-white p-6 shadow-xl lg:col-span-1">
                <h2 className="text-2xl font-black">Add News</h2>
                <div className="mt-5 space-y-4">
                  <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-2xl border px-4 py-3 outline-none" placeholder="News title" />
                  <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full rounded-2xl border px-4 py-3 outline-none">
                    {categories.slice(1, 8).map((cat) => <option key={cat}>{cat}</option>)}
                  </select>
                  <textarea value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} className="h-32 w-full rounded-2xl border px-4 py-3 outline-none" placeholder="Short description" />
                  <button className="w-full rounded-2xl bg-red-700 px-5 py-4 font-black text-white">Publish News</button>
                </div>
              </form>

              <div className="rounded-3xl bg-white p-6 shadow-xl lg:col-span-2">
                <h2 className="text-2xl font-black">Manage News</h2>
                <div className="mt-5 space-y-4">
                  {news.map((item, index) => (
                    <div key={index} className="flex items-start justify-between gap-4 rounded-2xl border p-4">
                      <div>
                        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-700">{item.category}</span>
                        <h3 className="mt-2 font-black">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                      </div>
                      <button onClick={() => deleteNews(index)} className="rounded-xl bg-gray-950 px-4 py-2 text-sm font-bold text-white">Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-950">
      <header className="sticky top-0 z-50 shadow-lg">
        <div className="bg-red-700 text-white">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 text-sm overflow-hidden">
            <span className="rounded-full bg-white px-3 py-1 font-bold text-red-700">BREAKING</span>
            <p className="whitespace-nowrap font-semibold">દાહોદની દરેક મહત્વની અપડેટ હવે Dahod Live પર — News, Videos, Live Coverage અને Local Updates.</p>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Dahod Live Logo" className="h-14 w-auto" />
              <div>
                <h1 className="text-2xl font-black tracking-tight text-red-700">DAHOD LIVE</h1>
                <p className="text-xs font-semibold text-gray-500">Dahod District News & Media Network</p>
              </div>
            </div>

            <div className="hidden items-center gap-2 rounded-full bg-gray-100 px-4 py-2 md:flex">
              <span>🔍</span>
              <input className="bg-transparent text-sm outline-none" placeholder="Search news..." />
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="rounded-xl bg-gray-100 p-3 md:hidden">☰</button>
          </div>
        </div>

        <nav className="bg-gray-950 text-white">
          <div className={`${mobileMenu ? "block" : "hidden"} mx-auto max-w-7xl px-4 md:block`}>
            <div className="flex flex-col gap-1 py-2 md:flex-row md:items-center md:gap-0 md:py-0">
              {categories.map((cat) => (
                <a key={cat} href={cat === "Contact" ? "#contact" : cat === "Videos" ? "#videos" : cat === "Live TV" ? "#live" : "#"} className="px-4 py-3 text-sm font-bold hover:bg-red-700">
                  {cat}
                </a>
              ))}
              <button onClick={() => setShowAdmin(true)} className="px-4 py-3 text-left text-sm font-bold text-yellow-300 hover:bg-red-700">Admin Panel</button>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl lg:col-span-2">
            <div className="relative flex h-96 items-end bg-gradient-to-br from-red-700 via-gray-900 to-black p-6 text-white">
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="absolute right-8 top-8 rounded-full border border-white/20 px-5 py-2 text-sm font-black text-white/80 hover:bg-white hover:text-red-700">FOLLOW @dahod_live</a>
              <div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-red-700">TOP STORY</span>
                <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight md:text-5xl">દાહોદની વાત હવે વધુ ઝડપથી, વધુ વિશ્વાસથી</h2>
                <p className="mt-3 max-w-xl text-sm text-gray-200">Local news, politics, business, events and live updates — all in one powerful digital platform.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl bg-red-700 p-5 text-white shadow-xl">
              <h3 className="text-xl font-black">📡 Live Coverage</h3>
              <p className="mt-2 text-sm text-red-100">Election, events, interviews और public issues की live reporting.</p>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="mt-5 block w-full rounded-2xl bg-white px-4 py-3 text-center font-bold text-red-700">▶ Watch Live Updates</a>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-xl">
              <h3 className="mb-4 text-lg font-black">Trending Updates</h3>
              {news.slice(0, 3).map((item, index) => (
                <div key={item.title} className="mb-4 flex gap-3 border-b pb-4 last:mb-0 last:border-0 last:pb-0">
                  <span className="text-2xl font-black text-red-700">0{index + 1}</span>
                  <div>
                    <p className="text-sm font-bold leading-snug">{item.title}</p>
                    <p className="mt-1 text-xs text-gray-500">⏱ {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="my-8 rounded-3xl bg-gray-950 p-6 text-white shadow-xl">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-sm font-bold text-red-400">📢 ADVERTISEMENT SPACE</p>
              <h2 className="mt-2 text-3xl font-black">તમારા Business ને Dahod Live પર Promote કરો</h2>
              <p className="mt-2 text-gray-300">Social media promotion, video ads, event coverage, LED screen ads और local branding packages available.</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-red-700 px-6 py-4 text-center font-black hover:bg-red-800">Advertise With Us</a>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-black">Latest News</h2>
            <a href="#" className="font-bold text-red-700">View All</a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {news.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1">
                <div className="flex h-44 items-end bg-gradient-to-br from-red-700 to-black p-4 text-white">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black">{item.category}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-black leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>⏱ {item.time}</span>
                    <span>↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="videos" className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-xl lg:col-span-2">
            <h2 className="text-2xl font-black">Video Stories</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              {videos.map((video) => (
                <div key={video} className="relative flex h-72 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 to-black text-white">
                  <span className="text-5xl">▶</span>
                  <p className="absolute bottom-4 left-4 right-4 font-black">{video}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="rounded-3xl bg-white p-6 shadow-xl">
            <h2 className="text-2xl font-black">Contact</h2>
            <div className="mt-5 space-y-4 text-sm font-semibold">
              <p>📍 Chakaliya Road, Near Patel Art Society, Dahod</p>
              <p>📞 +91 9327317004</p>
              <p>📸 Instagram: @dahod_live</p>
              <p>✉ dahodlive.in@gmail.com</p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6 block w-full rounded-2xl bg-green-600 px-5 py-4 text-center font-black text-white">WhatsApp Now</a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="mt-3 block w-full rounded-2xl bg-red-700 px-5 py-4 text-center font-black text-white">Follow on Instagram</a>
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-gray-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-black text-red-500">DAHOD LIVE</h2>
            <p className="mt-3 text-sm text-gray-400">Dahod District’s trusted digital news, marketing and media platform.</p>
          </div>
          <div>
            <h3 className="font-black">Quick Links</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-400">
              {categories.slice(1, 9).map((cat) => (
                <a key={cat} href="#">{cat}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black">Follow Us</h3>
            <div className="mt-4 flex gap-3 text-2xl">
              <a href="#" className="rounded-full bg-white/10 px-4 py-2">f</a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 px-4 py-2">◎</a>
              <a href={youtubeLink} className="rounded-full bg-white/10 px-4 py-2">▶</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">© 2026 Dahod Live. All Rights Reserved.</div>
      </footer>
    </div>
  );
}
