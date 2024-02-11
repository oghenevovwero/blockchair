"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "./button";
import { X } from "lucide-react";

export default function Modal({
  isOpen,
  onClose,
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
    onClick={() => {
      onClose()
    }}
    >
      <div
        className="
      relative
       w-fit
       my-6
       mx-auto
       h-fit
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
            
            {/* BODY */}
            <div className="relative p-3 lg:p-6 flex-auto">
              {body}
            </div>
            {/* FOOTER */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
