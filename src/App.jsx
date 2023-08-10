import Profile from "./components/Profile"

function App() {

  return (
    <div className="app">
      <Profile
        avatar="src/assets/Darth-Vader.gif"
        name="Tiago Henrique"
        bio="Front-End Developer at Acme Inc."
        email="tiago.henrique10@yahoo.com"
        phone="+5511911223355"
        linkedinUrl="https://www.linkedin.com/in/tiago-jesuss/"
        githubUrl="https://github.com/TiagoHenrique10"
        discordUrl="https://discord.com/channels/@me"
      />
    </div>
  )
}

export default App
