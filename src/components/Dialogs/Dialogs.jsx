import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Name 1</div>
        <div className={s.dialog}>Name 2</div>
        <div className={s.dialog}>Name 3</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>message 1</div>
        <div className={s.message}>message 2</div>
        <div className={s.message}>message 2</div>
      </div>
    </div>
  );
};

export default Dialogs;
