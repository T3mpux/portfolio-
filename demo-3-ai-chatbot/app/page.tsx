import { ChatbotWidget } from "@/components/ChatbotWidget";

const services = [
  {
    title: "Teeth Cleaning",
    text: "Routine cleanings, gentle polishing, and practical prevention advice."
  },
  {
    title: "Whitening",
    text: "Simple whitening options for a brighter smile before events or everyday confidence."
  },
  {
    title: "Emergency Dental Care",
    text: "Same-day help for tooth pain, chipped teeth, swelling, and urgent dental concerns."
  },
  {
    title: "Braces Consultation",
    text: "Friendly guidance on alignment options, timelines, and next steps."
  }
];

const stats = [
  { label: "Average reply time", value: "Instant" },
  { label: "Patient rating", value: "4.9/5" },
  { label: "Weekend hours", value: "Sat" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1800&q=85"
          alt="A calm dental clinic treatment room"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold tracking-normal text-white">
              SmileCare Clinic
            </a>
            <a
              href="#chatbot"
              className="hidden rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:inline-flex"
            >
              Chat
            </a>
          </header>

          <div className="flex flex-1 items-center py-14 sm:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 text-base font-semibold text-brand-100">
                SmileCare Clinic
              </p>
              <h1 className="text-4xl font-bold tracking-normal text-white sm:text-5xl lg:text-6xl">
                Friendly Dental Care Without the Stress
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                Book appointments, ask questions, and learn about our services
                instantly.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#chatbot" className="button-primary w-full sm:w-auto">
                  Chat With Assistant
                </a>
                <a
                  href="#services"
                  className="button-secondary w-full border-white/40 bg-white/95 sm:w-auto"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pb-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-normal text-brand-700">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Everyday dental care, made easier to book
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="panel p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="chatbot"
        className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-brand-700">
              Chatbot
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              Ask a question or request an appointment
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              This demo uses predefined logic to answer common dental clinic
              questions and collect callback details. The structure is ready for
              a future OpenAI API route when the demo needs real AI responses.
            </p>
            <div className="mt-6 rounded-lg border border-coral-100 bg-coral-50 p-4 text-sm leading-6 text-slate-700">
              Try asking about opening hours, location, cleaning prices,
              emergency visits, or booking an appointment.
            </div>
          </div>

          <ChatbotWidget />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500 sm:px-8 lg:px-10">
        SmileCare Clinic is a fictional portfolio demo. No real appointment is
        submitted.
      </footer>
    </main>
  );
}
