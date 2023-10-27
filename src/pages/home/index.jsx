import { AnimatePresence, motion } from 'framer-motion';
import background from '../../assets/background.png';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import { fadeIn } from '../../variants';
import './styles.css';

// eslint-disable-next-line react/prop-types
function App() {
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
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
