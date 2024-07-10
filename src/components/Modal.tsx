"use client";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import React, { useEffect } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  actions?: string[];
  onConfirm?: (action: string) => void;
  onClose: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef?: React.RefObject<HTMLDivElement>;
}

export function ModalWrapper({ title, children, actions, onConfirm, onClose, open, setOpen, modalRef }: Props) {
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      onClose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      ref={modalRef}
      disableScrollLock
      open={open}
      onClose={handleClose}
      fullWidth
      sx={{
        backdropFilter: open ? "blur(5px)" : "none",
        backgroundColor: open ? "rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.2s ease-in-out"
      }}
    >
      <DialogTitle color={(theme) => theme.palette.primary.main} fontFamily={"BADTYPE"}>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {actions?.map((action) => (
          <Button key={action} onClick={() => onConfirm?.(action)} style={{ margin: "0 10px" }}>
            {action}
          </Button>
        ))}
        <Button onClick={handleClose} variant="outlined" color="error">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
