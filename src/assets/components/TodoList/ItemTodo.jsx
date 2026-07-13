const ItemTodo = () => {
  return (
    // React Fragment
    <>
      <div className="todoItems">
        <div className="item d-flex flex-row-reverse align-items-center justify-content-between bg-white text-black mt-1 rounded-4 px-2 py-1 w-100">
          <p className="fs-4 mt-3">First Todo</p>
          <div className="icons">
            <svg
              className="text-success"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
            </svg>
            <svg
              className="text-warning"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
            <svg
              className="text-danger"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
              <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
            </svg>
          </div>
        </div>
        <div className="item d-flex flex-row-reverse align-items-center justify-content-between bg-white text-black mt-1 rounded-4 px-2 py-1 w-100">
          <p className="fs-4 mt-3">Second Todo</p>
          <div className="icons">
            <svg
              className="text-success"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
            </svg>
            <svg
              className="text-warning"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
            <svg
              className="text-danger"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
              <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemTodo;
