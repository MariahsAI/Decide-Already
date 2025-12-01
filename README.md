# 🎯 DecideAlready

**Stop thinking. Start doing.**

A decision-making app that tells you what to do — and holds you accountable. No more endless deliberation. No more "maybe later." Just answers.

## 🧠 The Problem

You spend 20 minutes deciding what to eat. You draft texts you never send. You overthink whether to go out or stay in. Decision fatigue is real, and it's stealing your time and energy.

## 💡 The Solution

DecideAlready makes the decision FOR you. But here's the catch: **you have to commit before you see the answer.** No backing out. No excuses.

## ✨ Features

### 🎯 10 Decision Categories
- 🍕 What should I eat?
- 👕 What should I wear?
- 🚪 Should I go out or stay in?
- 📺 What should I watch?
- 💬 Should I text them?
- 💳 Should I buy it?
- 💪 Should I workout?
- 😴 Should I stay up or go to sleep?
- ❤️ Should I go on the date?
- 💼 Should I apply for the job?

### 🧬 Personalized Decisions
8-step onboarding learns about you:
- Dietary restrictions (vegetarian, vegan, gluten-free, etc.)
- Favorite cuisines
- Entertainment preferences (likes AND dislikes)
- Personality type (introvert/extrovert/ambivert)
- Chronotype (night owl vs early bird)
- Fitness level

### 🧠 Learning Algorithm
- Tracks decisions you couldn't follow through on
- Asks WHY you failed (dietary issue, don't like it, too expensive, etc.)
- Filters out bad suggestions in the future
- Gets smarter the more you use it

### 🔥 Streak System
- Track consecutive days of following through
- Celebration animations when you level up
- Gamified accountability

### 🎲 Re-roll System
- Don't like the answer? Re-roll once per day
- Creates scarcity and intentionality
- Resets at midnight

### 📤 Share Feature
- Share your decisions with friends
- Built for viral "I let an app control my life" content

## 🛠 Tech Stack

- **React** (functional components with hooks)
- **localStorage** for persistence
- **Inline styles** (no external CSS dependencies)
- **Space Grotesk** font

## 🚀 Getting Started

### Option 1: Use in React Project

```bash
npm install react
```

Copy `DecideAlready.jsx` into your components folder and import:

```jsx
import DecideAlready from './DecideAlready';

function App() {
  return <DecideAlready />;
}
```

### Option 2: Quick Demo with Vite

```bash
npm create vite@latest decide-already -- --template react
cd decide-already
# Replace src/App.jsx content with DecideAlready component
npm run dev
```

### Option 3: Deploy to Vercel/Netlify

1. Create a new React project
2. Add the DecideAlready component
3. Push to GitHub
4. Connect to Vercel or Netlify
5. Deploy!

## 📱 Screenshots

*Coming soon*

## 🎨 Design

- **Color Scheme:** Dark gradient (#0a0a0a → #1a1a2e) with orange accent (#ff6b35)
- **Typography:** Space Grotesk
- **Aesthetic:** Bold, commanding, slightly unhinged
- **UI Pattern:** Commit-before-reveal for psychological buy-in

## 🗺 Roadmap

- [ ] PWA support (install on phone)
- [ ] Push notifications for accountability
- [ ] Social features (challenge friends)
- [ ] AI-powered personalized answers
- [ ] Analytics dashboard
- [ ] Dark/light mode toggle

## 💰 Monetization Ideas

- **Free tier:** 3 decisions per day
- **Pro tier:** Unlimited decisions ($5-10/month)
- **Instant tier:** Skip-the-line answers ($2 each)

## 🤝 Contributing

Pull requests welcome! For major changes, please open an issue first.

## 📄 License

MIT

---

**Built for the overthinkers. Used by the doers.**
