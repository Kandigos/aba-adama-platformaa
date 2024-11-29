import { motion } from 'framer-motion'
import { Calendar, Clock, Coins } from 'lucide-react'
import { formatDate } from '@/utils/dateUtils'

interface Event {
  id: number
  title: string
  date: string
  time: string
  price: number
  description: string
  payboxLink: string
  imageUrl?: string
}

interface EventsSectionProps {
  events: Event[]
}

const EventsSection = ({ events }: EventsSectionProps) => {
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
    <section className="py-24 bg-gradient-to-br from-soil-50 to-sand-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          אירועים קרובים
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Event Image */}
              {event.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                
                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Coins className="w-5 h-5" />
                    <span>{event.price > 0 ? `₪${event.price}` : 'חינם'}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{event.description}</p>

                {/* Registration Button */}
                <motion.a
                  href={event.payboxLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-leaf-500 hover:bg-leaf-600 text-white text-center py-3 rounded-lg
                           transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  הרשמה לאירוע
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/events"
            className="inline-block bg-soil-600 hover:bg-soil-700 text-white px-8 py-3 rounded-lg
                     transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            לכל האירועים
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsSection