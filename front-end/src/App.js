import './App.css';
import ContentHeader from './components/Content/ContentHeader';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <ContentHeader></ContentHeader>
      </header>
    </div>
  );
}

export default App;
