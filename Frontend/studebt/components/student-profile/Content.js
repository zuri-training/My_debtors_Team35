import { Button } from "primereact/button";
import React, { useState, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import { Toast } from "primereact/toast";

export const Upload = () => {
  const toast = useRef(null);
  const onBasicUploadAuto = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded with Auto Mode",
    });
  };

  return (
    <div>
      <Toast ref={toast}></Toast>
      <FileUpload
        mode="basic"
        name="demo[]"
        url="https://primefaces.org/primereact/showcase/upload.php"
        accept="image/*"
        maxFileSize={1000000}
        onUpload={onBasicUploadAuto}
        auto
        chooseLabel="Browse"
      />
    </div>
  );
};

const CommentInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <InputTextarea
        value={value}
        className="w-full"
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        cols={30}
        autoResize
      />
    </div>
  );
};

const ReasonInput = () => {
  return (
    <div className="sizes">
      <InputText
        type="text"
        className="p-inputtext-sm block mb-2 w-full"
        placeholder="School fees 2018/2019 at Ezekiel College"
      />
    </div>
  );
};

const DialogDemo = () => {
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const dialogFuncMap = { displayResponsive: setDisplayResponsive };
  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Cancel"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Submit"
          className="pri-btn"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="dialog-demo">
      <Button
        label="Contend"
        className="p-button-lg pri-btn"
        onClick={() => onClick("displayResponsive")}
      />
      <Dialog
        header="Contend"
        visible={displayResponsive}
        onHide={() => onHide("displayResponsive")}
        breakpoints={{ "960px": "75vw" }}
        footer={renderFooter("displayResponsive")}
      >
        <div className="grid mt-2">
          <p className="md:col-4 col-12 my-auto">Reason:</p>
          <div className="md:col-8 col-12">
            <ReasonInput />
          </div>
          <p className="md:col-4 col-12 my-auto">Attach Proof of Payment:</p>
          <div className="md:col-8 col-12">
            <div className="flex justify-content-between m-auto border-solid border-400">
              <p className="my-auto ml-2">Choose file</p>
              <div className="surface-300 w-auto">
                {/* <Button
                  label="Browse"
                  icon="pi pi-plus"
                  className="p-button-text"
                /> */}
                <Upload />
              </div>
            </div>
          </div>
          <p className="md:col-4 col-12 my-auto">Comment:</p>
          <div className="md:col-8 col-12">
            <CommentInput />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default function Content(props) {
  return (
    <div className="main-content col-12 p-4">
      <h5 className="subheading md:text-xl text-lg">Outstanding Debts</h5>
      <div className="grid align-items-center sm:py-5 py-1">
        <div className="col-1 gray md:text-center text-left xl:text-base lg:text-sm text-xs">
          S/N
        </div>
        <div className="col gray xl:text-base lg:text-sm text-xs">Reason</div>
        <div className="col-2 gray text-center xl:text-base lg:text-sm text-xs">
          Amount (N)
        </div>
        <div className="col-2 gray text-center xl:text-base lg:text-sm text-xs">
          Class
        </div>
        <div className="md:col col-2 gray text-center xl:text-base lg:text-sm text-xs">
          Action
        </div>
      </div>
      <hr className="mb-2"></hr>
      <div>
        <div className="grid align-items-center py-2">
          <div className="col-1 md:text-center text-left gray xl:text-base lg:text-sm text-xs">
            1
          </div>
          <div className="col xl:text-base lg:text-sm text-xs">
            School fees 2018/2019 at Ezekiel College
          </div>
          <div className="col-2 text-center xl:text-base lg:text-sm text-xs">
            20,000
          </div>
          <div className="col-2 text-center gray xl:text-base lg:text-sm text-xs">
            SS3
          </div>
          <div className="md:col col-2 text-center">
            <DialogDemo />
          </div>
        </div>
        <div className="grid align-items-center py-2">
          <div className="col-1 md:text-center text-left gray xl:text-base lg:text-sm text-xs">
            2
          </div>
          <div className="col xl:text-base lg:text-sm text-xs">
            Feeding allowance{" "}
          </div>
          <div className="col-2 text-center xl:text-base lg:text-sm text-xs">
            5,000
          </div>
          <div className="col-2 text-center gray xl:text-base lg:text-sm text-xs">
            JSS1
          </div>
          <div className="md:col col-2 text-center">
            <DialogDemo />
          </div>
        </div>
        <div className="grid align-items-center py-2">
          <div className="col-1 md:text-center text-left gray xl:text-base lg:text-sm text-xs">
            3
          </div>
          <div className="col xl:text-base lg:text-sm text-xs">School bus</div>
          <div className="col-2 text-center xl:text-base lg:text-sm text-xs">
            10,000
          </div>
          <div className="col-2 text-center gray xl:text-base lg:text-sm text-xs">
            PRY1
          </div>
          <div className="md:col col-2 text-center">
            <DialogDemo />
          </div>
        </div>
        <div className="grid align-items-center py-2">
          <div className="col-1 md:text-center text-left gray xl:text-base lg:text-sm text-xs">
            4
          </div>
          <div className="col xl:text-base lg:text-sm text-xs">PTA Fees</div>
          <div className="col-2 text-center xl:text-base lg:text-sm text-xs">
            1,000
          </div>
          <div className="col-2 text-center gray xl:text-base lg:text-sm text-xs">
            PRY6
          </div>
          <div className="md:col col-2 text-center">
            <DialogDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
