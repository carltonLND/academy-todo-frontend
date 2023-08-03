interface ConfirmationPopupProps {
  setPrompt: (bool: boolean) => void;
  successFn: () => void;
}

export default function ConfirmationPopup({
  setPrompt,
  successFn,
}: ConfirmationPopupProps): JSX.Element {
  const handleClick = (bool: boolean) => {
    if (bool) {
      successFn();
    }

    setPrompt(false);
  };

  return (
    <section className="confirmation-container">
      <div className="confirmation">
        <h1>Delete Task?</h1>
        <div className="confirmation-btn-container">
          <button onClick={() => handleClick(false)}>Cancel</button>
          <button onClick={() => handleClick(true)}>Delete</button>
        </div>
      </div>
    </section>
  );
}
