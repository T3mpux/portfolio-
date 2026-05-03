"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

type Role = "assistant" | "user";

type Message = {
  id: number;
  role: Role;
  text: string;
};

type LeadField = "name" | "phone" | "preferredDate" | "serviceNeeded";

type LeadForm = Record<LeadField, string>;

type CaptureState = {
  active: boolean;
  field: LeadField;
  data: LeadForm;
};

const initialLead: LeadForm = {
  name: "",
  phone: "",
  preferredDate: "",
  serviceNeeded: ""
};

const leadPrompts: Record<LeadField, string> = {
  name: "Sure. What is your name?",
  phone: "Thanks. What phone number should the clinic call?",
  preferredDate: "What preferred date works best for you?",
  serviceNeeded: "Which service do you need?"
};

const fieldOrder: LeadField[] = [
  "name",
  "phone",
  "preferredDate",
  "serviceNeeded"
];

const fallbackReply =
  "I can help with appointments, pricing, services, and clinic hours. Would you like to request a callback?";

const openingHoursAnswer =
  "SmileCare Clinic is open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We are closed on Sundays.";

const locationAnswer =
  "SmileCare Clinic is located at 128 Pearl Avenue, Suite 204, Springfield. Parking is available behind the building.";

const cleaningAnswer =
  "A routine teeth cleaning starts at $95. The final cost can vary if an exam, X-rays, or extra care is needed.";

const emergencyAnswer =
  "Yes. SmileCare Clinic accepts emergency dental appointments when same-day slots are available. Tell me your details and the team can call you back.";

const bookingAnswer =
  "I can collect an appointment request for the clinic team. Let us start with a few details.";

const servicesAnswer =
  "SmileCare Clinic offers teeth cleaning, whitening, emergency dental care, and braces consultations.";

const quickQuestions = [
  "What are your opening hours?",
  "Where are you located?",
  "How much is teeth cleaning?",
  "Do you accept emergency appointments?",
  "How can I book an appointment?"
];

const services = [
  "Teeth Cleaning",
  "Whitening",
  "Emergency Dental Care",
  "Braces Consultation"
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function hasAny(value: string, keywords: string[]) {
  return keywords.some((keyword) => value.includes(keyword));
}

function isLeadIntent(value: string, awaitingCallbackOffer: boolean) {
  const normalized = normalize(value);

  if (
    awaitingCallbackOffer &&
    ["yes", "yeah", "yep", "sure", "please", "callback", "call me"].some(
      (word) => normalized === word || normalized.includes(word)
    )
  ) {
    return true;
  }

  return hasAny(normalized, [
    "appointment",
    "book",
    "booking",
    "schedule",
    "callback",
    "call back",
    "call me",
    "contact me",
    "request"
  ]);
}

function answerKnownQuestion(value: string) {
  const normalized = normalize(value);

  if (
    hasAny(normalized, ["opening hours", "open hours", "hours", "when are you open"])
  ) {
    return openingHoursAnswer;
  }

  if (
    hasAny(normalized, [
      "how much is teeth cleaning",
      "teeth cleaning",
      "cleaning price",
      "cleaning cost",
      "price"
    ])
  ) {
    return cleaningAnswer;
  }

  if (
    hasAny(normalized, ["emergency", "urgent", "same day", "pain", "toothache"])
  ) {
    return emergencyAnswer;
  }

  if (
    hasAny(normalized, ["how can i book", "book an appointment", "booking", "schedule"])
  ) {
    return bookingAnswer;
  }

  if (
    hasAny(normalized, ["where", "located", "location", "address", "clinic"])
  ) {
    return locationAnswer;
  }

  if (
    hasAny(normalized, ["service", "services", "whitening", "braces", "cleaning"])
  ) {
    return servicesAnswer;
  }

  return null;
}

function nextLeadField(currentField: LeadField) {
  const currentIndex = fieldOrder.indexOf(currentField);
  return fieldOrder[currentIndex + 1];
}

export function ChatbotWidget() {
  const nextId = useRef(3);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: "Hi, I am the SmileCare assistant. Ask about hours, prices, services, emergencies, or booking an appointment."
    }
  ]);
  const [input, setInput] = useState("");
  const [capture, setCapture] = useState<CaptureState>({
    active: false,
    field: "name",
    data: initialLead
  });
  const [awaitingCallbackOffer, setAwaitingCallbackOffer] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadForm | null>(null);

  const currentPrompt = capture.active ? leadPrompts[capture.field] : null;

  const completionText = useMemo(() => {
    if (!submittedLead) {
      return null;
    }

    return `${submittedLead.serviceNeeded} for ${submittedLead.name} on ${submittedLead.preferredDate}`;
  }, [submittedLead]);

  const addMessages = (newMessages: Omit<Message, "id">[]) => {
    setMessages((current) => [
      ...current,
      ...newMessages.map((message) => ({
        ...message,
        id: nextId.current++
      }))
    ]);
  };

  const startCapture = (intro?: string) => {
    setCapture({
      active: true,
      field: "name",
      data: initialLead
    });
    setSubmittedLead(null);
    setAwaitingCallbackOffer(false);
    addMessages([
      ...(intro ? [{ role: "assistant" as const, text: intro }] : []),
      { role: "assistant", text: leadPrompts.name }
    ]);
  };

  const handleCaptureAnswer = (value: string) => {
    const trimmedValue = value.trim();
    const updatedLead = {
      ...capture.data,
      [capture.field]: trimmedValue
    };
    const nextField = nextLeadField(capture.field);

    if (!nextField) {
      setCapture({
        active: false,
        field: "name",
        data: initialLead
      });
      setSubmittedLead(updatedLead);
      setAwaitingCallbackOffer(false);
      addMessages([
        {
          role: "assistant",
          text: "Thanks! The clinic team will contact you soon."
        }
      ]);
      return;
    }

    setCapture({
      active: true,
      field: nextField,
      data: updatedLead
    });
    addMessages([{ role: "assistant", text: leadPrompts[nextField] }]);
  };

  const handleBotResponse = (value: string) => {
    if (capture.active) {
      handleCaptureAnswer(value);
      return;
    }

    const answer = answerKnownQuestion(value);

    if (answer) {
      setAwaitingCallbackOffer(false);
      addMessages([{ role: "assistant", text: answer }]);

      if (answer === emergencyAnswer || answer === bookingAnswer) {
        startCapture();
      }

      return;
    }

    if (isLeadIntent(value, awaitingCallbackOffer)) {
      startCapture(bookingAnswer);
      return;
    }

    setAwaitingCallbackOffer(true);
    addMessages([{ role: "assistant", text: fallbackReply }]);
  };

  const sendMessage = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    addMessages([{ role: "user", text: trimmedValue }]);
    handleBotResponse(trimmedValue);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="panel overflow-hidden">
      <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
              SC
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                SmileCare Assistant
              </h3>
              <p className="text-sm text-slate-500">
                Usually replies instantly
              </p>
            </div>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-mint-50 px-3 py-2 text-xs font-semibold text-mint-600">
            <span className="h-2 w-2 rounded-full bg-mint-600" />
            Online
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="flex min-h-[35rem] flex-col bg-slate-50">
          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm sm:max-w-[72%] ${
                    message.role === "user"
                      ? "rounded-br-md bg-brand-600 text-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {completionText ? (
              <div className="rounded-lg border border-mint-100 bg-white p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-950">
                  Appointment request captured
                </p>
                <p className="mt-1">{completionText}</p>
              </div>
            ) : null}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200 bg-white p-4 sm:p-5"
          >
            {currentPrompt ? (
              <p className="mb-3 text-sm font-semibold text-brand-700">
                {currentPrompt}
              </p>
            ) : null}
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="input"
                placeholder={
                  capture.active
                    ? "Type your answer..."
                    : "Ask a question or request an appointment..."
                }
                aria-label="Chat message"
              />
              <button type="submit" className="button-primary sm:w-auto">
                Send
              </button>
            </div>
          </form>
        </div>

        <aside className="border-t border-slate-200 bg-white p-4 lg:border-l lg:border-t-0 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-normal text-slate-500">
            Quick questions
          </p>
          <div className="mt-4 grid gap-2">
            {quickQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => sendMessage(question)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800 focus:outline-none focus:ring-4 focus:ring-brand-100"
              >
                {question}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-bold text-slate-950">Services</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
