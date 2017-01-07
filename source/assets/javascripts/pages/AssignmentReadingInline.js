import React, { Component } from "react"
import { Link } from "react-router"

import AssignmentNavigation from "../components/AssignmentNavigation"

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AssignmentNavigation />
        <main>
          <header className="cell cell--animate cell--content tac">
            <p className="mb025 mt5">Week 1 &bull; Reading Assignment</p>
            <h1 className="heading heading--l">Macroeconomics vs. Microeconomics</h1>
          </header>
          <article className="article cell cell--animate cell--m">
            <p>So as we’re building this model, weíre going to want to include things, like consumer income, taxes, the stock market, and other factors that influence how much money people choose to spend. We can probably ignore other things that bear less on the consumer spending decision, such as the gender of the children or the color of the breadwinnerís hair. I mean, these are real facts from the real world, but they probably arenít very important.</p>
            <p>Margaret Mead once said that a model that is completely realistic is no more useful than a map with a scale of one-to- one. The only reason the map helps you is that itís simple enough and simplified enough to help you see the big picture and the details that are necessary in helping you guide your way through the city. On a typical map you wonít see trees and dogs and cars, because theyíre not necessary. And by eliminating them, and showing you the grid of the streets, you are helped in navigating your way around New York.</p>
            <p>So we build a model, and perhaps that model is a story whereby people make spending decisions based on their income, their taxes, and their age. People who are younger tend to spend more and save more in their middle years and spend it in retirement. We build a relationship among these variables and that becomes our model of how consumers make their spending decisions.</p>
            <p>Now, once weíve got a model the relationships that we imagine hold among the variables allow us to derive certain hypotheses. Hypotheses are predictions about how the world works. One hypothesis might be than increase in consumer income leads to an increase in consumer spending. Now, that hypothesis is something we can test. We can go out and get data from the real world and compare the relationship between observed consumer income changes and changes in consumer spending. And if our data matches the predictions of our model, then we believe that weíve explained something about the real world. We believe that since our story matches the facts, weíve come to understand more thoroughly the way the world works.</p>
            <p>So as we’re building this model, weíre going to want to include things, like consumer income, taxes, the stock market, and other factors that influence how much money people choose to spend. We can probably ignore other things that bear less on the consumer spending decision, such as the gender of the children or the color of the breadwinnerís hair. I mean, these are real facts from the real world, but they probably arenít very important.</p>
            <p>Margaret Mead once said that a model that is completely realistic is no more useful than a map with a scale of one-to- one. The only reason the map helps you is that itís simple enough and simplified enough to help you see the big picture and the details that are necessary in helping you guide your way through the city. On a typical map you wonít see trees and dogs and cars, because theyíre not necessary. And by eliminating them, and showing you the grid of the streets, you are helped in navigating your way around New York.</p>
            <p>So we build a model, and perhaps that model is a story whereby people make spending decisions based on their income, their taxes, and their age. People who are younger tend to spend more and save more in their middle years and spend it in retirement. We build a relationship among these variables and that becomes our model of how consumers make their spending decisions.</p>
            <p>Now, once weíve got a model the relationships that we imagine hold among the variables allow us to derive certain hypotheses. Hypotheses are predictions about how the world works. One hypothesis might be than increase in consumer income leads to an increase in consumer spending. Now, that hypothesis is something we can test. We can go out and get data from the real world and compare the relationship between observed consumer income changes and changes in consumer spending. And if our data matches the predictions of our model, then we believe that weíve explained something about the real world. We believe that since our story matches the facts, weíve come to understand more thoroughly the way the world works.</p>
            <p>So as we’re building this model, weíre going to want to include things, like consumer income, taxes, the stock market, and other factors that influence how much money people choose to spend. We can probably ignore other things that bear less on the consumer spending decision, such as the gender of the children or the color of the breadwinnerís hair. I mean, these are real facts from the real world, but they probably arenít very important.</p>
            <p>Margaret Mead once said that a model that is completely realistic is no more useful than a map with a scale of one-to- one. The only reason the map helps you is that itís simple enough and simplified enough to help you see the big picture and the details that are necessary in helping you guide your way through the city. On a typical map you wonít see trees and dogs and cars, because theyíre not necessary. And by eliminating them, and showing you the grid of the streets, you are helped in navigating your way around New York.</p>
            <p>So we build a model, and perhaps that model is a story whereby people make spending decisions based on their income, their taxes, and their age. People who are younger tend to spend more and save more in their middle years and spend it in retirement. We build a relationship among these variables and that becomes our model of how consumers make their spending decisions.</p>
            <p>Now, once weíve got a model the relationships that we imagine hold among the variables allow us to derive certain hypotheses. Hypotheses are predictions about how the world works. One hypothesis might be than increase in consumer income leads to an increase in consumer spending. Now, that hypothesis is something we can test. We can go out and get data from the real world and compare the relationship between observed consumer income changes and changes in consumer spending. And if our data matches the predictions of our model, then we believe that weíve explained something about the real world. We believe that since our story matches the facts, weíve come to understand more thoroughly the way the world works.</p>
          </article>
          <footer className="cell cell--s well well--l tac">
            <Link to="/course" className="button button--green button--l">Complete &amp; Continue</Link>
          </footer>
        </main>
      </div>
    )
  }
}
