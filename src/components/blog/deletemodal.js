const DeleteModal = () => {

  return (

    <>
      <div className="modal" id="modalCenter" tabIndex="-1" style={{ display: "none" }} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalCenterTitle">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="nameWithTitle" className="form-label">Name</label>
                  <input type="text" id="nameWithTitle" className="form-control" placeholder="Enter Name" />
                </div>
              </div>
              <div className="row g-2">
                <div className="col mb-0">
                  <label htmlFor="emailWithTitle" className="form-label">Email</label>
                  <input type="text" id="emailWithTitle" className="form-control" placeholder="xxxx@xxx.xx" />
                </div>
                <div className="col mb-0">
                  <label htmlFor="dobWithTitle" className="form-label">DOB</label>
                  <input type="text" id="dobWithTitle" className="form-control" placeholder="DD / MM / YY" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCenter">
        Delete
      </button>

    </>
  )

}


export default DeleteModal