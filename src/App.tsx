
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal';
import { useState } from "react";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransacationModal}/>

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransacationModal} />

      <GlobalStyle/>
    </TransactionsProvider>
  );
}
