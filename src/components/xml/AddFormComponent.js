const AddFormComponents = () => {
    return(
        <>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
            <li className="active"><a href="#">Add</a></li>
            <li><a href="#">Update</a></li>
            <li><a href="#">Delete</a></li>
            <li><a href="#">View</a></li>
            </ul>
            </div>
            <h3>Add XML Information</h3>
            <form class="form-horizontal addxmlform" action="/action_page.php">

            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Name:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control" id="name" value="naresh" name="name" readOnly/>
            </div>
            </div>

            <div class="form-group">
            <label class="control-label col-sm-2" for="email">ID:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control" id="name" value="1000" name="name" readOnly/>
            </div>
            </div>

            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Revision Date:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control" id="name" value="06/04/2022" name="name" readOnly/>
            </div>
            </div>

            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Root Tag:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control" id="name" value="Task" name="name" readOnly/>
            </div>
            </div>

            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Status:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control" id="name" value="Draft" name="name" readOnly/>
            </div>
            </div>

            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Created By:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control" id="name" value="Naresh" name="name" readOnly/>
            </div>
            </div>

            <div class="form-group">
            <label class="control-label col-sm-2" for="email">Created Date:</label>
            <div class="col-sm-10">
                <input type="name" class="form-control" id="name" value="06/04/2022" name="name" readOnly/>
            </div>
            </div>
           
            <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Submit</button>
            </div>
            </div>
        </form>
        </>
    )
}
export default AddFormComponents;