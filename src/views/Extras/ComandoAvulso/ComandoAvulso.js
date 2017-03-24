import React, { Component } from 'react';

class ComandoAvulso extends Component {
	constructor(props){
		super(props);
		this.state = { value: ''};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		// console.log(this.props.comandos);
		// this.props.comandos = this.props.comandos.bind(this);
		// this.state.comandos = this.state.comandos.bind(this);
	}
	componentDidMount() {
		// console.log(this.props.usuarios);
    // this.props.fetchData();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('O comando digitado foi enviado para o servidor e será executado em breve!');
    event.preventDefault();
  }

	render() {

		// const comandos = this.props.comandos || 'teste';

		return (
			<form onSubmit={this.handleSubmit}>
			<div className="animated fadeIn">
	      <div className="row justify-content-center">
	        <div className="col-sm-6">
	          <div className="card">
	            <div className="card-header">
	              <strong>Executar commandos SSH</strong> <small>Avulso</small>
	            </div>
	            <div className="card-block">
	              
	              <div className="form-group">
	                <label className="col-md-3 form-control-label" htmlFor="textarea-input">Comandos</label>
	                <div className="col-sm-12">
	                  <textarea id="textarea-input" value={this.state.value} onChange={this.handleChange} name="textarea-input" rows="9" className="form-control" placeholder="Insira os commandos SSH aqui..">

	                  </textarea>
	                </div>
	              </div>

	            </div>

	            <div className="card-footer">
	              <button onClick={this.props.executarComando.bind(null, this.state.value)} type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Executar</button>
	            </div>

	          </div>

	        </div>
	      </div>
	    </div>
	    </form>
		)
	}
}

export default ComandoAvulso;