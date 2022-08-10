const StepOne = (props) => {
    return (
      <>
        <h1>FormOne</h1>
        <button onClick={props.addFormTwoHandler}>Add form two</button>
        <button onClick={props.nextStep}>
          {props.totalSteps > 2 ? "Next" : "Review"}
        </button>
      </>
    );
  };
  
  export default StepOne;