"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "./button";
import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  disabled,
  footer,
  secondaryAction,
  secondaryLabel: secondaryActionLabel
}: {
  secondaryLabel?: string;
  disabled?: boolean;
  body?: React.ReactElement;
  onClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  title: string;
  actionLabel: string;
  secondaryAction?: () => void;
  footer?: React.ReactElement;
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    //we wait this 300ms because we use some animations of that time span
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
    flex 
    fixed 
    z-50 
    focus:outline-none 
    bg-neutral-600/70 
    outline-none 
    inset-0 
    justify-center 
    items-center 
    overflow-x-hidden 
    overflow-y-auto
    "
    >
      <div
        className="
      relative
       w-[96%]
       md:w-4/6
       lg:w-3/6
       xl:w-2/5
       my-6
       mx-auto
       h-fit
       lg:h-auto
       md:h-auto
       "
      >
        {/* CONTENT */}
        <div
          className={`
          translate
          duration-300 
          h-full
          ${
            showModal ? "translate-y-0" : "translate-y-full"
          }
          ${showModal ? "opacity-100" : "opacity-0"}
        `}
        >
          <div
            className="
             translate
             h-full
             lg:h-auto
             md:h-auto
             border-0
             rounded-lg
             shadow-lg
             relative
             flex
             flex-col
             w-full
             bg-white
             outline-none
             focus:outline-none
            "
          >
            {/* HEADER */}
            <div
              className="
              flex
              p-6
              rounded-t
              justify-center
              items-center
              relative
              border-b-[1px]
            "
            >
              <button
                type="button"
                title="Close button"
                onClick={handleClose}
                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
              >
                <X />
              </button>
              <div className="text-lg font-semibold">
                {title}
              </div>
            </div>
            {/* BODY */}
            <div className="relative px-6 pt-6 pb-3 flex-auto">
              {body}
            </div>
            {/* FOOTER */}
            <div className="flex flex-col gap-2 px-6 pb-4">
              <div
                className="
                flex
                flex-row
                items-center
                gap-4
                w-full
              "
              >
                {secondaryAction &&
                  secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      outline
                      label={secondaryActionLabel!}
                      onClick={handleSecondaryAction}
                    />
                  )}
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
