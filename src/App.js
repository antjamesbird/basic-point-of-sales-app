import React, { Component } from "react";
import { Button } from "./styled-components/button";
import { CalculatorWrapper, TotalsWrapper } from "./styled-components/wrapper";
import Item from "./components/item";
import { keys } from "./common/keys";
import { Result } from "./components/result";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: "",
      result: 0,
      total: 0,
      totals: []
    };

    this.updateTotals = this.updateTotals.bind(this);
    this.calculate = this.calculate.bind(this);
    this.insertDecimal = this.insertDecimal.bind(this);
  }

  insertDecimal(num) {
    return num / 100;
  }

  calculate(value) {
    let memory = this.state.memory;
    const updateMemory = (memory += value);
    this.setState({ memory: updateMemory });
    const getDecimal = this.insertDecimal(updateMemory);
    this.setState({ result: getDecimal });
  }

  handleClick(e) {
    const classList = e.target.classList[0];
    if (classList === "icon-tick") {
      const totals = this.state.totals;
      totals.push(this.state.result);
      this.setState({ totals, memory: "" });
      this.setState({ result: 0 });
    }

    if (classList === "number") {
      const value = e.target.value;
      this.calculate(value);
    }

    if (classList === "icon-cross") {
      const memory = this.state.memory.toString();
      if (memory.length) {
        const trimStart = memory.substr(1);
        const convertBack = parseInt(trimStart, 10);
        this.setState({ memory: convertBack });
        const getDecimal = this.insertDecimal(convertBack);
        if (trimStart.length) {
          this.setState({ result: getDecimal });
        } else {
          this.setState({ result: 0, memory: "" });
        }
      }
    }
  }

  updateTotals(totals) {
    this.setState({ totals });
  }

  render() {
    let total = 0;
    this.state.totals.forEach(item => {
      total += item;
    });
    const amounts = this.state.totals.map((value, index) => (
      <Item key={index} index={index} value={value} totals={this.state.totals} updateTotals={this.updateTotals} />
    ));
    const noTotals = this.state.totals.length;
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
          <Result result={`R ${this.state.result}`} />
          {calculatorKeys}
        </CalculatorWrapper>
        <TotalsWrapper>
          <div className="amounts">
            {!noTotals ? "No amounts have been added" : amounts}
          </div>
          <div className="total">R {total}</div>
        </TotalsWrapper>
      </div>
    );
  }
}

export default App;
