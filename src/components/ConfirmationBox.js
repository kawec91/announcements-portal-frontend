import React from "react";

const ConfirmationBox = ({ handleClosing, handleConfirm }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/75 z-30 flex justify-center items-center">
      <div className="bg-white p-4">
        <div className="p-4 border-2 border-black">
          <div className="relative">
            <h4 className="text-2xl font-bold">Usuwanie...</h4>
            <button
              className="absolute -top-4 right-1"
              onClick={() => {
                handleClosing(false);
              }}
            >
              [ <span className="text-red-500">x</span> ] Zamknij
            </button>
          </div>

          <hr className="bg-black h-1" />
          <div className="p-2">
            Wprowadzone zmiany nie są odwracalne, potwierdź usunięcie
            użytkownika.
            <div className="w-full flex justify-between pt-8">
              <button
                className="py-2 px-6 border border-green-600 text-green-600"
                onClick={() => {
                  handleConfirm();
                }}
              >
                Potwierdź
              </button>
              <button
                className="py-2 px-6 border border-red-600 text-red-600"
                onClick={() => {
                  handleClosing(false);
                }}
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationBox;
