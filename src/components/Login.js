import React from 'react'

export const Login = () => (
    <div>
      <h1>Login</h1>
          <input type="text" name="username" />
          <input type="password" name="password" />

          {/* TODO: 
                button made into common component
                get form module
                convert to smart component (class)
                hook up to backend API
                */}
          <button>Submit</button>
    </div>
  )