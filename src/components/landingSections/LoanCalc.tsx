import { mdiCalculator } from "@mdi/js";
import Icon from "@mdi/react";
import Button from "../ui/Button";

export default function LoanCalc() {
  return (
    <div className="border-[2rem] border-brand-purple-light mx-auto rounded-2xl">
      {/* <div className="rounded-2xl p-6 shadow-md w-full max-w-md"> */}
      <h6 className="border-b border-gray-300 flex items-center gap-2 pb-4 mb-6 font-semibold text-xl  mt-2 text-brand-purple">
        <span className="ml-4">
          <Icon
            path={mdiCalculator}
            size={1.2}
            className="bg-gray-200 rounded-md p-1"
          />
        </span>
        <span>LOAN CALCULATOR</span>
      </h6>
      <form className="text-start ml-4 mx-10">
        <p className="mt-0 leading-6">
          The result of the evaluation may differ in real time situations due to
          risk assessment{" "}
        </p>

        <div className="grid col-12 my-4">
          <label htmlFor="type" className="">
            Select loan type
          </label>
          <select
            name="loanType"
            defaultValue="Monthly"
            id="type"
            className="outline-purple-300 border rounded-md p-2 text-gray-500"
          >
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div className="grid col-12 mb-4">
          <label htmlFor="category" className="">
            Select loan Category
          </label>
          <select
            name="loanCategory"
            // defaultValue={loanCategory}
            // onChange={handleInputChange}
            id="category"
            className="outline-purple-300  border rounded-md p-2 text-gray-500"
          >
            <option value="Working Capital">Working Capital</option>
            <option value="Purchase Order Financing">
              Purchase Order Financing
            </option>
            <option value="Invoice Discounting">Invoice Discounting</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-center items-start">
          <div className="grid col-sm-6 mb-4 mt-4">
            <label htmlFor="amount" className="">
              Loan Amount (₦)
            </label>
            <input
              type="number"
              name="amount"
              // value={loanDetails.amount.toLocaleString()}
              // onChange={handleInputChange}
              className="outline-purple-300  border rounded-md p-2 text-gray-500"
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
          <div className="grid col-sm-6 mb-4 mt-4">
            <label htmlFor="duration" className="">
              Loan Duration
            </label>
            <select
              name="duration"
              // defaultValue={duration}
              // onChange={handleInputChange}
              id="duration"
              className="outline-purple-300  border rounded-md p-2 text-gray-500"
            >
              <option value="1">1 month</option>
              <option value="2">2 months</option>
              <option value="3">3 months</option>
              <option value="4">4 months</option>
              <option value="5">5 months</option>
              <option value="6">6 months</option>
            </select>
          </div>
        </div>
        <div className="grid col-12">
          <label htmlFor="interest" className="form-label">
            Interest (%)
          </label>
          <input
            type="text"
            name="interest"
            className="outline-purple-300  border rounded-md p-2 text-gray-500"
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
      {/* </div> */}
    </div>
  );
}
