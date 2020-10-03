import React from "react";
import Context from "../Context";

const Item = () => {
  const { selectedItem } = React.useContext(Context);
  const shouldShow = React.useMemo(() => Boolean(selectedItem), [selectedItem]);
  console.log(selectedItem, shouldShow);
  return shouldShow && (
    <div
      className={`modal fade ${shouldShow ? "show" : ""}`}
      id="itemModal"
      tabIndex="-1"
      aria-labelledby="itemModalLabel"
      aria-hidden={shouldShow ? "false" : "true"}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="itemModalLabel">
              {selectedItem.Title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
