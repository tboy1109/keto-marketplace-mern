import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

const ShipperClosedOrders = () => {
  const history = useHistory()

  return (
    <div className='admin-orders'>
      <div>
        <div className='font-36 pt-3'>Closed Orders</div>
      </div>
      <div className='row my-3'>
        <div className='col-md-12'>
          <div className='table-responsive bg-white keto-rounded-lg keto-shadow'>
            <table className='table'>
              <thead className='thead-light'>
                <tr>
                  <th>Order ID</th>
                  <th>Order Placed</th>
                  <th>Items Ordered</th>
                  <th>Ship To</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
                  <tr key={index} onClick={() => history.push('/order/123')} className='cursor-pointer'>
                    <td>846232</td>
                    <td>Anthony Hamilton</td>
                    <td>Keto Elevate™ — C8 MCT Oil Powder</td>
                    <td>Anthony Hamilton</td>
                    <td>$1,541.52</td>
                    <td><span className='badge badge-info badge-keto-primary'>Canceled</span></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(ShipperClosedOrders)