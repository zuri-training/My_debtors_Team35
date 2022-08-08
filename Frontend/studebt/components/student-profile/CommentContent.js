import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function CommentContent(props) {
  return (
    <div className="main-content col-12 p-4">
      <h5 className="subheading md:text-xl text-lg md:pb-5 pb-3">
        Outstanding Debts
      </h5>
      <div className="grid">
        <div className="col-12">
          <h5 className="md:text-xl sm:text-lg text-base pb-1">
            School fees 2018/2019 at Ezekiel College <small>(SS3)</small>
          </h5>
          <p className="gray md:pb-5 pb-3 xl:text-base lg:text-sm text-xs">N20,000</p>
          <h6 className="subheading mb-2 xl:text-base lg:text-sm text-xs">Reply</h6>
          <div className="field">
            <label htmlFor="username1" className="block xl:text-base lg:text-sm text-xs">
              Leave a comment
            </label>
            <div className="flex">
              <InputText
                id="username1"
                aria-describedby="username1-help"
                placeholder="Start typing..."
                className="block md:w-5 w-12"
              />
              <Button label="Send" className="cc-btn md:w-3 w-2 ml-3" />
            </div>
          </div>
        </div>
        <div className="col-12">
          <h5 className="md:text-xl sm:text-lg text-base pb-1">Brainfield College</h5>
          <p className="gray md:pb-5 pb-3 xl:text-base lg:text-sm text-xs">May 16, 2022 16:00</p>
          <p className="gray md:w-6 md:pb-4 pb-2 xl:text-base lg:text-sm text-xs">
            This student claims there is a misunderstanding on your part with
            payment, that he is not owing. Kindly confirm your records.
          </p>
          <h6 className="subheading mb-2 xl:text-base lg:text-sm text-xs">Reply</h6>
          <div className="field">
            <label htmlFor="username1" className="block xl:text-base lg:text-sm text-xs">
              Leave a comment
            </label>
            <div className="flex">
              <InputText
                id="username1"
                aria-describedby="username1-help"
                placeholder="Start typing..."
                className="block md:w-5 w-12"
              />
              <Button label="Send" className="cc-btn md:w-3 w-2 ml-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
