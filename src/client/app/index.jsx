import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class IdFormat extends React.Component {
  render() {
    return (
      <span className="column-select">{this.props.field}</span>
    );
  }
}

function idFormatter(cell,row){
     return (
        <IdFormat field={ cell }/>
      );
}

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i + ' click on this';
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);	

class App extends React.Component {
	constructor(props) {
        super(props);
		this.handleRowSelect = this.handleRowSelect.bind(this);
	}
	
	handleRowSelect(row, isSelected, e) {
        if (e.target.cellIndex === 0)
           alert('Row click');
    }

  render () {
  
	const options = {
          sizePerPageList :[],  
          sizePerPage: 20
        };
        
	const selectRowProp = {
		mode: 'checkbox', 
		hideSelectColumn: true, 
		clickToSelect: true,
		onSelect: this.handleRowSelect
	  };
		  
		  
    return (
      <div>
        <p> Hello React!</p>
        <BootstrapTable remote={ true } selectRow={ selectRowProp } pagination={ false } options={ options } data={products } hover={true} condensed >
			 <TableHeaderColumn 
				isKey 
				width='150px' 
				headerAlign='center' 
				dataAlign='left'
				dataField='id'
				dataFormat={idFormatter}
				>ID</TableHeaderColumn>
			
			<TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
			<TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
		</BootstrapTable>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
