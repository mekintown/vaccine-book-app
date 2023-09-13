"use client";
interface Props {
  children: React.ReactNode;
  handleCardClick: Function;
}

function InteractiveCard({ children, handleCardClick }: Props) {
  const onCardMouseOver = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.remove("shadow-lg");
    event.currentTarget.classList.add("shadow-2xl");

    event.currentTarget.classList.remove("bg-white");
    event.currentTarget.classList.add("bg-neutral-200");
  };

  const onCardMouseOut = (event: React.SyntheticEvent) => {
    event.currentTarget.classList.remove("shadow-2xl");
    event.currentTarget.classList.add("shadow-lg");

    event.currentTarget.classList.remove("bg-neutral-200");
    event.currentTarget.classList.add("bg-white");
  };

  return (
    <div
      className="grid grid-cols-3 min-h-[20vh] bg-white rounded-2xl p-4 shadow-lg"
      onMouseOver={(event) => onCardMouseOver(event)}
      onMouseOut={(event) => onCardMouseOut(event)}
      onClick={() => handleCardClick()}
    >
      {children}
    </div>
  );
}

export default InteractiveCard;
