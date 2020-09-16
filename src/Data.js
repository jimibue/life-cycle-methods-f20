import React from "react";

//https://randomuser.me/api/?results=10

class Data extends React.Component {
  state = {
    data: [],
    loading: true,
    error: false,
    errorMessage: "",
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data1) => {
        console.log(data1);
        console.log(data1.results);
        this.setState({
          data: data1.results,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          loading: false,
          errorMessage: err.message,
        });
      });
  }
  renderUsers = () => {
    const { data } = this.state;
    if (data.length === 0) {
      return <p>no users</p>;
    }

    return data.map((user) => {
      return (
        <div key={user.login.uuid}>
          <p>{user.name.first}</p>
          <p>
            {user.location.coordinates.latitude} -
            {user.location.coordinates.longitude}
          </p>
        </div>
      );
    });
  };
  render() {
    const { error, errorMessage, loading } = this.state;
    if (loading) {
      return <h1>loading</h1>;
    }
    if (error) {
      return (
        <div>
          <h1>Error occurred</h1>
          <p>{errorMessage}</p>
        </div>
      );
    }
    return <div>{this.renderUsers()}</div>;
  }
}

export default Data;
