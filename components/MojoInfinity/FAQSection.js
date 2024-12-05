import React, { useState } from "react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});
  const [selectedSection, setSelectedSection] = useState(0); // Initialize to 0 for Portfolio

  const toggleAccordion = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSectionClick = (sectionIndex) => {
    setSelectedSection(selectedSection === sectionIndex ? null : sectionIndex);
    setOpenItems({}); // Reset open items when changing sections
  };

  // FAQ data
  const faqSections = [
    {
      title: "Portfolio",
      items: [
        {
          question: "Will the portfolio be the same for everyone?",
          answer: (
            <div className="head45" id="faq1">
              Each portfolio will be unique and personalized to the client's
              preferences, tailored based on several factors:
              <ul className="pf26-list">
                <li>
                  <b>Defined Parameters:</b> Clients can customize their
                  portfolio by setting specific parameters for stock selection,
                  ensuring the portfolio aligns with their individual goals and
                  strategies.
                </li>
                <li>
                  <b>Time of Portfolio Generation:</b> A new portfolio is
                  generated at the time of account activation, reflecting the
                  market conditions and top-rated stocks at that moment.
                </li>
                <li>
                  <b>Investment Amount and Liquidity:</b> Stock selection will
                  depend on the trading volumes and the amount each client
                  chooses to invest, ensuring the portfolio is optimized for the
                  individual's investment size and liquidity needs.
                </li>
              </ul>
            </div>
          ),
        },
        {
          question:
            "How many portfolios can I create in Mojo Infinity? Will these portfolios have different strategies?",
          answer: (
            <div className="head45" id="faq2">
              You can create as many portfolios as you in Mojo Infinity.
              Portfolio strategies will depend on the parameters selected for
              stock selection.
            </div>
          ),
        },
        {
          question: "Will the stocks be the same for all strategies?",
          answer: (
            <div className="head45" id="faq3">
              There can be similar stocks qualifying for all strategies,
              depending on the market conditions, individual stock ratings and
              the segment-allocations selected by our algorithm. However, the
              overall portfolio holdings will be different for every user
              according to the parameters defined.
            </div>
          ),
        },
        {
          question: "Will I be able to migrate between strategies?",
          answer: (
            <div className="head45" id="faq5">
              Currently, you cannot migrate between strategies as the portfolio
              constructions are different.
            </div>
          ),
        },
        {
          question:
            "What is the minimum amount needed to invest in Infinity portfolios?",
          answer: (
            <div className="head45" id="faq6">
              Minimum Investments are listed below: <br />
              Mojo Flagship: Rs 2 lacs <br />
              Pick Your Mojo Strategy: Rs 2 lacs <br />
              Be Your Own Fund Manager: Rs 10 lacs <br />
            </div>
          ),
        },
        {
          question: "Can I Buy stocks not in the recommended list?",
          answer: (
            <div className="head45" id="faq7">
              No, you can only add transactions for stocks, which were
              recommended. If the stock was not originally recommended, there
              would not be an option to insert trades for these.
            </div>
          ),
        },
        {
          question: "What if I do not want to execute a sell recommendation?",
          answer: (
            <div className="head45" id="faq8">
              In this portfolio, please follow the advice, else you will not be
              able to execute the strategy, and performance may suffer. If you
              do not execute the Sell, the transaction will remain in your
              pending advice. Only after you execute the sell suggestions, you
              will be able to generate buy suggestions against the amount.
            </div>
          ),
        },
        {
          question: "Can I modify the trades once I insert?",
          answer: (
            <div className="head45" id="faq10">
              Even after inserting the trade, you can change the transaction
              date, stock price, quantity, and brokerage amount. You can also
              opt to change your transaction history later. Please ensure all
              transactions are edited at the right price and brokerage, as your
              next instruction will depend on that.
              <ul>
                <li>
                  <b>-Editing the date :</b> While modifying the date, please
                  ensure the date is greater than the initial investment date.
                  The date can only be at or after the date of the advice{" "}
                </li>
                <li>
                  <b>-Editing Quantity :</b> You can update the quantity less
                  than or equal to the amount suggested; you cannot increase the
                  quantity.{" "}
                </li>
                <li>
                  <b>-Inserting Price :</b> Once you select the transaction
                  date, you can insert the price between the High and Low Price
                  of the date mentioned.{" "}
                </li>
              </ul>
            </div>
          ),
        },
        {
          question:
            "I am not able to buy the quantity recommended. What to do?",
          answer: (
            <div className="head45" id="faq11">
              You can keep adding the stock in multiple lots and keep the trade
              open. <br />
              If you cannot fill the trades even after 3 days, then we would
              recommend that you close the call and regenerate the order for the
              cash remaining. We will generate a new order so you can allocate
              the amount either within the portfolio stocks or in new stocks.
            </div>
          ),
        },
        {
          question: "What is the time limit for trade execution?",
          answer: (
            <div className="head45" id="faq111">
              We recommend taking not more than 3 days to execute and update the
              transaction on the portal. If, for any reason, you were not able
              to execute the trades, you can regenerate the trades to get a
              fresh order.
            </div>
          ),
        },
        {
          question: "I already own a recommended stock, what should I do?",
          answer: (
            <div className="head45" id="faq112">
              Consider Mojo Infinity as a new portfolio and do not mix it with
              your existing holdings: <br />
              If you own the same stock in a Markets Mojo model portfolio:{" "}
              <br />
              Both are different portfolios that follow different strategies.
              Keep maintaining both as separate portfolios and track the
              performance separately. <br />
              If you own the same stock in your other portfolio: <br />
              We suggest keeping these separate as while inserting trades you
              can only use between the day’s high/low prices. It would be
              difficult for you to track performance basis your actual buying
              price. Hence, it is ideal to keep portfolios separate. <br />
              We will only track the performance basis the price entered, which
              depends on the price range during the period. <br />
            </div>
          ),
        },
        {
          question:
            "What can I do if I do not have the funds to execute the trades initially?",
          answer: (
            <div className="head45" id="faq113">
              You can execute the trades when you have the required liquidity.
              You can execute the trades in part or even regenerate the trade if
              you are unable to execute for 3 or more days.
            </div>
          ),
        },
        {
          question: "Will there be dedicated customer support?",
          answer: (
            <div className="head45" id="faq114">
              We have dedicated customer service for our Infinity clients. You
              can write to us using the Feedback section in the Profile
              drop-down on the top-right corner of the page, or email us at{" "}
              <a href="mailto:support@mojoinfinity.com">
                support@mojoinfinity.com
              </a>
            </div>
          ),
        },
      ],
    },
    {
      title: "Payment",
      items: [
        {
          question: "How is the fee calculated?",
          answer: (
            <div className="head45" id="pay1">
              <p>
                For Infinity Soul and Power: Charges are 1.25% of investment
                value charged upfront and 1.25% of Portfolio Value every 6
                months if you make money in the semi-annual period. Comparison
                is made with the portfolio value plus any fee paid in the
                immediately-preceding 6-month period. If the value is higher we
                would charge the fee.{" "}
              </p>
              <p>
                For the Three Model Portfolios (Aggressive, Moderate and
                Conservative): Fee is charged as flat 1% of investment value
                upfront and 1% of Portfolio Value every 6 months.
              </p>
            </div>
          ),
        },
        {
          question: "What if my portfolio is in losses?",
          answer: (
            <div className="head45" id="pay2">
              <p>
                For Infinity Soul and Power:The semi-annual fee would be charged
                in case the portfolio value at the end of the semi- annual
                period is higher than the value at the last semi-annual period
                plus any charges paid at the last charge date. A fee will be
                charged even if the portfolio is in a loss, provided it is
                higher than last time, I.e. from six-months back.
              </p>
              <p>
                For the Three Model Portfolios (Aggressive, Moderate and
                Conservative): A flat fee of 1% of portfolio value is charged
                regardless of profits or losses in the portfolio on the day of
                semi- annual renewal.{" "}
              </p>
            </div>
          ),
        },
        {
          question: "Are there some examples of fee calculations?",
          answer: (
            <div className="head45" id="pay3">
              <p>
                <i>Below Illustration is for Infinity Soul & Power</i>
              </p>
              <p className="f10">
                <b>Portfolio Starting Date:</b> 28-Oct-21 | Initial Investment:
                Rs 1 cr | Initial Fee: Rs. 1.25 lac
              </p>

              <p className="f10">
                <b>Next Semi Annual Beginning Date:</b> 28-Apr-22
              </p>
              <p className="f10">
                <b>Fee Review Date:</b> 27-Apr-22
              </p>
              <p className="f10">
                <b>Portfolio Value:</b> Rs 1.10 cr
              </p>
              <p className="f10">
                <b>Value Required to Charge Fee:</b> Rs. 1.0125 cr
              </p>
              <p className="f10">
                <b>Fee to be Charged:</b> Yes
              </p>
              <p className="f10 pb-3">
                <b>Fee Amount:</b> Rs. 1.375 lac
              </p>

              <p className="f10">
                <b>Next Semi Annual Beginning Date:</b> 28-Oct-22
              </p>
              <p className="f10">
                <b>Fee Review Date:</b> 27-Oct-22{" "}
              </p>
              <p className="f10">
                <b>Portfolio Value: </b>Rs 1.04 cr{" "}
              </p>
              <p className="f10">
                <b>Value Required to Charge Fee:</b> Rs. 1 cr, 11 lacs, 37.5
                thousand (1.114 cr)
              </p>
              <p className="f10">
                <b>Fee to be Charged:</b> No{" "}
              </p>
              <p className="f10 pb-3">
                <b>Fee Amount:</b> Nil{" "}
              </p>

              <p className="f10">
                <b>Next Semi Annual Beginning Date:</b> 28-Apr-23
              </p>
              <p className="f10">
                <b>Fee Review Date:</b> 27-Apr-23{" "}
              </p>
              <p className="f10">
                <b>Portfolio Value:</b> Rs 1.06 cr{" "}
              </p>
              <p className="f10">
                <b>Value Required to Charge Fee:</b> Rs 1.04 cr (Value at the
                end of previous quarter)
              </p>
              <p className="f10">
                <b>Fee to be Charged:</b> Yes{" "}
              </p>
              <p className="f10 pb-3">
                <b>Fee Amount:</b> Rs. 1.3 lac
              </p>

              <p className="f10">
                <b>Next Semi Annual Beginning Date:</b> 28-Oct-23
              </p>
              <p className="f10">
                <b>Fee Review Date:</b> 27-Oct-23{" "}
              </p>
              <p className="f10">GST is charged on the fees as applicable.</p>
            </div>
          ),
        },
        {
          question: "What is the lock in?",
          answer: (
            <div className="head45" id="pay7">
              There is no lock-in applicable. The portfolio remains active till
              the time that the fee is paid, i.e., until the next semi-annual
              billing cycle. In case you do not wish to continue with the
              service, you can end the arrangement by not paying the fee in the
              following semi-annual process.
            </div>
          ),
        },
        {
          question: "How will fee work on additional investment?",
          answer: (
            <div className="head45" id="pay8">
              At the time of additional investment the fee would be charged for
              the next six months period. Fees collected which is beyond the
              next renewal cycle date would be treated as unaccrued fees and
              would be adjusted in the next cycle.
              <br />
              <br />
              For example, letâ€™s say you started the portfolio on 01 Jan 2023
              with an investment of Rs 1 crore. Then make an additional
              investment of Rs 50 lacs on May 1, 2023. In this case, fee @1.25%
              on additional investment would be charged which is amounting to
              Rs. 62.5k. The split of 2 months till next cycle (Rs 20.8k) would
              be treated as accrued in this period and for next 4 months (Rs
              41.7k) would be deemed as unaccrued fee. On the next renewal cycle
              the unaccrued fee would be reduced from the applicable fee. If in
              case the portfolio value is less than the previous billing date,
              then the unaccrued portion would be adjusted for the additional
              investment and added to the investment base for the next cycle.
            </div>
          ),
        },
        {
          question: "How will fee work on withdrawal?",
          answer: (
            <div className="head45" id="pay9">
              There is no refund in case of withdrawal. The portfolio will
              remain active until the next semi-annual cycle.
            </div>
          ),
        },
        {
          question: "What will be my next payment cycle?",
          answer: (
            <div className="head45" id="pay10">
              <p>
                Your next payment cycle will begin from 6 months of your start
                date for both portfolios separately.{" "}
              </p>
              <p>
                For example: If you begin your first Infinity SOUL portfolio on
                1st January 2022, your next payment cycle will be due on 1st
                July 2022 and valuation as of 30th of June would be considered.
                At the same time, if you start your Infinity POWER subscription
                on 1st March 2022, your next payment cycle will be due on 1st
                September 2022 and valuation as of 31st Aug would be considered
              </p>
            </div>
          ),
        },
        {
          question:
            "Will I have different payment cycles for my Infinity portfolios",
          answer: (
            <div className="head45" id="pay101">
              The payment cycles for each of your Infinity portfolios will be
              based on your portfolio generation dates and will be different if
              the portfolios were started on different dates.
            </div>
          ),
        },
        {
          question: "Can I get a refund?",
          answer: (
            <div className="head45" id="pay103">
              There is no refund as per our existing Refund Policy. The
              portfolio remains active until the following semi-annual cycle.
            </div>
          ),
        },
      ],
    },
    {
      title: "Online trade execution",
      items: [
        {
          question: "How can I execute my trades online with my broker?",
          answer: (
            <div className="head45" id="trade1">
              It's easy to execute trades online. Here's how you can go about
              it:
              <br />
              <ul className="pf26-list">
                <li>
                  Go to the pending advise page in your Mojo Infinity account
                </li>
                <li>Click on Execute Trades online</li>
                <li>Please note you can only execute stocks traded on NSE</li>
                <li>Select your broker and log in to your broking account</li>
                <li>Execute the trades</li>
              </ul>
              <p>
                Once the trade is executed, we will auto-insert your trades in
                your Mojo Infinity account.
              </p>
              <p>
                If you are using the MarketsMojo app, you will be redirected to
                the mobile web browser to complete the transaction.
              </p>
            </div>
          ),
        },
        {
          question: "What is the list of brokers available?",
          answer: (
            <div className="head45" id="trade2">
              Currently, we have 16 brokers available to execute online trades.
              The brokers are:
              <br />
              <br />
              <span className="font-weight-bold">
                Brokers for Resident Indians:
              </span>
              <ul className="pf26-num-list">
                <li>5Paisa</li>
                <li>Aliceblue</li>
                <li>Angel Broking</li>
                <li>AxisDirect</li>
                <li>Dhan</li>
                <li>Edelweiss Securities</li>
                <li>Groww</li>
                <li>FundzBazar</li>
                <li>HDFC Securities</li>
                <li>ICICI Securities</li>
                <li>IIFL Securities</li>
                <li>Kotak Securities</li>
                <li>Motilal Oswal</li>
                <li>Trustline</li>
                <li>Upstox</li>
                <li>Zerodha</li>
              </ul>
              <span className="font-weight-bold">Brokers who enable NRIs:</span>
              <br />
              <ul className="pf26-num-list">
                <li>5Paisa</li>
                <li>AxisDirect</li>
                <li>IIFL Securities</li>
                <li>Kotak Securities</li>
                <li>Motilal Oswal</li>
                <li>Trustline</li>
                <li>Upstox</li>
                <li>Zerodha</li>
              </ul>
            </div>
          ),
        },
        {
          question: "Is online execution available for NRIs as well?",
          answer: (
            <div className="head45" id="trade3">
              Yes. If you are an NRI client with an account with any of the
              below mentioned brokers, you execute the trades online through the
              gateway.
              <p className="pf26 font-weight-bold">
                Brokers for Non-Resident Indians:
              </p>
              <ul className="pf26-num-list">
                <li>5Paisa</li>
                <li>AxisDirect</li>
                <li>IIFL Securities</li>
                <li>Kotak Securities</li>
                <li>Motilal Oswal</li>
                <li>Trustline</li>
                <li>Upstox</li>
                <li>Zerodha</li>
              </ul>
            </div>
          ),
        },
        {
          question:
            "How will my portfolio get updated after I execute my trades?",
          answer: (
            <div className="head45" id="trade7">
              Once you execute the trade, we will auto-insert your trades in
              your Mojo Infinity account.
            </div>
          ),
        },
        {
          question: "My trade didn't get executed. So, what do I do now?",
          answer: (
            <div className="head45" id="trade8">
              There are occasions when trades do not get executed. Let's look at
              the scenarios:
              <br />
              <br />
              <span className="font-weight-bold">
                At the time of buying / purchase:
              </span>
              <ul className="pf26-list">
                <li>
                  Trades are not executed when the stock hits the upper circuit
                  or there are not enough sellers when you go to do the
                  transaction
                </li>
                <li>
                  If the cash balance in your Demat account is lesser than what
                  we are advising you to buy
                </li>
                <li>
                  If the stock is listed only on BSE, the trade may not get
                  executed.
                </li>
              </ul>
              <span className="font-weight-bold">While Selling</span>
              <ul className="pf26-list">
                <li>
                  Trades are not executed when the stock hits the lower circuit
                  or not enough buyers when you go to do the transaction
                </li>
                <li>
                  If the number of shares in your Demat account is lesser than
                  the quantity, you wish to sell
                </li>
                <li>
                  If the stock is listed only on BSE, the trade may not get
                  executed.
                </li>
                <li>
                  If trades are not executed or partially executed, you can view
                  them in the{" "}
                  <span className="font-weight-bold">pending advise</span>{" "}
                  section and execute them at a later stage.
                </li>
              </ul>
              <br />
            </div>
          ),
        },
        {
          question: "Is Mojo Infinity a broker?",
          answer: (
            <div className="head45" id="trade9">
              No. Mojo Infinity is not a broker. However, we have partnered with
              smallcase to ease your investment journey. Smallcase provides a
              gateway through which you can execute the trades online with their
              broking partners.
            </div>
          ),
        },
        {
          question: "Does Mojo Infinity charge a fee to execute trades online?",
          answer: (
            <div className="head45" id="trade10">
              Mojo Infinity does not charge any fee to execute online trades.
            </div>
          ),
        },
      ],
    },
    {
      title: "Agreement",
      items: [
        {
          question: "Can I trade in someone else's demat?",
          answer: (
            <div className="head45" id="faq80">
              <p className="f11">
                No, trades should be done in the demat of the person getting
                into the agreement. The KYC documents of the person should be of
                the person getting into the agreement only.{" "}
              </p>
            </div>
          ),
        },
        {
          question: "Will my demat statements be required?",
          answer: (
            <div className="head45" id="faq90">
              <p className="f11">
                WWe may require demat statements for future audit purposes{" "}
              </p>
            </div>
          ),
        },
        {
          question: "Do I have to sign and send you the agreement?",
          answer: (
            <div className="head45" id="faq110">
              <p className="f11">There are 2 ways of filing the agreement</p>
              <p className="f11">
                Online using Aadhar based authentication- This is only available
                for resident Indians whose Aadhar is linked to their mobile
                numbers or email and who currently reside in India. Users who
                choose online agreement do not need to separately sign the
                documents or send us a hard copy.
              </p>
              <p className="f11">
                Offline execution: Users who choose offline execution, would
                need to download the agreement, fill it, attach self attested
                documents, upload the documents and send us the physical copies
                within 15 days.
              </p>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <section className="infinity-landing">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="pb-2">Frequently asked questions</h2>
            <h6>
              Everything you need to know about the product. Can't find the
              answer?
              <br /> Click here to send your query{" "}
              <a href="#">https://www.marketsmojo.com/mojo/feedback</a>
            </h6>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="faq-list">
              <ul className="floating-menu">
                {faqSections.map((section, index) => (
                  <li key={index}>
                    <a
                      className={selectedSection === index ? "active" : ""}
                      onClick={() => handleSectionClick(index)}
                      nohref
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {selectedSection !== null && (
            <div className="col-12">
              {faqSections[selectedSection].items.map((item, itemIndex) => {
                const indexKey = `${selectedSection}-${itemIndex}`;
                const isOpen = openItems[indexKey];

                return (
                  <div
                    key={indexKey}
                    className={`custom-accordion-item ${isOpen ? "open" : ""}`}
                  >
                    <div
                      className="custom-accordion-header"
                      onClick={() => toggleAccordion(indexKey)}
                    >
                      <div
                        className="head44"
                        // class="head43"
                        // class="head42"
                      >
                        {item.question}
                      </div>
                      <div>
                        <img
                          src={
                            isOpen
                              ? "https://sandbox-st.mojoinfinity.com/images/minus-icon.png"
                              : "https://sandbox-st.mojoinfinity.com/images/plus-icon.png"
                          }
                          alt={isOpen ? "Collapse" : "Expand"}
                        />
                      </div>
                    </div>
                    {isOpen &&
                      // Render the answer here if open
                      item.answer}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
