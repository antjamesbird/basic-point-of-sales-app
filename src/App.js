import React, { Component } from "react";
import { Button } from "./styled-components/button";
import { CalculatorWrapper, TotalsWrapper } from "./styled-components/wrapper";
import { Item } from "./styled-components/item";
import { keys } from "./common/keys";
import { Result } from "./components/result";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: '',
      result: 0.00,
      total: 0,
      totals: []
    };
  }

  insertDecimal(num) {
    return (num / 100);
  }

  calculate(value) {
    let memory = this.state.memory;
    const updateMemory = memory += value;
    this.setState({ memory: updateMemory });
    const getDecimal = this.insertDecimal(updateMemory);
    this.setState({ result: getDecimal  });
  }

  handleClick(e) {
    if (e.target.classList[0] === 'icon-tick') {
      this.state.totals.push(this.state.result);
    }
    if (e.target.classList[0] === 'icon-cross') {
      console.log('no time to code this');
    }
    const value = e.target.value;
    this.calculate(value);
  }

  render() {
    let total = 0;
    this.state.totals.forEach((item => {
      total += item;
    }));
    const amounts = this.state.totals.map((item) => (
      <Item>{item.toFixed(2)}</Item>
    ));
    const noTotals = this.state.totals.length;
    const result = this.state.result.toFixed(2);
    const calculatorKeys = keys.map(({ value, type }) => (
      <Button
        onClick={value => this.handleClick(value)}
        className={type}
        value={value}
        key={value}
      >
        {value}
      </Button>
    ));
    return (
      <div>
        <CalculatorWrapper>
          <Result result={`R ${result}`} />
          {calculatorKeys}
        </CalculatorWrapper>
        <TotalsWrapper>
          <div className="amounts">
            {
              !noTotals ? 'No amounts have been added' : amounts
            }
          </div>
          <div className="total">
            {total.toFixed(2)}
          </div>
        </TotalsWrapper>
      </div>
    );
  }
}

export default App;
