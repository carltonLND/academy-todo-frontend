interface PopupProps {
  children: React.ReactNode;
}

export default function Popup({ children }: PopupProps): JSX.Element {
  return <section className="confirmation-container">{children}</section>;
}
