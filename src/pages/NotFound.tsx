import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container-custom py-16 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">העמוד לא נמצא</p>
      <Link to="/" className="btn btn-primary">
        חזרה לדף הבית
      </Link>
    </div>
  )
}

export default NotFound