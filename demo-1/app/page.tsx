"use client";

import { FormEvent, useState } from "react";

const problems = [
  {
    title: "Inconsistent leads",
    text: "You get referrals in waves, but your pipeline goes quiet when you stop chasing conversations."
  },
  {
    title: "Confusing offer",
    text: "Prospects like what you do, yet they hesitate because the value and next step are not obvious."
  },
  {
    title: "Weak follow-up system",
    text: "Interested people slip away because there is no simple rhythm for staying visible and helpful."
  }
];

const steps = [
  {
    title: "Clarify your offer",
    text: "Turn your expertise into a focused promise that is easy for the right buyer to understand."
  },
  {
    title: "Build a lead capture funnel",
    text: "Create one clear path from first click to booked call, without adding unnecessary tools."
  },
  {
    title: "Follow up with interested prospects",
    text: "Use a simple sequence that keeps warm leads moving while protecting your time."
  }
];

const services = [
  {
    title: "Offer Audit",
    text: "A focused review of your current promise, positioning, and sales page clarity."
  },
  {
    title: "Landing Page Strategy",
    text: "A practical page plan that connects your message, proof, and call to action."
  },
  {
    title: "Lead Follow-Up System",
    text: "A lightweight follow-up map for inquiries, warm prospects, and missed opportunities."
  }
];

const testimonials = [
  {
    quote:
      "GrowthPilot helped me explain my service in one sentence and double my discovery calls in a month.",
    name: "Maya R.",
    role: "Brand consultant"
  },
  {
    quote:
      "The coaching was practical, calm, and direct. I finally have a funnel I can maintain myself.",
    name: "Jordan K.",
    role: "Studio owner"
  },
  {
    quote:
      "My follow-up used to be random. Now prospects get a clear next step without me overthinking it.",
    name: "Elena S.",
    role: "Operations advisor"
  }
];

const faqs = [
  {
    question: "Who is this coaching program for?",
    answer:
      "It is built for small business owners, consultants, and service providers who want clearer messaging and more qualified leads."
  },
  {
    question: "Do I need a big audience first?",
    answer:
      "No. The system focuses on sharpening your offer, improving conversion, and following up with the leads you already attract."
  },
  {
    question: "How long does the process take?",
    answer:
      "Most clients can clarify the core offer and launch a simple lead capture path within a few weeks."
  },
  {
    question: "Will you build the full funnel for me?",
    answer:
      "This demo positions GrowthPilot as a strategy partner. The program can guide the page, offer, and follow-up structure."
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "You receive a confirmation message, and the fictional GrowthPilot team would follow up to schedule a strategy call."
  }
];

const problemOptions = [
  "Inconsistent leads",
  "Confusing offer",
  "Weak follow-up system",
  "Something else"
];

type FormState = {
  name: string;
  email: string;
  businessType: string;
  mainProblem: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  businessType: "",
  mainProblem: "",
  message: ""
};

export default function Home() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() && !form.email.trim()) {
      setError("Please enter your name and email before submitting.");
      setSuccess(false);
      return;
    }

    if (!form.name.trim()) {
      setError("Please enter your name before submitting.");
      setSuccess(false);
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email before submitting.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    setForm(initialFormState);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,#eff6ff_0%,rgba(255,255,255,0)_100%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
              GrowthPilot Coaching
            </p>
            <h1 className="text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Get More Clients With a Simple Growth System
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              A practical coaching program for small business owners who want
              better offers, clearer messaging, and more qualified leads.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#lead-form"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-600 px-7 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100 sm:w-auto"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-base font-semibold text-slate-900 transition hover:border-brand-200 hover:text-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100 sm:w-auto"
              >
                See How It Works
              </a>
            </div>
          </div>

          <div className="mx-auto mt-14 w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-6">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-100">
                    Weekly lead plan
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-brand-100">
                    Active
                  </span>
                </div>
                <div className="space-y-4">
                  {["Offer clarity", "Landing page", "Follow-up"].map(
                    (item, index) => (
                      <div key={item}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span>{item}</span>
                          <span>{[86, 72, 64][index]}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-brand-500"
                            style={{ width: `${[86, 72, 64][index]}%` }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-500">
                  Next actions
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Rewrite homepage promise",
                    "Add strategy call CTA",
                    "Send 3-part follow-up"
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="The drag" title="Growth gets noisy when the basics are fuzzy">
        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((problem) => (
            <Card key={problem.title} title={problem.title} text={problem.text} />
          ))}
        </div>
      </Section>

      <Section
        id="how-it-works"
        eyebrow="The system"
        title="A simple path from unclear offer to qualified calls"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="Focused help for your biggest growth bottleneck">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} title={service.title} text={service.text} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Client words" title="Fictional wins from focused businesses">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <blockquote className="leading-7 text-slate-700">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-slate-950">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section
        id="lead-form"
        eyebrow="Free strategy call"
        title="Tell GrowthPilot where leads are getting stuck"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-normal text-brand-100">
              What you get
            </p>
            <h3 className="mt-4 text-2xl font-bold">
              A clear next step for your offer, page, and follow-up.
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Share a few details and the fictional GrowthPilot team will map
              the biggest opportunity in your current client acquisition system.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" required>
                <input
                  id="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="input"
                  type="text"
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" htmlFor="email" required>
                <input
                  id="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="input"
                  type="email"
                  autoComplete="email"
                />
              </Field>
              <Field label="Business type" htmlFor="businessType">
                <input
                  id="businessType"
                  value={form.businessType}
                  onChange={(event) =>
                    updateField("businessType", event.target.value)
                  }
                  className="input"
                  type="text"
                  placeholder="Consulting, studio, local service..."
                />
              </Field>
              <Field label="Main problem" htmlFor="mainProblem">
                <select
                  id="mainProblem"
                  value={form.mainProblem}
                  onChange={(event) =>
                    updateField("mainProblem", event.target.value)
                  }
                  className="input"
                >
                  <option value="">Select one</option>
                  {problemOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" htmlFor="message" className="mt-5">
              <textarea
                id="message"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="input min-h-32 resize-y"
                placeholder="What would you like to improve first?"
              />
            </Field>

            {error ? (
              <p className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </p>
            ) : null}

            {success ? (
              <p className="mt-5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                Thanks! Your request has been received.
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-600 px-7 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100 sm:w-auto"
            >
              Book a Free Strategy Call
            </button>
          </form>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <div className="mx-auto max-w-4xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-soft">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-950">
                {faq.question}
                <span className="text-2xl leading-none text-brand-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="border-t border-slate-100 bg-slate-950 px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">GrowthPilot Coaching</p>
            <a
              href="mailto:hello@growthpilot.demo"
              className="mt-2 block text-sm text-slate-300 hover:text-white"
            >
              hello@growthpilot.demo
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">
              X
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
          <p className="text-sm text-slate-400">
            (c) 2026 GrowthPilot Demo. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-normal text-brand-600">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}

function Field({
  label,
  htmlFor,
  required,
  className = "",
  children
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required ? <span className="text-brand-600"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
