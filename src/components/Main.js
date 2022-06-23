import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'
import box from '../box.png'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto bg-primary " style={{ maxWidth: '800px' }}>
                <h2 className="text-white bg-primary"><b>✨ Distribute Your File ✨</b></h2>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const description = this.fileDescription.value
                  this.props.uploadFile(description)
                }} >
                  <div className="form-group mx-5">
                    <br></br>
                    <input
                      id="fileDescription"
                      type="text"
                      ref={(input) => { this.fileDescription = input }}
                      className="form-control "
                      placeholder="description..."
                      required />
                  </div>

                  <input type="file" onChange={this.props.captureFile} className="text-white p-2" />
                  <button type="submit" className="btn-light btn-block p-2 btn-outline-info mt-4"><b>Upload!</b></button>
                </form>
              </div>
              <p>&nbsp;</p>

              <table className="table-sm table-bordered " style={{ width: '1000px', maxHeight: '450px' }}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-primary text-white px-4">
                    <th scope="col" style={{ width: '10px' }}>id</th>
                    <th scope="col" style={{ width: '200px' }}>name</th>
                    <th scope="col" style={{ width: '230px' }}>description</th>
                    <th scope="col" style={{ width: '120px' }}>type</th>
                    <th scope="col" style={{ width: '90px' }}>size</th>
                    <th scope="col" style={{ width: '90px' }}>date</th>
                    <th scope="col" style={{ width: '120px' }}>uploader/view</th>
                    <th scope="col" style={{ width: '120px' }}>hash/view/get</th>
                  </tr>
                </thead>
                {this.props.files.map((file, key) => {
                  return (
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0, 10)}...
                          </a>
                        </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0, 10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;