import { AnimatePresence, motion } from 'framer-motion';
import background from '../../assets/background.png';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import './styles.css';

// eslint-disable-next-line react/prop-types
function App() {
  return (
    <AnimatePresence>
      <div>
        <Header />
        <div className="content">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-img"
            src={background}
            alt="github logo"
          />
          <div className="info">
            <div>
              <input type="text" name="user" placeholder="@username" />
              <button type="submit">Buscar</button>
            </div>
            <div className="profile-container">
              <img src="" className="profile-img" alt="profile photo" />
              <div className="profile">
                <h3>Nome</h3>
                <span>perfil</span>
                <p>descrição</p>
              </div>
            </div>
            <hr />
            <div>
              <h4 className="repo">Repositórios</h4>
              <ItemList title="teste" description="descrição" />
              <ItemList title="teste" description="descrição" />
              <ItemList title="teste" description="descrição" />
              <ItemList title="teste" description="descrição" />
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
