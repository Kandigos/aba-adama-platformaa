import { motion } from 'framer-motion'
import { PaintBrush, Leaf, Users } from 'lucide-react'

const features = [
  {
    icon: PaintBrush,
    title: 'משתלה אמנותית',
    description: 'מרחב ייחודי המשלב אמנות וטבע, מקום בו אמנים יכולים לצמוח, ליצור ולהתפתח בסביבה תומכת ומעשירה.',
    color: 'earth'
  },
  {
    icon: Leaf,
    title: 'סדנאות',
    description: 'מגוון סדנאות המשלבות אמנות וטבע, מועברות על ידי אמנים מובילים ומאפשרות חיבור עמוק לאדמה וליצירה.',
    color: 'leaf'
  },
  {
    icon: Users,
    title: 'קהילה',
    description: 'קהילה תומכת של אמנים ויוצרים, מפגשים מעשירים ושיתופי פעולה המעודדים צמיחה והתפתחות.',
    color: 'soil'
  }
]

const LearnMoreSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="learn-more" className="py-24 bg-sand-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          המרחב שלנו
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            אנו מאמינים שהחיבור בין אמנות לטבע יוצר מרחב ייחודי של השראה, יצירה וצמיחה.
            הצטרפו אלינו למסע של גילוי והתפתחות.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default LearnMoreSection