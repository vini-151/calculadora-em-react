import Input from './components/input';
import Buttom from './components/buttom';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';




function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')

    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
      setOperation('')
    }
  }

  const handleSubstNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')

    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('x')

    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')

    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubstNumbers();
          break;
          case 'x':
            handleMultNumbers();
            break;
            case '/':
              handleDivNumbers();
              break;
        default:
          break;
      }
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0')
    }
  }

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Buttom label="0" onClick={() => handleAddNumber('0')}/>
            <Buttom label="/" onClick={handleDivNumbers} />
            <Buttom label="C" onClick={handleOnClear} />
            <Buttom label="x" onClick={handleMultNumbers} />
          </Row>
          <Row>
            <Buttom label="7" onClick={() => handleAddNumber('7')} />
            <Buttom label="8" onClick={() => handleAddNumber('8')} />
            <Buttom label="9" onClick={() => handleAddNumber('9')} />
            <Buttom label="-" onClick={handleSubstNumbers} />
          </Row>
          <Row>
            <Buttom label="4" onClick={() => handleAddNumber('4')} />
            <Buttom label="5" onClick={() => handleAddNumber('5')} />
            <Buttom label="6" onClick={() => handleAddNumber('6')} />
            <Buttom label="+" onClick={handleSumNumbers} />
          </Row>
          <Row>
            <Buttom label="1" onClick={() => handleAddNumber('1')} />
            <Buttom label="2" onClick={() => handleAddNumber('2')} />
            <Buttom label="3" onClick={() => handleAddNumber('3')} />
            <Buttom label="=" onClick={handleEquals} />
          </Row>



        </Content>
      </Container>
    </div>
  );
}

export default App;
