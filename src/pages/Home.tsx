import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import FadeIn from '@/components/common/FadeIn'
import { Link } from 'react-router-dom'
import { ChevronLeft, Calendar, Leaf, Users, PaintBrush, ArrowDown } from 'lucide-react'

// Temporary mock data - will be replaced with real data from API
const upcomingEvents = [
  {
    id: 1,
    title: "סדנת ציור בטבע",
    date: "2024-12-15",
    time: "16:00",
    price: 120,
    description: "הצטרפו אלינו לסדנת ציור מיוחדת בטבע, בה נלמד טכניקות שונות לציור נוף.",
    payboxLink: "https://paybox.com/event1"
  },
  {
    id: 2,
    title: "מפגש קהילה: אמנות ואדמה",
    date: "2024-12-20",
    time: "18:30",
    price: 0,
    description: "מפגש קהילתי בו נשתף יצירות, נכיר אמנים חדשים ונתחבר לאדמה דרך האמנות.",
    payboxLink: "https://paybox.com/event2"
  },
  {
    id: 3,
    title: "סדנת קרמיקה בטבע",
    date: "2024-12-25",
    time: "10:00",
    price: 150,
    description: "סדנה מעשית בה ניצור כלים מחומר תוך התחברות לאדמה ולטבע שסביבנו.",
    payboxLink: "https://paybox.com/event3"
  }
]

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.95)' },
    to: {
      opacity: heroInView ? 1 : 0,
      transform: heroInView ? 'scale(1)' : 'scale(0.95)',
    },
    config: { tension: 300, friction: 20 },
  })

  const scrollToLearnMore = () => {
    const learnMoreSection = document.getElementById('learn-more')
    learnMoreSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-earth-500 to-soil-600"
      >
        <div className="absolute inset-0 bg-grain opacity-10" />
        <animated.div
          style={heroAnimation}
          className="container-custom relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            מרחב אבא אדמה
            <span className="block text-2xl md:text-3xl mt-4 text-sand-200">
              Where Nature Meets Creativity
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-sand-100">
            A unique space for nature, art, and community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToLearnMore}
              className="btn bg-leaf-500 hover:bg-leaf-600 text-white px-8 py-4 rounded-full flex items-center justify-center group transition-all duration-300"
            >
              Learn More
              <ArrowDown className="mr-2 group-hover:translate-y-1 transition-transform" />
            </button>
            <Link
              to="/register"
              className="btn bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full transition-all duration-300"
            >
              Join Now
            </Link>
          </div>
        </animated.div>
      </section>

      {/* Learn More Section */}
      <section id="learn-more" className="py-24 bg-sand-50">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">המרחב שלנו</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.2}>
              <div className="card bg-white/80 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PaintBrush className="w-8 h-8 text-earth-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">משתלה אמנותית</h3>
                  <p className="text-gray-600">
                    מרחב יצירה ייחודי המשלב אמנות וטבע, מקום בו אמנים יכולים לצמוח ולהתפתח
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="card bg-white/80 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-leaf-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-leaf-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">סדנאות</h3>
                  <p className="text-gray-600">
                    מגוון סדנאות המשלבות אמנות וטבע, מועברות על ידי אמנים מובילים בתחומם
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="card bg-white/80 backdrop-blur-sm hover:-translate-y-2 transition-all duration-300">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-soil-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-soil-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">קהילה</h3>
                  <p className="text-gray-600">
                    קהילה תומכת של אמנים ויוצרים, מפגשים ושיתופי פעולה ייחודיים
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-gradient-to-br from-soil-50 to-sand-100">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">אירועים קרובים</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <FadeIn key={event.id} delay={index * 0.2}>
                <div className="card bg-white hover:-translate-y-2 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <Calendar className="text-leaf-500" />
                    </div>
                    <div className="mb-4 text-gray-600">
                      <p>תאריך: {new Date(event.date).toLocaleDateString('he-IL')}</p>
                      <p>שעה: {event.time}</p>
                      <p>מחיר: {event.price > 0 ? `₪${event.price}` : 'חינם'}</p>
                    </div>
                    <p className="mb-6 text-gray-700">{event.description}</p>
                    <a
                      href={event.payboxLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full text-center"
                    >
                      הרשמה לאירוע
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home