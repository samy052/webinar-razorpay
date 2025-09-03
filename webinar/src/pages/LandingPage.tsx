// import React, { useEffect, useState } from "react";
// import {
//   CheckCircle,
//   X,
//   TrendingUp,
//   Calculator,
//   Eye,
//   AlertTriangle,
//   Users,
//   ArrowRight,
//   Star,
//   Clock,
// } from "lucide-react";

// const LandingPage = () => {
//   const [showRegistrationModal, setShowRegistrationModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     business: "",
//   });

//    const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   const handleRegister = () => {
//     setShowRegistrationModal(true);
//   };

//   const validateFormData = () => {
//     const { name, email, phone, business } = formData;

//     if (!name.trim()) return "Name is required.";
//     if (!email.trim()) return "Email is required.";
//     if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
//       return "Email is invalid.";
//     if (!phone.trim()) return "Phone number is required.";
//     if (!/^\d{10}$/.test(phone)) return "Phone number must be 10 digits.";
//     if (!business.trim()) return "Business type is required.";

//     return null; // all good
//   };

//   useEffect(() => {
//     const targetDate = new Date("2025-06-21T10:00:00").getTime();

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const difference = targetDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       } else {
//         clearInterval(timer);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleSubmit = () => {
//     const error = validateFormData();

//     if (error) {
//       alert(error);
//       return;
//     }

//     alert(
//       "Registration submitted! You will receive confirmation details soon."
//     );
//     setShowRegistrationModal(false);
//     setFormData({ name: "", email: "", phone: "", business: "" });
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   type CountdownBoxProps = {
//   value: number;
//   label: string;
// };

// const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => (
//   <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-center min-w-[80px] transform hover:scale-105 transition-all duration-300">
//     <div className="text-3xl font-bold text-white mb-1 font-mono">
//       {value.toString().padStart(2, '0')}
//     </div>
//     <div className="text-sm text-white/80 uppercase tracking-wider">
//       {label}
//     </div>
//   </div>
// );

import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  X,
  TrendingUp,
  Calculator,
  Eye,
  AlertTriangle,
  Users,
  ArrowRight,
  Star,
  Clock,
} from "lucide-react";

const LandingPage = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // Add this line
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

   const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleRegister = () => {
    setShowRegistrationModal(true);
  };

  const validateFormData = () => {
    const { name, email, phone, business } = formData;

    if (!name.trim()) return "Name is required.";
    if (!email.trim()) return "Email is required.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      return "Email is invalid.";
    if (!phone.trim()) return "Phone number is required.";
    if (!/^\d{10}$/.test(phone)) return "Phone number must be 10 digits.";
    if (!business.trim()) return "Business type is required.";

    return null; // all good
  };

  useEffect(() => {
    const targetDate = new Date("2025-06-21T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Updated handleSubmit function
  const handleSubmit = () => {
    const error = validateFormData();

    if (error) {
      alert(error);
      return;
    }

    // Set success state instead of closing modal immediately
    setRegistrationSuccess(true);
    // Reset form data
    setFormData({ name: "", email: "", phone: "", business: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // // Function to handle WhatsApp group join
  // const handleJoinWhatsApp = () => {
  //   // Replace this URL with your actual WhatsApp group invite link
  //   const whatsappGroupUrl = "https://chat.whatsapp.com/YOUR_WHATSAPP_GROUP_INVITE_LINK";
  //   window.open(whatsappGroupUrl, '_blank');
  // };

  // // Function to close modal and reset states
  // const handleCloseModal = () => {
  //   setShowRegistrationModal(false);
  //   setRegistrationSuccess(false);
  // };

  type CountdownBoxProps = {
    value: number;
    label: string;
  };

  const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => (
   <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 sm:p-4 text-center min-w-[60px] sm:min-w-[80px] transform hover:scale-105 transition-all duration-300">
    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-mono">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );


 return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-1xl font-bold text-blue-600 animate-slide-in-left">
              Modilipi Accounting
            </div>
            <div className="text-sm bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full font-small animate-pulse-glow">
              Limited Seats
            </div>
          </div>
        </div>
      </header>

       {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-100 rounded-full opacity-20 animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900 animate-slide-in-up">
              If You Don't Know These
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                {" "}10 Business Numbers
              </span>
              , You're Running Your Business Blind
            </h1>

            <p className="text-l md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slide-in-up animation-delay-200">
              Learn the 10 Numbers That Can Save You{" "}
              <strong className="text-gray-900 animate-bounce-text">
                ₹50,000 to ₹5,00,000 per Year
              </strong>{" "}
              — For Just <strong className="text-blue-600 animate-pulse-text">₹1199</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm animate-slide-in-up animation-delay-400">
              {["Practical", "Real-Life Examples", "No Jargon", "No Upsell"].map((tag, index) => (
                <span 
                  key={tag}
                  className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium transform hover:scale-105 transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Countdown Timer */}
            <div className="mb-8 animate-slide-in-up animation-delay-600">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 max-w-2xl mx-auto shadow-2xl">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="text-white animate-spin-slow" size={20} />
                  <h3 className="text-xl font-bold text-white">Workshop Starts In</h3>
                </div>
                <div className="flex justify-center gap-2">
                  <CountdownBox value={timeLeft.days} label="Days" />
                  <CountdownBox value={timeLeft.hours} label="Hours" />
                  <CountdownBox value={timeLeft.minutes} label="Minutes" />
                  <CountdownBox value={timeLeft.seconds} label="Seconds" />
                </div>
                <div className="text-white/90 mt-4 font-medium">
                  June 21st, 2025 • 10:00 AM IST
                </div>
              </div>
            </div>

            <button
              onClick={handleRegister}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-2xl mb-12 inline-flex items-center gap-2 transform hover:scale-105 animate-slide-in-up animation-delay-800 hover:animate-pulse-glow"
            >
              Register Now - ₹1199 <ArrowRight size={20} className="animate-bounce-horizontal" />
            </button>
          </div>
        </div>
      </section>


      {/* Subheadline Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50/30 animate-slide-in-view">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 animate-slide-in-up">
              "Aapka product toh perfect hai, par kya business bhi healthy hai?"
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto animate-slide-in-up animation-delay-200">
              Pata chalega jab yeh 10 numbers samjhenge — warna lagta rahega
              'Sab Theek Hai', jabki andar se sab leak ho raha hoga.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 animate-slide-in-view">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 animate-slide-in-up">
              What You'll Learn in This 2-Hour Workshop
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  Icon: TrendingUp,
                  title: "Sales Trend Analysis",
                  description: "How to check if your sales trend is actually growing or silently falling",
                },
                {
                  Icon: Calculator,
                  title: "Turnover vs Profit",
                  description: "Why high turnover doesn't mean high profit (and how to fix it)",
                },
                {
                  Icon: Eye,
                  title: "Hidden Expenses",
                  description: "How to identify and control your biggest hidden expenses",
                },
                {
                  Icon: AlertTriangle,
                  title: "Inventory Cash Trap",
                  description: "Why your stock/inventory may be your biggest cash trap",
                },
                {
                  Icon: Users,
                  title: "Customer Profitability",
                  description: "How to track if your customers are profitable — or draining you",
                },
                {
                  Icon: CheckCircle,
                  title: "Monthly Monitoring",
                  description: "A simple monthly method to monitor all 10 critical business signals",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-slide-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.Icon className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl max-w-4xl mx-auto animate-slide-in-up shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Bonus Benefit
              </h3>
              <p className="text-xl text-gray-700">
                Stop being dependent on your consultants or gut feeling for
                business decisions
              </p>
            </div>

            <div className="text-center mt-12 animate-slide-in-up animation-delay-400">
              <button
                onClick={handleRegister}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2 transform hover:scale-105 animate-pulse-glow"
              >
                Secure Your Seat Now <ArrowRight size={20} className="animate-bounce-horizontal" />
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* Who Should Attend */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 animate-slide-in-view">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-slide-in-up">
              Who Should Attend?
            </h2>

            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 mb-12 animate-slide-in-up animation-delay-200 hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">
                If You Are:
              </h3>
              <div className="space-y-6 text-lg">
                {[
                  "A business owner (retail, manufacturing, service, or trading)",
                  'Tired of wondering "paise jaa kahan rahe hain?"',
                  "Confused by numbers, but hungry for control",
                  "Managing ₹10L to ₹10Cr+ turnover but still feel lost with your books",
                  "Want clarity without boring theory or big MBA words",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-slide-in-left hover:bg-blue-50 p-3 rounded-lg transition-all duration-300"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <CheckCircle
                      className="text-blue-600 mt-1 flex-shrink-0 animate-pulse"
                      size={20}
                    />
                    <span className="text-gray-700">
                      {item.includes("paise jaa kahan rahe hain") ? (
                        <>
                          Tired of wondering{" "}
                          <strong className="text-gray-900">
                            "paise jaa kahan rahe hain?"
                          </strong>
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
                  This workshop is for YOU.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="py-20 animate-slide-in-view">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-slide-in-up">
              What This Is NOT
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200 animate-slide-in-left hover:shadow-lg transition-shadow duration-500">
                <h3 className="font-bold text-2xl mb-6 text-gray-900">
                  What We DON'T Do:
                </h3>
                <div className="space-y-4">
                  {[
                    "No upselling after registration",
                    "No templates or freebies to trap you",
                    "No GST/audit/tax class",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 animate-slide-in-left"
                      style={{ animationDelay: `${(index + 2) * 100}ms` }}
                    >
                      <X className="text-red-600 animate-pulse" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200 animate-slide-in-right hover:shadow-lg transition-shadow duration-500">
                <h3 className="font-bold text-2xl mb-6 text-gray-900">
                  What You GET:
                </h3>
                <div className="flex items-start space-x-4">
                  <CheckCircle
                    className="text-green-600 mt-1 flex-shrink-0 animate-pulse"
                    size={24}
                  />
                  <span className="text-xl font-semibold text-gray-800">
                    Just pure, practical business clarity in your language
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 animate-slide-in-up animation-delay-600">
              <button
                onClick={handleRegister}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2 transform hover:scale-105 animate-pulse-glow"
              >
                Register Now - ₹1199 <ArrowRight size={20} className="animate-bounce-horizontal" />
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* What Makes This Different */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-50/30 py-20 animate-slide-in-view">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-900 animate-slide-in-up">
              What Makes This Different?
            </h2>

            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 mb-12 animate-slide-in-up animation-delay-200 hover:shadow-2xl transition-shadow duration-500">
              <p className="text-2xl mb-6 text-gray-900 font-semibold">
                Because yeh koi "free lead magnet" nahi hai.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Yeh ₹1199 ki investment aapke ₹5,00,000 se bhi jyada ke business
                leaks band karne ke liye hai.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-10 rounded-xl border border-blue-200 animate-slide-in-up animation-delay-400 hover:shadow-lg transition-shadow duration-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Delivered by Abhijit Patil
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founder of Modilipi Accounting, who's helped 100s of Indian
                businesses fix their numbers, reduce stress, and regain control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 animate-slide-in-view">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-slide-in-up">
              What Others Say
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  text: "After this session, I realised my expenses were 30% above ideal. Adjusted next month and saved ₹75,000 monthly!",
                  author: "— Sameer, ERP Developer",
                },
                {
                  text: "Finally understood why I was always in cash crunch despite good sales. This is gold for ₹1199.",
                  author: "— Aashlesh, Web Developer",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current animate-twinkle"
                        size={20}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-lg mb-6 text-gray-700 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 py-20 relative overflow-hidden animate-slide-in-view">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white animate-slide-in-up">
              Stop Guessing. Start Knowing.
            </h2>

            <p className="text-1xl mb-12 font-semibold text-blue-100 animate-slide-in-up animation-delay-200">
              ₹1199 to fix the leaks, save lakhs, and take control of your
              business.
            </p>

            <button
              onClick={handleRegister}
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-6 px-12 rounded-lg text-1xl transition-all duration-300 shadow-lg hover:shadow-2xl mb-8 inline-flex items-center gap-3 transform hover:scale-105 animate-slide-in-up animation-delay-400 hover:animate-pulse-glow"
            >
              Register Now - ₹1199 <ArrowRight size={20} className="animate-bounce-horizontal" />
            </button>

            <div className="space-y-4 text-md text-blue-100 animate-slide-in-up animation-delay-600">
              <p>Seats are limited. No replay sales. No upsell.</p>
              <p className="font-semibold text-white">
                You pay once. You learn once. You gain for life.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto transform animate-scale-in shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                {registrationSuccess ? "Registration Successful!" : "Register for Workshop"}
              </h3>
              <button
                onClick={() => {
                  setShowRegistrationModal(false);
                  setRegistrationSuccess(false);
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 transform duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {!registrationSuccess ? (
              <div className="space-y-6">
                <div className="animate-slide-in-up">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  />
                </div>

                <div className="animate-slide-in-up animation-delay-100">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  />
                </div>

                <div className="animate-slide-in-up animation-delay-200">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  />
                </div>

                <div className="animate-slide-in-up animation-delay-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <input
                    type="text"
                    name="business"
                    placeholder="e.g., Retail, Manufacturing, Service"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 animate-slide-in-up animation-delay-400"
                >
                  Complete Registration - ₹1199 <ArrowRight size={20} />
                </button>

                <p className="text-sm text-gray-500 text-center animate-slide-in-up animation-delay-500">
                  You will receive workshop details and payment instructions via
                  email.
                </p>
              </div>
            ) : (
              <div className="text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Welcome to the Workshop!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering. You'll receive payment details and workshop information via whatsapp shortly.
                  </p>
                </div>

                <button
                  onClick={() => window.open('https://chat.whatsapp.com/Dy7uO2LdAwh0N2k0TqIWl8', '_blank')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 animate-slide-in-up"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
                  </svg>
                  Join WhatsApp Group
                </button>

                <p className="text-sm text-gray-500">
                  Get updates, interact with other participants, and stay connected with the community.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CSS Styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounceText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes pulseText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes bounceHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out; }
        .animate-slide-in-view { animation: slideInUp 0.8s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: floatDelayed 6s ease-in-out infinite 3s; }
        .animate-gradient { background-size: 400% 400%; animation: gradient 3s ease infinite; }
        .animate-bounce-text { animation: bounceText 2s ease-in-out infinite; }
        .animate-pulse-text { animation: pulseText 2s ease-in-out infinite; }
        .animate-bounce-horizontal { animation: bounceHorizontal 1s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 2s infinite; }
        .animate-spin-slow { animation: spinSlow 3s linear infinite; }
        .animate-twinkle { animation: twinkle 1.5s ease-in-out infinite; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out; }
        
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
      `}</style>
    </div>
  );
}

export default LandingPage;


        


