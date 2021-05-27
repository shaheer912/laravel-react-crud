import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import Config from './Config';
import Navbar from './Navbar';

class Products extends Component {

	constructor(props) {
		super(props);
		this.state = {value: '', products: ''};
	}

	componentDidMount(){
		axios.get(Config.baseURL + '/api/products')
		.then(response => {
			this.setState({ products: response.data });
		})
		.catch(function (error) {
			console.log(error);
		})

	}

	productRow(){
		let props = {product:null};
		if(this.state.products instanceof Array){
			return this.state.products.map(function(object, i){
				props.product = object;
				return (<TableRow product={object} key={i}/>);
			})
		}
	}


	render(){
		return (
			<div className="container">
				<Navbar/>
				<h1>Products</h1>
				<div className="row">
				  <div className="col-md-2">
					<Link to="/create-product">Create Product</Link>
				  </div>
				</div>
				<br />

				<table className="table table-hover">
					<thead>
						<tr>
							<td>ID</td>
							<td>Product Title</td>
							<td>Product SKU</td>
							<td>Product Price</td>
							<td>Product Quanity</td>
							<td>Product Description</td>
							<td width="200px">Actions</td>
						</tr>
					</thead>

					<tbody>
					  {this.productRow()}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Products;
