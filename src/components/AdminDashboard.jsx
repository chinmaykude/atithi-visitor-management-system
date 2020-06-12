import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import propTypes from "prop-types";

import ShowLoading from "./common/ShowLoading";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import { fetchVisitDetails } from "../redux/visitorRegistration/actions";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      pageSize: 20,
      currentPage: 1,
      searchQuery: ""
    };
  }

  // componentDidMount() {
  //   const { data } = this.props;

  //   if (!data.length) {
  //     const { fetchVisitDetails } = this.props;
  //     fetchVisitDetails();
  //   }
  // }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  backToCheckIn = () => {
    const { history } = this.props;
    history.push("/main_checkin_checkout");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: Number(e.target.value)
    });
  };

  onSearch = e => {
    this.setState({
      searchQuery: e.target.value.substr(0, 20)
    });
  };

  render() {
    const { isAuth, data } = this.props;
    const { pageSize, currentPage, searchQuery } = this.state;
    console.log(data);
    console.log(`searchQuery`, searchQuery);
    let filteredData = data.filter(
      item =>
        item.visitorName.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
          -1 ||
        item.companyName.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );

    console.log(`filtered data`, filteredData);

    const dataToMap = paginate(filteredData, currentPage, pageSize);

    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return dataToMap.length || !filteredData.length ? (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4" />
          <div className="col-4">
            <div className="col-4" />
            <center>
              <h4 style={{ fontFamily: "Herculanum", fontSize: "36px" }}>
                Admin Panel
              </h4>
            </center>
          </div>
          <div className="col-4" />
        </div>
        <div className="row m-2">
          <div className="col-12 col-md-12 text-right">
            <select
              name="pageSize"
              value={pageSize}
              onChange={this.handleChange}
              className="col-12 col-md-2 btn btn-secondary text-white mx-2"
              style={{ height: "38px" }}
            >
              <option disabled value="--">
                Per Page Entries
              </option>
              <option value="20">20 entries per page</option>
              <option value="10">10 entries per page</option>
              <option value="5">5 entries per page</option>
            </select>
            <input
              type="text"
              name="searchQuery"
              value={searchQuery}
              onChange={this.onSearch}
              style={{ height: "38px", padding: "6px 12px" }}
              className="col-12 col-md-2 mx-2"
            />
            <button
              type="button"
              className="col-12 col-md-2 btn btn-secondary text-white mx-2"
              onClick={this.backToCheckIn}
            >
              Main Page
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            {/* <Pagination
              itemsCount={filteredData.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            /> */}
            <table className="table table-striped table-bordered table-dark table-responsive text-center">
              <thead>
                <tr>
                  <th scope="col">Visitor Avatar</th>
                  <th scope="col">Visitor Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Visit Type</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Whom To Meet</th>
                  <th scope="col">CheckIn Time</th>
                  <th scope="col">CheckOut Time</th>
                  <th scopr="col">Visit ID</th>
                </tr>
              </thead>
              <tbody>
                {dataToMap.map(ele => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={ele.imageUrl}
                          alt="User Avatar"
                          height="100"
                          width="100"
                          style={{ borderRadius: "30px" }}
                        />
                      </td>
                      <td>{ele.visitorName}</td>
                      <td>{ele.visitorEmail}</td>
                      <td>{ele.visitorMobile}</td>
                      <td>{ele.visitType}</td>
                      <td>{ele.companyName}</td>
                      <td>{ele.whomToMeet}</td>
                      <td>
                        {new Date(ele.checkin_timestamp).toLocaleString(
                          "en-US"
                        )}
                      </td>
                      <td>
                        {ele.checkout_timestamp === ""
                          ? "--"
                          : new Date(ele.checkout_timestamp).toLocaleString(
                              "en-US"
                            )}
                      </td>
                      <td>{ele.visitID}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              itemsCount={filteredData.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    ) : (
      <ShowLoading label={"Loading Admin Dashboard.."} />
    );
  }
}

const mapStateToProps = state => ({
  data: state.visitorReducer.visitDetails
});

const mapDispatchToProps = dispatch => {
  return {
    fetchVisitDetails: data => dispatch(fetchVisitDetails(data))
    // allVisitorData: data => dispatch(visitorData(data))
  };
};

AdminDashboard.defaultProps = {
  data: propTypes.array,
  history: propTypes.object
};
AdminDashboard.propTypes = {
  data: propTypes.array,
  history: propTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
