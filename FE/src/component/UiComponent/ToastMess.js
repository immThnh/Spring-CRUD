function ToastMess({ mess, time, imgURL = "", color }) {
  return (
    <div
      className={`toast ${color} `}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src={imgURL} className="rounded me-2" alt="..." />
        <strong className="me-auto">Spring-CRUD</strong>
        <small>{time}</small>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{mess}</div>
    </div>
  );
}

export default ToastMess;
