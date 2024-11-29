import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-soil text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-sand mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sand transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sand transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-sand transition-colors">
                  פעילויות
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-sand transition-colors">
                  אירועים
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-sand mb-4">צור קשר</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>054-1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@abaadama.co.il</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>רחוב הטבע 1, תל אביב</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-sand mb-4">עקבו אחרינו</h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sand transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sand transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sand transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>© {new Date().getFullYear()} מרחב אבא אדמה - כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer