const TopForm = () => {
  return (
    <>
      <h1 className="mb-4">TodoList Mini Projects</h1>
      <div className="d-flex gap-1">
        <input
          className="form-control"
          type="text"
          placeholder="Enter your todo..."
        />
        <button className="btn btn-success">Submit</button>
      </div>
    </>
  );
};
export default TopForm;
