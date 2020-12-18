import {useState} from "react";

export const useAccordionToggle = (defaultState) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const onAccordionToggle = (active) => {
    const newState = {...defaultState};
    newState[active] = !isOpen[active];
    setIsOpen(newState);
  };

  // const onAllAccordionToggle = (open) => {
  //   const newState = {...defaultState};
  //   Object.keys(newState).forEach((singleState) => {
  //     console.log({singleState, open});
  //     newState[singleState] = open;
  //   });
  //   console.log(newState);
  //   setIsOpen(newState);
  // };
  return [isOpen, onAccordionToggle];
};
