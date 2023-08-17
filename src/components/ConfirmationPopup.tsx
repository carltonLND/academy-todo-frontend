interface ConfirmationPopupProps {
  question: string;
  setPrompt: (bool: boolean) => void;
  successFn: () => void;
}

export default function ConfirmationPopup({
  question,
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
    <div className="confirmation">
      <h1>{question}</h1>
      <div className="confirmation-btn-container">
        <button className="n" onClick={() => handleClick(false)}>
          Cancel
        </button>
        <button className="y" onClick={() => handleClick(true)}>
          Confirm
        </button>
      </div>
    </div>
  );
}
