import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-soil-900 to-soil-800 text-white">
      <div className="container-custom">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* About Section */}
          <FadeIn>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-sand-200">מרחב אבא אדמה</h3>
              <p className="text-gray-300">
                מקום של חיבור לאדמה, לטבע ולקהילה. יחד נצמח ונתפתח בדרך של קיימות וחיבור.
              </p>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-sand-200">ניווט מהיר</h3>
              <ul className="space-y-2">
                {[
                  { name: 'דף הבית', href: '/' },
                  { name: 'אודות', href: '/about' },
                  { name: 'פעילויות', href: '/activities' },
                  { name: 'אירועים', href: '/events' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-sand-200 transition-colors flex items-center gap-2"
                    >
                      <span>→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.4}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-sand-200">צור קשר</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:054-1234567"
                    className="text-gray-300 hover:text-sand-200 transition-colors flex items-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    <span>054-1234567</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@abaadama.co.il"
                    className="text-gray-300 hover:text-sand-200 transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>info@abaadama.co.il</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-5 w-5" />
                  <span>רחוב הטבע 1, תל אביב</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.6}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-sand-200">עקבו אחרינו</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Youtube, href: '#' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-soil-700 hover:bg-soil-600 p-2 rounded-full transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <p className="text-gray-300">הצטרפו לקהילה שלנו ברשתות החברתיות</p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 py-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} מרחב אבא אדמה - כל הזכויות שמורות
            <Heart className="h-4 w-4 text-leaf-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer