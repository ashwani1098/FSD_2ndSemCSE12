import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [apiData, setApiData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setApiData(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.name) tempErrors.name = "Name is required"
    if (!formData.email) {
      tempErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid"
    }
    if (!formData.password) {
      tempErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters"
    }
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSuccessMessage('Registration successful! Your data has been recorded.')
      // Optional: Clear form
      setFormData({ name: '', email: '', password: '' })
      setErrors({})
    } else {
      setSuccessMessage('')
    }
  }

  return (
    <div className="container">
      <div className="form-section">
        <h2>Registration Form</h2>
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          
          <button type="submit">Register</button>
        </form>
      </div>

      <div className="data-section">
        <h2>Users Data (Fetched from API)</h2>
        {loading ? (
          <p>Loading API data...</p>
        ) : (
          <div className="user-list">
            <ul>
              {apiData.slice(0, 5).map(user => (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
