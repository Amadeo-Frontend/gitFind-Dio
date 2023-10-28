import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import background from '../../assets/background.png';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import { fadeIn } from '../../variants';
import './styles.css';

// eslint-disable-next-line react/prop-types
function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login }); // Adicione 'login' aqui

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`,
      );
      const newRepos = await reposData.json(); // Corrija para 'reposData' aqui

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Header />
        <div className="content">
          <motion.img
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-img"
            src={background}
            alt="github logo"
          />
          <div className="info">
            <div>
              <input
                name="user"
                value={user}
                onChange={(event) => setUser(event.target.value)}
                placeholder="@username"
                required
              />
              <button onClick={handleGetData}>Buscar</button>
            </div>
            {currentUser?.name ? (
              <>
                <div className="profile-container">
                  <img
                    src={currentUser.avatar_url}
                    className="profile-img"
                    alt="profile photo"
                  />
                  <div className="profile">
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                  </div>
                </div>
                <hr />
              </>
            ) : null}
            {repos?.length ? (
              <div>
                <h4 className="repo">Repositórios</h4>
                {repos.map((repo, index) => (
                  <ItemList
                    key={index}
                    title={repo.name}
                    description={repo.description}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
