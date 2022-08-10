const StepTwo = (props) => {
    return (
      <>
        <h1>FormTwo</h1>
        <button onClick={props.previousStep}>Back</button>
        <button onClick={props.nextStep}>Review</button>
        <button
          onClick={() => {
            props.goToStep(1);
            props.removeFormTwoHandler();
          }}
        >
          Delete
        </button>
      </>
    );
  };
  
  export default StepTwo;