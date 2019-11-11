import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function useRoutedModal(urlHash) {
  const location = useLocation();
  let history = useHistory();

  let [showModal, setModal] = useState(() => {
    if (location.hash === "#" + urlHash) {
      return true;
    }
    return false;
  });

  const toggleModal = () =>
    setModal(active => {
      if (location.hash === "#" + urlHash) {
        //I don't think it works this way.
        history.push(location.pathname);
      } else {
        history.push(location.pathname + "#" + urlHash);
      }

      return !active;
    });

  return [showModal, toggleModal];
}
