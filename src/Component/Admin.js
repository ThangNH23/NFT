import React from "react";
import { ReactDOM } from "react";
import axios from "axios";

class Admin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          product: [],
          Id: null,
          name: "",
          price: "",
          quantity: "",
          avatar: "",
          Mota:""
        };
    }
    setStatus = () => {
        this.setState({ showAddForm: !this.state.showAddForm });
    }
    componentDidMount() {
        axios
            .get("https://63a571e42a73744b008e23f7.mockapi.io/API/product")
            .then(response => {
                this.setState({ product: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    deleteBook = (Id) => {
        axios
            .delete("https://63a571e42a73744b008e23f7.mockapi.io/API/product/" + Id)
            .then(response => {
                console.log(response);
                const product = this.state.product.filter(item => item.Id !== Id);
                this.setState({ product });
            })
            .catch(error => {
                console.log(error);
            });
    }
    addBook = () => {
        const Productlist = {
          name: this.state.name,
            price:this.state.price,
            quantity: this.state.quantity,
            avatar: this.state.avatar
        };
        axios
            .post("https://63a571e42a73744b008e23f7.mockapi.io/API/product", Productlist)
            .then(response => {
                console.log(response);
                const newProduct = response.data;  //sản phẩm mới được trả về từ server
                const product = [...this.state.product, newProduct]; //
                this.setState({ product });
            })
            .catch(error => {
                console.log(error);
            });
    }
    editBook = (Id) => {
        const Productlist = this.state.product.find(item => item.Id === Id);
        this.setState({
            Id: Id,
            name: Productlist.name,
            price: Productlist.price,
            quantity: Productlist.quantity,
            avatar: Productlist.avatar,
            showEditForm: true
        });
    }
    formAddBook = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Ten San Pham</label>
                                    <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label> Gia</label>
                                    <input type="text" className="form-control" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>So luong</label>
                                    <input type="number" className="form-control" value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Hinhanh</label>
                                    <input type="text" className="form-control" value={this.state.avatar} onChange={(e) => this.setState({ avatar: e.target.value })} />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.addBook}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    formEditBook = () => {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Tên Sản Phẩm"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Giá"
                    value={this.state.price}
                    onChange={e => this.setState({ price: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Số Lượng"
                    value={this.state.quantity}
                    onChange={e => this.setState({ quantity: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Hinhanh"
                    value={this.state.avatar}
                    onChange={e => this.setState({ avatar: e.target.value })}
                />
                <button onClick={this.updateBook}>Update</button>
            </div>
        );
    }
    updateBook = () => {
        const Productlist = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            avatar: this.state.avatar
        };
        axios
            .put("https://63a571e42a73744b008e23f7.mockapi.io/API/product/" + this.state.Id, Productlist)
            .then(response => {
                console.log(response);
                const product = this.state.product.map(item => {
                    if (item.Id === this.state.Id) {
                        return Productlist;
                    }
                    return item;
                });
                this.setState({ product });
            })
            .catch(error => {
                console.log(error);
            }
            );
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 class="Title_table">Product</h4>
                                    <p className="card-text">
                                    <button class="AddBtn" onClick={this.setStatus}>Add Sản Phẩm Mới</button>
                                        {/* <button class="AddBtn" onClick={this.setStatus}>Add Book</button> */}
                                    </p>
                                    {this.state.showAddForm ? this.formAddBook() : null}

                                    <table className="table table-bordered">
                                        <thead>

                                            <tr>
                                                <th>Id</th>
                                                <th>Product Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Image</th>
                                                  <th>Delete</th>
                                                  <th>Edit</th>
                                                {/* <th>Action</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.product.map((products) => (
                                                <tr>
                                                    <td><textbox type="text" name="Id" onChange={this.handleChange} /> {products.Id}</td>
                                                    <td>{products.name}</td>
                                                    <td>{products.price}</td>
                                                    <td>{products.quantity}</td>
                                                    <td><img src={products.avatar} width={200}></img></td>
                                                    <td><button class="deleteBtn" onClick={() => this.deleteBook(products.Id)}>Delete</button></td>
                                                    <td><button class="editBtn" onClick={() => this.editBook(products.Id)}>Edit</button></td>
                                                </tr>
                                             ))}
                                        </tbody>
                                    </table>
                                    
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showEditForm ? this.formEditBook() : null}
             </div>
        );
     }
 }
export default Admin;
