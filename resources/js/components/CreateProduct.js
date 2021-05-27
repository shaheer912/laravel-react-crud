import React, {Component} from 'react';
import history from './history';
import Config from './Config';
import Navbar from './Navbar';

class CreateProduct extends Component {

	constructor(props){
		super(props);
		this.state = {productTitle: '', productSKU: '', productPrice: '', productQuantity: '', productDescription: '', errors: []};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		const value = e.target.value;
		let state = this.state;
		  this.setState({
			...state,
			[e.target.name]: value
	  });
	}

	handleValidation(){
		let errors = {};
		let formIsValid = true;
		let state = this.state;

		//Title
		if(!state.productTitle){
		   formIsValid = false;
		   errors["productTitle"] = "Title Cannot be empty";
		}

		//SKU
		if(!state.productSKU){
		   formIsValid = false;
		   errors["productSKU"] = "SKU Cannot be empty";
		}

		//Price
		if(!state.productPrice){
		   formIsValid = false;
		   errors["productPrice"] = "Price Cannot be empty";
		}

		//Quantity
		if(!state.productQuantity){
		   formIsValid = false;
		   errors["productQuantity"] = "Quantity Cannot be empty";
		}

		//Price
		var priceRE = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;
		if(!state.productPrice){
			formIsValid = false;
			errors["productPrice"] = "Price Cannot be empty";
		}
		else if ( !priceRE.test(state.productPrice) ) {
			formIsValid = false;
			errors["productPrice"] = "Price must be valid format (eg: 11,234.00 or 11,234 or 11234)";
		}

		// Description
		if(!state.productDescription){
		   formIsValid = false;
		   errors["productDescription"] = "Description Cannot be empty";
		}

		this.setState({errors: errors}, function() {console.log(this.state)});
		return formIsValid;
	}

	handleSubmit(e){
		e.preventDefault();

		if(this.handleValidation()){
			const newProduct = {
			  title: this.state.productTitle,
			  sku: this.state.productSKU,
			  price: this.state.productPrice,
			  quantity: this.state.productQuantity,
			  description: this.state.productDescription
			}

			let uri = Config.baseURL + '/api/products';
			axios.post(uri, newProduct).then((response) => {
			  history.push('/products');
			});
		}
		else {
			return false;
		}
	}

    render() {

      return (
	      <div className="container">
					<Navbar/>
	        <h1>Create Product</h1>
	        <form onSubmit={this.handleSubmit}>

						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Title:</label>
									<span style={{color: "red"}} className="float-right">{this.state.errors.productTitle}</span>
									<input type="text" className="form-control" name='productTitle' onChange={this.handleChange} />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>SKU:</label>
									<span style={{color: "red"}} className="float-right">{this.state.errors.productSKU}</span>
									<input type="text" className="form-control" name='productSKU' onChange={this.handleChange} />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Quantity:</label>
									<span style={{color: "red"}} className="float-right">{this.state.errors.productQuantity}</span>
									<input type="number" className="form-control" name='productQuantity' onChange={this.handleChange} />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>Price:</label>
									<span style={{color: "red"}} className="float-right">{this.state.errors.productPrice}</span>
									<input type="text" className="form-control" name='productPrice' onChange={this.handleChange} />
								</div>
							</div>
						</div>

	          <div className="row">
	            <div className="col-md-6">
	              <div className="form-group">
	                <label>Description:</label>
				  				<span style={{color: "red"}} className="float-right">{this.state.errors.productDescription}</span>
	                <textarea className="form-control col-md-12" name='productDescription' onChange={this.handleChange}></textarea>
	              </div>
	            </div>
	          </div>
						<br />

	          <div className="form-group">
	            <button className="btn btn-primary">Add Product</button>
	          </div>
	        </form>
	  		</div>
      )
    }
}

export default CreateProduct;
