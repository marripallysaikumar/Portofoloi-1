import './index.css'

const AddProject = () => (
  <div className="addProjectContainer">
    <div className="inner-container">
      <h1 className="heading">Add Projects</h1>
      <form>
        <p className="paragraph">Project Name</p>
        <input className="input-sized" type="text" />
        <br />
        <p className="paragraph">Project Link</p>
        <input className="input-sized" type="text" />
        <br />
        <p className="paragraph">Description</p>
        <textarea rows="8" cols="60" className="textArea" />
        <br />
        <div className="btn-add">
          <button type="submit" className="btn-add btn-sizze">
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
)
export default AddProject
