import React, { useState } from 'react'
import './Upload.scss'
import UploadIcon from '@mui/icons-material/Upload';
import { excel } from '../../images/Images'
import * as XLSX from 'xlsx';


const Upload = () => {

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [selectedTags, setSelectedTags] = useState();

  // submit state
  const [excelData, setExcelData] = useState(null);

  // onchange event
  const handleFile = (e) => {
    let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        }
      }
      else {
        setTypeError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else {
      console.log('Please select your file');
    }
  }
  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault();
     document.getElementById('table-1').style.display='flex';
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  }

  const handleSelectedTags = (e) => {
    console.log("options", e.target.value);
    let tag = e.target.value;
    // const result = [];
    // result.push(tag)
    // console.log("result", result);


    // setSelectedTags((previousOptions) => [...previousOptions, tag]);
    setSelectedTags((previousOptions) => {
      if (!Array.isArray(previousOptions)) {
        return [tag];
      }
      return [...previousOptions, tag];

    })

  }


  return (
    <section className='upload'>
      <h1 className="name">Upload CSV</h1>
      <form className="u-content" onSubmit={handleFileSubmit}>
        <div className="u-file">
          <img src={excel} alt="excel" />
          <input type="file" accept='file' onChange={handleFile} required />
        </div>
        <div className="u-btn">
          <button type="submit" className='upload-btn'><UploadIcon /> Upload</button>
        </div>
        {typeError && (
          <div className="alert alert-danger" role="alert">{typeError}</div>
        )}
      </form>

      <div className="table-container" id='table-1' style={{display:'none'}} >
        <div className="t-title">
          <h2>Uploaded</h2>
        </div>
        {
          excelData ? (
            <div className="table-data">

              <table className='table'>
                <thead>
                  <tr>
                    <th>SI NO.</th>
                    <th>Links</th>
                    <th>Prefix</th>
                    <th>Select Tags</th>
                    <th>Selected Tags</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    excelData.map((row, index) => {

                      return (

                        <tr key={index}>
                          <td>{row.id}</td>
                          <td>{row.links}</td>
                          <td>{row.prefix}</td>
                          <td>

                            <select defaultValue={selectedTags} onChange={handleSelectedTags} value={selectedTags}>
                              <option value="">Select Tags</option>
                              {row?.select_tags?.toString()?.split(",").map((option, index) => (

                                <option key={index} value={option}>{option}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            {
                              selectedTags?.map((option, index) => (
                                <td key={index} ><p style={{ display: 'flex', background: '#605BFF', color: '#fff', padding: "0.5rem", margin: '0', borderRadius: '20px' }}>{option}</p>
                                </td>
                              ))
                            }

                          </td>

                        </tr>
                      )
                    }
                    )
                  }
                </tbody>


              </table>
            </div>

          ) : (
            <div>No File is uploaded yet!</div>
          )
        }
      </div>

    </section>
  )
}

export default Upload
