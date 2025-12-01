import React, { useState } from 'react';

export default function DecideAlready() {
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [decision, setDecision] = useState('');
  const [phase, setPhase] = useState('onboarding');
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [rerollAvailable, setRerollAvailable] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [userProfile, setUserProfile] = useState({
    name: '',
    dietaryRestrictions: [],
    favoriteCuisines: [],
    entertainmentLikes: [],
    personality: '',
    chronotype: '',
  });
  const [rejectedDecisions, setRejectedDecisions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackReason, setFeedbackReason] = useState('');

  const questionOptions = [
    { id: 'eat', label: 'What should I eat?', icon: '🍕' },
    { id: 'wear', label: 'What should I wear?', icon: '👕' },
    { id: 'goOut', label: 'Go out or stay in?', icon: '🚪' },
    { id: 'watch', label: 'What should I watch?', icon: '📺' },
    { id: 'text', label: 'Should I text them?', icon: '💬' },
    { id: 'buy', label: 'Should I buy it?', icon: '💳' },
    { id: 'workout', label: 'Should I workout?', icon: '💪' },
    { id: 'sleep', label: 'Stay up or sleep?', icon: '😴' },
    { id: 'dating', label: 'Go on the date?', icon: '❤️' },
    { id: 'job', label: 'Apply for the job?', icon: '💼' },
  ];

  const onboardingQuestions = [
    { id: 'name', question: "What should I call you?", type: 'text', field: 'name' },
    { id: 'dietary', question: "Foods you CAN'T eat?", type: 'multiSelect', field: 'dietaryRestrictions',
      options: [
        { id: 'vegetarian', label: '🥬 Vegetarian' },
        { id: 'vegan', label: '🌱 Vegan' },
        { id: 'halal', label: '☪️ Halal' },
        { id: 'seafood', label: '🐟 No Seafood' },
        { id: 'spicy', label: '🌶️ No Spicy' },
        { id: 'none', label: '✓ None' },
      ],
    },
    { id: 'cuisines', question: "Cuisines you LOVE?", type: 'multiSelect', field: 'favoriteCuisines',
      options: [
        { id: 'italian', label: '🍝 Italian' },
        { id: 'mexican', label: '🌮 Mexican' },
        { id: 'chinese', label: '🥡 Chinese' },
        { id: 'japanese', label: '🍣 Japanese' },
        { id: 'indian', label: '🍛 Indian' },
        { id: 'american', label: '🍔 American' },
      ],
    },
    { id: 'personality', question: "Social battery?", type: 'singleSelect', field: 'personality',
      options: [
        { id: 'introvert', label: '🏠 Introvert' },
        { id: 'extrovert', label: '🎉 Extrovert' },
        { id: 'ambivert', label: '⚖️ Ambivert' },
      ],
    },
  ];

  const decisions = {
    eat: [
      { text: "Thai food. Pad Thai. Order now.", tags: ['thai'], restrictions: ['vegan'] },
      { text: "Pizza. Pepperoni. Classic.", tags: ['italian'], restrictions: ['vegetarian', 'vegan', 'halal'] },
      { text: "Sushi. Salmon roll.", tags: ['japanese'], restrictions: ['vegan', 'seafood'] },
      { text: "Tacos. Al pastor.", tags: ['mexican'], restrictions: ['vegetarian', 'halal'] },
      { text: "Burger and fries.", tags: ['american'], restrictions: ['vegetarian', 'vegan', 'halal'] },
      { text: "Chinese takeout. Orange chicken.", tags: ['chinese'], restrictions: ['vegetarian', 'vegan'] },
      { text: "Indian. Butter chicken.", tags: ['indian'], restrictions: ['vegetarian', 'vegan'] },
      { text: "Salad. Your body will thank you.", tags: [], restrictions: [] },
    ],
    wear: [
      { text: "The black outfit. You know it works.", tags: [] },
      { text: "Jeans and white tee. Timeless.", tags: [] },
      { text: "Something bold. Stand out.", tags: [] },
      { text: "Your comfiest fit. Confidence wins.", tags: [] },
      { text: "All black everything.", tags: [] },
    ],
    goOut: [
      { text: "GO OUT. You'll regret staying in.", tags: ['extrovert'] },
      { text: "Stay in. Recharge.", tags: ['introvert'] },
      { text: "Go out but leave by midnight.", tags: ['ambivert'] },
      { text: "Stay in. Movie and snacks.", tags: ['introvert'] },
    ],
    watch: [
      { text: "Something you've seen before. Comfort.", tags: [] },
      { text: "That show everyone's talking about.", tags: [] },
      { text: "Comedy. You need to laugh.", tags: [] },
      { text: "Documentary. Learn something.", tags: [] },
      { text: "Reality TV. Turn your brain off.", tags: [] },
    ],
    text: [
      { text: "YES. Send it. What's the worst?", tags: [] },
      { text: "NO. Protect your peace.", tags: [] },
      { text: "Wait 24 hours first.", tags: [] },
      { text: "Call instead. Bold move.", tags: [] },
    ],
    buy: [
      { text: "BUY IT. You've thought enough.", tags: [] },
      { text: "Don't. If you ask, you don't need it.", tags: [] },
      { text: "Wait a week. Still want it? Buy.", tags: [] },
      { text: "Treat yourself. You work hard.", tags: [] },
    ],
    workout: [
      { text: "YES. Move your body. No excuses.", tags: [] },
      { text: "Rest day. Recovery matters.", tags: [] },
      { text: "Just 10 minutes. You'll keep going.", tags: [] },
      { text: "Full send. Go hard.", tags: [] },
    ],
    sleep: [
      { text: "Go to sleep. Nothing good after 2am.", tags: [] },
      { text: "Stay up. You're in a groove.", tags: [] },
      { text: "One more episode, then BED.", tags: [] },
    ],
    dating: [
      { text: "GO. You won't know if you don't.", tags: [] },
      { text: "Skip it. Trust your gut.", tags: [] },
      { text: "Go but keep it short. Coffee.", tags: [] },
    ],
    job: [
      { text: "APPLY. You miss 100% you don't take.", tags: [] },
      { text: "Yes. Worst they say is no.", tags: [] },
      { text: "Send it TODAY. Not tomorrow.", tags: [] },
    ],
  };

  const feedbackReasons = [
    { id: 'dietary', label: "🚫 Can't eat that" },
    { id: 'dontLike', label: "👎 Don't like it" },
    { id: 'notInMood', label: "😐 Not in the mood" },
    { id: 'other', label: "🤷 Other" },
  ];

  const getDecision = () => {
    let options = decisions[selectedQuestion];
    if (selectedQuestion === 'eat') {
      options = options.filter(opt => {
        for (let r of userProfile.dietaryRestrictions) {
          if (opt.restrictions?.includes(r)) return false;
        }
        return true;
      });
      const fav = options.filter(opt => opt.tags?.some(t => userProfile.favoriteCuisines.includes(t)));
      if (fav.length > 0 && Math.random() > 0.3) options = fav;
    }
    if (selectedQuestion === 'goOut' && userProfile.personality) {
      const p = options.filter(opt => opt.tags?.includes(userProfile.personality));
      if (p.length > 0) options = p;
    }
    const rejected = rejectedDecisions.filter(r => r.category === selectedQuestion);
    options = options.filter(opt => !rejected.some(r => r.decision === opt.text));
    if (options.length === 0) options = decisions[selectedQuestion];
    return options[Math.floor(Math.random() * options.length)].text;
  };

  const handleOnboardingNext = () => {
    if (onboardingStep < onboardingQuestions.length - 1) setOnboardingStep(onboardingStep + 1);
    else setPhase('ask');
  };

  const handleOnboardingSelect = (field, value, isMulti) => {
    if (isMulti) {
      const current = userProfile[field] || [];
      if (value === 'none') setUserProfile({ ...userProfile, [field]: [] });
      else if (current.includes(value)) setUserProfile({ ...userProfile, [field]: current.filter(v => v !== value) });
      else setUserProfile({ ...userProfile, [field]: [...current.filter(v => v !== 'none'), value] });
    } else {
      setUserProfile({ ...userProfile, [field]: value });
    }
  };

  const handleCommit = () => { if (selectedQuestion) setPhase('commit'); };
  
  const handleReveal = () => {
    setIsLoading(true);
    setTimeout(() => { setDecision(getDecision()); setPhase('reveal'); setIsLoading(false); }, 1500);
  };

  const handleFollowed = () => {
    setStreak(streak + 1);
    setShowCelebration(true);
    setTimeout(() => { setShowCelebration(false); resetApp(); }, 2000);
  };

  const handleReroll = () => {
    if (!rerollAvailable) return;
    setRerollAvailable(false);
    setIsLoading(true);
    setTimeout(() => { setDecision(getDecision()); setIsLoading(false); }, 1500);
  };

  const handleBroken = () => setShowFeedback(true);

  const handleFeedbackSubmit = () => {
    setRejectedDecisions([...rejectedDecisions, { category: selectedQuestion, decision, reason: feedbackReason }]);
    setStreak(0); setShowFeedback(false); setFeedbackReason(''); resetApp();
  };

  const resetApp = () => { setSelectedQuestion(''); setDecision(''); setPhase('ask'); setRerollAvailable(true); };
  
  const resetProfile = () => {
    setUserProfile({ name: '', dietaryRestrictions: [], favoriteCuisines: [], entertainmentLikes: [], personality: '', chronotype: '' });
    setRejectedDecisions([]); setOnboardingStep(0); setPhase('onboarding');
  };

  const getSelectedLabel = () => questionOptions.find(q => q.id === selectedQuestion)?.label || '';

  const containerStyle = { minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)', color: '#fff', padding: 20, fontFamily: 'system-ui, sans-serif' };
  const cardStyle = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: '32px 24px', maxWidth: 420, margin: '0 auto' };
  const btnPrimary = { width: '100%', padding: '16px 24px', background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)', color: '#000', fontWeight: 700, fontSize: 16, border: 'none', borderRadius: 12, cursor: 'pointer', marginTop: 16 };
  const btnGhost = { ...btnPrimary, background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#666', marginTop: 8 };
  const btnDanger = { ...btnPrimary, background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)', color: '#fff' };
  const btnSuccess = { ...btnPrimary, background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)', color: '#fff', flex: 1 };
  const btnFail = { ...btnPrimary, background: 'transparent', border: '2px solid #e74c3c', color: '#e74c3c', flex: 1 };

  // Onboarding
  if (phase === 'onboarding') {
    const q = onboardingQuestions[onboardingStep];
    return (
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0 }}>DECIDE<span style={{ display: 'block', fontSize: 42, color: '#ff6b35', textShadow: '0 0 30px rgba(255,107,53,0.5)' }}>ALREADY</span></h1>
          <p style={{ color: '#888', fontSize: 12, letterSpacing: 3, marginTop: 8 }}>LET'S GET TO KNOW YOU</p>
        </div>
        <div style={{ width: '100%', maxWidth: 420, height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, margin: '0 auto 24px', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'linear-gradient(135deg, #ff6b35, #ff8c42)', width: `${((onboardingStep + 1) / onboardingQuestions.length) * 100}%`, transition: 'width 0.3s' }} />
        </div>
        <div style={cardStyle}>
          <h2 style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', marginBottom: 20 }}>{q.question}</h2>
          {q.type === 'text' && (
            <input type="text" placeholder="Your name..." value={userProfile[q.field] || ''} onChange={e => setUserProfile({ ...userProfile, [q.field]: e.target.value })}
              style={{ width: '100%', padding: 16, fontSize: 18, background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
          )}
          {q.type === 'multiSelect' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {q.options.map(o => (
                <button key={o.id} onClick={() => handleOnboardingSelect(q.field, o.id, true)}
                  style={{ padding: '10px 16px', background: userProfile[q.field]?.includes(o.id) ? 'rgba(255,107,53,0.2)' : 'rgba(255,255,255,0.05)', border: `2px solid ${userProfile[q.field]?.includes(o.id) ? '#ff6b35' : 'rgba(255,255,255,0.1)'}`, borderRadius: 20, color: '#fff', cursor: 'pointer', fontSize: 14 }}>
                  {o.label}
                </button>
              ))}
            </div>
          )}
          {q.type === 'singleSelect' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.options.map(o => (
                <button key={o.id} onClick={() => handleOnboardingSelect(q.field, o.id, false)}
                  style={{ padding: 16, background: userProfile[q.field] === o.id ? 'rgba(255,107,53,0.2)' : 'rgba(255,255,255,0.05)', border: `2px solid ${userProfile[q.field] === o.id ? '#ff6b35' : 'rgba(255,255,255,0.1)'}`, borderRadius: 12, color: '#fff', cursor: 'pointer', fontSize: 16, textAlign: 'left' }}>
                  {o.label}
                </button>
              ))}
            </div>
          )}
          <button style={btnPrimary} onClick={handleOnboardingNext}>{onboardingStep < onboardingQuestions.length - 1 ? 'NEXT' : "LET'S GO"}</button>
          {onboardingStep > 0 && <button style={btnGhost} onClick={() => setOnboardingStep(onboardingStep - 1)}>Back</button>}
        </div>
      </div>
    );
  }

  // Feedback
  if (showFeedback) {
    return (
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0 }}>DECIDE<span style={{ display: 'block', fontSize: 42, color: '#ff6b35' }}>ALREADY</span></h1>
        </div>
        <div style={cardStyle}>
          <h2 style={{ fontSize: 22, fontWeight: 700, textAlign: 'center', marginBottom: 8 }}>Why didn't you do it?</h2>
          <p style={{ color: '#888', textAlign: 'center', marginBottom: 16, fontSize: 14 }}>Help me learn</p>
          <div style={{ background: 'rgba(231,76,60,0.1)', border: '1px solid rgba(231,76,60,0.3)', borderRadius: 12, padding: 16, marginBottom: 20, textAlign: 'center', color: '#e74c3c', fontStyle: 'italic' }}>"{decision}"</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {feedbackReasons.map(r => (
              <button key={r.id} onClick={() => setFeedbackReason(r.id)}
                style={{ padding: 14, background: feedbackReason === r.id ? 'rgba(231,76,60,0.2)' : 'rgba(255,255,255,0.05)', border: `2px solid ${feedbackReason === r.id ? '#e74c3c' : 'rgba(255,255,255,0.1)'}`, borderRadius: 12, color: '#fff', cursor: 'pointer', textAlign: 'left' }}>
                {r.label}
              </button>
            ))}
          </div>
          <button style={{ ...btnDanger, opacity: feedbackReason ? 1 : 0.5 }} onClick={handleFeedbackSubmit} disabled={!feedbackReason}>SUBMIT & RESET STREAK</button>
        </div>
      </div>
    );
  }

  // Main
  return (
    <div style={containerStyle}>
      {showCelebration && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.95)', border: '3px solid #ff6b35', borderRadius: 20, padding: '40px 50px', fontSize: 36, fontWeight: 900, color: '#ff6b35', textShadow: '0 0 40px rgba(255,107,53,0.8)', zIndex: 1000 }}>
          🔥 STREAK: {streak} 🔥
        </div>
      )}
      
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0 }}>DECIDE<span style={{ display: 'block', fontSize: 42, color: '#ff6b35', textShadow: '0 0 30px rgba(255,107,53,0.5)' }}>ALREADY</span></h1>
        <p style={{ color: '#888', fontSize: 12, letterSpacing: 3, marginTop: 8 }}>{userProfile.name ? `${userProfile.name.toUpperCase()}, STOP THINKING.` : 'STOP THINKING. START DOING.'}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,107,53,0.1)', border: '2px solid rgba(255,107,53,0.3)', borderRadius: 50, padding: '8px 20px' }}>
          <span style={{ fontSize: 20 }}>🔥</span>
          <span style={{ fontSize: 28, fontWeight: 900, color: '#ff6b35' }}>{streak}</span>
          <span style={{ fontSize: 10, color: '#888', letterSpacing: 2 }}>STREAK</span>
        </div>
      </div>

      <div style={cardStyle}>
        {phase === 'ask' && (
          <div>
            <p style={{ fontSize: 11, color: '#888', textAlign: 'center', letterSpacing: 3, marginBottom: 16 }}>WHAT CAN'T YOU DECIDE?</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10, marginBottom: 20 }}>
              {questionOptions.map(o => (
                <button key={o.id} onClick={() => setSelectedQuestion(o.id)}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: 14, background: selectedQuestion === o.id ? 'rgba(255,107,53,0.2)' : 'rgba(255,255,255,0.05)', border: `2px solid ${selectedQuestion === o.id ? '#ff6b35' : 'rgba(255,255,255,0.1)'}`, borderRadius: 16, cursor: 'pointer', boxShadow: selectedQuestion === o.id ? '0 0 20px rgba(255,107,53,0.3)' : 'none' }}>
                  <span style={{ fontSize: 24 }}>{o.icon}</span>
                  <span style={{ fontSize: 11, color: '#fff', textAlign: 'center' }}>{o.label}</span>
                </button>
              ))}
            </div>
            <button style={{ ...btnPrimary, opacity: selectedQuestion ? 1 : 0.5 }} onClick={handleCommit} disabled={!selectedQuestion}>I NEED AN ANSWER</button>
          </div>
        )}

        {phase === 'commit' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 56, marginBottom: 12 }}>⚠️</div>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: '#ff6b35', margin: '0 0 12px' }}>WAIT.</h2>
            <p style={{ fontSize: 16, color: '#ccc', marginBottom: 8 }}>Once you see the answer, you <span style={{ color: '#fff', fontWeight: 700 }}>MUST</span> do it.</p>
            <p style={{ color: '#888', marginBottom: 16 }}>No backing out. No excuses.</p>
            <div style={{ background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.3)', borderRadius: 12, padding: 14, marginBottom: 16, color: '#ff6b35', fontStyle: 'italic' }}>"{getSelectedLabel()}"</div>
            <button style={btnDanger} onClick={handleReveal} disabled={isLoading}>{isLoading ? 'DECIDING YOUR FATE...' : 'I COMMIT. SHOW ME.'}</button>
            <button style={btnGhost} onClick={resetApp}>I'm not ready (coward)</button>
          </div>
        )}

        {phase === 'reveal' && (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: '#888', letterSpacing: 4, marginBottom: 8 }}>THE VERDICT</p>
            <div style={{ background: 'linear-gradient(135deg, rgba(255,107,53,0.2) 0%, rgba(255,107,53,0.05) 100%)', border: '2px solid rgba(255,107,53,0.3)', borderRadius: 16, padding: 20, marginBottom: 12 }}>
              <p style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{decision}</p>
            </div>
            <p style={{ fontSize: 13, color: '#666', fontStyle: 'italic', marginBottom: 16 }}>You asked: "{getSelectedLabel()}"</p>
            
            {rerollAvailable && !isLoading && (
              <button style={{ ...btnPrimary, background: 'transparent', border: '2px solid #f39c12', color: '#f39c12', marginTop: 0, marginBottom: 12 }} onClick={handleReroll}>🎲 DECIDE AGAIN (1 per day)</button>
            )}
            {!rerollAvailable && !isLoading && (
              <div style={{ background: 'rgba(231,76,60,0.1)', color: '#e74c3c', fontSize: 13, padding: 10, borderRadius: 8, marginBottom: 12, fontStyle: 'italic' }}>No more re-rolls today. Commit or fail.</div>
            )}
            {isLoading && <div style={{ color: '#f39c12', fontWeight: 700, padding: 16, marginBottom: 12 }}>🎲 RE-DECIDING...</div>}
            
            <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
              <button style={btnSuccess} onClick={handleFollowed}>✓ I DID IT</button>
              <button style={btnFail} onClick={handleBroken}>✗ I FAILED</button>
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <p style={{ fontSize: 13, color: '#555', fontStyle: 'italic', marginBottom: 12 }}>
          {streak === 0 && "Make your first decision. Build your streak."}
          {streak > 0 && streak < 5 && "You're building momentum."}
          {streak >= 5 && streak < 10 && "You're a decision machine."}
          {streak >= 10 && "UNSTOPPABLE."}
        </p>
        <button style={{ background: 'none', border: 'none', color: '#444', fontSize: 11, cursor: 'pointer', textDecoration: 'underline' }} onClick={resetProfile}>Reset Profile</button>
      </div>
    </div>
  );
}
