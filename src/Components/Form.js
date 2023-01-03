import React from 'react'

function Form() {
  return (
    <main id="main" className="main" style={{"marginTop": "0px"}}>
    <section className="section">
      <div className="row">
     
        <div className="col-lg-6 mx-auto">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Vertical Form</h5>

            
              <form className="row g-3">
                <div className="col-12">
                  <label for="inputNanme4" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="inputNanme4"/>
                </div>
                <div className="col-12">
                  <label for="inputEmail4" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-12">
                  <label for="inputPassword4" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary m-3">Submit</button>
                  <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Form