import {useState} from "react";

export const useAccordionToggle = (defaultState) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const onAccordionToggle = (active) => {
    const newState = {...defaultState};
    newState[active] = !isOpen[active];
    setIsOpen(newState);
  };
  return [isOpen, onAccordionToggle];
};
