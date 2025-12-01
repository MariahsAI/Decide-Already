<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DecideAlready</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Space Grotesk', sans-serif; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    const { useState, useEffect } = React;

    const DecideAlready = () => {
      const [selectedQuestion, setSelectedQuestion] = useState('');
      const [decision, setDecision] = useState('');
      const [phase, setPhase] = useState('loading');
      const [streak, setStreak] = useState(0);
      const [isLoading, setIsLoading] = useState(false);
      const [showCelebration, setShowCelebration] = useState(false);
      const [rerollUsed, setRerollUsed] = useState(false);
      const [rerollAvailable, setRerollAvailable] = useState(true);
      const [onboardingStep, setOnboardingStep] = useState(0);
      const [userProfile, setUserProfile] = useState({
        name: '',
        dietaryRestrictions: [],
        favoriteCuisines: [],
        hatedCuisines: [],
        entertainmentLikes: [],
        entertainmentDislikes: [],
        personality: '',
        chronotype: '',
        fitnessLevel: '',
        datingStyle: '',
      });
      const [rejectedDecisions, setRejectedDecisions] = useState([]);
      const [showFeedback, setShowFeedback] = useState(false);
      const [feedbackReason, setFeedbackReason] = useState('');

      const questionOptions = [
        { id: 'eat', label: 'What should I eat?', icon: '🍕' },
        { id: 'wear', label: 'What should I wear?', icon: '👕' },
        { id: 'goOut', label: 'Should I go out or stay in?', icon: '🚪' },
        { id: 'watch', label: 'What should I watch?', icon: '📺' },
        { id: 'text', label: 'Should I text them?', icon: '💬' },
        { id: 'buy', label: 'Should I buy it?', icon: '💳' },
        { id: 'workout', label: 'Should I workout?', icon: '💪' },
        { id: 'sleep', label: 'Should I stay up or go to sleep?', icon: '😴' },
        { id: 'dating', label: 'Should I go on the date?', icon: '❤️' },
        { id: 'job', label: 'Should I apply for the job?', icon: '💼' },
      ];

      const onboardingQuestions = [
        {
          id: 'name',
          question: "What should I call you?",
          type: 'text',
          field: 'name',
        },
        {
          id: 'dietary',
          question: "Any foods you CAN'T or WON'T eat?",
          type: 'multiSelect',
          field: 'dietaryRestrictions',
          options: [
            { id: 'vegetarian', label: '🥬 Vegetarian' },
            { id: 'vegan', label: '🌱 Vegan' },
            { id: 'glutenFree', label: '🌾 Gluten-Free' },
            { id: 'dairyFree', label: '🥛 Dairy-Free' },
            { id: 'halal', label: '☪️ Halal' },
            { id: 'kosher', label: '✡️ Kosher' },
            { id: 'seafood', label: '🐟 No Seafood' },
            { id: 'spicy', label: '🌶️ No Spicy' },
            { id: 'none', label: '✓ No Restrictions' },
          ],
        },
        {
          id: 'cuisines',
          question: "What cuisines do you LOVE?",
          type: 'multiSelect',
          field: 'favoriteCuisines',
          options: [
            { id: 'italian', label: '🍝 Italian' },
            { id: 'mexican', label: '🌮 Mexican' },
            { id: 'chinese', label: '🥡 Chinese' },
            { id: 'japanese', label: '🍣 Japanese' },
            { id: 'indian', label: '🍛 Indian' },
            { id: 'thai', label: '🍜 Thai' },
            { id: 'american', label: '🍔 American' },
            { id: 'mediterranean', label: '🥙 Mediterranean' },
            { id: 'korean', label: '🍲 Korean' },
            { id: 'vietnamese', label: '🍲 Vietnamese' },
          ],
        },
        {
          id: 'entertainment',
          question: "What do you like to watch?",
          type: 'multiSelect',
          field: 'entertainmentLikes',
          options: [
            { id: 'comedy', label: '😂 Comedy' },
            { id: 'drama', label: '🎭 Drama' },
            { id: 'action', label: '💥 Action' },
            { id: 'horror', label: '👻 Horror' },
            { id: 'documentary', label: '📚 Documentary' },
            { id: 'reality', label: '📺 Reality TV' },
            { id: 'scifi', label: '🚀 Sci-Fi' },
            { id: 'romance', label: '💕 Romance' },
            { id: 'thriller', label: '😱 Thriller' },
            { id: 'sports', label: '⚽ Sports' },
            { id: 'anime', label: '🎌 Anime' },
          ],
        },
        {
          id: 'entertainmentHate',
          question: "What do you NEVER want to watch?",
          type: 'multiSelect',
          field: 'entertainmentDislikes',
          options: [
            { id: 'comedy', label: '😂 Comedy' },
            { id: 'drama', label: '🎭 Drama' },
            { id: 'action', label: '💥 Action' },
            { id: 'horror', label: '👻 Horror' },
            { id: 'documentary', label: '📚 Documentary' },
            { id: 'reality', label: '📺 Reality TV' },
            { id: 'scifi', label: '🚀 Sci-Fi' },
            { id: 'romance', label: '💕 Romance' },
            { id: 'thriller', label: '😱 Thriller' },
            { id: 'sports', label: '⚽ Sports' },
            { id: 'anime', label: '🎌 Anime' },
            { id: 'none', label: '✓ I watch anything' },
          ],
        },
        {
          id: 'personality',
          question: "Social battery?",
          type: 'singleSelect',
          field: 'personality',
          options: [
            { id: 'introvert', label: '🏠 Introvert - Recharging alone' },
            { id: 'extrovert', label: '🎉 Extrovert - Energized by people' },
            { id: 'ambivert', label: '⚖️ Ambivert - Depends on the day' },
          ],
        },
        {
          id: 'chronotype',
          question: "When are you at your best?",
          type: 'singleSelect',
          field: 'chronotype',
          options: [
            { id: 'earlyBird', label: '🌅 Early Bird - Morning person' },
            { id: 'nightOwl', label: '🦉 Night Owl - Late night energy' },
            { id: 'flexible', label: '🔄 Flexible - Whenever' },
          ],
        },
        {
          id: 'fitness',
          question: "Fitness level?",
          type: 'singleSelect',
          field: 'fitnessLevel',
          options: [
            { id: 'beginner', label: '🌱 Just starting out' },
            { id: 'intermediate', label: '💪 Regular exerciser' },
            { id: 'advanced', label: '🏆 Fitness enthusiast' },
            { id: 'rest', label: '😴 Currently on a break' },
          ],
        },
      ];

      const decisions = {
        eat: [
          { text: "Thai food. Pad Thai specifically. Don't think, just order.", tags: ['thai', 'asian'], restrictions: ['vegan'] },
          { text: "Pizza. Pepperoni. The classic exists for a reason.", tags: ['italian', 'american'], restrictions: ['vegetarian', 'vegan', 'halal', 'kosher'] },
          { text: "Sushi. Get the salmon roll and stop overthinking.", tags: ['japanese', 'seafood'], restrictions: ['vegan', 'seafood'] },
          { text: "Tacos. Three of them. Al pastor.", tags: ['mexican'], restrictions: ['vegetarian', 'vegan', 'halal'] },
          { text: "Burger and fries. Sometimes basic is beautiful.", tags: ['american'], restrictions: ['vegetarian', 'vegan', 'halal'] },
          { text: "Chinese takeout. Orange chicken. You know you want it.", tags: ['chinese', 'asian'], restrictions: ['vegetarian', 'vegan'] },
          { text: "Mediterranean. Get a shawarma plate. Trust me.", tags: ['mediterranean'], restrictions: ['vegetarian', 'vegan'] },
          { text: "Indian. Butter chicken with garlic naan. Done.", tags: ['indian'], restrictions: ['vegetarian', 'vegan', 'dairyFree'] },
          { text: "Pho. A big steaming bowl. Your soul needs it.", tags: ['vietnamese', 'asian'], restrictions: ['vegetarian', 'vegan'] },
          { text: "Wings. Hot. With blue cheese. No ranch.", tags: ['american'], restrictions: ['vegetarian', 'vegan', 'spicy', 'dairyFree'] },
          { text: "Salad. A big one. Your body will thank you tomorrow.", tags: ['healthy'], restrictions: [] },
          { text: "Breakfast for dinner. Pancakes. Live a little.", tags: ['american'], restrictions: ['vegan', 'glutenFree'] },
          { text: "Veggie stir fry. Quick, healthy, delicious.", tags: ['asian', 'healthy'], restrictions: [] },
          { text: "Falafel wrap. Crispy, fresh, satisfying.", tags: ['mediterranean'], restrictions: [] },
          { text: "Pasta with marinara. Simple but perfect.", tags: ['italian'], restrictions: ['glutenFree'] },
          { text: "Korean BBQ. Treat yourself.", tags: ['korean', 'asian'], restrictions: ['vegetarian', 'vegan'] },
          { text: "Ramen. A big bowl of comfort.", tags: ['japanese', 'asian'], restrictions: ['vegetarian', 'vegan', 'glutenFree'] },
        ],
        wear: [
          { text: "The black outfit. You already know it looks good.", tags: ['classic'] },
          { text: "That thing you haven't worn in a while. Today's the day.", tags: ['adventurous'] },
          { text: "Jeans and a clean white tee. Timeless.", tags: ['casual', 'classic'] },
          { text: "Your most comfortable fit. Confidence > fashion.", tags: ['comfort'] },
          { text: "Something bold. Stand out today.", tags: ['bold', 'adventurous'] },
          { text: "All black everything. You're that person now.", tags: ['classic', 'bold'] },
          { text: "The outfit you feel hottest in. No second-guessing.", tags: ['bold'] },
          { text: "Dress UP. Even if no one sees you. Do it for you.", tags: ['bold', 'adventurous'] },
          { text: "Dress down. Comfort is underrated.", tags: ['comfort', 'casual'] },
          { text: "That new thing you bought. Stop saving it for 'someday.'", tags: ['adventurous'] },
        ],
        goOut: [
          { text: "GO OUT. You'll regret staying in.", tags: ['extrovert', 'ambivert'] },
          { text: "Stay in. Recharge. Tomorrow you'll dominate.", tags: ['introvert', 'ambivert'] },
          { text: "Go out but leave by midnight. Best of both worlds.", tags: ['ambivert'] },
          { text: "Stay in, but make it intentional. Movie, snacks, self-care.", tags: ['introvert', 'ambivert'] },
          { text: "GO. OUT. NOW. Stop asking apps for permission to live.", tags: ['extrovert'] },
          { text: "Stay home. Your couch misses you.", tags: ['introvert'] },
          { text: "Go out. You can sleep when you're dead.", tags: ['extrovert', 'nightOwl'] },
          { text: "Only go if you actually WANT to. Not out of FOMO.", tags: ['introvert', 'ambivert'] },
        ],
        watch: [
          { text: "Something you've seen before that you love. Comfort wins.", tags: ['comfort'] },
          { text: "That show everyone's been telling you about. Finally.", tags: ['trending'] },
          { text: "A documentary. Learn something random tonight.", tags: ['documentary'] },
          { text: "Comedy. You need to laugh. Pick the dumbest thing.", tags: ['comedy'] },
          { text: "A thriller. Get your heart racing.", tags: ['thriller'] },
          { text: "Whatever's trending. Join the cultural moment.", tags: ['trending'] },
          { text: "An old movie. The classics earned their reputation.", tags: ['classic'] },
          { text: "Reality TV. Turn your brain off. It's okay.", tags: ['reality'] },
          { text: "That one in your watchlist you keep ignoring. Tonight's the night.", tags: ['backlog'] },
          { text: "Action movie. Explosions and car chases.", tags: ['action'] },
          { text: "Horror. If you're brave enough.", tags: ['horror'] },
          { text: "Sci-fi. Escape to another world.", tags: ['scifi'] },
          { text: "Romance. Feel some feelings.", tags: ['romance'] },
          { text: "Anime. Start that series you've heard about.", tags: ['anime'] },
          { text: "A sports game. Live if possible.", tags: ['sports'] },
        ],
        text: [
          { text: "YES. Send it. What's the worst that happens?", tags: ['bold'] },
          { text: "NO. Protect your peace. Keep your dignity.", tags: ['cautious'] },
          { text: "Wait 24 hours. If you still want to, then send it.", tags: ['cautious'] },
          { text: "Send it, but keep it short. No essays.", tags: ['moderate'] },
          { text: "Don't text. Call them instead. Bold move.", tags: ['bold'] },
          { text: "Send it. Closure is worth more than pride.", tags: ['bold'] },
          { text: "No. If they wanted to talk, they would.", tags: ['cautious'] },
          { text: "Yes, but only if you're okay with ANY response—or none.", tags: ['moderate'] },
        ],
        buy: [
          { text: "BUY IT. You've thought about it enough.", tags: ['bold'] },
          { text: "Don't buy it. If you have to ask, you don't need it.", tags: ['frugal'] },
          { text: "Wait a week. If you still want it, it's yours.", tags: ['cautious'] },
          { text: "Buy it, but the cheaper version first.", tags: ['moderate'] },
          { text: "Yes. Treat yourself. You work hard.", tags: ['bold'] },
          { text: "No. Put that money in savings instead.", tags: ['frugal'] },
          { text: "Only if it's on sale. Check for a discount code.", tags: ['frugal'] },
          { text: "Buy it. Life's short. Things bring joy sometimes.", tags: ['bold'] },
        ],
        workout: [
          { text: "YES. Get up. Move your body. No excuses.", tags: ['intermediate', 'advanced'] },
          { text: "Rest day. Recovery is part of the process.", tags: ['beginner', 'rest'] },
          { text: "Do a light workout. Something is better than nothing.", tags: ['beginner', 'intermediate'] },
          { text: "Full send. Go hard today.", tags: ['advanced'] },
          { text: "Just do 10 minutes. You'll probably keep going.", tags: ['beginner'] },
          { text: "Skip it, but go for a walk instead.", tags: ['beginner', 'rest'] },
          { text: "Yes, and try something new. Switch it up.", tags: ['intermediate', 'advanced'] },
          { text: "Absolutely. Future you will be grateful.", tags: ['intermediate', 'advanced'] },
        ],
        sleep: [
          { text: "Go to sleep. Nothing good happens after 2am.", tags: ['earlyBird'] },
          { text: "Stay up. You're in a groove. Ride it.", tags: ['nightOwl'] },
          { text: "One more episode, then BED.", tags: ['flexible'] },
          { text: "Sleep now. Wake up early and crush tomorrow.", tags: ['earlyBird'] },
          { text: "Stay up only if you can sleep in tomorrow.", tags: ['nightOwl', 'flexible'] },
          { text: "Go to bed. Your under-eye bags are begging you.", tags: ['earlyBird'] },
          { text: "10 more minutes, then lights out. Final answer.", tags: ['flexible'] },
        ],
        dating: [
          { text: "GO ON THE DATE. You'll never know if you don't try.", tags: ['bold'] },
          { text: "Skip it. Trust your gut if it's telling you no.", tags: ['cautious'] },
          { text: "Go, but keep it short. Coffee, not dinner.", tags: ['moderate'] },
          { text: "Yes. Even if it's awkward, it's a story.", tags: ['bold'] },
          { text: "Cancel only if you have a REAL reason. Not fear.", tags: ['moderate'] },
          { text: "Go. The worst case: a free meal and a tale to tell.", tags: ['bold'] },
          { text: "Trust the process. Go on the date.", tags: ['moderate'] },
          { text: "If you're not excited, don't waste either person's time.", tags: ['cautious'] },
        ],
        job: [
          { text: "APPLY. You miss 100% of shots you don't take.", tags: ['bold'] },
          { text: "Yes. The worst they can say is no.", tags: ['moderate'] },
          { text: "Apply, even if you're underqualified. Let them decide.", tags: ['bold'] },
          { text: "Do it. You're ready. Stop doubting yourself.", tags: ['bold'] },
          { text: "Send that application TODAY. Not tomorrow. Today.", tags: ['bold'] },
          { text: "Yes, and tailor your resume. Make it count.", tags: ['moderate'] },
          { text: "Apply. Rejection is redirection.", tags: ['bold'] },
          { text: "Only if you actually want it. Don't waste their time or yours.", tags: ['cautious'] },
        ],
      };

      const feedbackReasons = [
        { id: 'dietary', label: "🚫 Can't eat that (dietary)" },
        { id: 'dontLike', label: "👎 I don't like this" },
        { id: 'notInMood', label: "😐 Not in the mood today" },
        { id: 'tooExpensive', label: "💸 Too expensive" },
        { id: 'notAvailable', label: "❌ Not available to me" },
        { id: 'other', label: "🤷 Other reason" },
      ];

      useEffect(() => {
        const savedProfile = localStorage.getItem('decideAlreadyProfile');
        const savedStreak = localStorage.getItem('decideAlreadyStreak');
        const savedRejections = localStorage.getItem('decideAlreadyRejections');
        const lastRerollDate = localStorage.getItem('decideAlreadyRerollDate');
        
        if (savedStreak) setStreak(parseInt(savedStreak));
        if (savedRejections) setRejectedDecisions(JSON.parse(savedRejections));
        
        const today = new Date().toDateString();
        if (lastRerollDate === today) {
          setRerollUsed(true);
          setRerollAvailable(false);
        }
        
        if (savedProfile) {
          setUserProfile(JSON.parse(savedProfile));
          setPhase('ask');
        } else {
          setPhase('onboarding');
        }
      }, []);

      const getDecision = () => {
        let options = decisions[selectedQuestion];
        
        if (selectedQuestion === 'eat') {
          options = options.filter(opt => {
            for (let restriction of userProfile.dietaryRestrictions) {
              if (opt.restrictions && opt.restrictions.includes(restriction)) {
                return false;
              }
            }
            return true;
          });
          
          const favoritedOptions = options.filter(opt => 
            opt.tags && opt.tags.some(tag => userProfile.favoriteCuisines.includes(tag))
          );
          if (favoritedOptions.length > 0 && Math.random() > 0.3) {
            options = favoritedOptions;
          }
        }
        
        if (selectedQuestion === 'watch') {
          options = options.filter(opt => {
            for (let dislike of userProfile.entertainmentDislikes) {
              if (opt.tags && opt.tags.includes(dislike)) {
                return false;
              }
            }
            return true;
          });
          
          const likedOptions = options.filter(opt =>
            opt.tags && opt.tags.some(tag => userProfile.entertainmentLikes.includes(tag))
          );
          if (likedOptions.length > 0 && Math.random() > 0.3) {
            options = likedOptions;
          }
        }
        
        if (selectedQuestion === 'goOut') {
          if (userProfile.personality) {
            const personalityOptions = options.filter(opt =>
              opt.tags && opt.tags.includes(userProfile.personality)
            );
            if (personalityOptions.length > 0) {
              options = personalityOptions;
            }
          }
        }
        
        if (selectedQuestion === 'sleep') {
          if (userProfile.chronotype) {
            const chronoOptions = options.filter(opt =>
              opt.tags && opt.tags.includes(userProfile.chronotype)
            );
            if (chronoOptions.length > 0) {
              options = chronoOptions;
            }
          }
        }
        
        if (selectedQuestion === 'workout') {
          if (userProfile.fitnessLevel) {
            const fitnessOptions = options.filter(opt =>
              opt.tags && opt.tags.includes(userProfile.fitnessLevel)
            );
            if (fitnessOptions.length > 0) {
              options = fitnessOptions;
            }
          }
        }
        
        const categoryRejections = rejectedDecisions.filter(r => r.category === selectedQuestion);
        options = options.filter(opt => 
          !categoryRejections.some(r => r.decision === opt.text)
        );
        
        if (options.length === 0) {
          options = decisions[selectedQuestion];
        }
        
        const selected = options[Math.floor(Math.random() * options.length)];
        return typeof selected === 'object' ? selected.text : selected;
      };

      const handleOnboardingNext = () => {
        if (onboardingStep < onboardingQuestions.length - 1) {
          setOnboardingStep(onboardingStep + 1);
        } else {
          localStorage.setItem('decideAlreadyProfile', JSON.stringify(userProfile));
          setPhase('ask');
        }
      };

      const handleOnboardingSelect = (field, value, isMulti) => {
        if (isMulti) {
          const current = userProfile[field] || [];
          if (value === 'none') {
            setUserProfile({ ...userProfile, [field]: [] });
          } else if (current.includes(value)) {
            setUserProfile({ ...userProfile, [field]: current.filter(v => v !== value) });
          } else {
            setUserProfile({ ...userProfile, [field]: [...current.filter(v => v !== 'none'), value] });
          }
        } else {
          setUserProfile({ ...userProfile, [field]: value });
        }
      };

      const handleCommit = () => {
        if (!selectedQuestion) return;
        setPhase('commit');
      };

      const handleReveal = () => {
        setIsLoading(true);
        setTimeout(() => {
          setDecision(getDecision());
          setPhase('reveal');
          setIsLoading(false);
        }, 1500);
      };

      const handleFollowed = () => {
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem('decideAlreadyStreak', newStreak.toString());
        setShowCelebration(true);
        setTimeout(() => {
          setShowCelebration(false);
          resetApp();
        }, 2000);
      };

      const handleReroll = () => {
        if (!rerollAvailable) return;
        
        const today = new Date().toDateString();
        localStorage.setItem('decideAlreadyRerollDate', today);
        setRerollUsed(true);
        setRerollAvailable(false);
        
        setIsLoading(true);
        setTimeout(() => {
          setDecision(getDecision());
          setIsLoading(false);
        }, 1500);
      };

      const handleBroken = () => {
        setShowFeedback(true);
      };

      const handleFeedbackSubmit = () => {
        const newRejection = {
          category: selectedQuestion,
          decision: decision,
          reason: feedbackReason,
          timestamp: new Date().toISOString(),
        };
        
        const updatedRejections = [...rejectedDecisions, newRejection];
        setRejectedDecisions(updatedRejections);
        localStorage.setItem('decideAlreadyRejections', JSON.stringify(updatedRejections));
        
        setStreak(0);
        localStorage.setItem('decideAlreadyStreak', '0');
        
        setShowFeedback(false);
        setFeedbackReason('');
        resetApp();
      };

      const handleSkipFeedback = () => {
        setStreak(0);
        localStorage.setItem('decideAlreadyStreak', '0');
        setShowFeedback(false);
        setFeedbackReason('');
        resetApp();
      };

      const resetApp = () => {
        setSelectedQuestion('');
        setDecision('');
        setPhase('ask');
      };

      const handleShare = () => {
        const questionLabel = questionOptions.find(q => q.id === selectedQuestion)?.label;
        const text = `I asked DecideAlready: "${questionLabel}"\n\nThe verdict: ${decision}\n\n🔥 ${streak} decision streak\n\nStop overthinking. Let the app decide.`;
        if (navigator.share) {
          navigator.share({ text });
        } else {
          navigator.clipboard.writeText(text);
          alert('Copied to clipboard!');
        }
      };

      const getSelectedLabel = () => {
        return questionOptions.find(q => q.id === selectedQuestion)?.label || '';
      };

      const resetProfile = () => {
        localStorage.removeItem('decideAlreadyProfile');
        localStorage.removeItem('decideAlreadyRejections');
        setUserProfile({
          name: '',
          dietaryRestrictions: [],
          favoriteCuisines: [],
          hatedCuisines: [],
          entertainmentLikes: [],
          entertainmentDislikes: [],
          personality: '',
          chronotype: '',
          fitnessLevel: '',
          datingStyle: '',
        });
        setRejectedDecisions([]);
        setOnboardingStep(0);
        setPhase('onboarding');
      };

      const styles = {
        container: {
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
          fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
          color: '#fff',
          padding: '20px',
          position: 'relative',
          overflow: 'hidden',
        },
        celebration: {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '48px',
          fontWeight: '900',
          color: '#ff6b35',
          textShadow: '0 0 40px rgba(255, 107, 53, 0.8)',
          zIndex: 1000,
          background: 'rgba(0,0,0,0.9)',
          padding: '40px 60px',
          borderRadius: '20px',
          border: '3px solid #ff6b35',
        },
        header: {
          textAlign: 'center',
          marginBottom: '20px',
          paddingTop: '20px',
        },
        logo: {
          fontSize: '42px',
          fontWeight: '900',
          margin: 0,
          letterSpacing: '-2px',
          textTransform: 'uppercase',
        },
        logoAccent: {
          color: '#ff6b35',
          display: 'block',
          fontSize: '48px',
          lineHeight: '1',
          textShadow: '0 0 30px rgba(255, 107, 53, 0.5)',
        },
        tagline: {
          fontSize: '14px',
          color: '#888',
          marginTop: '10px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        },
        progressBar: {
          width: '100%',
          maxWidth: '500px',
          height: '6px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '3px',
          margin: '0 auto 30px',
          overflow: 'hidden',
        },
        progressFill: {
          height: '100%',
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
          transition: 'width 0.3s ease',
        },
        streakContainer: {
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        },
        streak: {
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 107, 53, 0.1)',
          border: '2px solid rgba(255, 107, 53, 0.3)',
          borderRadius: '50px',
          padding: '10px 25px',
        },
        streakFire: {
          fontSize: '24px',
        },
        streakNumber: {
          fontSize: '32px',
          fontWeight: '900',
          color: '#ff6b35',
        },
        streakLabel: {
          fontSize: '12px',
          color: '#888',
          letterSpacing: '2px',
        },
        card: {
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px 30px',
          maxWidth: '500px',
          margin: '0 auto',
          backdropFilter: 'blur(10px)',
        },
        askPhase: {
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        },
        label: {
          fontSize: '12px',
          letterSpacing: '3px',
          color: '#888',
          textAlign: 'center',
        },
        optionsGrid: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
        },
        optionButton: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '16px 12px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontFamily: 'inherit',
        },
        optionButtonSelected: {
          background: 'rgba(255, 107, 53, 0.2)',
          borderColor: '#ff6b35',
          boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)',
        },
        optionIcon: {
          fontSize: '28px',
        },
        optionText: {
          fontSize: '13px',
          color: '#fff',
          textAlign: 'center',
          lineHeight: '1.3',
        },
        button: {
          padding: '18px 32px',
          fontSize: '16px',
          fontWeight: '700',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '1px',
          transition: 'all 0.3s',
          fontFamily: 'inherit',
        },
        buttonPrimary: {
          background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
          color: '#000',
          boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
        },
        buttonDisabled: {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
        buttonDanger: {
          background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
          color: '#fff',
          boxShadow: '0 10px 30px rgba(231, 76, 60, 0.3)',
        },
        buttonGhost: {
          background: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#666',
          fontSize: '14px',
        },
        buttonSuccess: {
          background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
          color: '#fff',
          flex: 1,
        },
        buttonFail: {
          background: 'transparent',
          border: '2px solid #e74c3c',
          color: '#e74c3c',
          flex: 1,
        },
        buttonShare: {
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#fff',
          width: '100%',
          marginTop: '10px',
        },
        buttonReroll: {
          background: 'transparent',
          border: '2px solid #f39c12',
          color: '#f39c12',
          width: '100%',
          marginTop: '10px',
        },
        rerollUsed: {
          fontSize: '14px',
          color: '#e74c3c',
          fontStyle: 'italic',
          padding: '10px',
          background: 'rgba(231, 76, 60, 0.1)',
          borderRadius: '8px',
          marginTop: '10px',
        },
        rerolling: {
          fontSize: '16px',
          color: '#f39c12',
          fontWeight: '700',
          padding: '15px',
          marginTop: '10px',
        },
        commitPhase: {
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        },
        warningIcon: {
          fontSize: '64px',
        },
        commitTitle: {
          fontSize: '36px',
          fontWeight: '900',
          margin: 0,
          color: '#ff6b35',
        },
        commitText: {
          fontSize: '18px',
          color: '#ccc',
          margin: 0,
          lineHeight: '1.6',
        },
        bold: {
          color: '#fff',
          fontWeight: '700',
        },
        questionPreview: {
          background: 'rgba(255, 107, 53, 0.1)',
          border: '1px solid rgba(255, 107, 53, 0.3)',
          borderRadius: '12px',
          padding: '15px 20px',
          fontSize: '16px',
          fontStyle: 'italic',
          color: '#ff6b35',
          margin: '10px 0',
        },
        revealPhase: {
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        },
        verdictLabel: {
          fontSize: '12px',
          letterSpacing: '4px',
          color: '#888',
        },
        decision: {
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '1.5',
          color: '#fff',
          padding: '20px',
          background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.05) 100%)',
          borderRadius: '16px',
          border: '2px solid rgba(255, 107, 53, 0.3)',
        },
        questionReminder: {
          fontSize: '14px',
          color: '#666',
          fontStyle: 'italic',
        },
        actionButtons: {
          display: 'flex',
          gap: '15px',
          marginTop: '10px',
        },
        footer: {
          textAlign: 'center',
          marginTop: '40px',
          padding: '20px',
        },
        footerText: {
          fontSize: '14px',
          color: '#555',
          fontStyle: 'italic',
        },
        resetButton: {
          marginTop: '15px',
          background: 'transparent',
          border: 'none',
          color: '#444',
          fontSize: '12px',
          cursor: 'pointer',
          textDecoration: 'underline',
        },
        onboardingQuestion: {
          fontSize: '24px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '25px',
          color: '#fff',
        },
        textInput: {
          width: '100%',
          padding: '18px 20px',
          fontSize: '18px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          color: '#fff',
          outline: 'none',
          fontFamily: 'inherit',
          boxSizing: 'border-box',
        },
        onboardingOptions: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
        },
        onboardingOption: {
          padding: '12px 18px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '25px',
          color: '#fff',
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontFamily: 'inherit',
        },
        onboardingOptionsSingle: {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        },
        onboardingOptionSingle: {
          padding: '16px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontFamily: 'inherit',
          textAlign: 'left',
        },
        onboardingOptionSelected: {
          background: 'rgba(255, 107, 53, 0.2)',
          borderColor: '#ff6b35',
          boxShadow: '0 0 15px rgba(255, 107, 53, 0.3)',
        },
        feedbackTitle: {
          fontSize: '24px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '10px',
          color: '#fff',
        },
        feedbackSubtitle: {
          fontSize: '14px',
          color: '#888',
          textAlign: 'center',
          marginBottom: '20px',
        },
        feedbackDecision: {
          background: 'rgba(231, 76, 60, 0.1)',
          border: '1px solid rgba(231, 76, 60, 0.3)',
          borderRadius: '12px',
          padding: '15px',
          fontSize: '16px',
          fontStyle: 'italic',
          color: '#e74c3c',
          marginBottom: '20px',
          textAlign: 'center',
        },
        feedbackOptions: {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginBottom: '20px',
        },
        feedbackOption: {
          padding: '14px 18px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          color: '#fff',
          fontSize: '15px',
          cursor: 'pointer',
          transition: 'all 0.3s',
          fontFamily: 'inherit',
          textAlign: 'left',
        },
        feedbackOptionSelected: {
          background: 'rgba(231, 76, 60, 0.2)',
          borderColor: '#e74c3c',
        },
      };

      if (phase === 'onboarding') {
        const currentQ = onboardingQuestions[onboardingStep];
        
        return (
          <div style={styles.container}>
            <div style={styles.header}>
              <h1 style={styles.logo}>DECIDE<span style={styles.logoAccent}>ALREADY</span></h1>
              <p style={styles.tagline}>Let's get to know you</p>
            </div>
            
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: `${((onboardingStep + 1) / onboardingQuestions.length) * 100}%`}} />
            </div>
            
            <div style={styles.card}>
              <h2 style={styles.onboardingQuestion}>{currentQ.question}</h2>
              
              {currentQ.type === 'text' && (
                <input
                  type="text"
                  style={styles.textInput}
                  placeholder="Enter your name..."
                  value={userProfile[currentQ.field] || ''}
                  onChange={(e) => setUserProfile({...userProfile, [currentQ.field]: e.target.value})}
                />
              )}
              
              {currentQ.type === 'multiSelect' && (
                <div style={styles.onboardingOptions}>
                  {currentQ.options.map(opt => (
                    <button
                      key={opt.id}
                      style={{
                        ...styles.onboardingOption,
                        ...(userProfile[currentQ.field]?.includes(opt.id) ? styles.onboardingOptionSelected : {})
                      }}
                      onClick={() => handleOnboardingSelect(currentQ.field, opt.id, true)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
              
              {currentQ.type === 'singleSelect' && (
                <div style={styles.onboardingOptionsSingle}>
                  {currentQ.options.map(opt => (
                    <button
                      key={opt.id}
                      style={{
                        ...styles.onboardingOptionSingle,
                        ...(userProfile[currentQ.field] === opt.id ? styles.onboardingOptionSelected : {})
                      }}
                      onClick={() => handleOnboardingSelect(currentQ.field, opt.id, false)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
              
              <button
                style={{...styles.button, ...styles.buttonPrimary, marginTop: '20px', width: '100%'}}
                onClick={handleOnboardingNext}
              >
                {onboardingStep < onboardingQuestions.length - 1 ? 'NEXT' : "LET'S GO"}
              </button>
              
              {onboardingStep > 0 && (
                <button
                  style={{...styles.button, ...styles.buttonGhost, width: '100%', marginTop: '10px'}}
                  onClick={() => setOnboardingStep(onboardingStep - 1)}
                >
                  Back
                </button>
              )}
            </div>
          </div>
        );
      }

      if (showFeedback) {
        return (
          <div style={styles.container}>
            <div style={styles.header}>
              <h1 style={styles.logo}>DECIDE<span style={styles.logoAccent}>ALREADY</span></h1>
            </div>
            
            <div style={styles.card}>
              <h2 style={styles.feedbackTitle}>Why didn't you do it?</h2>
              <p style={styles.feedbackSubtitle}>Help me learn so I don't suggest this again</p>
              
              <div style={styles.feedbackDecision}>"{decision}"</div>
              
              <div style={styles.feedbackOptions}>
                {feedbackReasons.map(reason => (
                  <button
                    key={reason.id}
                    style={{
                      ...styles.feedbackOption,
                      ...(feedbackReason === reason.id ? styles.feedbackOptionSelected : {})
                    }}
                    onClick={() => setFeedbackReason(reason.id)}
                  >
                    {reason.label}
                  </button>
                ))}
              </div>
              
              <button
                style={{
                  ...styles.button,
                  ...styles.buttonDanger,
                  width: '100%',
                  ...(feedbackReason ? {} : styles.buttonDisabled)
                }}
                onClick={handleFeedbackSubmit}
                disabled={!feedbackReason}
              >
                SUBMIT & RESET STREAK
              </button>
              
              <button
                style={{...styles.button, ...styles.buttonGhost, width: '100%', marginTop: '10px'}}
                onClick={handleSkipFeedback}
              >
                Skip (just reset streak)
              </button>
            </div>
          </div>
        );
      }

      return (
        <div style={styles.container}>
          {showCelebration && (
            <div style={styles.celebration}>
              🔥 STREAK: {streak} 🔥
            </div>
          )}
          
          <div style={styles.header}>
            <h1 style={styles.logo}>DECIDE<span style={styles.logoAccent}>ALREADY</span></h1>
            <p style={styles.tagline}>
              {userProfile.name ? `${userProfile.name}, stop thinking. Start doing.` : 'Stop thinking. Start doing.'}
            </p>
          </div>

          <div style={styles.streakContainer}>
            <div style={styles.streak}>
              <span style={styles.streakFire}>🔥</span>
              <span style={styles.streakNumber}>{streak}</span>
              <span style={styles.streakLabel}>STREAK</span>
            </div>
          </div>

          <div style={styles.card}>
            {phase === 'ask' && (
              <div style={styles.askPhase}>
                <label style={styles.label}>WHAT CAN'T YOU DECIDE?</label>
                
                <div style={styles.optionsGrid}>
                  {questionOptions.map((option) => (
                    <button
                      key={option.id}
                      style={{
                        ...styles.optionButton,
                        ...(selectedQuestion === option.id ? styles.optionButtonSelected : {})
                      }}
                      onClick={() => setSelectedQuestion(option.id)}
                    >
                      <span style={styles.optionIcon}>{option.icon}</span>
                      <span style={styles.optionText}>{option.label}</span>
                    </button>
                  ))}
                </div>

                <button 
                  style={{
                    ...styles.button, 
                    ...styles.buttonPrimary,
                    width: '100%',
                    ...(selectedQuestion ? {} : styles.buttonDisabled)
                  }}
                  onClick={handleCommit}
                  disabled={!selectedQuestion}
                >
                  I NEED AN ANSWER
                </button>
              </div>
            )}

            {phase === 'commit' && (
              <div style={styles.commitPhase}>
                <div style={styles.warningIcon}>⚠️</div>
                <h2 style={styles.commitTitle}>WAIT.</h2>
                <p style={styles.commitText}>
                  Once you see the answer, you <span style={styles.bold}>MUST</span> do it.
                </p>
                <p style={styles.commitText}>
                  No backing out. No excuses. No "but actually..."
                </p>
                <div style={styles.questionPreview}>"{getSelectedLabel()}"</div>
                <button 
                  style={{...styles.button, ...styles.buttonDanger, width: '100%'}}
                  onClick={handleReveal}
                  disabled={isLoading}
                >
                  {isLoading ? 'DECIDING YOUR FATE...' : 'I COMMIT. SHOW ME.'}
                </button>
                <button 
                  style={{...styles.button, ...styles.buttonGhost, width: '100%', marginTop: '10px'}}
                  onClick={resetApp}
                >
                  I'm not ready (coward)
                </button>
              </div>
            )}

            {phase === 'reveal' && (
              <div style={styles.revealPhase}>
                <div style={styles.verdictLabel}>THE VERDICT</div>
                <div style={styles.decision}>{decision}</div>
                <div style={styles.questionReminder}>You asked: "{getSelectedLabel()}"</div>
                
                {rerollAvailable && !isLoading && (
                  <button 
                    style={{...styles.button, ...styles.buttonReroll}}
                    onClick={handleReroll}
                  >
                    🎲 DECIDE AGAIN (1 per day)
                  </button>
                )}
                
                {!rerollAvailable && (
                  <div style={styles.rerollUsed}>
                    No more re-rolls today. Commit or fail.
                  </div>
                )}
                
                {isLoading && (
                  <div style={styles.rerolling}>
                    🎲 RE-DECIDING YOUR FATE...
                  </div>
                )}
                
                <div style={styles.actionButtons}>
                  <button 
                    style={{...styles.button, ...styles.buttonSuccess}}
                    onClick={handleFollowed}
                  >
                    ✓ I DID IT
                  </button>
                  <button 
                    style={{...styles.button, ...styles.buttonFail}}
                    onClick={handleBroken}
                  >
                    ✗ I FAILED
                  </button>
                </div>
                
                <button 
                  style={{...styles.button, ...styles.buttonShare}}
                  onClick={handleShare}
                >
                  📤 SHARE MY DECISION
                </button>
              </div>
            )}
          </div>

          <div style={styles.footer}>
            <p style={styles.footerText}>
              {streak === 0 && "Make your first decision. Build your streak."}
              {streak > 0 && streak < 5 && "You're building momentum. Keep going."}
              {streak >= 5 && streak < 10 && "You're a decision machine now."}
              {streak >= 10 && "UNSTOPPABLE. You've mastered your mind."}
            </p>
            <button style={styles.resetButton} onClick={resetProfile}>
              Reset Profile
            </button>
          </div>
        </div>
      );
    };

    ReactDOM.createRoot(document.getElementById('root')).render(<DecideAlready />);
  </script>
</body>
</html>
