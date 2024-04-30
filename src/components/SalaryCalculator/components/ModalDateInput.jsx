import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";

/* eslint-disable react/prop-types */

export default function ModalDateInput({ open, handelClose, allowances, setter }) {
  const [date, setDate] = useState();

  const handelInput = (event) => {
    setDate(event.target.value);
    const array = [...allowances];

    // next month
    const weddingdate = new Date(event.target.value);
    const today = new Date();
    const entitledFrom = new Date(weddingdate.getFullYear(), weddingdate.getMonth() + 1, 1);

    // in 24 month
    const entitledTill = new Date(weddingdate.getFullYear() + 2, weddingdate.getMonth() + 1, 1);

    if (entitledFrom.getTime() <= today.getTime() && today.getTime() < entitledTill.getTime()) {
      array[array.length - 1] = true;
    } else {
      array[array.length - 1] = false;
    }
    setter(array);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    handelClose();
  };
  return (
    <Modal isOpen={open} onClose={handelClose}>
      <ModalOverlay>
        <ModalContent as="form" onSubmit={handelSubmit}>
          <ModalHeader>Friss házasok kedvezmény</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col justify-start">
              <p className="text-sm">A kedvezmény először a házasság kötést követő hónapra vehető igénybe és a házassági életközösség alatt legfeljebb 24 hónapon keresztül jár.</p>
              <label htmlFor="weddingdate">A házasság kötés dátuma</label>
              <input onChange={handelInput} type="date" id="weddingdate" name="weddingdate" defaultValue={date} />
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="actions">
              <button type="submit" className="ui positive right labeled icon button">
                Mentés
                <i className="plus icon"></i>
              </button>
            </div>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
