# Demo 3 AI Chatbot: SmileCare Clinic

Responsive AI chatbot demo for a fictional dental clinic.

## Tech

- Next.js
- React
- Tailwind CSS
- Predefined chatbot logic
- Local component state for appointment and callback lead capture
- No backend and no real AI API

## Features

- Landing page hero, services, and chatbot section
- Predefined answers for clinic hours, location, cleaning pricing, emergencies, and booking
- Unknown-question fallback with callback offer
- Appointment request flow for name, phone, preferred date, and service needed
- Clean structure that can be extended later with an OpenAI API route

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Set the Root Directory to `demo-3-ai-chatbot`.
4. Keep the default Next.js build settings.
5. Deploy.
