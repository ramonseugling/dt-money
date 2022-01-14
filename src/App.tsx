
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransacationModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransacationModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransacationModal}/>
      <Dashboard />
      <NewTransactionsModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransacationModal} />
      <GlobalStyle/>
    </>
  );
}
