export default function List() {
    const data = [
      'name: mmm, marks: 90',
      'name: lll, marks: 88',
      'name: jjj, marks: 95']
    const handleDelete = (index,e) => {
        e.target.parentNode.parentNode.parentNode.deleteRow(index)
        
    }
    const rows = data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item}</td>
          <td><button onClick={e => handleDelete(index,e)}>Delete</button></td>
        </tr>
      )
    })
    return (
      <div className="App">
        <h1><b><i><u>Student List</u></i></b></h1>
        <table>
          {rows}
          </table>
      </div>
    );
  }