import { useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page">
      <section className="form-panel" aria-labelledby="form-title">
        <h1 id="form-title">Crear contacto</h1>
        <form onSubmit={handleSubmit} onInput={() => setSubmitted(false)}>
          <div className="field">
            <label htmlFor="name" lang="en">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre"
              pattern=".*\S.*"
              title="Escribe un nombre que no contenga solo espacios."
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email" lang="en">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tu@ejemplo.com"
              required
            />
          </div>
          <button type="submit">Crear</button>
          <p className="form-status" role="status">
            {submitted ? 'Formulario enviado correctamente.' : ''}
          </p>
        </form>
      </section>
    </main>
  )
}

export default App
