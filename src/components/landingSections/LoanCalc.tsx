import { mdiCalculator } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "../ui/Button";

export default function LoanCalc() {
  return (
    <div className="border-[2rem] border-brand-purple-light mx-auto my-4 rounded-2xl">
      <div className="bg-brand-white">
        <h6>
          <span className="">
            <Icon path={mdiCalculator} size={1.2} />
          </span>
          <span>LOAN CALCULATOR</span>
        </h6>
        <form className="row g-3">
          <div className="col-12">
            <p>
              The result of the evaluation may differ in real time situations
              due to risk assessment{" "}
            </p>
          </div>
          <div className="col-12">
            <label htmlFor="type" className="form-label">
              Select loan type
            </label>
            <select
              name="loanType"
              defaultValue="Monthly"
              id="type"
              className="form-control"
            >
              {/* <option value="Weekly">Weekly</option> */}
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Select loan Category
            </label>
            <select
              name="loanCategory"
              // defaultValue={loanCategory}
              // onChange={handleInputChange}
              id="category"
              className="form-control"
            >
              <option value="Working Capital">Working Capital</option>
              <option value="Purchase Order Financing">
                Purchase Order Financing
              </option>
              <option value="Invoice Discounting">Invoice Discounting</option>
            </select>
          </div>
          <div className="col-sm-6">
            <label htmlFor="amount" className="form-label">
              Loan Amount (₦)
            </label>
            <input
              type="number"
              name="amount"
              // value={loanDetails.amount.toLocaleString()}
              // onChange={handleInputChange}
              className="form-control"
              id="amount"
              placeholder="₦50,000.00"
            />
            {/* {showError && ( */}
            <p
              style={{ color: "#ed2e7e", fontSize: "13px" }}
              className="mb-0 mt-2"
            >
              Loan starts from ₦50,000.00{" "}
            </p>
            {/* )} */}
          </div>
          <div className="col-sm-6">
            <label htmlFor="duration" className="form-label">
              Loan Duration
            </label>
            <select
              name="duration"
              // defaultValue={duration}
              // onChange={handleInputChange}
              id="duration"
              className="form-control"
            >
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="interest" className="form-label">
              Interest (%)
            </label>
            <input
              type="text"
              name="interest"
              className="form-control"
              // value={loanDetails.interest}
              readOnly={true}
              id="interest"
              placeholder="10%"
            />
          </div>
          <div className="col-12 text-center mt-4">
            <Button
              type="button"
              content="Calculate Loan"
              classes="primary-btn btn-md w-full"
              // onClick={calculateLoan}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
