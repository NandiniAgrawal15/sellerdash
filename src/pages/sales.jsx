import React, { useEffect } from 'react';
/* 
const Sales = ({ apiUrl, apiKey, apiPassword }) => {
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Basic ${btoa(`${apiKey}:${apiPassword}`)}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else if (response.status === 404) {
          console.log('Error: API endpoint not found');
        } else {
          console.log('Error fetching sales data:', response.status);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchSalesData();
  }, [apiUrl, apiKey, apiPassword]);

  return null;
};

export default Sales;
 */


const sales = () => {
  return (
    <div>
      <br />
      <div className="panel panel-default">
        <div className="panel-heading" id="panel-head">
          <div id="panel-margin">
            <i className="glyphicon glyphicon-th"></i>
            <strong> MANAGE ORDERS</strong>
          </div>
        </div>
        <div className="panel-body">
          <table>
            <thead>
              <tr id="head-row">
                <th>S No.</th>
                <th>Name</th>
                <th>Status</th>
                <th>Order-Date</th>
                <th>Category</th>
                <th>Order-Amount</th>
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
                 <span className="label label-success">Delivered</span>
                </td>
                <td>
                 21st July 2023
                </td>
                <td>Wood</td>
                <td>1,00,000</td>
              </tr>
              <tr>
                <td>
                  2.
                </td>
                <td>
                  Nandini Agrawal
                </td>
                <td className ="text-center">
                 <span className="label label-info">UnDelivered</span>
                </td>
                <td>
                 28st July 2022
                </td>
                <td>Plastics</td>
                <td>4,00,000</td>
              </tr>
              <tr>
                <td>
                  1.
                </td>
                <td>
                  Riya Kansal
                </td>
        
                <td className ="text-center">
                 <span className="label label-success">Delivered</span>
                </td>
                <td>
                 21st August 2023
                </td>
                <td>Bamboo</td>
                <td>10,00,000</td>
              </tr>
              <tr>
                <td>
                  2.
                </td>
                <td>
                  Arushi Agrawal
                </td>
                <td className ="text-center">
                 <span className="label label-info">UnDelivered</span>
                </td>
                <td>
                12st September 2023
                </td>
                <td>Plastics</td>
                <td>50,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default sales