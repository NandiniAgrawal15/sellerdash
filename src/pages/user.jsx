import React from 'react'

const user = () => {
  return (
    <div>
      <br />
      <div className="panel panel-default">
        <div className="panel-heading" id="panel-head">
          <div id="panel-margin">
            <i className="glyphicon glyphicon-th"></i>
            <strong> MANAGE Customers</strong>
          </div>
        </div>
        <div className="panel-body">
          <table>
            <thead>
              <tr id="head-row">
                <th>S No.</th>
                <th>Name</th>
                <th>Status</th>
                <th>Last Order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1.
                </td>
                <td>
                  Riya Kansal
                </td>
        
                <td className ="text-center">
                 <span className="label label-success">Active</span>
                </td>
                <td>
                 21st July 2023 11:00am
                </td>
              </tr>
              <tr>
                <td>
                  2.
                </td>
                <td>
                  Nandini Agrawal
                </td>
                <td className ="text-center">
                 <span className="label label-info">Not-Active</span>
                </td>
                <td>
                 28st July 2022 1:00am
                </td>
              </tr>
              <tr>
                <td>
                  3.
                </td>
                <td>
                  Arushi Agrawal
                </td>
                <td className ="text-center">
                 <span className="label label-info">Active</span>
                </td>
                <td>
                12st September 2023 8:00am
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default user